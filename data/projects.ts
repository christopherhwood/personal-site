export interface MediaBlock {
  type: "image" | "video" | "youtube";
  src: string;
  label: string;
  aspectRatio: string;
  caption?: string;
}

export interface CodeExample {
  label: string;
  language: string;
  code: string;
}

export interface CodeComparison {
  title: string;
  left: { label: string; language: string; code: string };
  right: { label: string; language: string; code: string };
}

export interface ProjectAside {
  title: string;
  body: string;
  afterParagraph: number;
  image?: { src: string; aspectRatio: string };
  codeBlock?: { language: string; code: string };
  collapsibles?: { label: string; content: string }[];
}

export interface ProjectSection {
  title: string;
  description: string;
  media?: MediaBlock[];
  mediaLayout?: "stacked" | "carousel";
  tweets?: { id: string; afterParagraph: number }[];
}

export interface ProjectLink {
  url: string;
  label: string;
  githubRepo?: string;
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
  codeExamples?: CodeExample[];
  codeComparisons?: CodeComparison[];
  githubRepo?: string;
  repoUrl?: string;
  repoLabel?: string;
  siteUrl?: string;
  siteLabel?: string;
  links?: ProjectLink[];
  asides?: ProjectAside[];
  media: MediaBlock[];
  mediaLayout?: "stacked" | "carousel";
  gallery?: MediaBlock[];
  sections?: ProjectSection[];
  tweets?: { id: string; afterParagraph: number }[];
}

