import React from 'react'
import { Jumbotron, Form, FormGroup, Label, Col, Input, Container, FormText, Button } from 'reactstrap'

const BlogPostCreate = () => (
  <Container>
    <Form>
      <FormGroup row>
        <Label for="postTitle" sm={2}>Title</Label>
        <Col sm={10}>
              <Input type="text" name="postTitle" id="postTitle" placeholder="Post title" />
        </Col>
        <Label for="postBody" sm={2}>Post Body</Label>
        <Col sm={10}>
              <Input type="textarea" name="textBody" id="textBody" placeholder="Write your text here."/>
        </Col>
        <Label for="archived" sm={2}>Archived</Label>
        <Col sm={10}>
          <Input type="checkbox" id="archived" />
        </Col>
        <Label for="postCover" sm={2}>Cover</Label>
        <Col sm={10}>
            <Input type="file" name="file" id="exampleFile" />
            <FormText color="muted">
              Your image should have max size: 500MB.
            </FormText>
        </Col>
        <FormGroup check row>
          <Col sm={{ size: 10, offset: 2 }}>
            <Button>Submit</Button>
          </Col>
        </FormGroup>
      </FormGroup>
    </Form>
  </Container>
)

export default BlogPostCreate
