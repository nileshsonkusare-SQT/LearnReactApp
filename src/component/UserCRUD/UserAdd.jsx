import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Container, Col, Form, Row, FormGroup, Label, Input, Button } from 'reactstrap';

export default class UserAdd extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            phone: "",
            website: "",
            errors: {}
        }
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: (e.target.value != null && e.target.value != undefined) ? e.target.value.trim() : "" });
    }

    onSubmit = async (e) => {
        e.preventDefault();

        const { name, email, phone, website } = this.state;

        const errors = {};
        if (!name) errors.name = "Name is Required";
        if (!email) errors.email = "Email is Required";
        if (!phone) errors.phone = "Phone number is Required";
        this.setState({ errors: errors });

        if (!Object.keys(errors).length) {
            const newUser = {
                name: name.trim(),
                email: email.trim(),
                phone: phone.trim(),
                website: website.trim()
            };

            await axios.post("https://jsonplaceholder.typicode.com/users", newUser)
                .then((result) => {
                    console.log(result);
                    alert("User data saved successfully...");

                    this.setState({
                        name: "",
                        email: "",
                        phone: "",
                        errors: {}
                    });

                    this.props.history.push('/user/list')
                })
                .catch(function (error) {
                    console.log(error);
                    alert("User data not saved...");
                    this.props.history.push('/user/list')
                });
        }
    };

    render() {
        const { name, email, phone, website, errors } = this.state;
        return (
            <Container className="App">
                <h4 className="pageHeading">Add User</h4>
                <Form className="form" onSubmit={e => this.onSubmit(e)}>
                    <Col>
                        <FormGroup row>
                            <Label for="name" sm={2}>Name</Label>
                            <Col sm={10}>
                                <Input type="text" name="name" onChange={this.onChange} value={name} placeholder="Enter Name" />
                                <div className="invalid-feedback">{errors.name}</div>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="email" sm={2}>Email</Label>
                            <Col sm={10}>
                                <Input type="email" name="email" onChange={this.onChange} value={email} placeholder="Enter Email" />
                                <div className="invalid-feedback">{errors.email}</div>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="phone" sm={2}>Phone No</Label>
                            <Col sm={10}>
                                <Input type="text" name="phone" onChange={this.onChange} value={phone} placeholder="Enter Phone No" />
                                <div className="invalid-feedback">{errors.phone}</div>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="website" sm={2}>Website</Label>
                            <Col sm={10}>
                                <Input type="text" name="website" onChange={this.onChange} value={website} placeholder="Enter Website" />
                            </Col>
                        </FormGroup>
                    </Col>
                    <Col>
                        <FormGroup row>
                            <Col sm={5}>
                            </Col>
                            <Col sm={1}>
                                <button type="submit" className="btn btn-success">Save</button>
                            </Col>
                            <Col sm={1}>
                                <Link to={`/user/list`} className="btn btn-danger">Cancel</Link>
                            </Col>
                            <Col sm={5}>
                            </Col>
                        </FormGroup>
                    </Col>
                </Form>
            </Container>
        );
    }


}