const projects: ProjectDetail[] = [
  {
    slug: "slate-tui",
    titleLines: ["Slate TUI"],
    subtitle:
      "Terminal user interface for Random Labs\u2019 AI coding agent Slate.",
    description:
      "Built the terminal user interface for Slate, Random Labs\u2019 AI coding agent. It\u2019s an Ink app\u2014React rendering to the terminal\u2014which made it possible to build a rich, interactive experience with familiar component patterns.\n\nThe features I\u2019m most proud of are the worktree support and its UI, and the session switching with user message history. Worktree support lets you run multiple agents in parallel across different git worktrees, each with its own isolated context. Session switching lets you jump between past conversations and pick up where you left off, with full message history preserved.\n\nLaunched in late 2025.",
    year: 2025,
    role: "Contract Developer",
    status: "Shipped",
    stack: ["TypeScript", "React", "Ink", "Node.js"],
    features: [
      "Git worktree support with parallel agent sessions",
      "Session switching with full message history",
      "Rich terminal UI built with React and Ink",
    ],
    siteUrl: "https://randomlabs.ai",
    siteLabel: "randomlabs.ai",
    media: [],
  },
  {
    slug: "harvey-ios",
    titleLines: ["Harvey iOS"],
    subtitle:
      "iOS app for Harvey, the AI-powered legal research platform.",
    description:
      "Built Harvey\u2019s iOS app alongside one other developer. My focus was on UI polish, performance improvements, and building the design system. Also added several features across the app.\n\nThe design system work involved establishing reusable component patterns and ensuring visual consistency across the app. Performance improvements targeted key interaction paths to make the experience feel responsive and native.\n\nLaunched to GA in early 2026.",
    year: 2025,
    role: "Contract Developer",
    status: "Shipped",
    stack: ["Swift", "SwiftUI", "iOS"],
    features: [
      "UI polish and design system",
      "Performance improvements",
      "Feature development",
    ],
    siteUrl: "https://apps.apple.com/us/app/harvey-ai/id6743734610",
    siteLabel: "App Store",
    links: [
      { url: "https://www.harvey.ai", label: "harvey.ai" },
      { url: "https://www.harvey.ai/blog/mobile-voice-announcement", label: "Mobile Launch Post" },
    ],
    media: [],
  },
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
    asides: [
      {
        title: "Light Footprint, Real Complexity",
        afterParagraph: 1,
        body: "qckfx is designed for PLG\u2014there\u2019s no SDK to install and no code added to your repo. Any developer can pick it up and start using it without needing to integrate anything into their project. That constraint means the client\u2019s app has to be treated as a complete black box, which drives a **three-part architecture**: a network proxy that intercepts and replays traffic, an XCUITest driver application that controls the simulator from the outside, and a local macOS host app that orchestrates everything. Supporting multiple simulators running concurrently, plus team collaboration and CI integration, makes it more of a **distributed systems problem** than you\u2019d expect from a testing tool.",
      },
    ],
    githubRepo: "qckfx/qckfx",
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
  {
    slug: "earlyworm",
    titleLines: ["Earlyworm"],
    subtitle:
      "A language learning app that uses generative AI to match real-world content to your proficiency level.",
    description:
      "Earlyworm gives foreign language learners access to real-world content at customized difficulty levels. Instead of textbook exercises, you read AI-generated summaries of clusters of related news articles, matched to your proficiency\u2014or take any individual article and have the AI rewrite it to your level. It was a great way to discover trending topics in your target language while actually learning.\n\nThe recommendation engine used OpenAI embeddings and a Milvus vector database, combining content-based and collaborative filtering. A Tinder-style stacked UI let you bookmark or pass on articles, and the system tracked engagement via view time and scrolling to refine recommendations. Search was powered by the same embedding pipeline, and dictionary lookup integrated MDBG and Baidu.\n\nThe content pipeline aggregated RSS feeds, ran custom text extraction, and used hierarchical clustering to group related articles into topics. GPT-3.5 generated summaries at multiple difficulty levels, and fine-tuned text-davinci-003 models handled the content matching. The app reached over 500 downloads before I wound it down when I left Meta to focus on other projects.",
    year: 2023,
    role: "Founder",
    status: "Retired",
    stack: ["Swift", "UIKit", "Node.js", "Python", "Terraform", "Kubernetes", "Azure AKS", "OpenAI API", "Milvus"],
    features: [
      "AI-rewritten articles matched to your proficiency level",
      "Recommendation engine with OpenAI embeddings + Milvus",
      "Tinder-style content discovery UI",
      "Text-to-speech via Microsoft SDK",
      "Dictionary lookup with MDBG and Baidu",
      "Automated tweet thread generator for growth",
    ],
    siteUrl: "https://web.archive.org/web/20240817215718/http://www.earlyworm.io/",
    siteLabel: "earlyworm.io",
    links: [{ url: "/projects/earlyworm-v1", label: "Earlyworm v1 (2015)" }],
    asides: [
      {
        title: "Backend Architecture",
        afterParagraph: 2,
        body: "The backend runs on **Azure AKS** with 12+ microservices orchestrated by Kubernetes. The ingestion pipeline starts with an **RSS Fetcher** (blue/green deployed) that pulls from hundreds of feeds, followed by an **Article Processor** that fans out to three Python services: a **Classifier** (17 categories), a **Named Entity Extractor** (people, organizations, locations), and an **Embedder** that generates OpenAI vectors stored in **Milvus**. A **Trends Service** runs every 6 hours as a CronJob, using TF-IDF hierarchical clustering to group related articles and GPT-3.5 to generate summaries. The recommendation pipeline has two stages: a **Recommendation Input** CronJob that builds user preference vectors from 150 days of interaction data, and a **Feed Recommender** Flask service that combines Milvus vector similarity with collaborative filtering. Nine separate **Redis** instances handle caching, sessions, rate limiting, job queues, and read tracking. The main API server is a **Node.js/Koa** app with blue/green deployments behind an Azure Application Gateway.",
        image: { src: "/images/projects/earlyworm-architecture.svg", aspectRatio: "960/720" },
      },
    ],

    mediaLayout: "carousel",
    media: [
      {
        type: "image",
        src: "/images/projects/earlyworm-feed.png",
        label: "Article Feed",
        aspectRatio: "1170/2532",
        caption: "Tinder-style card UI for discovering articles. Swipe to bookmark or pass.",
      },
      {
        type: "image",
        src: "/images/projects/earlyworm-reader.png",
        label: "Reader",
        aspectRatio: "750/1334",
        caption: "Reading an article with inline dictionary lookup and text-to-speech.",
      },
      {
        type: "image",
        src: "/images/projects/earlyworm-app-screenshot.jpg",
        label: "Article Feed",
        aspectRatio: "1125/2226",
        caption: "Reading a Chinese news article with source cards and bookmarking.",
      },
    ],
    gallery: [
      {
        type: "video",
        src: "https://media.qckfx.com/earlyworm-demo.mp4",
        label: "Demo",
        aspectRatio: "1170/2532",
        caption: "Browsing trending topics, reading AI-rewritten articles, and discovering content matched to your proficiency level.",
      },
      {
        type: "image",
        src: "/images/projects/earlyworm-trending.png",
        label: "Reddit",
        aspectRatio: "1292/356",
        caption: "Reddit post about Earlyworm.",
      },
      {
        type: "image",
        src: "/images/projects/earlyworm-pipeline.png",
        label: "Review",
        aspectRatio: "1156/1000",
        caption: "Favorable review tweet about Earlyworm.",
      },
      {
        type: "image",
        src: "/images/projects/earlyworm-rewrite.png",
        label: "Traction",
        aspectRatio: "2442/1030",
        caption: "User growth and engagement metrics.",
      },
    ],
  },
  {
    slug: "earlyworm-v1",
    titleLines: ["Earlyworm v1"],
    subtitle:
      "A Chinese e-reader that surfaced real news articles for language learners.",
    description:
      "Earlyworm v1 was the first iOS app I ever built. I was living in Shanghai, studying Chinese, and wanted a better way to bridge the gap between classroom materials and real-world content, so I taught myself Swift and started building. The idea was simple: instead of studying from textbooks, read real Chinese news articles and blog posts with built-in tools to help you through them. It pulled articles from Chinese news sites via RSS, displayed them in a clean reading interface, and had inline dictionary lookup so you could tap any word to see its definition and pinyin.\n\nA flashcard feature helped you review vocabulary from your reading, powered by a Node.js server communicating over WebSockets. A basic hill-climbing algorithm tracked your answers and estimated your proficiency level, adjusting card difficulty in real time.\n\nThe app was functional but limited by what was possible at the time: no AI rewriting, no proficiency matching beyond the hill-climbing heuristic, just raw articles with reading aids. Years later, the emergence of generative AI made it possible to revisit the core idea and build what became Earlyworm 2022.",
    year: 2015,
    role: "Solo Developer",
    status: "Predecessor",
    stack: ["Swift", "iOS", "Node.js", "WebSockets", "RSS"],
    features: [
      "Flashcard system with hill-climbing proficiency estimation",
      "Real-time sync via WebSockets",
      "Chinese news article reader with clean typography",
      "Inline dictionary lookup with pinyin",
      "RSS feed aggregation from Chinese news sources",
    ],
    links: [{ url: "/projects/earlyworm", label: "Earlyworm (2023)" }],
    media: [
      {
        type: "youtube",
        src: "_UK1_CEoBII",
        label: "Demo",
        aspectRatio: "16/9",
        caption: "Earlyworm demo showing the article discovery and reading experience.",
      },
    ],
  },
  {
    slug: "agent-sdk",
    titleLines: ["Agent SDK"],
    subtitle:
      "A modular framework for building autonomous LLM-powered coding agents.",
    description:
      "Agent SDK is an open-source TypeScript framework for building autonomous coding agents, started before Anthropic released the Claude Code SDK. The central design decision is separating tools from where they run. Tools describe what they do, and an execution adapter handles where it happens\u2014on your machine, in a Docker container, or in a remote E2B sandbox. You can switch environments without touching any tool code.\n\nThe framework is designed to be extended. Building a custom tool means defining what it does and registering it with the agent. Sub-agents work the same way\u2014each one is a full agent with its own model, tools, and system prompt, but the parent treats it like any other tool it can call.\n\nLifecycle hooks let you run logic before and after every tool invocation. This is useful for things like capturing a screenshot after a browser navigation and feeding it back into the model, or building execution traces for debugging and evals.",
    year: 2025,
    role: "Solo Developer",
    status: "Active",
    stack: ["TypeScript", "Node.js", "OpenAI API", "Anthropic API", "Zod", "E2B"],
    features: [
      "Execution adapters for local, Docker, and E2B sandboxes",
      "Custom tool authoring and registration",
      "Sub-agents as tools with their own models and prompts",
      "Before/after lifecycle hooks on every tool invocation",
      "Permission system with configurable auto-approval",
      "Git-based checkpointing for undo/redo",
    ],
    codeExamples: [
      {
        label: "Create an Agent",
        language: "typescript",
        code: `import { Agent } from '@qckfx/agent';

const agent = await Agent.create({
  config: {
    defaultModel: 'google/gemini-2.5-pro-preview',
    environment: 'local',
    systemPrompt: 'You are a helpful AI assistant.',
    tools: ['bash', 'file_read', 'file_edit', 'grep', 'glob'],
  },
});

const result = await agent.processQuery('Refactor the auth module');
console.log(result.response);`,
      },
      {
        label: "Add a Custom Tool",
        language: "typescript",
        code: `const screenshot: Tool = {
  name: 'screenshot',
  description: 'Capture a screenshot of the current page',
  inputSchema: {
    type: 'object',
    properties: {
      url: { type: 'string', description: 'URL to capture' },
    },
    required: ['url'],
  },
  execute: async (args, context) => {
    const img = await captureScreenshot(args.url);
    return { result: img };
  },
};

agent.registerTool(screenshot);`,
      },
    ],
    githubRepo: "qckfx/agent-sdk",
    repoUrl: "https://github.com/qckfx/agent-sdk",
    repoLabel: "GitHub",
    media: [
      {
        type: "image" as const,
        src: "/images/projects/agent-sdk-architecture.svg",
        label: "Architecture",
        aspectRatio: "800/480",
        caption:
          "Tools interact with an execution adapter interface, not the environment directly. Swap between local, Docker, or remote sandboxes without changing tool code.",
      },
    ],
  },
  {
    slug: "node-debugger-mcp",
    titleLines: ["Node.js", "Debugger MCP"],
    subtitle:
      "An MCP server that gives AI coding agents real Node.js debugging capabilities.",
    description:
      "Most AI coding agents debug by reading code and adding console.log statements. This MCP server gives them access to an actual debugger\u2014breakpoints, stepping, expression evaluation, call stacks\u2014the same Chrome DevTools Protocol interface that powers VS Code\u2019s debugger, exposed as MCP tools.\n\nThe server manages the full process lifecycle. It spawns Node.js processes with the inspector flag, auto-discovers available debug ports, and connects via CDP. Processes start paused at the first line to eliminate timing race conditions between spawning and attaching. When a process exits, the server cleans up its debug session, port allocation, and state automatically.\n\nThe interesting part is how this changes the debugging loop for an AI agent. Instead of guessing at what\u2019s wrong from static code, the agent can set a breakpoint, run the code, inspect the actual values at that point, and step through the execution. It\u2019s a much tighter feedback loop.",
    year: 2025,
    role: "Solo Developer",
    status: "Active",
    stack: ["TypeScript", "Node.js", "Chrome DevTools Protocol", "MCP"],
    features: [
      "Spawn and manage Node.js processes with debug ports",
      "Set breakpoints with optional conditions",
      "Step through code (into, over, out, continue)",
      "Evaluate expressions in the current call frame",
      "Automatic port discovery and conflict avoidance",
      "Process lifecycle cleanup on exit or disconnect",
    ],
    githubRepo: "qckfx/node-debugger-mcp",
    repoUrl: "https://github.com/qckfx/node-debugger-mcp",
    repoLabel: "GitHub",
    media: [],
  },
  {
    slug: "tree-hugger",
    titleLines: ["Tree Hugger"],
    subtitle:
      "A friendly layer on top of tree-sitter, with an MCP server for AI agents.",
    description:
      "Tree-sitter is incredibly powerful for code analysis, but its API is hard to use\u2014both for humans and for AI agents. The node type names are verbose, pattern matching requires manual tree traversal, and transformations involve byte offset math. Tree Hugger wraps tree-sitter with an interface that feels more like writing CSS selectors than navigating an AST.\n\nThe library lets you query code with patterns like \u2018function[async]\u2019 or \u2018class method:has(call[text*=\"fetch\"])\u2019 instead of enumerating every tree-sitter node type. It ships with smart transformations\u2014renaming an identifier skips occurrences inside strings and comments, removing a function call removes the whole statement, and insertions match the surrounding indentation.\n\nThe MCP server exposes all of this to AI agents as 12 tools covering analysis, transformation, and navigation. An agent can parse a file, find all async functions with debug logging, rename an identifier safely across the codebase, and remove unused imports\u2014all through MCP tool calls.",
    year: 2025,
    role: "Solo Developer",
    status: "Active",
    stack: ["TypeScript", "Node.js", "tree-sitter", "MCP"],
    features: [
      "CSS-like pattern selectors for AST queries",
      "Context-aware transformations (rename, remove, insert)",
      "Auto-detection of JS, TS, JSX, and TSX",
      "Scope analysis and variable binding lookup",
      "12 MCP tools for analysis, transforms, and navigation",
      "Smart unused import removal",
    ],
    codeComparisons: [
      {
        title: "Find all async functions",
        left: {
          label: "tree-sitter",
          language: "typescript",
          code: `import Parser from 'tree-sitter';
import JavaScript from 'tree-sitter-javascript';

const parser = new Parser();
parser.setLanguage(JavaScript);
const tree = parser.parse(code);

const asyncFunctions = [];
function walk(node) {
  if (
    node.type === 'function_declaration' ||
    node.type === 'function_expression' ||
    node.type === 'arrow_function' ||
    node.type === 'method_definition'
  ) {
    if (node.childForFieldName('async')
        || node.text.startsWith('async')) {
      asyncFunctions.push(node);
    }
  }
  for (const child of node.children) walk(child);
}
walk(tree.rootNode);`,
        },
        right: {
          label: "Tree Hugger",
          language: "typescript",
          code: `import { parse } from 'tree-hugger-js';

const fns = parse(code).findAll('function[async]');`,
        },
      },
    ],
    codeExamples: [
      {
        label: "Parse and Query",
        language: "typescript",
        code: `import { parse } from 'tree-hugger-js';

const tree = parse('app.tsx');

// CSS-like selectors instead of raw tree-sitter node types
const asyncFns = tree.findAll('function[async]');
const fetchCalls = tree.findAll('call[text*="fetch"]');
const styledJsx = tree.findAll('jsx:has(jsx-attribute[name="className"])');

// Built-in queries
const hooks = tree.hooks();       // React hooks (useX pattern)
const imports = tree.imports();   // All import statements`,
      },
      {
        label: "Transform Code",
        language: "typescript",
        code: `const result = tree.transform()
  .rename('getUserData', 'fetchUserProfile')
  .remove('console.log')
  .removeUnusedImports()
  .toString();`,
      },
    ],
    links: [
      {
        url: "https://github.com/qckfx/tree-hugger-js",
        label: "tree-hugger-js",
        githubRepo: "qckfx/tree-hugger-js",
      },
      {
        url: "https://github.com/qckfx/tree-hugger-js-mcp",
        label: "tree-hugger-js-mcp",
        githubRepo: "qckfx/tree-hugger-js-mcp",
      },
    ],
    media: [],
  },
  {
    slug: "writeframe",
    titleLines: ["Writeframe"],
    subtitle:
      "A WYSIWYG iOS app for creating text-based social media images.",
    description:
      "Writeframe is inspired by Typeshare\u2019s approach to short-form publishing\u2014the idea that most social media content is just well-formatted text on a nice background. Instead of designing in a separate tool and exporting, you write directly on the final layout. What you see in the editor is exactly what gets exported.\n\nThe app ships with 8 layout templates (blog post cards, tweet formats, browser windows, Instagram splits) and exports at native dimensions for each platform\u2014Instagram feed, Stories, Twitter, LinkedIn. A FlexLayout-based template system handles responsive scaling across devices, and a custom text fitting algorithm ensures typography looks right at every export resolution.\n\nThe editing experience is the core of it. A formatting toolbar lets you style text inline, and the template updates in real-time as you type. Drafts auto-save, so you can pick up where you left off. The goal is to make creating these kinds of posts feel as natural as writing a note.",
    year: 2025,
    role: "Solo Developer",
    status: "Active",
    stack: ["Swift", "UIKit", "FlexLayout", "Core Graphics", "Core Data", "StoreKit 2"],
    features: [
      "True WYSIWYG\u2014edit directly on the final design",
      "8 layout templates with color palette system",
      "Multi-platform export (Instagram, Stories, X, LinkedIn)",
      "Custom text fitting and vertical alignment engine",
      "Inline formatting toolbar with real-time preview",
      "Auto-save drafts with Core Data",
    ],
    siteUrl: "https://apps.apple.com/app/writeframe/id6751259786",
    siteLabel: "App Store",
    mediaLayout: "carousel",
    media: [
      {
        type: "image",
        src: "/images/projects/writeframe-editor.png",
        label: "Editor",
        aspectRatio: "9/19.5",
        caption:
          "Writing directly on a tweet template. The cursor is live\u2014what you see is what gets exported.",
      },
      {
        type: "image",
        src: "/images/projects/writeframe-blog-template.png",
        label: "Blog Post Template",
        aspectRatio: "9/19.5",
        caption:
          "The blog post layout with a forest color palette. Text reflows and scales automatically.",
      },
      {
        type: "image",
        src: "/images/projects/writeframe-layout-picker.png",
        label: "Layout Picker",
        aspectRatio: "9/19.5",
        caption:
          "Choosing a template, color palette, and target platform from the layout picker.",
      },
      {
        type: "image",
        src: "/images/projects/writeframe-export.png",
        label: "Export",
        aspectRatio: "9/19.5",
        caption:
          "Export preview with save and share options. The image is rendered at native platform dimensions.",
      },
    ],
  },
  {
    slug: "ui-builder",
    titleLines: ["AI Website", "Builder"],
    subtitle:
      "A drag-and-drop website builder where an LLM writes the state management code.",
    description:
      "A four-week prototype from early 2024 that combines drag-and-drop website building with AI-powered code generation. You lay out components visually, and an LLM handles the wiring\u2014generating the frontend state management code that connects everything together.\n\nThe app has two modes: edit and preview. In edit mode, every component becomes draggable. You can reorder, resize, nest, and select elements to configure them. Switch to preview mode and the same component tree renders as a fully functional website\u2014click handlers fire, forms submit, state flows through. The transition between modes is seamless, with all application state preserved.\n\nWhen you select a component in edit mode, a code editor opens in the sidebar. But the \u201ccode\u201d you see isn\u2019t stored anywhere\u2014it\u2019s generated on the fly from the component\u2019s internal config. Edit a Tailwind class or change the text, and the changes parse back into config mutations that update the live preview instantly.\n\nThe most ambitious feature is Magic Wiring. You don\u2019t tell the AI what to do\u2014you just build the design, and it intuits how things should connect. In the demo below, you can see this with a simple counter: the user drags out a number display, an up button, and a down button. Without any instructions, the AI looks at the component tree, infers that the buttons should increment and decrement the number, generates a React Context provider with the right reducer logic, and wires everything together. The generated code runs via eval in the browser, which is intentionally unsafe but enables things that would be impossible otherwise.",
    year: 2024,
    role: "Solo Developer",
    status: "Archived",
    stack: ["React", "TypeScript", "Tailwind CSS", "shadcn", "Redux", "Claude API"],
    features: [
      "Drag-and-drop component layout",
      "LLM-generated state management code",
      "Inline code editing with live preview",
      "AI-powered design refinement (Magic Paint)",
      "Seamless edit/preview mode switching",
    ],
    asides: [
      {
        title: "JSON as the Entire Application",
        afterParagraph: 1,
        body: "The core design decision is representing **an entire React application as a JSON config tree**. Every component, every event handler, every piece of state management\u2014it\u2019s all JSON. A recursive *DynamicElement* walks each node: it checks the config shape and routes to the right renderer. Nodes with *actions* and *initialState* become **DynamicProviders**\u2014React Context providers with reducers built at runtime. Nodes with a *type* become **DynamicComponents**\u2014real DOM elements with attributes and event handlers resolved from the config. Each renderer outputs its children as more DynamicElements, recursing until the tree is fully rendered. This single representation is what makes everything else possible. Dual rendering works because **the tree doesn\u2019t change between modes**\u2014only the event binding layer does. The AI can wire up state because it\u2019s just transforming JSON. And the code editor works because the \u201csource\u201d is just a projection of the config.",
        image: { src: "/images/projects/ui-builder-recursion.svg", aspectRatio: "740/360" },
      },
      {
        title: "Virtual Code Editor",
        afterParagraph: 2,
        body: "The inline code editor shows what looks like a React component\u2019s source, but **there\u2019s no source file**. The builder stores each component as a config object\u2014tag name, Tailwind classes, children, text content, event handlers. When you open the editor, a function walks the config and *generates JSX on the fly*. When you type a change, a reverse parser diffs it back into config mutations. The \u201ccode\u201d is always a live projection of the actual component state, not a separate artifact that can drift out of sync.",
      },
      {
        title: "Behind the Scenes: Magic Wiring",
        afterParagraph: 3,
        body: "The prompt gives Claude strict TypeScript interfaces\u2014*ComponentConfig*, *ProviderConfig*, *FunctionConfig*\u2014and few-shot examples. The model receives the component tree as JSON and returns a modified tree with providers inserted. A **context registry** lets components reference providers by string ID at runtime (normally you need a direct JavaScript reference to a Context object), but React\u2019s scoping rules still apply\u2014a component can only read a provider\u2019s state if it\u2019s a descendant in the tree. This is why the **placement algorithm** matters: the provider must be inserted above all its consumers. Everything the model outputs **except the function body** is structurally verifiable: the system recursively checks that every node conforms to the schema, that contextIds reference real providers, and that action names match. If validation fails, the error gets **appended back into the conversation** and the model is re-queried.",
        collapsibles: [
          {
            label: "How does the context registry work?",
            content: `In normal React, you access a Context by importing the object directly — import { CartContext } from './CartContext'. But when contexts are created at runtime from AI-generated JSON, there are no imports. The registry solves this: when a ProviderConfig node gets inserted into the tree, createContext() is called and the result is stored by the node's string ID. Any component that needs to consume a context just looks it up by ID. React's scoping rules still apply — the provider must be an ancestor in the tree — but the reference problem is solved.`,
          },
          {
            label: "View the full system prompt",
            content: `You are a software architect at a top tier company and you are developing a web application that uses react and redux design principles. Your team has put together the first draft of a new website in a json format. Your job is to help wire up the existing components using context providers, actions, reducer code, dom events, and react effects.

The user will share with you the existing design and you will fill in the missing pieces and return it back to the user. You must follow the json format.

There are 2 types of configs you will deal with. Your configs must conform to one of the two interfaces below depending on the role of the node. Note that you will have to use ProviderConfig in order to wire up state. A Provider config creates a context/provider pair on the frontend. It's purely a way to manage state and does not impact the dom. ComponentConfigs do impact the dom and are directly tied to a certain type of component, identified by the "type" field.

interface FunctionConfig {
  args: Array<ProviderDependencyConfig>,
  body: string,
}

interface ComponentConfig {
  type: 'button' | 'label' | 'textarea' | 'div' | 'input',
  attributes: Record<string, string | FunctionConfig>,
  events: Array<{
    name: string,
    actions: [{
      actionName: string,
      actionPayload: string | FunctionConfig | null
    }]
  }>,
}

interface ProviderConfig {
  name: string,
  actions: Array<{name: string, reducerCode: string}>,
  initialState: any,
}

interface ProviderDependencyConfig {
  contextId: string,
  selector: string[],
  modifier: FunctionConfig | null,
}

interface ConfigTree {
  id: string
  config: ComponentConfig | ProviderConfig
  children: ConfigTree[]
}`,
          },
        ],
        image: { src: "/images/projects/ui-builder-wiring.svg", aspectRatio: "720/340" },
      },
      {
        title: "FunctionConfig: Constraining Eval",
        afterParagraph: 3,
        body: "Most approaches would have the model write actual code\u2014React components, hooks, state management. That requires the model to know syntax, handle imports, and produce bug-free JavaScript. *FunctionConfig* takes the opposite approach: the model only declares **what state it needs** and **what to do with it**. The runtime handles everything else\u2014resolving references, injecting values, managing the Context tree, wiring event handlers. Because the structured fields (contextId, selector, action names) are all **verifiable before anything runs**, the only part that actually gets eval\u2019d is a tiny expression like *return args[0].toString()*. This removes most of the context the model would need and eliminates entire categories of errors.",
        codeBlock: {
          language: "typescript",
          code: `// DISPLAY: The model outputs this for the label's text:
label.textcontent = {
  contextId: "1",                    // "I need state from provider 1"
  selector: ["count"],               // "Specifically the 'count' field"
  body: "return args[0].toString();" // "Turn it into a string"
}

// INCREMENT: And this for the + button's click handler:
button.onClick = {
  contextId: "1",                    // "Dispatch to provider 1"
  actionName: "increment",           // "The increment action"
  actionPayload: null                // "No payload needed"
}

// Before eval, the runtime verifies the structured fields:
assert("1" in providers)             // \u2713 provider exists
assert("count" in provider.state)    // \u2713 field exists
assert("increment" in provider.actions) // \u2713 action exists

// Then resolves and executes:
value = providers["1"].state["count"]    // \u2192 42
fn = new Function("args", body)          // (args) => { return args[0].toString(); }
result = fn([value])                     // \u2192 "42"

// The model said what it needs. The runtime does the rest.`,
        },
      },
    ],
    githubRepo: "EarlywormTeam/ui-builder",
    repoUrl: "https://github.com/EarlywormTeam/ui-builder",
    repoLabel: "GitHub",
    media: [
      {
        type: "youtube",
        src: "-TXyjOF_7M0",
        label: "Demo",
        aspectRatio: "16/9",
      },
    ],
  },
  {
    slug: "component-builder",
    titleLines: ["Component", "Builder"],
    subtitle:
      "An AI agent that builds React components step by step, with a live preview as it works.",
    description:
      "Built over two weeks in February 2024, before tools like Lovable or Bolt existed. You give it a prompt describing a component, and it formulates a plan\u2014visible in the UI\u2014then executes each step, generating the code iteratively. As it works, there\u2019s a live demo of the component you can interact with, and the code appears on the right side of the screen.\n\nThe agent uses GPT-4 with a multi-request validation step: it generates several candidate implementations and evaluates them to select the best one. This avoids the common problem of AI-generated code that works but is messy and hard to customize.\n\nIt has special handling for contenteditable elements, which are notoriously difficult to get right in React. The code it produces follows modular React patterns with TailwindCSS styling. It was reliable and produced surprisingly good results, though like most LLM projects in early 2024 it was slow and expensive to run.",
    year: 2024,
    role: "Solo Developer",
    status: "Archived",
    stack: ["React", "TypeScript", "TailwindCSS", "Node.js", "GPT-4"],
    features: [
      "Step-by-step plan visible in the UI",
      "Live component demo during generation",
      "Multi-request validation for code quality",
      "Special handling for contenteditable",
      "Modular React + TailwindCSS output",
    ],
    githubRepo: "christopherhwood/react-component-agent",
    repoUrl: "https://github.com/christopherhwood/react-component-agent",
    repoLabel: "GitHub",
    media: [
      {
        type: "youtube",
        src: "x3F1ZQh-Uf4",
        label: "Demo",
        aspectRatio: "16/9",
      },
    ],
  },
  {
    slug: "agent2",
    titleLines: ["Node.js", "Coding Agent"],
    subtitle:
      "An autonomous coding agent that works with existing repos, built months before Devin.",
    description:
      "Built in January 2024, several months before Devin was announced. This is an autonomous Node.js coding agent that works with existing repositories\u2014not just greenfield projects. Given a task, it indexes the codebase, generates a repository summary, and produces a pipeline of artifacts before writing any code.\n\nThe artifact pipeline is what makes it different from a simple code generator. It creates PRDs to expand beyond minimal requirements, technical design documents for implementation planning, and coding style guides by analyzing the existing codebase\u2019s patterns. All of these feed into the final code generation step, which produces a pull request.\n\nIt ran in Docker containers for safe execution and could iteratively debug its own output. It eventually got reliable enough to start improving itself through its own commits\u2014though like everything in early 2024, it was slow and expensive. No frontend; purely API-driven via REST endpoints.",
    year: 2024,
    role: "Solo Developer",
    status: "Archived",
    stack: ["Node.js", "Docker", "REST API", "LLM"],
    features: [
      "Autonomous repo indexing and summarization",
      "Auto-generated PRDs and technical design docs",
      "Coding style guide extraction from existing code",
      "Docker-based sandboxed execution",
      "Iterative debugging and self-improvement",
    ],
    githubRepo: "christopherhwood/agent2",
    repoUrl: "https://github.com/christopherhwood/agent2",
    repoLabel: "GitHub",
    media: [
      {
        type: "youtube",
        src: "QORTJhRLDNE",
        label: "Demo",
        aspectRatio: "16/9",
      },
    ],
  },
  {
    slug: "qckfx-ads",
    titleLines: ["Ecommerce Ad", "Generator"],
    subtitle:
      "AI-generated product images for ecommerce brands, using Flux and ComfyUI.",
    description:
      "This one was actually launched and used by real companies for a couple of months. It generates product images for ecommerce brands using Flux image models orchestrated through ComfyUI workflows. Companies tested the output on social media and people couldn\u2019t tell they were AI-generated.\n\nThe technical journey was interesting. The first approach was direct product rendering with fine-tuned Flux models, but getting proportions and details right was unreliable. The solution was a two-stage pipeline: generate the scene with a placeholder, then insert the actual product photo and use inpainting to blend it seamlessly. The code repo is mostly iterations on ComfyUI workflows\u2014tuning prompts, post-processing steps, and blending techniques.\n\nInitially ran on Modal, later moved to Azure GPUs for better throughput. Ultimately retired due to insufficient usage metrics, but the image quality was genuinely impressive.",
    year: 2024,
    role: "Solo Developer",
    status: "Retired",
    stack: ["Flux", "ComfyUI", "Python", "TypeScript", "React", "Azure GPUs"],
    features: [
      "AI product image generation indistinguishable from real photos",
      "Two-stage pipeline: scene generation + product insertion",
      "ComfyUI workflow orchestration",
      "Inpainting for seamless product blending",
      "Used in production by ecommerce companies",
    ],
    asides: [
      {
        title: "Inference Serving Path",
        afterParagraph: 1,
        body: "The two-stage pipeline runs entirely through **ComfyUI workflows** on GPU instances. Stage 1 takes a scene prompt and the product\u2019s fine-tuned **LoRA weights**, generating a scene with a placeholder region where the product will go. Stage 2 composites the **real product photo** into the scene, generates a blending mask around the edges, and runs **Flux inpainting** to seamlessly merge the product into the generated environment. Post-processing handles color correction, upscaling, and sharpening. The pipeline outputs multiple aspect ratios (1:1, 4:5, 16:9, 9:16) for different ad platforms.",
        image: { src: "/images/projects/qckfx-ads-inference.svg", aspectRatio: "880/420" },
      },
      {
        title: "Fine-Tuning for New Products",
        afterParagraph: 1,
        body: "Onboarding a new product starts with **a single product photo**. A preprocessing script chops it into multiple crops and auto-captions each one with an LLM, tagging them with a unique **trigger token** (e.g. *sks_crunchybars*). This generates a full training dataset from one image. A **LoRA fine-tuning** run then trains low-rank adaptation layers on top of the frozen Flux base model, taking ~500\u20131000 steps (~20 minutes on an A100). The resulting weights (~50\u2013100 MB) are stored in a model registry with metadata and validation scores. At inference time, the LoRA is loaded into the ComfyUI pipeline\u2014the trigger token in the scene prompt activates the learned product appearance.",
        image: { src: "/images/projects/qckfx-ads-training.svg", aspectRatio: "920/440" },
      },
    ],
    githubRepo: "EarlywormTeam/qckfx-ads",
    repoUrl: "https://github.com/EarlywormTeam/qckfx-ads",
    repoLabel: "GitHub",
    media: [
      {
        type: "youtube",
        src: "3lhyHKTbeno",
        label: "Demo",
        aspectRatio: "16/9",
      },
    ],
    gallery: [
      { type: "image", src: "/images/projects/qckfx-ads/crunchy-beach-3-alt.png", label: "Beach scene", aspectRatio: "1520/1024" },
      { type: "image", src: "/images/projects/qckfx-ads/qckfx_crunchy_108.png", label: "Generated ad", aspectRatio: "1/1" },
      { type: "image", src: "/images/projects/qckfx-ads/qckfx_crunchy_107.png", label: "Generated ad", aspectRatio: "1/1" },
      { type: "image", src: "/images/projects/qckfx-ads/qckfx_crunchy_110.png", label: "Generated ad", aspectRatio: "1/1" },
      { type: "image", src: "/images/projects/qckfx-ads/qckfx_crunchy_111.png", label: "Generated ad", aspectRatio: "1/1" },
      { type: "image", src: "/images/projects/qckfx-ads/image_product_1.jpg", label: "Product shot", aspectRatio: "1/1" },
      { type: "image", src: "/images/projects/qckfx-ads/image_product_2.jpg", label: "Product shot", aspectRatio: "1/1" },
      { type: "image", src: "/images/projects/qckfx-ads/image_product_3.jpg", label: "Product shot", aspectRatio: "1/1" },
      { type: "image", src: "/images/projects/qckfx-ads/image_product_4.jpg", label: "Product shot", aspectRatio: "1/1" },
    ],
  },
  {
    slug: "arc-agi",
    titleLines: ["ARC-AGI", "Research"],
    subtitle:
      "Applying diffusion models to abstract reasoning, before anyone else was trying it.",
    description:
      "In early July 2024, I spent approximately two weeks applying diffusion models to the ARC-AGI abstract reasoning benchmark. This was my initial machine learning project following fastai\u2019s diffusion courses. I solved one task, came close to solving a second, then moved forward before conducting systematic evaluation.\n\nThe concept originated with a question: given an input-output pair where the output represents complex, unknown transformations of the input, how can you discover those transformations? My first instinct involved Fourier transforms\u2014decomposing unknown transformations into simpler components\u2014but that failed because Fourier analysis decomposes signals into frequency components without discovering input-output mappings.\n\nThe key insight was about diffusion\u2019s forward process. The forward process is fundamentally just a function. Conventionally it\u2019s stochastic Gaussian noise, but nothing requires this. ARC grids are discrete matrices with integer values 0 through 9. By treating outputs as \u201cclean signals\u201d and inputs as \u201ccorrupted signals,\u201d the transformation rule becomes the corruption itself. If a model learns to remove structured, non-random noise, it has learned the underlying function. No one in the ARC community was discussing diffusion at that time\u2014dominant approaches were program synthesis, domain-specific languages, and large language models.",
    year: 2024,
    role: "Independent Researcher",
    status: "Research",
    stack: ["Python", "PyTorch", "Diffusion Models", "UNet", "Autoencoders"],
    features: [
      "Latent diffusion for abstract reasoning",
      "Learned forward process (non-Gaussian)",
      "Stochastic search via multi-path denoising",
      "Branching model ensembles",
      "Per-task training with heavy augmentation",
    ],
    tweets: [
      { id: "1806436104138297747", afterParagraph: 0 },
      { id: "1807884670438359072", afterParagraph: 0 },
    ],
    links: [
      { url: "https://www.kaggle.com/code/christopherhwood/arc-agi-embedding", label: "ARC-AGI Embedding (Kaggle)" },
      { url: "https://www.kaggle.com/code/christopherhwood/notebook92c6e6e661", label: "Latent Diffusion Notebook" },
      { url: "https://www.kaggle.com/code/christopherhwood/notebook29802a10c4", label: "Clue Giver / Solver Notebook" },
      { url: "https://www.kaggle.com/code/christopherhwood/arc-agi-merged-embedding", label: "Merged Embedding (Kaggle)" },
    ],
    media: [],
    sections: [
      {
        title: "What I Built",
        description:
          "ARC grids are single-channel matrices of integers 0\u20139, with height and width varying between 3 and 30. I created a harness that compressed these into standardized 16-channel, 16\u00d716 representations. All diffusion work operated on these embeddings.\n\nThe approach used latent diffusion: an autoencoder learning a latent space from embeddings, then a UNet denoiser treating the input as noisy and predicting the residual to reach the output. Six iterations were necessary to reach a working version. Earlier attempts included deeper autoencoders, bigger latent dimensions, more UNet complexity, second-stage denoising models, and various combinations. Each failure taught something: bigger latents made the denoising problem exponentially harder regardless of autoencoder quality.\n\nThe breakthrough was representational restructuring. Earlier versions collapsed grids into flat 1\u00d71 latent vectors, artificially reshaping them for UNet convolution. The successful version allowed the encoder\u2019s stride-3 convolution to naturally produce 256\u00d73\u00d73 spatial latents, where each of the 9 latent positions corresponded to a 3\u00d73 region of the 9\u00d79 grid. This single change simplified the UNet from 5 levels to 2, dropped loss by an order of magnitude, improved autoencoder loss 100\u00d7, and solved a task.\n\nAbout a week later, I removed the autoencoder entirely, having the UNet predict input-to-output residuals directly in pixel space. For already-solved tasks, the pixel-space version received raw tiled input structurally closer to the answer\u2014yet the latent version performed better despite the pixel version having a head start, suggesting the learned latent space was contributing something meaningful.",
        media: [
          {
            type: "image" as const,
            src: "/images/projects/arc-agi-latent.svg",
            label: "Flat vs Spatial Latent",
            aspectRatio: "880/460",
            caption: "The critical difference between versions 1\u20135 (flat latent, failed) and version 6 (spatial latent, solved a task).",
          },
        ],
      },
      {
        title: "The Clue Giver / Solver Architecture",
        description:
          "Alongside the latent diffusion work, I designed a system called the clue giver and solver. The clue giver starts with the clean output image and progressively adds noise, one step at a time, until reaching the noisy input image. At each step, it lays down a clue that a solver can follow\u2014like a maze where the clue giver starts at the exit and leaves a trail of breadcrumbs back to the entrance.\n\nA timestep-conditioned UNet learns to reverse each step. Multiple solvers learn different reversal paths, creating an ensemble. At test time, the single test input goes to every solver, each producing a different candidate output because it learned a different reversal strategy. The most frequently occurring answer is selected.\n\nThe initial clue giver was a convolutional network learning to generate context-aware noise. This proved overengineered. I replaced it with linear interpolation between clean and noisy embeddings, with element-wise sampling from a bounded normal distribution. In early timesteps, the distribution centers near the clean value with a long tail toward the noisy value. In later timesteps, it shifts toward the noisy value, creating a controlled stochastic walk from clean to noisy, with different random seeds producing different paths. Linear interpolation was later replaced with cosine scheduling.",
        media: [
          {
            type: "image" as const,
            src: "/images/projects/arc-agi-clue-giver.svg",
            label: "Clue Giver / Solver",
            aspectRatio: "880/490",
            caption: "Training generates multiple stochastic paths between clean and noisy. Each solver learns a different reversal strategy. At inference, majority voting selects the consensus answer.",
          },
        ],
      },
      {
        title: "The Ideas Behind the Architecture",
        description:
          "The most important concept: the clue giver\u2019s stochastic sampling produces different paths from clean to noisy each run. Different solvers train on different sampled paths, internalizing different reversal strategies. This transforms diffusion into a search strategy over possible transformations. Randomness lives in training, not inference. Multiple solvers exploring different strategy space regions performs the same work as random restarts in combinatorial search.\n\nStandard diffusion uses Gaussian noise, but ARC transformations are structured, not random. I explored training a network to learn the noise addition process itself: given a clean embedding and target noisy embedding, learn a noise schedule that incrementally corrupts one into the other. Making the forward process learnable let the model discover transformation structure rather than imposing a noise assumption that doesn\u2019t fit.\n\nI also experimented with branching model ensembles. After 5 epochs of training, the UNet was deep-copied into 3 copies with the first layer of each fork frozen. After 15 more epochs, another fork occurred, ending with 9 models sharing early features but diverging in higher-level strategies. This is adjacent to snapshot ensembles and population-based training but creates a branching tree through weight space where structural freezing ensures forked models agree on low-level features while exploring different high-level strategies.\n\nFinally, I questioned why gradient descent optimizers hadn\u2019t been applied to the diffusion inference process itself. The denoising trajectory iteratively refines an image, structurally similar to iterative parameter optimization. Treating pixel values as parameters being optimized toward a target, techniques like momentum or adaptive learning rates seem applicable. This wasn\u2019t implemented but connects to later work on guided diffusion.",
        tweets: [{ id: "1846467721997046005", afterParagraph: 0 }],
        media: [
          {
            type: "image" as const,
            src: "/images/projects/arc-agi-branching.svg",
            label: "Branching Model Ensemble",
            aspectRatio: "800/400",
            caption: "After shared initial training, the model forks into independent copies with frozen early layers. Each fork explores different high-level strategies while agreeing on low-level features.",
          },
        ],
      },
      {
        title: "Results & Reflections",
        description:
          "The approach solved one task outright and came within two cells of solving a second. On one training example for the second task, the model captured the structural transformation correctly\u2014colors mapped, spatial arrangement preserved, overall pattern right. But on the actual challenge input it was consistently off by two cells. Early convolutional layers in the UNet were losing too much spatial information during downsampling, and the embedding format was fragile\u2014small errors in the embedding space cascaded into incorrect cell values after decoding. These are engineering problems, not conceptual ones.\n\nOver the following year, diffusion for ARC became a real research thread. The ARChitects (ARC Prize 2025, 2nd place) used masked diffusion with 8B parameters. Their soft-masking approach turns every grid position into a partially noisy state, iterating and exploring solution space through stochastic refinement\u2014a family resemblance to the random search over paths idea. Trelis Research found that majority voting over 72 augmented starting points improved scores by 20\u201330%, essentially the stochastic search idea.\n\nThe general direction was sound. Framing ARC as denoising was non-obvious in mid-2024 and proved productive. Per-task training with small models fit within the competition\u2019s compute budget and became the dominant approach. My main concern looking back: convolutions might be too lossy before data reaches attention layers. This was the failure mode on the second task and might be fundamental rather than fixable\u2014but before accepting that, creative workarounds deserve attempts. There\u2019s still an itch to go back, run it properly across the full benchmark, and find out where it actually breaks.",
      },
    ],
  },
  {
    slug: "xros",
    titleLines: ["XROS"],
    subtitle:
      "UI framework and application model for Meta's novel AR/VR operating system.",
    links: [
      {
        url: "https://techcrunch.com/2013/04/10/has-facebook-quietly-acquired-osmeta-a-stealth-mobile-software-startup/",
        label: "osmeta acquisition (TechCrunch)",
      },
      {
        url: "https://www.theverge.com/2022/1/5/22868388/meta-xros-vr-ar-os-development-canceled",
        label: "XROS canceled (The Verge)",
      },
    ],
    description:
      "I joined the former osmeta team\u2014a stealth mobile software startup Facebook had acquired in 2013. Shortly after, the remnants of the team moved to the XROS project, a 300+ person effort to build a custom microkernel-based operating system for AR/VR devices. The goal was to give Meta tight control over every layer of its hardware. I served as team lead for a team of 5 building UI components and widgets like text, scrollviews, and the application model. The work was much more similar to working on distributed systems than working on traditional embedded systems, although we also faced unique hardware constraints particularly in our graphics rendering stack.\n\nThis work gave me an opportunity to dive deep into how operating systems work, developing new programming languages, how UI systems work, graphics rendering stacks, working with applications distributed across several processes, and where there is room to innovate and improve on the operating systems and application models of today especially as we eye potential for new application models in AR and VR including declarative UI and server-driven UI vs traditional UI kits.\n\nThe project was canceled in late 2021 and the team was disbanded in early 2022, with members moving to other Reality Labs efforts.",
    year: 2019,
    role: "Team Lead",
    status: "Internal",
    stack: ["C", "C++", "TypeScript", "Microkernel", "IPC", "Custom UI Framework", "Graphics Rendering"],
    features: [
      "UI components and widgets (text, scrollviews)",
      "Application model for a novel non-Unix OS",
      "Apps distributed across multiple processes via IPC",
      "Graphics rendering under hardware constraints",
      "Declarative UI and server-driven UI exploration",
    ],
    media: [],
  },
  {
    slug: "newsfeed-ads",
    titleLines: ["Newsfeed Ads"],
    subtitle:
      "Delivered ads to the top position of Facebook's newsfeed, a $1B+ annual opportunity.",
    description:
      "Facebook never showed ads in the top position of newsfeed. It was thought it would be a bad user experience to open the app and immediately see an ad, and the time required to prepare an ad for the top position was significantly longer than the time to prepare an organic story from a friend. A data science analysis estimated the opportunity at $1B+ annually, but it faced internal resistance across organic feed teams and leadership and was considered technically infeasible at the required latency. The assumed path was a large-scale ranking overhaul requiring 40+ engineers over multiple years.\n\nI redesigned the approach. Rather than waiting on the full backend rebuild, I built a first-phase architecture using session-aware cached ads. By filtering for sessions with high-value, relevant cached ads, we could serve the first slot without deep ranking changes. This reduced projected headcount from 40+ to around 10, removed critical dependencies, and accelerated launch by roughly a year while preserving alignment with the longer-term ranking improvements planned as phase two.\n\nAny delays in feed loading can trickle down to impact DAUs and other critical metrics, so the tradeoffs had to be carefully validated. We defined revenue-per-time-spent success criteria and positioned this as the highest-return monetization option. We encountered several issues on the Android and iOS app side around how changing expectations for first ad position impacted existing delivery systems and application startup.\n\nThe team started at 3 in 2021, grew to 10 in early 2022, and then to 40+ in late 2022 as we neared shipping. When the project became resource-constrained, I gave an org-wide technical talk outlining the architecture and economic case, which led three backend engineers to transfer temporarily and unblock a critical path. The cached-ads phase alone generated over $500M annually, validating the economics ahead of the deeper backend rollout. The project shipped in H1 2023.",
    year: 2022,
    role: "Tech Lead",
    status: "Shipped",
    stack: ["Hack", "C++", "Objective-C", "Java", "Kotlin", "Android", "iOS", "Ads Infrastructure"],
    features: [
      "Session-aware cached ads architecture as capital-efficient first phase",
      "Accelerated launch by a year",
      "First phase generated $500M+ annually",
      "Revenue-per-time-spent success criteria to validate tradeoffs",
      "Scaled team from 3 to 40+ engineers",
      "Cross-platform delivery across Android and iOS",
    ],
    media: [],
  },
  {
    slug: "rayban-meta",
    titleLines: ["Rayban Meta"],
    subtitle:
      "Operational excellence for Meta's Rayban smart glasses, plus an early LLM code automation project.",
    description:
      "I joined the Rayban Meta team in late 2022 right after the Rayban Stories had just shipped. Work was already underway for the next generation named Rayban Meta. I ended up on the operational excellence team, focused on defining and tracking key operational metrics for the engineering team and the project as a whole.\n\nMy work consisted of building dashboards, defining metrics, collaborating with partner teams on QA, bug triage, and customer excellence. One of the more impactful investigations was tracking down lost logs across the full stack\u2014the device firmware, the companion mobile app, and the backend services. Logs were being silently dropped at multiple points in the pipeline, which meant the team was making decisions on incomplete data. Part of the fix also resolved an issue where log transfers from the device to the companion app were causing contention with user media transfers. Fixing the pipeline end-to-end gave us a much clearer picture of real-world device behavior and a smoother user experience.\n\nIn late 2023 I spearheaded work on a project to automate parts of code-writing using LLMs\u2014one of the early internal efforts to apply AI to the development workflow at Meta.",
    year: 2023,
    role: "Software Engineer",
    status: "Shipped",
    stack: ["Objective-C", "Swift", "Kotlin", "C++"],
    features: [
      "Defined and tracked key operational metrics",
      "Built engineering dashboards",
      "Investigated and fixed lost logs across device, mobile app, and backend",
      "QA and bug triage collaboration",
      "LLM-powered code automation tooling",
    ],
    media: [],
  },
  {
    slug: "daydaycook",
    titleLines: ["DayDayCook"],
    subtitle:
      "iOS Team Lead at Asia\u2019s premier cooking and lifestyle brand, building apps across iPhone, iPad, Apple TV, Apple Watch, and iMessage.",
    description:
      "DayDayCook\u2019s name resonates with young men and women across China, Hong Kong, Taiwan, and Southeast Asia. Videos are played in subways, airplanes, barber shops and more. The iOS app has been downloaded by millions and frequently appears on the App Store homepage and in other Apple promotional material. The app appeared in the introductory video to Apple\u2019s 2017 WWDC event.\n\nI joined in January 2016 as the 12th employee and first technical hire after the CTO, when the company raised its seed round from 500 Startups and M-Fund. I stayed through Series B, including a $5 million Series A+ from Alibaba. By December 2017, the company had grown to 175 employees. DayDayCook IPO\u2019d on the NYSE American in 2023.\n\nI was the only non-Chinese employee and conducted all work in Mandarin Chinese. As iOS Team Lead, I led the global launch in Summer 2016 (iPhone, iPad, and Apple TV apps featured on App Store front pages in China, Hong Kong, and Taiwan), independently built the iMessage app and coordinated with Apple to get it featured in three regions, and ran a 2017 Chinese New Year promotional campaign in partnership with the App Store.",
    year: 2017,
    role: "iOS Team Lead",
    status: "Shipped",
    stack: ["Objective-C", "Swift", "JavaScript", "UIKit", "WatchKit", "tvOS", "iMessage Extensions"],
    features: [
      "iPhone + iPad universal app with millions of downloads",
      "Custom video player with picture-in-picture playback",
      "Ecommerce with flash sales and countdown timers",
      "iMessage app with recipe sharing and stickers",
      "Apple TV app with 3,000+ recipe library",
      "Apple Watch app with recipe carousel",
      "App Store features across China, Hong Kong, and Taiwan",
    ],
    media: [
      {
        type: "youtube",
        src: "webrbY98SaQ",
        label: "2017 CNY Promotional Video",
        aspectRatio: "16/9",
        caption: "App Store promotional video for the 2017 Chinese New Year campaign.",
      },
      {
        type: "image",
        src: "/images/projects/daydaycook/wwdc-2017.png",
        label: "WWDC 2017",
        aspectRatio: "2/1",
        caption: "DayDayCook appeared in the introductory video to Apple\u2019s 2017 WWDC event.",
      },
    ],
    gallery: [
      { type: "image", src: "/images/projects/daydaycook/appstore-featured.jpg", label: "App Store Featured", aspectRatio: "4/3" },
      { type: "image", src: "/images/projects/daydaycook/appstore-featured-2.jpg", label: "App Store Featured", aspectRatio: "4/3" },
      { type: "image", src: "/images/projects/daydaycook/global-launch.jpg", label: "Global Launch", aspectRatio: "9/16" },
      { type: "image", src: "/images/projects/daydaycook/imessage-featured.jpg", label: "iMessage Featured", aspectRatio: "9/16" },

      { type: "image", src: "/images/projects/daydaycook/team.jpg", label: "Team", aspectRatio: "1/1" },
    ],
    sections: [
      {
        title: "iPhone + iPad App",
        description:
          "The iPhone/iPad universal application is the core of the DayDayCook iOS experience. As team lead, I led development efforts on the app\u2019s custom video player, recipe page, ecommerce homepage, and many other features.\n\nThe video player supports picture-in-picture so users can keep watching while scrolling through recipes, quick sharing, recipe step overlays, synchronized recipe step alert popovers, a shortcut button to enter the comments section, and a fully customized user interface. The recipe page includes ingredients, cooking steps, recommended recipes, tips, and comments. The app also hosts flash sales and extended sales sections with countdown timers, a unique profile page with custom UI components, and interactive features like photo competitions and surveys.",
        mediaLayout: "carousel",
        media: [
          { type: "image", src: "/images/projects/daydaycook/iphone-1.png", label: "Cooking Course Page (Paid Content)", aspectRatio: "9/16" },
          { type: "image", src: "/images/projects/daydaycook/iphone-video-player.png", label: "Custom Video Player w/ cooking steps overlaid", aspectRatio: "16/9" },
          { type: "image", src: "/images/projects/daydaycook/iphone-landscape.png", label: "Custom Video Player w/ buttons to open cooking steps or view comments", aspectRatio: "16/9" },
          { type: "image", src: "/images/projects/daydaycook/iphone-recipe.png", label: "Recipe Page", aspectRatio: "9/16" },
          { type: "image", src: "/images/projects/daydaycook/iphone-recipe-2.png", label: "Recipe Ingredients & Steps", aspectRatio: "9/16" },
          { type: "image", src: "/images/projects/daydaycook/iphone-recipe-3.png", label: "Ingredient Details", aspectRatio: "9/16" },
          { type: "image", src: "/images/projects/daydaycook/iphone-recipe-page.png", label: "Recommended Recipes & User Comments", aspectRatio: "9/16" },
          { type: "image", src: "/images/projects/daydaycook/iphone-recipe-nav.png", label: "Ecommerce Store", aspectRatio: "9/16" },
          { type: "image", src: "/images/projects/daydaycook/iphone-recipe-details.png", label: "Ecommerce Store w/ Articles & Products", aspectRatio: "9/16" },
          { type: "image", src: "/images/projects/daydaycook/iphone-ecommerce.png", label: "Ecommerce Store w/ Sold Out Item", aspectRatio: "9/16" },
          { type: "image", src: "/images/projects/daydaycook/iphone-profile.png", label: "User Profile Page", aspectRatio: "9/16" },
          { type: "image", src: "/images/projects/daydaycook/iphone-interactive.png", label: "User Voting Feature", aspectRatio: "9/16" },
          { type: "image", src: "/images/projects/daydaycook/iphone-interactive-2.png", label: "User Comments with Image Gallery", aspectRatio: "9/16" },
        ],
      },
      {
        title: "iMessage App",
        description:
          "The iMessage app and sticker app launched alongside iOS 10 with App Store featuring in Hong Kong, Taiwan, and mainland China. I created both applications independently in the week before iOS 10\u2019s release.\n\nThe app supports recipe sharing via iMessage, a sticker application with unlockable rewards for the 2017 Chinese New Year promotion, keyword and extended search functionality, and shopping list sharing. Shared recipes launch the main DayDayCook app directly to the specific recipe video. The instability of the beta iOS 10 versions and the requirements for split screen support in both landscape and portrait orientations created difficulties, but we delivered a highly performant application.",
        mediaLayout: "carousel",
        media: [
          { type: "image", src: "/images/projects/daydaycook/imessage-1.jpg", label: "iMessage App on Hong Kong App Store front page", aspectRatio: "9/16" },
          { type: "image", src: "/images/projects/daydaycook/imessage-2.jpg", label: "iMessage App on Mainland China App Store front page", aspectRatio: "9/16" },
          { type: "image", src: "/images/projects/daydaycook/imessage-stickers.jpg", label: "Stickers launch on App Store", aspectRatio: "2/1" },
          { type: "image", src: "/images/projects/daydaycook/imessage-sharing.png", label: "Recipe Search in iMessage w/ Filters", aspectRatio: "9/16" },
        ],
      },
      {
        title: "Apple TV App",
        description:
          "As part of the global launch in 2016, I developed the Apple TV app independently using a combination of Objective-C and JavaScript. The app was featured on the front page of three App Stores\u2014China, Hong Kong, and Taiwan.\n\nThe app opens to the full library of over 3,000 DayDayCook recipes, sorted by category. It supports full text search, user login including via Facebook, and synchronizes each user\u2019s favorite recipes with the iPhone and iPad apps. Each recipe has a details page with video, cooking steps, ingredients, and a favorite button. All recipe videos can be played full screen on the Apple TV.",
        mediaLayout: "carousel",
        media: [
          { type: "image", src: "/images/projects/daydaycook/appletv-featured.jpg", label: "App Store Featured", aspectRatio: "4/3" },
          { type: "image", src: "/images/projects/daydaycook/appletv-library.png", label: "Recipe Library", aspectRatio: "16/9" },
          { type: "image", src: "/images/projects/daydaycook/appletv-detail.png", label: "Recipe Details Page", aspectRatio: "16/9" },
          { type: "image", src: "/images/projects/daydaycook/appletv-recipe.png", label: "Recipe Details", aspectRatio: "16/9" },
          { type: "image", src: "/images/projects/daydaycook/appletv-video.png", label: "Video Playback", aspectRatio: "16/9" },
        ],
      },
      {
        title: "Apple Watch App",
        description:
          "The Apple Watch app was my first major independent project at DayDayCook. I spent one month collaborating with Apple\u2019s App Store team to build an application featuring DayDayCook recipes optimized for the smartwatch display.\n\nThe app opens to a rotating carousel of the five most recently published recipes. Users can swipe right to access favorite recipes saved through the main application. The primary challenges involved managing image sizing within the watch\u2019s undocumented memory constraints and designing creative workarounds for limited UI elements like scrollviews and pull-to-load-more functionality.",
        mediaLayout: "carousel",
        media: [
          { type: "image", src: "/images/projects/daydaycook/watch-1.png", label: "Home / Recipe View", aspectRatio: "4/5" },
          { type: "image", src: "/images/projects/daydaycook/watch-2.png", label: "Recipe Favorited", aspectRatio: "4/5" },
          { type: "image", src: "/images/projects/daydaycook/watch-3.png", label: "Recipe Detail Page w/ Deep Link to iOS App Video Player", aspectRatio: "4/5" },
          { type: "image", src: "/images/projects/daydaycook/watch-4.png", label: "Ingredient List", aspectRatio: "4/5" },
          { type: "image", src: "/images/projects/daydaycook/watch-5.png", label: "Recipe Steps", aspectRatio: "4/5" },
          { type: "image", src: "/images/projects/daydaycook/watch-6.png", label: "Recipe Steps w/ Images", aspectRatio: "4/5" },
        ],
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
