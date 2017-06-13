import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fetchBlogPostsIfNeeded } from '../store/actions/blogPostsActions'

class Blog extends Component {
    componentDidMount() {
        this.props.fetchBlogPosts()
    }
    render() {
        const { blogPosts, fetchError } = this.props
        return (
            <div>
                <h1>freeCodeCamp e-commerce project{'\''}s blog</h1>
                { fetchError && <p>Could not get new blog posts.</p> }
                <ul>
                    { blogPosts.map(blogPost => (
                        <li key={`blog-post-${blogPost.id}`}>
                            <p>Id: {blogPost.id}</p>
                            <p>Title: {blogPost.title}</p>
                            <p>Archived: {blogPost.archived.toString()}</p>
                            <p>Article: {blogPost.article}</p>
                            Cover: <img src={blogPost.cover} alt="Cover" />
                            <p>Created at: {new Date(blogPost.publishedAt * 1000).toString()}</p>
                            <p>Permalink: {blogPost.permalink}</p>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

Blog.propTypes = {
    blogPosts: PropTypes.array.isRequired,
    fetchError: PropTypes.string.isRequired,
    fetchBlogPosts: PropTypes.func.isRequired
}

const mapStateToProps = state => (
    {
        blogPosts: state.blogPosts.items,
        fetchError: state.blogPosts.error
    }
)

const mapDispatchToProps = (dispatch) => (
    {
        fetchBlogPosts: () => {
            dispatch(fetchBlogPostsIfNeeded())
        }
    }
)

export default connect(mapStateToProps, mapDispatchToProps)(Blog)
