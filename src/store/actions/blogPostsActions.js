import fetch from 'isomorphic-fetch'
import config from '../../config'
import {
    REQUEST_BLOG_POSTS,
    FETCH_BLOG_POSTS_SUCCESS,
    FETCH_BLOG_POSTS_FAILURE
} from '../actionTypes'

const apiUrl = config[process.env.NODE_ENV].apiUrl

export const requestBlogPosts = () => (
    {
        type: REQUEST_BLOG_POSTS
    }
)

export const fetchBlogPostsSuccess = json => (
    {
        type: FETCH_BLOG_POSTS_SUCCESS,
        blogPosts: json,
        error: ''
    }
)

export const fetchBlogPostsFailure = err => (
    {
        type: FETCH_BLOG_POSTS_FAILURE,
        error: err
    }
)

const fetchBlogPosts = () => (dispatch) => {
    dispatch(requestBlogPosts())

    return fetch(`${apiUrl}/posts`)
        .then((response) => {
            if (!response.ok) {
                throw Error(response.statusText)
            }
            return response.json()
        })
        .then(json => dispatch(fetchBlogPostsSuccess(json)))
        .catch(err => dispatch(fetchBlogPostsFailure(err)))
}

const shouldFetchBlogPosts = (state) => {
    const blogPosts = state.blogPosts
    if (!blogPosts) {
        return true
    }
    return !blogPosts.isFetching
}

export const fetchBlogPostsIfNeeded = () => (dispatch, getState) => {
    if (shouldFetchBlogPosts(getState())) {
        return dispatch(fetchBlogPosts())
    }
    return Promise.resolve()
}
