import React, {Fragment} from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { makeStyles } from '@material-ui/core/styles';
import Doughnut from './dynamic-doughnut.js'
import Radar from './radar.js'
import { withRouter  } from 'react-router-dom';
import { connect } from 'react-redux'
export default function ScrollDialog(props) {
    
  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState('paper');
  
  const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper,
      marginTop: '10px'
    },
    text:{
      fontWeight : 'bold',
      fontSize : 20,
      color: '#FF0033'
    },
    text2:{
        fontWeight : 'bold',
        fontSize : 20,
        color: '#000099'
    },
    text3:{
      fontWeight : 'bold',
      fontSize : 20,
      color: '#FFCC00'
    }
    
  }));
  const handleClickOpen = (scrollType) => () => {
    setOpen(true);
    setScroll(scrollType);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);
  console.log('recipecomparison')
  let temp = []
  console.log(props.data.recipes.recipes[1])
  for(let i =0; i<props.data.recipes.recipes[1].length; i++){
      if(props.data.recipes.recipes[1][i].id == props.id[1] || 
        props.data.recipes.recipes[1][i].id == props.id2[2]
        ) temp.push(props.data.recipes.recipes[1][i])
  }
  console.log('temp./..')
  console.log(temp)
  console.log(props.id[1])
  console.log(props.info[1])
  console.log(props.id2[2])
  console.log(props.info2[2])

  let list = []
  let list2 = []
  temp[0].cook_method.split(".").forEach(character => 
    {
    if(character.length!=0 || character!=' ' || character!=null || character!='.')
      list.push(<p>{character}</p>)
    }
  )
  temp[1].cook_method.split(".").forEach(character => 
    {
    if(character.length!=0 || character!=' ' || character!=null || character!='.')
      list2.push(<p>{character}</p>)
    }
  )
  //info, info2, temp 만 쓴다. 
  const classes = useStyles();
  
  return (
    <Fragment>
      <p className={classes.text}>
        <h3>🥇 레시피 1</h3>
      </p>
      <img src={temp[0].img} alt={temp[0].name} height="400" width="500" /> 
      <p className={classes.text2}> 
        <h3>🥈 레시피 2</h3>
      </p>
      <img src={temp[1].img} alt={temp[1].name} height="400" width="500" />
      <p className={classes.text}>
        <h3>🥇 레시피 1 이름 </h3> 
      </p>
      {temp[0].name} <br/>
      <p className={classes.text2}>
       <h3>🥈 레시피 2 이름 </h3>
      </p> 
      {temp[1].name}  <br/>
      <p className={classes.text}>
       <h3>🥇 레시피 1 재료</h3>
      </p>
      {temp[0].ingredients} <br/>
      <p className={classes.text2}>
        <h3>🥈 레시피 2 재료 </h3>
      </p>
      {temp[1].ingredients} <br/>
      <p className={classes.text}>
       <h3>🥇 레시피 1 만드는데 걸리는 시간</h3>
      </p>
      {temp[0].time_req} <br/>
      <p className={classes.text2}>
       <h3>🥈 레시피 2 만드는데 걸리는 시간</h3>
      </p>
      {temp[1].time_req} <br/>
      <p className={classes.text}>
       <h3>🥇 레시피1 만드는 방법</h3>
      </p>
        {list} <br/>
      <p className={classes.text2}>
       <h3>🥈 레시피2 만드는 방법</h3>
      </p>
        {list2} <br/>
        {/* { 
          list.length==0 && <p>만드는 방법이 없어요 ^.ㅠ</p>
        }
        {
          list.length!=0 && list
        } */}
  {/* <p className={classes.text}>
    <h3>🥇 레시피1 통계 분석(1)</h3>
  </p>
  <Doughnut data={props.info[1]}></Doughnut>
  <p className={classes.text2}>
    <h3>🥈 레시피2 통계 분석(1)</h3>
  </p>
  <Doughnut data={props.info[2]}></Doughnut>
  <p className={classes.text3}>
    <h3 >🏆 종합 분석(2)</h3>  
  </p>
  <Radar recipe1={props.info[1]} recipe2={props.info[2]}></Radar> */}
  </Fragment>
  );
}

export {}


