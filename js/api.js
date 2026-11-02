const API_URL = "http://localhost:5000/api";

export const registerUser = async (userData) => {
    const response = await fetch(`${API_URL}/auth/register`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userData)
    });

    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message || "Registration failed");
    }

    return data;
};

export const loginUser = async (userData) => {
    const response = await fetch(`${API_URL}/auth/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userData)
    });

    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message || "Login failed");
    }

    return data;
};

export const createBlog = async (blogData) => {
    const response = await fetch(`${API_URL}/blogs`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(blogData)
    });

    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message || "Failed to create blog");
    }

    return data;
};

export const getBlogs = async () => {
    const response = await fetch(`${API_URL}/blogs`);

    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message || "Failed to fetch blogs");
    }

    return data;
};

