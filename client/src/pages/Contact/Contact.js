import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const Contact = () => {
  return (
    <Form>
      <h4>Contact Me</h4>
      <hr></hr>
      <FormGroup>
        <Label for="name">Name</Label>
        <Input type="name" name="name" id="name" placeholder="John Smith" />
      </FormGroup>
      <FormGroup>
        <Label for="email">Email</Label>
        <Input type="email" name="email" id="email" placeholder="johnsmight@email.com" />
      </FormGroup>
      <FormGroup>
        <Label for="Text">Message</Label>
        <Input type="textarea" name="text" id="Text" />
      </FormGroup>
      <Button>Submit</Button>
    </Form>
  )
}

export default Contact
