import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Main from "pages/Main";
import Login from "pages/Login";
import Join from "pages/Join";
import About from "pages/About";
import Result from 'pages/Result'
import { connect } from 'react-redux'
import Header from 'components/header/Header'
import BaseContainer from 'components/global/BaseContainer'
function RRoute (props)  {
  return(
    <div>
  <Router>
    <BaseContainer></BaseContainer>
    <Header></Header>
    <Route path="/Main" render={() => (<Main auth={props.userinfo.auth}></Main>)} /> 
    <Route path="/Login" component={Login}/>
    <Route exact path="/" component={Login}/>
    <Route path="/Join" component={Join}/>
    <Route path="/About" component={About}/>
    <Route path="/Result/:mode" component={Result}/>
  </Router>
  </div>
  )
}
  


const mapStateToProps  = state => {
  return{
    userinfo : state.userinfo 
  }
}


export default connect(
  mapStateToProps,
)(RRoute)