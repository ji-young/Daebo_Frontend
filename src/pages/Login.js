import React from 'react';
import LoginForm from 'components/login/LoginForm.js'


export default class Login extends React.Component{
    render(){
        
        return (
                <div>
                   <LoginForm type="login"></LoginForm>
                </div>
        )
    }
}
