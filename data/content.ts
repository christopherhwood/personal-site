export type ItemType = "project" | "post";

export interface WorkItem {
  title: string;
  subtitle: string;
  type: ItemType;
  year: number;
  slug?: string;
}

export interface FeaturedProject {
  title: string;
  subtitle: string;
  description: string;
  slug?: string;
}

export interface TimelineSection {
  id: string;
  yearRange: string;
  chapterLabel: string;
  displayText: string;
  bodyTexts: string[];
  items: WorkItem[];
}

export const featuredProjects: FeaturedProject[] = [
  {
    title: "AI Website Builder",
    subtitle: "DRAG/DROP / META-PROGRAMMING",
    description: "Drag-and-drop site builder where an LLM writes the state management code.",
    slug: "ui-builder",
  },
  {
    title: "ARC-AGI Research",
    subtitle: "DIFFUSION MODELS / INDEPENDENT",
    description: "Independent research exploring diffusion models for abstract reasoning tasks.",
  },
  {
    title: "qckfx",
    subtitle: "iOS TESTING TOOL",
    description: "Record-and-replay UI testing for iOS apps, built for AI coding agents.",
    slug: "qckfx",
  },
  {
    title: "Earlyworm",
    subtitle: "LANGUAGE LEARNING / iOS",
    description: "AI-powered language learning iOS app built while still at Meta.",
    slug: "earlyworm",
  },
  {
    title: "Coding Agent",
    subtitle: "AI / DEVELOPER TOOLS",
    description: "Node.js autonomous coding agent with tool use and multi-step planning.",
    slug: "agent-sdk",
  },
];

