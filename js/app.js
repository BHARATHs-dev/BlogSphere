// BlogSphere - Application Logic & Storage Manager
import { registerUser, loginUser, createBlog, getBlogs } from "./api.js";

const USERS_KEY = "blogsphere_users";
const CURRENT_USER_KEY = "blogsphere_current_user";
const BLOGS_KEY = "blogsphere_blogs";
const DRAFTS_KEY = "blogsphere_drafts";

// Primary seeded demo user
const primaryUser = {
  fullname: "Bharath S",
  username: "bharaths2205",
  email: "bharaths2205@gmail.com",
  password: "123456"
};

// Default public articles from the community
const defaultBlogs = [
  {
    id: "default-1",
    title: "Getting Started with Web Development",
    category: "Technology",
    tags: ["HTML", "CSS", "JavaScript"],
    coverImage: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
    excerpt: "Learn the core fundamentals of web development and structure your first dynamic application.",
    content: "HTML structures a page, CSS styles it, and JavaScript adds interactivity. Modern web development blends these three foundational pillars into robust user experiences.",
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
  },
  {
    id: "default-3",
    title: "Responsive Web Design Masterclass",
    category: "Design",
    tags: ["CSS", "Responsive Design", "Flexbox"],
    coverImage: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80",
    excerpt: "Ensure your layout scales elegantly across mobile phones, tablets, and high-resolution monitors.",
    content: "Responsive design uses fluid grid systems, CSS flexbox, grid, and media queries to adapt cleanly to every screen geometry.",
    author: "Admin",
    date: "2026-10-22T10:00:00.000Z",
    status: "Published",
    likes: 9,
    views: 130
  },
  {
    id: "default-4",
    title: "A Beginner's Guide to Modern Component Systems",
    category: "Technology",
    tags: ["Components", "Frontend", "UI"],
    coverImage: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=800&q=80",
    excerpt: "Learn how to structure reusable UI building blocks and maintain scalable frontends.",
    content: "Component architectures help developers build maintainable user interfaces using reusable building blocks, isolated styling, and clear contracts.",
    author: "Admin",
    date: "2026-10-23T10:00:00.000Z",
    status: "Published",
    likes: 22,
    views: 175
  },
  {
    id: "default-5",
    title: "Introduction to Database Architecture",
    category: "Technology",
    tags: ["Database", "SQL", "Storage"],
    coverImage: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&w=800&q=80",
    excerpt: "Understand how relational and document databases store, index, and query data efficiently.",
    content: "Relational databases use tables with strict constraints, while document stores offer flexible schemas for evolving application architectures.",
    author: "Admin",
    date: "2026-10-24T10:00:00.000Z",
    status: "Published",
    likes: 15,
    views: 151
  },
  {
    id: "default-6",
    title: "Tips to Accelerate Your Engineering Growth",
    category: "Career",
    tags: ["Coding", "Productivity", "Growth"],
    coverImage: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80",
    excerpt: "Build a consistent coding routine and elevate your analytical problem-solving skills.",
    content: "Practice regularly, build end-to-end projects, study open-source patterns, and embrace debugging as the fastest path to mastery.",
    author: "Admin",
    date: "2026-10-25T10:00:00.000Z",
    status: "Published",
    likes: 20,
    views: 168
  }
];

// Sample articles owned by Bharath S (bharaths2205@gmail.com)
const sampleUserBlogs = [
  {
    id: "bharath-blog-1",
    title: "Architecting Scalable Web Applications in 2026",
    category: "Technology",
    tags: ["Architecture", "JavaScript", "FullStack", "WebDev"],
    coverImage: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
    excerpt: "A deep dive into building resilient, modern web architectures with clean component boundaries and zero-dependency designs.",
    content: "## The Evolution of Web Architecture\n\nBuilding modern web applications requires a disciplined balance between developer velocity and runtime performance. By keeping client bundles lean and embracing native browser capabilities, we can achieve sub-second load times.",
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
  }
];

