
import './sign-in.styles.scss'
import React, { Component } from 'react'
import FormInput from '../form-input/form-input.component'
import Button from '../button/button.component'

 class SignIn extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              email:'',
              password:''
         }
     }
     
     handleSubmit=event=>{
      event.preventDefault();
      this.setState({email:'',password:''})
     }

     handleChange=event=>{
         
             const {name, value}=event.target;
         this.setState({[name]:value})
     }
    render() {
        return (
            <div className='sign-in'>
                <h2>I already have email and password </h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                
                    <FormInput 
                    type='email' 
                    name='email' 
                    value={this.state.email} 
                    handleChange={this.handleChange}
                    label="email"
                    required/>
                   
                
                    
                    {/* <br></br> */}
                   
                    <FormInput type='password'
                     name='password' 
                     value={this.state.password}
                     handleChange={this.handleChange}
                     label='password'
                     required/>
                     
                  
                     <Button type='submit' >Sign in</Button>
                </form>
                
            </div>
        )
    }
}

export default SignIn
