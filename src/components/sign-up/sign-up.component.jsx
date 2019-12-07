import React, { Component } from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import {
  auth,
  createUserProfileDocumnet
} from "./../../firebase/firebase.utils";

import "./sign-up.styles.scss";

class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      password: "",
      confirmPassword: ""
    };
  }

  handleChange = e => {
    const { value, name } = e.target;

    this.setState({ [name]: value });
  };

  handleSubmit = async e => {
    e.preventDefault();

    const { name, email, password, confirmPassword } = this.state;
    if (password !== confirmPassword) {
      alert("Passwords does not match");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      await createUserProfileDocumnet(user, { displayName: name });

      //after creating a profiile, reset our state
      this.setState({
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
      });
    } catch (error) {
      console.log("Error in creating user", error);
    }
  };

  render() {
    const { name, email, password, confirmPassword } = this.state;

    return (
      <div className="sign-up">
        <h2 className="title">I do not have an account</h2>
        <span>Sign up with email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            type="text"
            label="Name"
            value={name}
            name="name"
            onChange={this.handleChange}
            required
          ></FormInput>
          <FormInput
            type="email"
            label="Email"
            value={email}
            name="email"
            onChange={this.handleChange}
            required
          ></FormInput>
          <FormInput
            type="password"
            label="Password"
            value={password}
            name="password"
            onChange={this.handleChange}
            required
          ></FormInput>
          <FormInput
            type="password"
            label="Confirm Password"
            value={confirmPassword}
            name="confirmPassword"
            onChange={this.handleChange}
            required
          ></FormInput>
          <CustomButton type="submit">Sign Up</CustomButton>
        </form>
      </div>
    );
  }
}

export default SignUp;
