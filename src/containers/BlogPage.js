import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { fetchBlogPostsIfNeeded } from '../store/actions/blogPostsActions'
import BlogPost from '../components/BlogPost'
import { Jumbotron, Container, Row, Col, Button } from 'reactstrap'

class Blog extends Component {
    componentDidMount() {
        this.props.fetchBlogPosts()
    }
    render() {
        const { blogPosts, fetchError } = this.props
        return (
            <div>
              <Jumbotron>
                <h1 className="display-3">freeCodeCamp e-commerce project's blog</h1>
                <p className="lead">Soon in this section you will see more information about our project!</p>
              </Jumbotron>
              <Container>
                <Row>
                  <Col sm="12" md={{ size: 8, offset: 2 }}>
                      { fetchError && <p>Could not get new blog posts.</p> }
                      <ul>
                          { blogPosts.map(blogPost => (
                              <li key={`blog-post-${blogPost.id}`}>
                                  <BlogPost blogPost={blogPost} />
                              </li>
                          ))}
                      </ul>
                  </Col>
                </Row>
              </Container>
            </div>
        )
    }
}

Blog.propTypes = {
    blogPosts: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        title: PropTypes.string,
        archived: PropTypes.bool,
        article: PropTypes.string,
        cover: PropTypes.string,
        publishedAt: PropTypes.number,
        permalink: PropTypes.string
    })).isRequired,
    fetchError: PropTypes.string.isRequired,
    fetchBlogPosts: PropTypes.func.isRequired
}

const mapStateToProps = state => (
    {
        blogPosts: state.blogPosts.items,
        fetchError: state.blogPosts.error
    }
)

const mapDispatchToProps = dispatch => (
    {
        fetchBlogPosts: () => {
            dispatch(fetchBlogPostsIfNeeded())
        }
    }
)

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Blog))
