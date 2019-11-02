import React, { Component } from "react";
import { Form, Col, InputGroup, Button } from "react-bootstrap";

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: "",
      lastname: "",
      email: "",
      telephone: "",
      message: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <Form noValidate name="contact us" method="post">
        <input type="hidden" name="form-name" value="contact" />
        <Form.Row>
          <Form.Group as={Col} md="6" controlId="validationCustom01">
            <Form.Label className="py-1 font-weight-bold">
              First name
            </Form.Label>
            <Form.Control
              required
              type="text"
              name="firstname"
              placeholder="First name"
              value={this.state.firstname}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group as={Col} md="6" controlId="validationCustom02">
            <Form.Label className="py-1 font-weight-bold">Last name</Form.Label>
            <Form.Control
              required
              type="text"
              name="lastname"
              placeholder="Last name"
              value={this.state.lasttname}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group as={Col} md="6" controlId="validationCustomEmail">
            <Form.Label className="py-1 font-weight-bold">Email</Form.Label>
            <InputGroup>
              <InputGroup.Prepend>
                <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
              </InputGroup.Prepend>
              <Form.Control
                type="email"
                name="email"
                placeholder="Email"
                aria-describedby="inputGroupPrepend"
                required
                value={this.state.email}
                onChange={this.handleChange}
              />
            </InputGroup>
          </Form.Group>
          <Form.Group as={Col} md="6" controlId="validationCustomEmail">
            <Form.Label className="py-1 font-weight-bold">Telephone</Form.Label>
            <Form.Control
              type="tel"
              name="telephone"
              placeholder="+256 705 000000"
              aria-describedby="inputGroupPrepend"
              required
              value={this.state.telephone}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group as={Col} md="12" controlId="exampleForm.ControlTextarea1">
            <Form.Label className="py-1 font-weight-bold">Message</Form.Label>
            <Form.Control
              as="textarea"
              rows="5"
              required
              name="message"
              placeholder="Share with us"
              value={this.state.message}
              onChange={this.handleChange}
            />
            <Form.Control.Feedback type="invalid">
              Please share with us your thoughts.
            </Form.Control.Feedback>
          </Form.Group>
        </Form.Row>
        <Button type="submit" className="btn-red-red my-3">
          Send message
        </Button>
      </Form>
    );
  }
}

export default ContactForm;
