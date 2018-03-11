import React from 'react'

const BlogsListComponent = ({ blogs}) => (
    <ul>
        {blogs.map(blog =>
            <li key={blog._id}>
                {blog.author}: {blog.message}
            </li>
        )}
    </ul>
)

export default BlogsListComponent