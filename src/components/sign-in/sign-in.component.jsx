import React from "react";

import CustomButton from "../custom-button/custom-button.component";
import FormInput from "../form-input/form-input.component";
import { signInWithGoogle } from "../../firebase/firebase.utils";
import { ReactComponent as GoogleLogo } from "../../assets/google-icon.svg";

import "./sign-in.styles.scss";

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ email: "", password: "" });
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <h2 className="title">I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            type="email"
            name="email"
            label={"Email"}
            value={this.state.email}
            handleChange={this.handleChange}
            required
          />
          <FormInput
            type="password"
            name="password"
            label={"Password"}
            value={this.state.password}
            handleChange={this.handleChange}
            required
          />
          <div className="buttons">
            <CustomButton type="submit"> Sign In </CustomButton>
            <CustomButton onClick={signInWithGoogle} GoogleSignIn>
              <GoogleLogo />
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
