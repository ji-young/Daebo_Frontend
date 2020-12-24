import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { makeStyles } from '@material-ui/core/styles';
import { styled } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Anoreciplist from './athreciplist.js'
import Rating from '@material-ui/lab/Rating';
import {IconButton} from  '@material-ui/core'
import InfoIcon from '@material-ui/icons/Info';
import { fontSize } from '@material-ui/system';
import {registerScore} from 'ajax/ajax'
const useStyles = makeStyles((theme) => ({
    paper: {
      position: 'absolute',
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(3,3,3,3),
    },
    root: {
     
      display: 'flex',
      alignItems: 'center',
      '& > *': {
        margin: theme.spacing(4,4,4,4),
      },
    },
    text:{
      fontWeight : 'bold',
      fontSize : 20,
      color: '#4CAF50'
    },
    texth1:{
      fontWeight : 'bold',
      color : '#4CAF50',
      fontSize : 30,
    },
    icon: {
      color: 'rgba(255, 255, 255, 0.54)',
    },
  }));

export default function ScrollDialog(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState('paper');
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
  let list = []
  props.cook_method.split(".").forEach(character => 
    {
    if(character.length!=0 || character!=' ' || character!=null || character!='.')
      list.push(<p>{character}</p>)
    }
    )
  const handleClickOpen = (scrollType) => () => {
    setOpen(true);
    setScroll(scrollType);
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
  const Dorecipeinfo=(e)=>{
    e.preventDefault();
    console.log(props.id)
    console.log(value)
    const res= registerScore(props.id, value)
    
    res.then(
       (result) =>{
         console.log(result)
       }
    )
    setOpen(false);
   }
  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);
  
  // console.log('asdf'+props.collaborative )
  return (
    <div>
      {/* <Button onClick={handleClickOpen('paper')}>scroll=paper</Button> */}
      <IconButton onClick={handleClickOpen('body')} className={classes.icon}>
                  <InfoIcon />
      </IconButton>
      {/* <Button onClick={handleClickOpen('body')}>scroll=body</Button> */}
      <Dialog
        open={open}
        onClose={handleClose}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle id="scroll-dialog-title" ><h2 className={classes.texth1}>🥗레시피 상세 페이지</h2></DialogTitle>
        <DialogContent dividers={scroll === 'paper'}>
          {/* <DialogContentText
            id="scroll-dialog-description"
            ref={descriptionElementRef}
            tabIndex={-1}
          >
            {[...new Array(50)]
              .map(
                () => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`,
              )
              .join('\n')}
          </DialogContentText> */}
          <DialogContentText
            id="scroll-dialog-description"
            ref={descriptionElementRef}
            tabIndex={-1}
          >
            {[...new Array(1)]
              .map(
                () => `                                                 
                해시태그로 검색된 추천 레시피 입니다. 확인해보세요 !               
`,
              )
              .join('\n')}
          </DialogContentText>
         
      <p className={classes.text}>
        이미지
      </p>
      <img src={props.img} alt={props.name} height="400" width="500" />
      <p className={classes.text}>
       레시피 이름 
      </p>
      {props.name}
      <p className={classes.text}>
       레시피 재료
      </p>
      {props.ingredients}
      <p className={classes.text}>
        만드는데 걸리는 시간
      </p>
      {props.time_req}
      <p className={classes.text}>
        만드는 방법
      </p>
        { 
          list.length==0 && <p>만드는 방법이 없어요 ^.ㅠ</p>
        }
        {
          list.length!=0 && list
        }
      <p className={classes.text}>
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
      
      <br/><br/><br/>
      <h2 className={classes.texth1}>🥘 회원님과 유사한 사람들이 좋아하는 레시피 </h2>
      <br/><br/>
      {props.collaborative != "nodata" && (<Anoreciplist data={props.collaborative}></Anoreciplist>)}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            돌아가기
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}