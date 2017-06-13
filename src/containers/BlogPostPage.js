import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { fetchBlogPostsIfNeeded } from '../store/actions/blogPostsActions'
import BlogPost from '../components/BlogPost'

class BlogPostPage extends Component {
    componentDidMount() {
        this.props.fetchBlogPosts(this.props.blogPostId)
    }
    render() {
        const { blogPost } = this.props;
        return (
            <BlogPost blogPost={blogPost} />
        )
    }
}

BlogPostPage.propTypes = {
    blogPostId: PropTypes.number.isRequired,
    blogPost: PropTypes.shape({
        id: PropTypes.number,
        title: PropTypes.string,
        archived: PropTypes.bool,
        article: PropTypes.string,
        cover: PropTypes.string,
        publishedAt: PropTypes.number,
        permalink: PropTypes.string
    }).isRequired,
    fetchBlogPosts: PropTypes.func.isRequired
}

const mapStateToProps = (state, ownProps) => {
    const blogPostId = +ownProps.match.params.id.split('-').pop()
    return {
        blogPostId,
        blogPost: state.blogPosts.items.filter(item => item.id === blogPostId)[0] || {},
        fetchError: state.blogPosts.error
    }
}

const mapDispatchToProps = dispatch => (
    {
        fetchBlogPosts: (id) => {
            dispatch(fetchBlogPostsIfNeeded(id))
        }
    }
)

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BlogPostPage))