function getData(key) {
  try {
    return JSON.parse(localStorage.getItem(key) || "[]");
  } catch {
    return [];
  }
}

function saveData(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

function getCurrentUser() {
  try {
    return JSON.parse(localStorage.getItem(CURRENT_USER_KEY) || "null");
  } catch {
    return null;
  }
}

// Check whether a blog post belongs to the given user
function isAuthorMatch(blog, user) {
  if (!blog || !user) return false;
  const blogAuthor = (blog.author || "").toLowerCase();
  const userName = (user.username || "").toLowerCase();
  const userEmail = (user.email || "").toLowerCase();

  return (
    blogAuthor === userName ||
    blogAuthor === userEmail ||
    (userEmail === "bharaths2205@gmail.com" && (blogAuthor === "bharath" || blogAuthor === "bharaths2205")) ||
    (userName === "bharaths2205" && (blogAuthor === "bharath" || blogAuthor === "bharaths2205"))
  );
}

// Seed initial sample data & configure default user login
function seedInitialData() {
  let users = getData(USERS_KEY);
  if (!Array.isArray(users)) users = [];

  const existingUserIndex = users.findIndex(u =>
    u.email?.toLowerCase() === primaryUser.email.toLowerCase() ||
    u.username?.toLowerCase() === primaryUser.username.toLowerCase()
  );

  if (existingUserIndex >= 0) {
    users[existingUserIndex] = { ...users[existingUserIndex], ...primaryUser };
  } else {
    users.unshift(primaryUser);
  }
  saveData(USERS_KEY, users);

  const currentUser = getCurrentUser();
  if (
    !currentUser ||
    currentUser.email === "bharath0018@gmail.com" ||
    currentUser.email === "demo@blogsphere.com"
  ) {
    localStorage.setItem(CURRENT_USER_KEY, JSON.stringify({
      fullname: primaryUser.fullname,
      username: primaryUser.username,
      email: primaryUser.email
    }));
  }

  let blogs = getData(BLOGS_KEY);
  if (!Array.isArray(blogs) || blogs.length === 0) {
    blogs = [...defaultBlogs, ...sampleUserBlogs];
  } else {
    sampleUserBlogs.forEach(sampleBlog => {
      const idx = blogs.findIndex(b => b.id === sampleBlog.id);
      if (idx === -1) {
        blogs.push(sampleBlog);
      } else {
        blogs[idx] = { ...blogs[idx], ...sampleBlog };
      }
    });
  }
  saveData(BLOGS_KEY, blogs);

  if (localStorage.getItem(DRAFTS_KEY) === null) {
    saveData(DRAFTS_KEY, []);
  }
}

seedInitialData();

function showToast(message, type = "info") {
  let toast = document.getElementById("appToast");

  if (!toast) {
    toast = document.createElement("div");
    toast.id = "appToast";
    toast.style.cssText =
      "position:fixed;bottom:24px;right:24px;padding:14px 20px;" +
      "background:#1e293b;color:#ffffff;border-radius:8px;z-index:9999;" +
      "box-shadow:0 10px 25px rgba(0,0,0,0.2);font-weight:500;font-size:14px;" +
      "transition:all 0.3s ease;";
    document.body.appendChild(toast);
  }

  toast.textContent = message;
  toast.style.background = type === "error" ? "#dc2626" : (type === "success" ? "#16a34a" : "#1e293b");
  toast.style.display = "block";
  toast.style.opacity = "1";

  clearTimeout(window.__toastTimeout);
  window.__toastTimeout = setTimeout(() => {
    toast.style.opacity = "0";
    setTimeout(() => { toast.style.display = "none"; }, 300);
  }, 3000);
}

function escapeHTML(value = "") {
  return String(value).replace(/[&<>"']/g, character => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  })[character]);
}

function formatDate(date) {
  if (!date) return "";
  try {
    return new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric"
    });
  } catch {
    return date;
  }
}

// Navigation and auth action rendering
function updateNavigation() {
  const actions = document.getElementById("navAuthActions");
  const user = getCurrentUser();

  if (!actions) return;

  if (user) {
    actions.innerHTML = `
      <span style="font-weight: 600; font-size: 14px; margin-right: 8px;">Hi, ${escapeHTML(user.fullname || user.username)}</span>
      <a href="dashboard.html" class="btn btn-outline btn-sm">Dashboard</a>
      <button type="button" class="btn btn-secondary btn-sm" id="logoutBtn">
        Logout
      </button>
    `;
  } else {
    actions.innerHTML = `
      <a href="login.html" class="btn btn-secondary btn-sm">Sign In</a>
      <a href="register.html" class="btn btn-primary btn-sm">Get Started</a>
    `;
  }

  const logoutBtn = document.getElementById("logoutBtn");
  if (logoutBtn) {
    logoutBtn.addEventListener("click", () => {
      localStorage.removeItem(CURRENT_USER_KEY);
      showToast("Logged out successfully.");
      setTimeout(() => {
        location.href = "login.html";
      }, 400);
    });
  }
}

// 2. Connect the Registration page (Backend API)
const registerForm = document.getElementById("registerForm");

if (registerForm) {
    registerForm.addEventListener("submit", (event) => {
      event.preventDefault();

      const fullnameInput = document.getElementById("fullname");
      const usernameInput = document.getElementById("username");
      const emailInput = document.getElementById("email");
      const passwordInput = document.getElementById("password");
      const confirmPasswordInput = document.getElementById("confirmPassword");

      const fullname = fullnameInput ? fullnameInput.value.trim() : "";
      const username = usernameInput ? usernameInput.value.trim() : "";
      const email = emailInput ? emailInput.value.trim().toLowerCase() : "";
      const password = passwordInput ? passwordInput.value : "";
      const confirmPassword = confirmPasswordInput ? confirmPasswordInput.value : password;

      if (!fullname || !username || !email || !password) {
        alert("Please fill in all required fields.");
        return;
      }

      if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return;
      }

      const userData = {
        fullname,
        username,
        email,
        password
      };

      registerUser(userData)
        .then(data => {
          alert(data.message);
          window.location.href = "login.html";
        })
        .catch(error => {
          alert(error.message);
        });
    });
  }

