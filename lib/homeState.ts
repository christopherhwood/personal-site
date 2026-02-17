export const HOME_SCROLL_KEY = "homeScrollY";
export const HOME_RESTORE_PENDING_KEY = "home-restore-pending";
export const HOME_SIDEBAR_BAR_KEY = "home-sidebar-bar";

export function saveHomeScrollPosition() {
  if (typeof window === "undefined") return;
  try {
    sessionStorage.setItem(HOME_SCROLL_KEY, String(window.scrollY));
  } catch {
    // Ignore storage errors.
  }
}

export function markHomeRestorePending() {
  if (typeof window === "undefined") return;
  try {
    sessionStorage.setItem(HOME_RESTORE_PENDING_KEY, "1");
  } catch {
    // Ignore storage errors.
  }
}
