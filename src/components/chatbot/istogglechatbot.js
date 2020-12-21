import React from 'react';
import CheckIcon from '@material-ui/icons/Check';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ChatBot from 'react-simple-chatbot';
import { Grid  } from '@material-ui/core'
export default function StandaloneToggleButton() {
  const [selected, setSelected] = React.useState(false);
  const steps=[
    {
      id: '1',
      message: 'What is your name?',
      trigger: '2',
    },
    {
      id: '2',
      user: true,
      trigger: '3',
    },
    {
      id: '3',
      message: 'Hi {previousValue}, nice to meet you!',
      end: true,
    },
  ];
  return (
    <React.Fragment>
    
    <ToggleButton
      value="check"
      selected={selected}
      onChange={() => {
        setSelected(!selected);
      }}
    >
    <CheckIcon />챗봇 활성화 버튼 
    
    </ToggleButton>
    <br/><br/>
    <Grid container        
    direction="column"
    alignItems="center"
    justify="center">
  <Grid item  xs = {6} sm ={6} md ={6}>
    {/* eslint-disable-next-line */}
    {selected === true &&  <ChatBot steps={steps} />}
  </Grid>
</Grid>
</React.Fragment>
  );
}