export const sections: TimelineSection[] = [
  {
    id: "07",
    yearRange: "2025\u201326",
    chapterLabel: "2025\u20132026 \u2014 AI DEV TOOLS",
    displayText: "Building dev tools for AI coding.",
    bodyTexts: [
      "Focused on developer tools that improve how we build with AI. Working on making AI-generated code more reliable and the development experience more intuitive. Building MCP servers for Node.js debugging and tree-sitter interfaces, iOS testing tools, and publishing platforms.",
    ],
    items: [
      {
        title: "qckfx",
        subtitle: "iOS TESTING TOOL",
        type: "project",
        year: 2025,
        slug: "qckfx",
      },
      {
        title: "Open Source Coding Agent",
        subtitle: "AI / DEVELOPER TOOLS",
        type: "project",
        year: 2025,
        slug: "agent-sdk",
      },
      {
        title: "Node.js Debugging MCP",
        subtitle: "MCP SERVER / DEVELOPER TOOLS",
        type: "project",
        year: 2025,
        slug: "node-debugger-mcp",
      },
      {
        title: "Tree-sitter MCP",
        subtitle: "MCP SERVER / CODE ANALYSIS",
        type: "project",
        year: 2025,
        slug: "tree-hugger",
      },
      {
        title: "Writeframe",
        subtitle: "SHORT FORM PUBLISHING / iOS",
        type: "project",
        year: 2025,
        slug: "writeframe",
      },
      {
        title: "Open-Sourcing All of My Projects from 2024",
        subtitle: "ESSAY / 2025",
        type: "post",
        year: 2025,
        slug: "open-sourcing-2024",
      },
    ],
  },
  {
    id: "06",
    yearRange: "2023\u201325",
    chapterLabel: "2023\u20132025 \u2014 AI EXPLORATION",
    displayText: "Left Meta to explore what\u2019s possible with AI.",
    bodyTexts: [
      "While still at Meta, started experimenting with LLMs outside of work hours\u2014built Earlyworm, a language learning iOS app. Left Meta in 2024 to explore what was possible with AI full-time. Created an open-source AI coding agent, worked on Harvey\u2019s legal AI iOS app pre-beta, and built an AI-native ERP extension for building materials distributors.",
      "Did independent research on ARC-AGI exploring diffusion models. Built a Node.js autonomous coding agent, a drag/drop website builder with AI function wiring, an AI-powered frontend component builder, and an ecommerce ad generator.",
    ],
    items: [
      {
        title: "Earlyworm",
        subtitle: "LANGUAGE LEARNING / iOS",
        type: "project",
        year: 2023,
        slug: "earlyworm",
      },
      {
        title: "AI Website Builder",
        subtitle: "DRAG/DROP / META-PROGRAMMING",
        type: "project",
        year: 2024,
        slug: "ui-builder",
      },
      {
        title: "Component Builder",
        subtitle: "FRONTEND / AI-POWERED",
        type: "project",
        year: 2024,
        slug: "component-builder",
      },
      {
        title: "Ecommerce Ad Generator",
        subtitle: "AI / MARKETING",
        type: "project",
        year: 2024,
        slug: "qckfx-ads",
      },
      {
        title: "ARC-AGI Research",
        subtitle: "DIFFUSION MODELS / INDEPENDENT",
        type: "project",
        year: 2024,
      },
      {
        title: "Emerging Personalized Economy",
        subtitle: "ESSAY / 2023",
        type: "post",
        year: 2023,
        slug: "emerging-personalized-economy",
      },
      {
        title: "RAG vs Big Context Windows",
        subtitle: "ESSAY / 2023",
        type: "post",
        year: 2023,
        slug: "rag-vs-big-context-windows",
      },
    ],
  },
  {
    id: "05",
    yearRange: "2021\u201323",
    chapterLabel: "2021\u20132023 \u2014 META ADS & RAYBAN",
    displayText: "From hypothesis to production.",
    bodyTexts: [
      "Joined the ads team and turned a $1B+ data science opportunity into production, generating over $500M annually with a capital-efficient architecture that bypassed the need for a multi-year backend rebuild. Then moved to the Rayban Meta team for operational excellence and early LLM tooling.",
    ],
    items: [
      {
        title: "Newsfeed Ad Placement",
        subtitle: "PRODUCTION / REVENUE OPTIMIZATION",
        type: "project",
        year: 2022,
        slug: "newsfeed-ads",
      },
      {
        title: "Rayban Meta",
        subtitle: "OPERATIONAL EXCELLENCE / LLM TOOLING",
        type: "project",
        year: 2023,
        slug: "rayban-meta",
      },
    ],
  },
  {
    id: "04",
    yearRange: "2018\u201321",
    chapterLabel: "2018\u20132021 \u2014 META AR/VR",
    displayText: "Building an OS and researching user experience.",
    bodyTexts: [
      "Left DayDayCook in 2018 to join Meta and work on a new operating system for AR/VR devices. Worked on the UI framework and app model, and did user experience research. Interesting challenges around running apps across multiple processes for security and performance, and building rich applications where their entire interface with the system is via IPC.",
    ],
    items: [
      {
        title: "XROS",
        subtitle: "UI FRAMEWORK / AR/VR OS",
        type: "project",
        year: 2019,
        slug: "xros",
      },
      {
        title: "The Difficulty of Becoming a Manager",
        subtitle: "ESSAY / 2018",
        type: "post",
        year: 2018,
        slug: "difficulty-becoming-manager",
      },
    ],
  },
  {
    id: "03",
    yearRange: "2015\u201318",
    chapterLabel: "2015\u20132018 \u2014 DAYDAYCOOK",
    displayText: "2.5 years on the iOS team.",
    bodyTexts: [
      "Worked on DayDayCook\u2019s iOS app. We made Apple\u2019s top 10 app list in Hong Kong in 2016 and were featured in the WWDC 2016 video. It was my first time seeing something I worked on reach that many people, and understanding what it takes to ship software that holds up at scale.",
    ],
    items: [
      {
        title: "DayDayCook",
        subtitle: "TOP 10 HK 2016 / WWDC FEATURED",
        type: "project",
        year: 2016,
      },
      {
        title: "iOS Development",
        subtitle: "SWIFT / DESIGN / LOCALIZATION",
        type: "project",
        year: 2016,
      },
      {
        title: "2017",
        subtitle: "YEAR IN REVIEW / 2017",
        type: "post",
        year: 2017,
        slug: "2017",
      },
      {
        title: "Why China",
        subtitle: "ESSAY / 2017",
        type: "post",
        year: 2017,
        slug: "why-china",
      },
      {
        title: "Goodbye 2015",
        subtitle: "YEAR IN REVIEW / 2015",
        type: "post",
        year: 2015,
        slug: "goodbye-2015",
      },
    ],
  },
  {
    id: "02",
    yearRange: "2013\u201315",
    chapterLabel: "2013\u20132015 \u2014 NANJING & SHANGHAI",
    displayText: "Learning Chinese, then started coding.",
    bodyTexts: [
      "Moved to Nanjing to study Chinese, then Shanghai to work. Shanghai was where I really learned to program\u2014the city had an energy that made you want to build things. The combination of being in a new place and having something concrete to work on every day was formative.",
    ],
    items: [
      {
        title: "Earlyworm v1",
        subtitle: "CHINESE E-READER / iOS",
        type: "project",
        year: 2015,
        slug: "earlyworm",
      },
      {
        title: "2 Seconds",
        subtitle: "ESSAY / 2015",
        type: "post",
        year: 2015,
        slug: "2-seconds",
      },
      {
        title: "BuzzFeed Is Only the Beginning",
        subtitle: "ESSAY / 2014",
        type: "post",
        year: 2014,
        slug: "buzzfeed-is-only-the-beginning",
      },
      {
        title: "Newspapers vs Free Market",
        subtitle: "ESSAY / 2014",
        type: "post",
        year: 2014,
        slug: "newspapers-vs-free-market",
      },
      {
        title: "Uber + China = Fail",
        subtitle: "ESSAY / 2014",
        type: "post",
        year: 2014,
        slug: "uber-china-fail",
      },
      {
        title: "The New Look of China\u2019s Shadow Banking",
        subtitle: "ESSAY / 2014",
        type: "post",
        year: 2014,
        slug: "chinas-shadow-banking",
      },
    ],
  },
  {
    id: "01",
    yearRange: "~2013",
    chapterLabel: "~2013 \u2014 VIRGINIA",
    displayText: "Nelson County and UVA.",
    bodyTexts: [
      "Grew up in Nelson County\u2014a county with less than 15,000 people, 600 in my high school. Valedictorian, all-district golf, basketball state champion. Also played guitar and saxophone in the jazz band.",
      "Went to University of Virginia and studied international relations and Chinese language. Wrote some papers in Chinese about IR topics that I can share if you\u2019re curious about that phase of my life.",
    ],
    items: [
      {
        title: "The Future of the Internet",
        subtitle: "ESSAY / 2013",
        type: "post",
        year: 2013,
        slug: "future-of-the-internet",
      },
      {
        title: "China\u2019s Emerging Capitalist Economy",
        subtitle: "ESSAY / 2013",
        type: "post",
        year: 2013,
        slug: "chinas-emerging-capitalist-economy",
      },
      {
        title: "China\u2019s Trash Problem",
        subtitle: "ESSAY / 2013",
        type: "post",
        year: 2013,
        slug: "chinas-trash-problem",
      },
      {
        title: "\u4e2d\u56fd\u653f\u5e9c\u538b\u5236\u5229\u7387\u4f1a\u4e0d\u4f1a\u5bfc\u81f4\u7ecf\u6d4e\u5371\u673a\uff1f",
        subtitle: "CHINESE LANGUAGE / INTERNATIONAL RELATIONS",
        type: "post",
        year: 2013,
        slug: "china-interest-rate-crisis",
      },
      {
        title: "IR Research Papers",
        subtitle: "CHINESE LANGUAGE / INTERNATIONAL RELATIONS",
        type: "project",
        year: 2013,
      },
    ],
  },
];
