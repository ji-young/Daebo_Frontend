import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {recipeRate} from 'ajax/ajax'
import Anoreciplist from './athreciplist.js'
import Modal from '@material-ui/core/Modal';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import { styled } from '@material-ui/core/styles';



const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 600,
    height : 600,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(3,3,3,3),
  },
  root: {
    width: 200,
    display: 'flex',
    alignItems: 'center',
    '& > *': {
      margin: theme.spacing(4,4,4,4),
    },
  },
}));



export default function SimpleModal() {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState(2);
  const [hover, setHover] = React.useState(-1);
  const labels = {
    0.5: '0.5점',
    1: '1점',
    1.5: '1.5점',
    2: '2점',
    2.5: '2.5점',
    3: '3점',
    3.5: '3.5점',
    4: '4점',
    4.5: '4.5점',
    5: '5점',
  };
  const MyButton = styled(Button)({
    width : '100%',
          boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
          color: 'white',
          background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
          border: 0,
  });
  const Dorecipeinfo=(name, recipe_name, rate)=>{
    console.log('hi')
    // const res= recipeRate(name,recipe_name, rate)
    // res.then(
    //   (result) =>{
    //     if(result.statusText == 'Created'){
    //       alert('평점이 등록되었습니다.')
    //     }else{alert('평점이 등록되지 못했습니다')}
    //   }
    // )
    alert('평점이 등록되었습니다.')
    setOpen(false);
   }
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  function rand() {
    return Math.round(Math.random() * 20) - 10;
  }
  
  function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
  }
  const body = (
    <div style={modalStyle} className={classes.paper}>
      <h2 id="simple-modal-title">레시피 Info</h2>
      <p id="simple-modal-description">
        레시피 이미지
      </p>
      <p id="simple-modal-description">
        레시피 이름
      </p>
      <p id="simple-modal-description">
        레시피 재료
      </p>
      <p id="simple-modal-description">
        만드는데 걸리는 시간
      </p>
      <p id="simple-modal-description">
        만드는 방법
      </p>
      
      <p id="simple-modal-description">
        평점을 매겨주세요.
      </p>
      <Rating
        name="hover-feedback"
        value={value}
        precision={0.5}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        onChangeActive={(event, newHover) => {
          setHover(newHover);
        }}
      />
      {value !== null && <Box ml={2}>{labels[hover !== -1 ? hover : value]}</Box>}
      <br/>
      <MyButton onClick = {Dorecipeinfo} variant="contained" color="secondary">
        등록
      </MyButton>
      
      <br/>
      추천 음식
      <Anoreciplist></Anoreciplist>
      
    </div>
  );
  // function Dorecipeinfo(){
  //   console.log('hi')
  //   const res= recipeRate(props.name, props.recipe_name, props.rate)
  //   res.then(
  //     (result) =>{
  //       alert('평점이 등록되었습니다.')
  //     }
  //   )
  //  }
  return (
    <div>
      <button type="button" onClick={handleOpen}>
        Open Modal
      </button>
      
      
      
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      > 
        {body}

      </Modal>
    </div>
  );
}