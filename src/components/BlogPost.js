import React from 'react'
import PropTypes from 'prop-types'

const BlogPost = ({
    blogPost
}) => (
    <div>
        <p>Id: {blogPost.id}</p>
        <p>Title: {blogPost.title}</p>
        <p>Archived: {blogPost.archived.toString()}</p>
        <p>Article: {blogPost.article}</p>
        Cover: <img src={blogPost.cover} alt="Cover" />
        <p>Created at: {new Date(blogPost.publishedAt * 1000).toString()}</p>
        <p>Permalink: {blogPost.permalink}</p>
    </div>
)

BlogPost.propTypes = {
    blogPost: PropTypes.shape({
        id: PropTypes.number,
        title: PropTypes.string,
        archived: PropTypes.bool,
        article: PropTypes.string,
        cover: PropTypes.string,
        publishedAt: PropTypes.number,
        permalink: PropTypes.string
    }).isRequired
}

export default BlogPost
