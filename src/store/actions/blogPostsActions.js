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

const fetchBlogPosts = id => (dispatch) => {
    dispatch(requestBlogPosts())

    let fetchUrl = `${apiUrl}/posts`
    if (id) {
        fetchUrl += `/${id}`
    }
    return fetch(fetchUrl)
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

export const fetchBlogPostsIfNeeded = id => (dispatch, getState) => {
    if (shouldFetchBlogPosts(getState())) {
        return dispatch(fetchBlogPosts(id))
    }
    return Promise.resolve()
}
