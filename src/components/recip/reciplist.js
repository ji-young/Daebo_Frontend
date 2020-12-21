import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import { Grid  } from '@material-ui/core'
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import {GridListTileBar,IconButton} from  '@material-ui/core'
// import tileData from './tileData';
import InfoIcon from '@material-ui/icons/Info';
import { connect } from 'react-redux'
import Recipemodalscroll from 'components/recip/recipemodalscroll.js'
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import Button from '@material-ui/core/Button';
import { styled } from '@material-ui/core/styles';
import Recipecomparison from './recipecomparison.js'
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import {requestComparison} from 'ajax/ajax';
import {setRecipComparison} from 'store/actions/index' 
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
    marginTop: '10px'
  },
  gridList: {

  },
  checkBox :{
    zIndex : 9999,
  },
  img : {
    width: '100%',  
    height: '100%'
  },
  formControl: {
    margin: theme.spacing(3),
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
  }
}));
const GreenCheckbox = withStyles({
  root: {
    color: green[400],
    '&$checked': {
      color: green[600],
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);
const MyButton = styled(Button)({
  width : '485px',
  height : '50px',
  boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  color: 'white',
  alignContent : 'center',
  margin : '0 auto',
  background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  border: 0,
});
function RecipList(props) {
  const classes = useStyles();
  const initialValue = [
    { "-1" : false}
  ];
  const [stateValue, setState] = React.useState(
    initialValue
  );
  let dictObject = {}
  let indexObject = {}
  let infoObject = {}
  const initialIdValue = [
    {"0" : 0}
  ];
  const [stateIdValue, setIdValue] = React.useState(
    initialIdValue
  );

  const initialResult = [
    {"0": {}}
  ]

  const [stateResult, setResult] = React.useState(
    initialResult
  );
  
const initialIdValue2 = [
    {"0" : 0}
  ];
  const [stateIdValue2, setIdValue2] = React.useState(
    initialIdValue
  );

  const initialResult2 = [
    {"0": 0}
  ]

  const [stateResult2, setResult2] = React.useState(
    initialResult
  );
  
  useEffect(() => {
    for(let i =0; i<props.recipes.recipes[1].length; i++){
      dictObject[i] = false
    }
    // Should not ever set state during rendering, so do this in useEffect instead.
    setState(dictObject);
    for(let i =0; i<2; i++){
      indexObject[i] = 0
    }
    setIdValue(indexObject)
    for(let i=0; i<2; i++){
      infoObject[i] = {}
    }
    setResult(infoObject)

    setIdValue2(indexObject)
    setResult2(infoObject)
  },[]);

  //const error = [gilad, jason, antoine].filter((v) => v).length !== 2;
  //const error = count > 2 
  let index = 0
  
  const handleChange = index => async(event) => {
    let temp 
    if(Boolean(event.target.checked) === false){
      temp = false
    }else{
      temp = true
    }
    setState({ ...stateValue, [index]: temp});
  };
 
  const re = props.recipes.recipes[1]
  const collaborative_info = props.recipes.recipes[0]
  const [checked, setChecked] = React.useState(true);
  
  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState('paper');
  let select_img_list = []
  
  let k = []

  
  const handleClickOpen = (scrollType) => () => {
  
    let obj_length = Object.keys(stateValue).length;
    let count = 0
    
    let select_id_list = []
    for(let i = 0; i<obj_length; i++){
      console.log(stateValue[i])
      if(stateValue[i] === true) {
        count = count + 1
        console.log(props.recipes.recipes[1][0])
        select_id_list.push(props.recipes.recipes[1][i].id)
        //select_img_list.push(props.recipes.recipes[1][i].img)
      }
    }
    console.log('select_id_list')
    console.log(select_id_list)
    
    if(count != 2){
      alert('checkbox 2개 표시해주세요.')
    }else{
      //here 

      let first = select_id_list[0]
      let second = select_id_list[1]
      console.log(first)
      console.log(second)
      setIdValue({ ...stateIdValue, "1" : first});
      setIdValue2({...stateIdValue2, "2" : second});
      //setIdValue({ ...stateIdValue, "2" : second});      
      console.log('...stateIdValue...')
      console.log(stateIdValue)
      const res= requestComparison(select_id_list[0], select_id_list[1])
      res.then(
       (result) =>{
           let resultFirst = result[0]
           let resultSecond = result[1]
           console.log(resultFirst)
           console.log(resultSecond)
           setResult({ ...stateResult, "1" : resultFirst});
           setResult2({ ...stateResult2, "2" : resultSecond});
          
           console.log('result')
           console.log(result)
         }
      )
      console.log('select_img_list')
      console.log(select_img_list[0])

      setOpen(true);
      setScroll(scrollType);
    }
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

  return (
    <div className={classes.root}>
    
      {/* <MyButton
        onClick = {handleComparison} variant="contained" color="secondary">
        recipe 비교하기  
      </MyButton>  */}
     <MyButton onClick={handleClickOpen('body')}>recipe 비교하러 가기 go~ go~ (✔ 체크박스 2개) ︎</MyButton>
     <br/><br/><br/><br/>
     <Dialog
        open={open}
        onClose={handleClose}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle id="scroll-dialog-title" className = {classes.texth1}><h3>⭐️ 레시피 비교해보고 결정하기! go~ go~ </h3></DialogTitle>
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
                () =>`                                                 
                두 레시피를 비교합니다. 다시 고르시려면 ❗돌아가기❗ 해주세요.                 
`,
              )
              .join('\n')
              }
             
          </DialogContentText>
          <div>
            
            {props.setRecipComparison(stateIdValue) || <Recipecomparison data={props} id={stateIdValue} info={stateResult} id2 = {stateIdValue2} info2={stateResult2}></Recipecomparison>}
          </div>
          {/* <img src={props.recipes.recipes[1][select_id_list[0]].img} alt={"레시피1"} height="400" width="500" />  */}

        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            돌아가기
          </Button>
        </DialogActions>
      </Dialog>
     {/* <FormControl required error={error}>    */}


     
     <FormControl>
      <GridList cellHeight={160} className={classes.gridList} cols={3}>
        {re.map((tile,index) => (
          <GridListTile key={tile.img} cols={tile.cols || 1}>
            <img src={tile.img} alt={tile.title} />
            <GridListTileBar
              title={tile.title}
              titlePosition="top"
              actionIcon={
                <IconButton aria-label={`star ${tile.title}`} className={classes.icon}>
                  {<GreenCheckbox onChange={handleChange(index)} name="checkedG" />}
                </IconButton>
              }
              actionPosition="left"
              className={classes.titleBar}
            />
            <GridListTileBar
              title={tile.name}
              // subtitle={<span>by: {tile.author}</span>}           
              actionIcon={
                  <Recipemodalscroll 
                  id={tile.id} 
                  name={tile.name} 
                  time_req={tile.time_req}
                  cook_method={tile.cook_method}
                  category = {tile.category}
                  img={tile.img} 
                  ingredients={tile.ingredients} 
                  tags={tile.tags} 
                  collaborative = {collaborative_info}
                  ></Recipemodalscroll>
              }
            />
          </GridListTile>
        ))}
      </GridList>
      </FormControl>
    </div>
  );
}

const mapStateToProps  = state => {
  return{
     recipes : state.recipes
  }
}

const mapDispatchToProps  = dispatch => { //SetMode 에 엑션 디스패치 연결
  return{
    // SetRecip : (data) =>{
    //   dispatch(setRecip(data))
    // },
    setRecipComparison : (data) =>{
      dispatch(setRecipComparison(data))
    }
  }
}

export default connect(
  mapStateToProps,mapDispatchToProps
)(RecipList)


