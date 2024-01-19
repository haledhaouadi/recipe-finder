import React , { Component } from 'react'

import { Sign } from './Sign.js'

import  SignIn  from '../SignIn/SignIn.js';
import { BsFacebook } from 'react-icons/bs';
import { AiFillGoogleCircle} from 'react-icons/ai';
import { AiFillInstagram} from 'react-icons/ai';
export default class Signup extends Component {
  constructor(props){
    super (props);
    this.state = {
      email:"",
      password:""
    };
  }
  render(){
  return (
    <div className='Sign-section'>
      <h2 className='form-title'>Sign in / Sign up</h2>
      <div className="containera" id="container">
        <SignIn/>
      <div className="form-container sign-in-container">
        <form className='formoma' action="">
          <h1 className='signin-title'>Sign in</h1>
          <div className="social-container">
            <a className='alink' href="#"><BsFacebook /></a>
            <a className='alink' href="#"> <AiFillGoogleCircle /></a>
            <a className='alink' href="#"><AiFillInstagram/></a>
          </div>
          <span className='spanona'>or use your account</span>
          <input type="email" placeholder="Email"  className='inputa'
						onChange={(e) => this.setState({email : e.target.value})}	/>
          <input type="password" placeholder="Password"  className='inputa'
							onChange={(e) => this.setState({password : e.target.value})} />
          <a className='alinka' href="#">Forgot your password?</a>
          <button className='buttonona'>Sign In</button>
        </form>
      </div>
      <div className="overlay-container">
        <div className="overlaya">
          <div className="overlay-panel overlay-left">
            <h1 className='signin-title'>Welcome Back!</h1>
            <p className='text'>
              To keep connected with us please login with your personal info
            </p>
            <button className='buttonona' id="Quest">Sign In</button>
          </div>
          <div className="overlay-panel overlay-right">
            <h1 className='signin-title'>Hello,Friend!</h1>
            <p className='text'>Enter your personal details and start journey with us</p>
            <button className='buttonona' id="Answer">Sign Up</button>
          </div>
        </div>
      </div>
    
    </div>
    <Sign/>
    </div>
    
  )
}}
