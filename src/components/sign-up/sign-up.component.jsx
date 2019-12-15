import React, { Component } from "react";
import { connect } from "react-redux";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import { signUpStart } from "../../redux/user/user.actions";

import "./sign-up.styles.scss";

class SignUp extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  };

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

    const { signUp } = this.props;
    signUp({ name, email, password });

    this.setState({
      name: "",
      email: "",
      password: "",
      confirmPassword: ""
    });
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

const mapDispatchToProps = dispatch => ({
  signUp: userData => dispatch(signUpStart(userData))
});

export default connect(null, mapDispatchToProps)(SignUp);
