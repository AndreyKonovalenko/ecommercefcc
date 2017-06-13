import {
    REQUEST_BLOG_POSTS,
    FETCH_BLOG_POSTS_SUCCESS,
    FETCH_BLOG_POSTS_FAILURE
} from '../actionTypes'

export const defaultBlogPostsState = {
    isFetching: false,
    items: [],
    error: ''
}

const blogPosts = (state = defaultBlogPostsState, action) => {
    switch (action.type) {
        case REQUEST_BLOG_POSTS:
            return Object.assign({}, state, {
                isFetching: true
            })
        case FETCH_BLOG_POSTS_SUCCESS:
            return Object.assign({}, state, {
                isFetching: false,
                items: action.blogPosts,
                error: action.error
            })
        case FETCH_BLOG_POSTS_FAILURE:
            return Object.assign({}, state, {
                isFetching: false,
                items: state.items,
                error: action.error.toString()
            })
        default:
            return state
    }
}

export default blogPosts
