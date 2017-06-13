import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import createBrowserHistory from 'history/createBrowserHistory'
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'
import { Nav, NavItem, NavLink } from 'reactstrap'
import HomePage from './HomePage'
import BlogPage from './BlogPage'
import BlogPostPage from './BlogPostPage'

const history = createBrowserHistory()

const Root = ({ store }) => (
    <Provider store={store}>
        <Router history={history}>
            <div>
                <Nav>
                    <NavItem><NavLink tag={Link} to="/">Home</NavLink></NavItem>
                    <NavItem><NavLink tag={Link} to="/blog">Blog</NavLink></NavItem>
                </Nav>
                <div>
                    <Route exact path="/" component={HomePage} />
                    <Route exact path="/blog" component={BlogPage} />
                    <Route path="/blog/:id" component={BlogPostPage} />
                </div>
            </div>
        </Router>
    </Provider>
)

Root.propTypes = {
    store: PropTypes.object.isRequired
}

export default Root
