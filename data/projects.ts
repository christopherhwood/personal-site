export interface MediaBlock {
  type: "image" | "video";
  src: string;
  label: string;
  aspectRatio: string;
  caption?: string;
}

export interface ProjectDetail {
  slug: string;
  titleLines: string[];
  subtitle: string;
  description: string;
  year: number;
  role: string;
  status: string;
  stack: string[];
  features: string[];
  repoUrl?: string;
  repoLabel?: string;
  siteUrl?: string;
  siteLabel?: string;
  media: MediaBlock[];
}

const projects: ProjectDetail[] = [
  {
    slug: "qckfx",
    titleLines: ["qckfx"],
    subtitle: "Record-and-replay UI testing for iOS apps, driven by MCP.",
    description:
      "qckfx is an iOS UI testing tool that records user interactions and replays them deterministically. It uses MCP (Model Context Protocol) to let AI coding agents run visual regression tests against real iOS simulators. Tests capture screenshots at each step and diff them against baselines, catching layout regressions that unit tests miss.\n\nThe system intercepts network requests during recording and replays them during test runs, making tests hermetic and fast. Visual diffs highlight exactly what changed between runs\u2014any difference is entirely due to changes in your code. You choose what\u2019s expected and desired to become the new baseline, catching potential bugs early before they get merged in.",
    year: 2025,
    role: "Solo Developer",
    status: "Active",
    stack: ["Swift", "SwiftUI", "macOS", "Go", "XCUITest", "MCP", "C"],
    features: [
      "Record & replay iOS interactions",
      "Visual diff regression testing",
      "Network request interception & replay",
      "MCP server for AI agent integration",
      "Screenshot capture at each step",
    ],
    siteUrl: "https://qckfx.com",
    siteLabel: "qckfx.com",
    media: [
      {
        type: "image",
        src: "/images/projects/qckfx-timeline.png",
        label: "Timeline Playback",
        aspectRatio: "16/10",
        caption:
          "Comparing baseline vs latest run with visual diffs, event logs, and network timeline.",
      },
      {
        type: "video",
        src: "https://media.qckfx.com/qckfx_mcp_demo.mp4",
        label: "MCP Agent Demo",
        aspectRatio: "16/10",
        caption: "An AI coding agent running visual regression tests via MCP.",
      },
    ],
  },
];

export function getProjectBySlug(slug: string): ProjectDetail | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getAllProjectSlugs(): string[] {
  return projects.map((p) => p.slug);
}
