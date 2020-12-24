import React, { useState, useCallback } from 'react';
import { makeStyles ,TextField, Button, Container } from '@material-ui/core';
import {login,join} from 'ajax/ajax'
import { connect } from 'react-redux'
import {setUserInfo} from 'store/actions/index' 
import { withRouter  } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop : 90
  },
  TextField:{
    fullWidth: true,
    marginTop : 20
  },
  Button:{
    
    marginTop : 20
  }

}));




function BasicTextFields(props) {
 
  const classes = useStyles();
  // eslint-disable-next-line
  const [id, setId] =  useState('');
  // eslint-disable-next-line
  const [pw, setPw] =  useState('');
  // eslint-disable-next-line
  const [pwConfirm, setPwc] = useState('');
  
  // eslint-disable-next-line
  const [name, setName] = useState('');
  
  // eslint-disable-next-line
  const [email, setMail] = useState('');
  
  
  const onChangeId = useCallback(e=>{
   setId(e.target.value);

  },[]);
   // eslint-disable-next-line
  const onChangePw = useCallback(e=>{
    setPw(e.target.value);
    
  },[]);
 
  const onChangePwc = useCallback(e=>{
    setPwc(e.target.value);

  },[]);

   // eslint-disable-next-line 
   const onChangeName = useCallback(e=>{
    setName(e.target.value);

   },[]);

   // eslint-disable-next-line 
   const onChangeEmail = useCallback(e=>{
     setMail(e.target.value);
   },[]);

  const onCheckId = () => {

    
     if (id.replace(/^[A-Za-z0-9+]*$/g, '') ) 
          return id.length > 10 ? false : true;
     else 
          return id.length > 10 ? true : false;

  };
  
  const onCheckPw = () =>{
    if(pw.replace(/^[A-Za-z0-9]{6,12}$/, ''))
      return true;
    else
      return false; 
  }

  const onCheckPwc = () => {
    if(pw === pwConfirm) return true;
    else
      return false;
  }

  const onCheckEmail = () =>{
    if(email.replace(/^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i, ''))
       return true;
    else
      return false;
  }
  function DoJoin(){
    const res= join(id,name,email,pw)
    res.then(
      (result) =>{
        console.log(result.statusText)
        if(result.statusText == 'Created'){
          alert('가입 성공')
          props.history.push("/Login")
        }else{alert('가입실패')}
      }
    )
  }

// 유저 정보 디스패치
  function DoLogin(){

   const res= login(id,email,pw)
   res.then((result)=>{
    
     localStorage.setItem(
      "userInfo",
      JSON.stringify({
        name: result.user,
        token:result.token,
        auth:true
      })  
    );
     props.SetUserInfo({
      token:result.token,
      name:result.user,
      auth:true
    })
     props.history.push("/Main")
   })

  }

  const handleSubmit = (e) =>{
    e.preventDefault();
    if(props.type==='Join'){
      if(onCheckId() === true || 
       name.length  >10 ||
       onCheckPw() === true || 
      onCheckPwc() === false || 
      onCheckEmail() === true ||
      id.length === 0 || 
      name.length === 0 ||
      email.length === 0 ||
      pw.length === 0 ||
      pwConfirm.length === 0 
      )      
       return alert('회원가입 양식에 맞춰서 작성해주세요.');
    else
        DoJoin();
    }else {
      DoLogin();
    }
  }

 
  return (

    <Container maxWidth='xs' align='center'>
    <form className={classes.root}
      onSubmit={handleSubmit}
      noValidate autoComplete="off">
        <div className="logo-area">
          {props.type==='login'? (
              <h1 className="logo-title">로그인</h1>
              ) :(
              <h1 className="logo-title">회원가입</h1> 
            )
          }
            <TextField  fullWidth= {true} className={classes.TextField}  required
                        error = {onCheckId() === true ? true : false }
                        helperText = {onCheckId() === true ? 
                                      "아이디는 10자리 내에서 영문자, 숫자 조합만 가능합니다." : "아이디를 작성해주세요."}
                        onChange={onChangeId} id="name" label="아이디를 입력해주세요." />

           {props.type ==='login' && (
             <TextField fullWidth= {true} className={classes.TextField} required
             onChange = {onChangeEmail}
             type="email"
             error = {
                   onCheckEmail() === true ? true : false
             }
             helperText = {
                   onCheckEmail() === true ? "이메일 형식에 맞지 않습니다." : "이메일을 입력해주세요."
             }
             id="email" label="이메일을 입력해주세요." />
            )
          }             
           

          {props.type==='Join' && (
            <TextField fullWidth= {true} className={classes.TextField} required
            onChange={onChangeName} 
            error = {name.length  > 10 ? true : false}
            helperText={
              name.length  > 10 ? "이름은 10글자 이내로 작성해주세요." : "이름을 작성해주세요."
            }
            id="name" label="이름을 입력해주세요." />
            ) 
          }

          {props.type==='Join' && (
            <TextField fullWidth= {true} className={classes.TextField} required
            onChange = {onChangeEmail}
            type="email"
            error = {
                  onCheckEmail() === true ? true : false
            }
            helperText = {
                  onCheckEmail() === true ? "이메일 형식에 맞지 않습니다." : "이메일을 입력해주세요."
            }
            id="email" label="이메일을 입력해주세요." />
            ) 
          }
          
        
          <TextField fullWidth= {true} className={classes.TextField}    
          type ="password"
          onChange = {onChangePw}
          error = {
            onCheckPw() === false ? false : true
          }
          helperText ={
            onCheckPw() === false ? '비밀번호 입력해주세요.' : '숫자와 문자 포함 형태의 6~12자리 입니다.'
          }
          required id="password" label="비밀번호를 입력해주세요." />
          
          {props.type==='Join' && (
            <TextField fullWidth= {true}
            onChange={onChangePwc}
            id="passwordConfirm"
            
            error ={
                onCheckPwc() === true ? false : true
            }
            helperText={
              onCheckPwc() === true ? '비밀번호를 입력해주세요.' : '비밀번호가 일치하지 않습니다.'
            }
            className={classes.TextField}  name="passwordConfirm" type="password" label="비밀번호 확인" />
          )} 


          {props.type==='login' ? (
            <Button type = "submit" fullWidth={true} className={classes.Button} size="large" variant="contained" color="primary">
              로그인
            </Button>
            ) : (
            <Button fullWidth={true}
              type = "submit"
              className={classes.Button}  size="large" variant="contained" color="primary">
            회원가입
          </Button>
              )
          }
   
      </div>
    </form>
    </Container>
  );
}

const mapStateToProps  = state => {
  return{
    userinfo : state.userinfo // store 의 mode 를 props로 사용함
  }
}

const mapDispatchToProps  = dispatch => { //SetMode 에 엑션 디스패치 연결
  return{
    SetUserInfo : (userinfo) =>{
      dispatch(setUserInfo(userinfo))
    }
  }
}

export default withRouter (
  connect(
  mapStateToProps,
  mapDispatchToProps
)(BasicTextFields)
)