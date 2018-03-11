const blogModel = require("../models/blog_model");
const uuidv1 = require('uuid/v1');

async function getAllBlogs() {
    return await blogModel.find({}).sort({"date":-1}).exec();
}

async function getBlogById(id) {
    let blog = await blogModel.findById(id).exec();
    if (!blog) {
        throw Error(`No blog with id ${id} found`);
    }
    return blog;
}

async function updateBlog(blog) {
    let id = blog ? blog._id : undefined;
    let existingBlog = await blogModel.findById(id).exec();
    if (!existingBlog) {
        throw Error(`No blog with id ${id} found`);
    }
    await existingBlog.update(blog);
    return await blogModel.findById(id).exec();
}

async function deleteBlog(id) {
    let blog = await blogModel.findById(id).exec();
    if (!blog) {
        throw Error(`No blog with id ${id} found`);
    }
    await blog.remove();
}

async function createBlog(new_blog) {
    if (!new_blog) {
        throw Error("Cannot create undefined blog");
    }
    new_blog._id = new_blog._id ? new_blog._id : uuidv1();
    if (await blogModel.findById(new_blog._id).exec()) {
        throw Error("Blog already exists, please try update api");
    }
    return await blogModel.create(new_blog);
}

module.exports = {
    getAllBlogs,
    getBlogById,
    updateBlog,
    deleteBlog,
    createBlog
};