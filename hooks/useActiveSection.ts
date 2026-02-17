"use client";
import { useState, useEffect } from "react";

let lastActiveSection = "";
let lastProgress = 0;
const STORAGE_KEY = "home-active-section";

interface ActiveState {
  activeSection: string;
  progress: number;
}

function clampProgress(value: number) {
  return Math.min(1, Math.max(0, value));
}

function saveState(state: ActiveState) {
  if (typeof window === "undefined") return;
  try {
    window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {
    // Ignore storage errors (private mode, quota, etc.)
  }
}

function loadState(sectionIds: string[]): ActiveState | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.sessionStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as Partial<ActiveState>;
    if (
      typeof parsed.activeSection !== "string" ||
      !sectionIds.includes(parsed.activeSection)
    ) {
      return null;
    }
    const progress =
      typeof parsed.progress === "number" ? clampProgress(parsed.progress) : 0;
    return { activeSection: parsed.activeSection, progress };
  } catch {
    return null;
  }
}

function getActiveStateFromScroll(sectionIds: string[]): ActiveState {
  if (sectionIds.length === 0) {
    return { activeSection: "", progress: 0 };
  }

  const scrollPosition = window.scrollY + window.innerHeight / 2;
  const sectionElements = sectionIds
    .map((id) => ({ id, el: document.getElementById(id) }))
    .filter((s) => s.el !== null);

  let activeSection = sectionIds[0];
  let progress = 0;

  for (let i = sectionElements.length - 1; i >= 0; i--) {
    const { id, el } = sectionElements[i];
    if (!el) continue;
    if (el.offsetTop <= scrollPosition) {
      activeSection = id;
      progress = clampProgress(
        (scrollPosition - el.offsetTop) / Math.max(el.offsetHeight, 1)
      );
      break;
    }
  }

  return { activeSection, progress };
}

export function useActiveSection(sectionIds: string[]) {
  const runtimeState =
    lastActiveSection && sectionIds.includes(lastActiveSection)
      ? { activeSection: lastActiveSection, progress: lastProgress }
      : null;
  const hasRuntimeState = Boolean(runtimeState);
  const initialState =
    runtimeState ?? {
      activeSection: sectionIds[0] || "",
      progress: 0,
    };

  const [activeSection, setActiveSection] = useState(initialState.activeSection);
  const [progress, setProgress] = useState(initialState.progress);
  const [isReady, setIsReady] = useState(
    Boolean(sectionIds.length === 0 || hasRuntimeState)
  );

  useEffect(() => {
    const persistedState = hasRuntimeState ? null : loadState(sectionIds);
    const hasSnapshotAtMount = Boolean(hasRuntimeState || persistedState);

    const applyState = (next: ActiveState) => {
      lastActiveSection = next.activeSection;
      lastProgress = next.progress;
      saveState(next);
      setActiveSection(next.activeSection);
      setProgress(next.progress);
    };

    const updateState = () => {
      applyState(getActiveStateFromScroll(sectionIds));
    };

    // Delay binding scroll/resize listeners until scroll restoration settles.
    // This prevents intermediate scroll events from causing sidebar jumps
    // when navigating back via client-side navigation.
    let listenersBound = false;
    const bindListeners = () => {
      if (listenersBound) return;
      listenersBound = true;
      window.addEventListener("scroll", updateState, { passive: true });
      window.addEventListener("resize", updateState);
    };

    // Wait until scroll restoration stabilizes. If we already have a snapshot
    // (runtime or persisted), preserve it until the scroll position settles
    // to avoid a flash/jump. On each frame, poll the scroll position; once
    // stable, calculate the real state and bind event listeners.
    let previousY = window.scrollY;
    let stableFrames = 0;
    let totalFrames = 0;
    let settleRaf = 0;
    const settle = () => {
      if (!hasSnapshotAtMount) {
        updateState();
      }
      const y = window.scrollY;
      if (Math.abs(y - previousY) < 1) {
        stableFrames += 1;
      } else {
        stableFrames = 0;
      }
      previousY = y;
      totalFrames += 1;

      if (stableFrames >= 3 || totalFrames >= 30) {
        updateState();
        setIsReady(true);
        bindListeners();
        return;
      }
      settleRaf = requestAnimationFrame(settle);
    };
    settleRaf = requestAnimationFrame(settle);

    return () => {
      cancelAnimationFrame(settleRaf);
      window.removeEventListener("scroll", updateState);
      window.removeEventListener("resize", updateState);
    };
  }, [hasRuntimeState, sectionIds]);

  return { activeSection, progress, isReady };
}
