
import React, { Component } from 'react';
import axios from 'axios';
import { BsFacebook } from 'react-icons/bs';
import { AiFillGoogleCircle} from 'react-icons/ai';
import { AiFillInstagram} from 'react-icons/ai';

export default class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const { name, email, password } = this.state;

    axios
      .post('http://localhost:5000/register', { name, email, password })
      .then(response => {
        console.log(response.data);
        alert("you have been signed up successfully")
      })
      .catch(error => {
        console.log(error);
        alert("Sorry there is a problem")
      });
  }

  render() {
    return (
      <div className="form-container sign-up-container">
        <form   className='formoma' onSubmit={this.handleSubmit}>
          <h1 className="signin-title"> Create Account</h1>
          <div className="social-container">
            <a className='alink' href="#">< BsFacebook /></a>
            <a className='alink' href="#"> <AiFillGoogleCircle/> </a>
            <a className='alink' href="#"><AiFillInstagram/></a>
          </div>
          <span className='spanona'>or use your email for registration</span>
          <input className='inputa'
            type="text"
            placeholder="Name"
            onChange={(e) => this.setState({ name: e.target.value })}
          ></input>
          <input className='inputa'
            type="email"
            placeholder="Email"
            onChange={(e) => this.setState({ email: e.target.value })}
          ></input>
          <input className='inputa'
            type="password"
            placeholder="Password"
            onChange={(e) => this.setState({ password: e.target.value })}
          ></input>
          <button className='buttonona' type="submit">Sign Up</button>
        </form>
      </div>
    );
  }
}