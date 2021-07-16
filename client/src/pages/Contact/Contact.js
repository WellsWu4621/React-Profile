import React from 'react';
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Row,
  Col
} from 'reactstrap';
import './Contact.css'

const Contact = (props) => {
  return (
    <Row>
      <Col sm="7" className='box'>
        <Form>
          <h4>Contact Me</h4>
          <hr></hr>
          <FormGroup className='inp'>
            <Label for="name">Name</Label>
            <Input required type="name" name="name" id="name" placeholder="John Smith" />
          </FormGroup>
          <FormGroup className='inp'>
            <Label for="email">Email</Label>
            <Input required type="email" name="email" id="email" placeholder="johnsmight@email.com" />
          </FormGroup>
          <FormGroup className='inp'>
            <Label for="Text">Message</Label>
            <Input required type="textarea" name="text" id="Text" />
          </FormGroup>
          <Button className='submit' color="success">Submit</Button>
        </Form>
      </Col>
    </Row >
  )
}

export default Contact
