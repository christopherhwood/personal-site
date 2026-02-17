import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Old WordPress blog paths → new blog paths
      { source: "/Open-Sourcing-All-of-My-Projects-from-2024", destination: "/blog/open-sourcing-2024", permanent: true },
      { source: "/Open-Sourcing-All-of-My-Projects-from-2024/", destination: "/blog/open-sourcing-2024", permanent: true },
      { source: "/RAG-vs-Big-Context-Windows", destination: "/blog/rag-vs-big-context-windows", permanent: true },
      { source: "/RAG-vs-Big-Context-Windows/", destination: "/blog/rag-vs-big-context-windows", permanent: true },
      { source: "/Emerging-Personalized-Economy", destination: "/blog/emerging-personalized-economy", permanent: true },
      { source: "/Emerging-Personalized-Economy/", destination: "/blog/emerging-personalized-economy", permanent: true },
      { source: "/The-Difficulty-of-Becoming-a-Manager", destination: "/blog/difficulty-becoming-manager", permanent: true },
      { source: "/The-Difficulty-of-Becoming-a-Manager/", destination: "/blog/difficulty-becoming-manager", permanent: true },
      { source: "/Why-China", destination: "/blog/why-china", permanent: true },
      { source: "/Why-China/", destination: "/blog/why-china", permanent: true },
      { source: "/2017", destination: "/blog/2017", permanent: true },
      { source: "/2017/", destination: "/blog/2017", permanent: true },
      { source: "/2016", destination: "/blog/goodbye-2015", permanent: true },
      { source: "/2016/", destination: "/blog/goodbye-2015", permanent: true },
      { source: "/2-Seconds", destination: "/blog/2-seconds", permanent: true },
      { source: "/2-Seconds/", destination: "/blog/2-seconds", permanent: true },
      { source: "/BuzzFeed-Is-Only-the-Beginning", destination: "/blog/buzzfeed-is-only-the-beginning", permanent: true },
      { source: "/BuzzFeed-Is-Only-the-Beginning/", destination: "/blog/buzzfeed-is-only-the-beginning", permanent: true },
      { source: "/Newspapers-vs-Free-Market", destination: "/blog/newspapers-vs-free-market", permanent: true },
      { source: "/Newspapers-vs-Free-Market/", destination: "/blog/newspapers-vs-free-market", permanent: true },
      { source: "/Uber-\\+-China-\\=-Fail", destination: "/blog/uber-china-fail", permanent: true },
      { source: "/Uber-\\+-China-\\=-Fail/", destination: "/blog/uber-china-fail", permanent: true },
      { source: "/The-New-Look-of-Chinas-Shadow-Banking", destination: "/blog/chinas-shadow-banking", permanent: true },
      { source: "/The-New-Look-of-Chinas-Shadow-Banking/", destination: "/blog/chinas-shadow-banking", permanent: true },
      { source: "/The-Future-of-the-Internet", destination: "/blog/future-of-the-internet", permanent: true },
      { source: "/The-Future-of-the-Internet/", destination: "/blog/future-of-the-internet", permanent: true },
      { source: "/Chinas-Emerging-Capitalist-Economy", destination: "/blog/chinas-emerging-capitalist-economy", permanent: true },
      { source: "/Chinas-Emerging-Capitalist-Economy/", destination: "/blog/chinas-emerging-capitalist-economy", permanent: true },
      { source: "/Chinas-Trash-Problem", destination: "/blog/chinas-trash-problem", permanent: true },
      { source: "/Chinas-Trash-Problem/", destination: "/blog/chinas-trash-problem", permanent: true },
      { source: "/%E4%B8%AD%E5%9B%BD%E6%94%BF%E5%BA%9C%E5%8E%8B%E5%88%B6%E5%88%A9%E7%8E%87%E4%BC%9A%E4%B8%8D%E4%BC%9A%E5%AF%BC%E8%87%B4%E7%BB%8F%E6%B5%8E%E5%8D%B1%E6%9C%BA", destination: "/blog/china-interest-rate-crisis", permanent: true },

      // Old portfolio paths → new project paths
      { source: "/llm-drag-drop-website-builder", destination: "/projects/ui-builder", permanent: true },
      { source: "/frontend-component-builder-agent", destination: "/projects/component-builder", permanent: true },
      { source: "/node-js-code-generator", destination: "/projects/agent2", permanent: true },
      { source: "/ecommerce-image-generator", destination: "/projects/qckfx-ads", permanent: true },
      { source: "/qckfx-automated-bug-fixing", destination: "/projects/qckfx", permanent: true },
    ];
  },
};

export default nextConfig;
