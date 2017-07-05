import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import createBrowserHistory from 'history/createBrowserHistory'
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom'
import HomePage from './HomePage'
import BlogPage from './BlogPage'
import BlogPostPage from './BlogPostPage'
import Header from '../components/Header'
import Footer from '../components/Footer'
import AdminBlogPage from './admin/AdminBlogPage'
import BlogPostCreate from './admin/BlogPostCreate'

const history = createBrowserHistory()

const Root = ({ store }) => (
    <Provider store={store}>
        <Router history={history}>
            <div>
                <Header />
                <div>
                    <Route exact path="/" component={HomePage} />
                    <Route exact path="/blog" component={BlogPage} />
                    <Route path="/blog/:id" component={BlogPostPage} />
                    <Route exact path="/admin/blog" component={AdminBlogPage} />
                    <Route exact path="/admin/blog/post/new" component={BlogPostCreate} />
                </div>
                <Footer />
            </div>
        </Router>
    </Provider>
)

Root.propTypes = {
    store: PropTypes.object.isRequired
}

export default Root
