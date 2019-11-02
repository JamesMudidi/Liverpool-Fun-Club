import React from "react";
import { Card, Form, Col, InputGroup, Button, Container } from "react-bootstrap";
import Header from "../Components/header";
import Footer from "../Components/footer";
import "./contact.scss";

// const [validated, setValidated] = false;

//   const handleSubmit = event => {
//     const form = event.currentTarget;
//     if (form.checkValidity() === false) {
//       event.preventDefault();
//       event.stopPropagation();
//     }

//     setValidated(true);
//   };

const Contact = () => {
    return (
        <div>
            <Header />
            <div>
                <Card className="bg-dark text-white noPadding noMargin">
                    <Card.Img src="images/contact_header.jpg" alt="Contact Us" />
                </Card>
                <br />
                <br />
                <br />
                <Container>
                    <p>
                        Lorem ipsum, or lipsum as it is sometimes known,
                        is dummy text used in laying out print, graphic or web designs.
                        The passage is attributed to an unknown typesetter in the 15th century
                        who is thought to have scrambled parts of Cicero's De Finibus Bonorum
                        et Malorum for use in a type specimen book. It usually begins with:
                    </p>
                    <p >
                        <i>“Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.”
                    </i>
                    </p>
                    <p>
                        The purpose of lorem ipsum is to create a natural looking block of text
                        (sentence, paragraph, page, etc.) that doesn't distract from the layout.
                    </p>
                    <br />
                    <br />
                    <br />
                    <Form noValidate>
                        <Form.Row>
                            <Form.Group as={Col} md="4" controlId="validationCustom01">
                                <Form.Label>First name</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="First name"
                                />
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="4" controlId="validationCustom02">
                                <Form.Label>Last name</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="Last name"
                                />
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="4" controlId="validationCustomEmail">
                                <Form.Label>Email</Form.Label>
                                <InputGroup>
                                    <InputGroup.Prepend>
                                        <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <Form.Control
                                        type="email"
                                        placeholder="Email"
                                        aria-describedby="inputGroupPrepend"
                                        required
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        Please choose a username.
                                </Form.Control.Feedback>
                                </InputGroup>
                            </Form.Group>
                            <Form.Group as={Col} md="12" controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Message</Form.Label>
                                <Form.Control as="textarea" rows="3" required placeholder="Share with us" />
                                <Form.Control.Feedback type="invalid">
                                    Please share with us your thoughts.
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Form.Row>
                        <Button type="submit">Submit form</Button>
                    </Form>
                </Container>
                <br />
                <br />
                <br />
            </div>
            <Footer />
        </div>
    );
};

export default Contact;