// 3. Connect the Login page (Backend API)
const loginForm = document.getElementById("loginForm");

  if (loginForm) {
    const fillDemoBtn = document.getElementById("fillDemoBtn");
    if (fillDemoBtn) {
      fillDemoBtn.addEventListener("click", () => {
        const emailInput = document.getElementById("email");
        const passwordInput = document.getElementById("password");
        if (emailInput && passwordInput) {
          emailInput.value = "bharaths2205@gmail.com";
          passwordInput.value = "123456";
          showToast("Credentials filled! Click 'Sign In'.", "info");
        }
      });
    }

      loginForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const emailInput = document.getElementById("email");
        const passwordInput = document.getElementById("password");

        const userData = {
          email: emailInput.value.trim(),
          password: passwordInput.value
        };

        loginUser(userData)
          .then(data => {
            localStorage.setItem(
              "blogsphere_current_user",
              JSON.stringify(data.user)
            );

            window.location.href = "dashboard.html";
          })
          .catch(error => {
            alert(error.message);
          });
      });
    }

// 4. Connect Create Blog page (Backend API)
const createBlogForm = document.getElementById("createBlogForm");

    function selectPresetCover(url) {
      const coverInput = document.getElementById("postCoverImage");
      if (coverInput) {
        coverInput.value = url;
      }
    }

    function insertMarkdown(before, after = "") {
      const textarea = document.getElementById("postContent");
      if (!textarea) return;

      const start = textarea.selectionStart;
      const end = textarea.selectionEnd;
      const selected = textarea.value.substring(start, end);

      textarea.setRangeText(
        before + selected + after,
        start,
        end,
        "select"
      );

      textarea.focus();
    }

    window.selectPresetCover = selectPresetCover;
    window.insertMarkdown = insertMarkdown;

    function getBlogFormData() {
      const user = getCurrentUser();

      return {
        id: Date.now().toString(),
        title: document.getElementById("postTitle").value.trim(),
        category: document.getElementById("postCategory").value,
        tags: document.getElementById("postTags").value
          .split(",")
          .map(tag => tag.trim())
          .filter(Boolean),
        coverImage: document.getElementById("postCoverImage").value.trim(),
        excerpt: document.getElementById("postExcerpt").value.trim(),
        content: document.getElementById("postContent").value.trim(),
        author: user ? (user.username || user.fullname) : "bharaths2205",
        date: new Date().toISOString(),
        status: "Published",
        likes: 0,
        views: 0
      };
    }

    function loadBlogIntoForm(blog) {
      document.getElementById("postTitle").value = blog.title || "";
      document.getElementById("postCategory").value = blog.category || "Technology";
      document.getElementById("postTags").value = (blog.tags || []).join(", ");
      document.getElementById("postCoverImage").value = blog.coverImage || "";
      document.getElementById("postExcerpt").value = blog.excerpt || "";
      document.getElementById("postContent").value = blog.content || "";
    }

    if (createBlogForm) {
      const user = getCurrentUser();

      if (!user) {
        location.href = "login.html";
      } else {
        const params = new URLSearchParams(location.search);
        const editId = params.get("edit");

        if (editId) {
          const blog = getData(BLOGS_KEY).find(item =>
            item.id === editId && isAuthorMatch(item, user)
          );

          if (blog) {
            loadBlogIntoForm(blog);

            const pageTitle = document.getElementById("editorPageTitle");
            if (pageTitle) pageTitle.textContent = "Edit Article";
          }
        }
      }

        createBlogForm.addEventListener("submit", (event) => {
          event.preventDefault();

            const currentUser = JSON.parse(
              localStorage.getItem("blogsphere_current_user")
            );

            if (!currentUser) {
              window.location.href = "login.html";
              return;
            }

            const titleInput = document.getElementById("postTitle");
            const contentInput = document.getElementById("postContent");
            const categoryInput = document.getElementById("postCategory");
            const tagsInput = document.getElementById("postTags");
            const coverImageInput = document.getElementById("postCoverImage");
            const excerptInput = document.getElementById("postExcerpt");

              const blogData = {
                title: titleInput ? titleInput.value.trim() : "",
                content: contentInput ? contentInput.value.trim() : "",
                category: categoryInput ? categoryInput.value : "Technology",
                tags: tagsInput ? tagsInput.value.split(",").map(t => t.trim()).filter(Boolean) : [],
                coverImage: coverImageInput ? coverImageInput.value.trim() : "",
                excerpt: excerptInput ? excerptInput.value.trim() : "",
                author: currentUser.username || currentUser.fullname || "bharaths2205"
              };

            createBlog(blogData)
              .then(data => {
                alert(data.message);
                window.location.href = "dashboard.html";
              })
              .catch(error => {
                alert(error.message);
              });
          });

        const saveDraftBtn = document.getElementById("saveDraftBtn");
        if (saveDraftBtn) {
          saveDraftBtn.addEventListener("click", () => {
            const user = getCurrentUser();
            if (!user) {
              location.href = "login.html";
              return;
            }

            const draft = getBlogFormData();
            draft.status = "Draft";

            const drafts = getData(DRAFTS_KEY);
            drafts.push(draft);
            saveData(DRAFTS_KEY, drafts);
            showToast("Draft saved successfully.", "success");
          });
        }

        const writeTabBtn = document.getElementById("writeTabBtn");
        const previewTabBtn = document.getElementById("previewTabBtn");
        const postContent = document.getElementById("postContent");
        const markdownPreview = document.getElementById("markdownPreview");

        if (writeTabBtn && previewTabBtn && postContent && markdownPreview) {
          writeTabBtn.addEventListener("click", () => {
            postContent.style.display = "block";
            markdownPreview.style.display = "none";
            writeTabBtn.classList.add("active");
            previewTabBtn.classList.remove("active");
          });

          previewTabBtn.addEventListener("click", () => {
            markdownPreview.textContent = postContent.value;
            markdownPreview.style.whiteSpace = "pre-wrap";
            postContent.style.display = "none";
            markdownPreview.style.display = "block";
            previewTabBtn.classList.add("active");
            writeTabBtn.classList.remove("active");
          });
        }
      }

          // 5. Load blogs from backend (Home Feed)
          async function renderBlogs() {
            const blogsGrid = document.getElementById("blogsGrid");
            if (!blogsGrid) return;

            const user = getCurrentUser();
            const search = document.getElementById("searchInput")?.value.toLowerCase() || "";
            const sort = document.getElementById("sortSelect")?.value || "latest";

            const activeChip = document.querySelector(".category-chips .chip.active");
            const category = activeChip?.dataset.category || "All";

            let blogs = [];

            try {
              const data = await getBlogs();
              const serverBlogs = data.blogs || data.data || [];
              blogs = serverBlogs.filter(blog => (blog.status || "Published") === "Published");
            } catch (error) {
              console.log("Could not load blogs from backend, using localStorage fallback:", error.message);
              blogs = getData(BLOGS_KEY).filter(blog => blog.status === "Published");
            }

            blogs = blogs.filter(blog => {
              const searchable = [
                blog.title,
                blog.excerpt,
                blog.content,
                blog.author,
                ...(blog.tags || [])
              ].join(" ").toLowerCase();

              return searchable.includes(search) &&
                (category === "All" || blog.category === category);
            });

            if (sort === "popular") {
              blogs.sort((a, b) => (b.likes || 0) - (a.likes || 0));
            } else if (sort === "oldest") {
              blogs.sort((a, b) => new Date(a.date || a.createdAt) - new Date(b.date || b.createdAt));
            } else {
              blogs.sort((a, b) => new Date(b.date || b.createdAt) - new Date(a.date || a.createdAt));
            }

            if (blogs.length === 0) {
              blogsGrid.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 48px; background: var(--bg-card); border-radius: var(--radius-lg); border: 1px solid var(--border-color);">
        <p style="font-size: 16px; color: var(--text-secondary); margin-bottom: 12px;">No articles match your search or filter.</p>
        <button class="btn btn-outline btn-sm" onclick="document.getElementById('searchInput').value=''; document.querySelector('.category-chips .chip[data-category=\\'All\\']').click();">Reset Filters</button>
      </div>
    `;
              return;
            }

            blogsGrid.innerHTML = blogs.map(blog => `
    <article class="blog-card">
      <img
        src="${escapeHTML(blog.coverImage || 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80')}"
        alt="${escapeHTML(blog.title)}"
        class="blog-card-image"
        loading="lazy"
      >
      <div class="blog-card-content">
        <p class="blog-card-category">${escapeHTML(blog.category)}</p>
        <h3>${escapeHTML(blog.title)}</h3>
        <p class="blog-card-excerpt">${escapeHTML(blog.excerpt)}</p>
        <p class="blog-card-meta">By <strong>${escapeHTML(blog.author === 'bharaths2205' ? 'Bharath S' : blog.author)}</strong> · ${formatDate(blog.date || blog.createdAt)} · ❤️ ${blog.likes || 0}</p>
        ${user ?
                `<a href="dashboard.html" class="btn btn-primary btn-sm">Manage on Dashboard</a>` :
                `<a href="login.html" class="btn btn-primary btn-sm">Sign In to Read</a>`
              }
      </div>
    </article>
  `).join("");
          }

          document.getElementById("searchInput")?.addEventListener("input", renderBlogs);
          document.getElementById("sortSelect")?.addEventListener("change", renderBlogs);

          document.querySelectorAll(".category-chips .chip").forEach(chip => {
            chip.addEventListener("click", () => {
              document.querySelectorAll(".category-chips .chip").forEach(item =>
                item.classList.remove("active")
              );

              chip.classList.add("active");
              renderBlogs();
            });
          });

            // 5. Load blogs from backend (Creator Dashboard)
            async function renderDashboard() {
              const tableBody = document.getElementById("userPostsTableBody");
              if (!tableBody) return;

              const user = getCurrentUser();

              if (!user) {
                location.href = "login.html";
                return;
              }

              let blogs = [];

              // Fetch blogs from backend with fallback
              try {
                const data = await getBlogs();
                console.log("Blogs:", data.blogs);
                const serverBlogs = data.blogs || data.data || [];
                blogs = serverBlogs.filter(blog => isAuthorMatch(blog, user));
              } catch (error) {
                console.log(error.message);
                blogs = getData(BLOGS_KEY).filter(blog => isAuthorMatch(blog, user));
              }

              const totalPosts = document.getElementById("statTotalPosts");
              const totalLikes = document.getElementById("statTotalLikes");
              const totalViews = document.getElementById("statTotalViews");
              const profileDetails = document.getElementById("userProfileDetails");

              if (totalPosts) totalPosts.textContent = blogs.length;

              if (totalLikes) {
                totalLikes.textContent = blogs.reduce(
                  (sum, blog) => sum + (blog.likes || 0), 0
                );
              }

              if (totalViews) {
                totalViews.textContent = blogs.reduce(
                  (sum, blog) => sum + (blog.views || 0), 0
                );
              }

              if (profileDetails) {
                const initial = (user.fullname || user.username || "B").charAt(0).toUpperCase();
                profileDetails.innerHTML = `
      <div class="profile-avatar-lg">${escapeHTML(initial)}</div>
      <div class="profile-details">
        <h1>${escapeHTML(user.fullname || user.username)}</h1>
        <p>${escapeHTML(user.email || "")} · @${escapeHTML(user.username || "")}</p>
      </div>
    `;
              }

              if (blogs.length === 0) {
                tableBody.innerHTML = `
      <tr>
        <td colspan="5" style="text-align: center; padding: 36px;">
          <p style="margin-bottom: 12px; color: var(--text-secondary);">You haven't published any articles yet.</p>
          <a href="create-blog.html" class="btn btn-primary btn-sm">+ Compose Your First Article</a>
        </td>
      </tr>
    `;
                return;
              }

              const sortedBlogs = [...blogs].sort((a, b) => new Date(b.date || b.createdAt) - new Date(a.date || a.createdAt));

              tableBody.innerHTML = sortedBlogs.map(blog => `
    <tr>
      <td><strong>${escapeHTML(blog.title)}</strong></td>
      <td>${escapeHTML(blog.category)}</td>
      <td><span class="status-badge ${(blog.status || 'Published').toLowerCase()}">${escapeHTML(blog.status || 'Published')}</span></td>
      <td>${formatDate(blog.date || blog.createdAt)}</td>
      <td>
        <div class="table-actions">
          <a href="create-blog.html?edit=${encodeURIComponent(blog.id)}" class="btn btn-outline btn-sm">Edit</a>
          <button type="button" class="btn btn-danger btn-sm" data-delete-blog="${escapeHTML(blog.id)}">Delete</button>
        </div>
      </td>
    </tr>
  `).join("");

              tableBody.querySelectorAll("[data-delete-blog]").forEach(button => {
                button.addEventListener("click", () => {
                  const blogId = button.dataset.deleteBlog;
                  if (!confirm("Are you sure you want to permanently delete this article?")) return;

                  const currentBlogs = getData(BLOGS_KEY);
                  const filtered = currentBlogs.filter(blog => blog.id !== blogId);
                  saveData(BLOGS_KEY, filtered);

                  showToast("Article deleted successfully.", "info");
                  renderDashboard();
                });
              });
            }

            // Initialize the current page components
            updateNavigation();
            renderBlogs();
            renderDashboard();
