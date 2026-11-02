// BlogSphere - In-Memory Blogs Data Store

const blogs = [
  {
    id: "bharath-blog-1",
    title: "Architecting Scalable Web Applications in 2026",
    category: "Technology",
    tags: ["Architecture", "JavaScript", "FullStack", "WebDev"],
    coverImage: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
    excerpt: "A deep dive into building resilient, modern web architectures with clean component boundaries and zero-dependency designs.",
    content: "## The Evolution of Web Architecture\n\nBuilding modern web applications requires a disciplined balance between developer velocity and runtime performance. By keeping client bundles lean and embracing native browser capabilities, we can achieve sub-second load times.\n\n### Key Principles\n\n- **Zero-runtime overhead**: Rely on standard web APIs whenever possible.\n- **Component isolation**: Keep styles and states cleanly separated.\n- **Data resilience**: Leverage persistent client storage like localStorage and IndexedDB.",
    author: "bharaths2205",
    date: "2026-10-26T14:30:00.000Z",
    status: "Published",
    likes: 42,
    views: 520
  },
  {
    id: "bharath-blog-2",
    title: "Why Vanilla JavaScript is Still My Secret Weapon",
    category: "Technology",
    tags: ["JavaScript", "Performance", "Frontend"],
    coverImage: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=800&q=80",
    excerpt: "Framework fatigue is real. Here is how leveraging native browser APIs, DOM manipulation, and ES6+ features leads to blazing fast applications.",
    content: "## Returning to the Fundamentals\n\nEvery framework eventually compiles down to Vanilla JavaScript. Understanding the core event loop, DOM diffing, and standard Fetch APIs provides clarity that no library abstraction can match.",
    author: "bharaths2205",
    date: "2026-10-24T09:15:00.000Z",
    status: "Published",
    likes: 35,
    views: 410
  },
  {
    id: "bharath-blog-3",
    title: "Designing Modern Dark Mode UI Systems with CSS Variables",
    category: "Design",
    tags: ["CSS", "UI/UX", "DesignSystem", "WebDesign"],
    coverImage: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80",
    excerpt: "How to craft seamless, accessible light and dark themes using semantic CSS custom properties and smooth transitions.",
    content: "## The Power of Semantic Tokens\n\nInstead of hardcoding color hex values throughout stylesheets, modern design systems define semantic variables.",
    author: "bharaths2205",
    date: "2026-10-21T16:45:00.000Z",
    status: "Published",
    likes: 28,
    views: 335
  },
  {
    id: "bharath-blog-4",
    title: "Demystifying GenAI Integration in Front-End Apps",
    category: "AI & Data",
    tags: ["AI", "GenAI", "MachineLearning", "APIs"],
    coverImage: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
    excerpt: "Practical techniques for connecting client applications to generative AI endpoints with streaming UI feedback.",
    content: "## Bringing AI to the Browser\n\nAI isn't just for backends and data science teams anymore. With streaming APIs and client-side inference, developers can build responsive, intelligent interfaces that feel magical to end-users.",
    author: "bharaths2205",
    date: "2026-10-18T11:20:00.000Z",
    status: "Published",
    likes: 49,
    views: 680
  },
  {
    id: "bharath-blog-5",
    title: "Building a Sustainable Habit for Daily Engineering Growth",
    category: "Career",
    tags: ["Productivity", "Career", "Learning", "Habits"],
    coverImage: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80",
    excerpt: "Strategies for avoiding burnout while maintaining a steady 1% daily improvement in problem-solving and software engineering.",
    content: "## The 1% Rule for Developers\n\nSmall daily improvements compound dramatically over time. Spending 20 minutes each day reviewing documentation, reading open-source code, or writing a short article beats weekend cramming sessions every single time.",
    author: "bharaths2205",
    date: "2026-10-14T08:00:00.000Z",
    status: "Published",
    likes: 23,
    views: 295
  },
  {
    id: "bharath-blog-6",
    title: "Draft: The Future of Offline-First Web Storage",
    category: "Technology",
    tags: ["LocalStorage", "IndexedDB", "PWA", "Offline"],
    coverImage: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80",
    excerpt: "Draft notes and outline on synchronizing local browser storage with cloud databases for high availability.",
    content: "## Notes on Offline Data Synchronization\n\n- Need to explore conflict-free replicated data types (CRDTs).\n- Evaluating IndexedDB vs LocalStorage performance across mobile browsers.\n- Background sync service workers implementation guide.",
    author: "bharaths2205",
    date: "2026-10-27T18:00:00.000Z",
    status: "Draft",
    likes: 0,
    views: 0
  },
  {
    id: "default-1",
    title: "Getting Started with Web Development",
    category: "Technology",
    tags: ["HTML", "CSS", "JavaScript"],
    coverImage: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
    excerpt: "Learn the core fundamentals of web development and structure your first dynamic application.",
    content: "HTML structures a page, CSS styles it, and JavaScript adds interactivity.",
    author: "Admin",
    date: "2026-10-20T10:00:00.000Z",
    status: "Published",
    likes: 12,
    views: 145
  },
  {
    id: "default-2",
    title: "Why JavaScript Continues to Dominate",
    category: "Technology",
    tags: ["JavaScript", "Programming", "Web"],
    coverImage: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=800&q=80",
    excerpt: "Explore how JavaScript evolved from a simple scripting tool to the universal language of the web.",
    content: "JavaScript enables developers to build interactive interfaces, handle asynchronous HTTP requests, build servers, and orchestrate modern AI experiences.",
    author: "Admin",
    date: "2026-10-21T10:00:00.000Z",
    status: "Published",
    likes: 18,
    views: 160
  }
];


module.exports = blogs;
