import {connect} from 'react-redux'
import BlogsListComponent from '../components/blogs/BlogsListComponent'

const filterBlogs = (blogs, filterString) => {
    if (!filterString) {
        return blogs;
    }
    return blogs.filter(blog => (blog.message && blog.message.includes(filterString))
        || (blog.author && blog.author.includes(filterString)));
};

const mapStateToProps = (state) => ({
    blogs: filterBlogs(state.blogs, state.filterString)
});

const BlogsContainer = connect(
    mapStateToProps,
    undefined
)(BlogsListComponent);

export default BlogsContainer