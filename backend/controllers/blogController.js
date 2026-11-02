const blogs = require("../data/blogs");

const createBlog = (req, res) => {
  const { title, content, category, author } = req.body;

  if (!title || !content || !author) {
    return res.status(400).json({
      message: "Title, content and author are required"
    });
  }

  const newBlog = {
    id: Date.now().toString(),
    title,
    content,
    category: category || "General",
    author,
    likes: 0,
    views: 0,
    createdAt: new Date()
  };

  blogs.push(newBlog);

  res.status(201).json({
    message: "Blog created successfully",
    blog: newBlog
  });
};

// Get all blogs
const getBlogs = (req, res) => {
  res.status(200).json({
    blogs
  });
};

module.exports = {
  createBlog,
  getBlogs
};