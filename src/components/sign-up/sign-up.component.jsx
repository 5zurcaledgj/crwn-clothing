import React, { useState } from "react";
import { connect } from "react-redux";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import { signUpStart } from "../../redux/user/user.actions";

import "./sign-up.styles.scss";

const SignUp = ({ signUp }) => {
  const [userSignUpDetails, setUserSignUpDetails] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const handleChange = e => {
    const { value, name } = e.target;

    setUserSignUpDetails({ ...userSignUpDetails, [name]: value });
  };

  const { name, email, password, confirmPassword } = userSignUpDetails;
  const handleSubmit = async e => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords does not match");
      return;
    }

    signUp({ name, email, password });

    setUserSignUpDetails({
      name: "",
      email: "",
      password: "",
      confirmPassword: ""
    });
  };

  return (
    <div className="sign-up">
      <h2 className="title">I do not have an account</h2>
      <span>Sign up with email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          type="text"
          label="Name"
          value={name}
          name="name"
          onChange={handleChange}
          required
        ></FormInput>
        <FormInput
          type="email"
          label="Email"
          value={email}
          name="email"
          onChange={handleChange}
          required
        ></FormInput>
        <FormInput
          type="password"
          label="Password"
          value={password}
          name="password"
          onChange={handleChange}
          required
        ></FormInput>
        <FormInput
          type="password"
          label="Confirm Password"
          value={confirmPassword}
          name="confirmPassword"
          onChange={handleChange}
          required
        ></FormInput>
        <CustomButton type="submit">Sign Up</CustomButton>
      </form>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  signUp: userData => dispatch(signUpStart(userData))
});

export default connect(null, mapDispatchToProps)(SignUp);
