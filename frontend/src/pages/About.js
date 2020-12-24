import React from 'react';
import Header from 'components/header/Header'
// import {Container ,Typography,TextField } from '@material-ui/core'
import Aboutbody from 'components/body/About_body'

export default class Login extends React.Component{
    
    render(){
        return (
            <div>
                <Header></Header>
                <Aboutbody></Aboutbody>
            </div>
        )
    }
}
