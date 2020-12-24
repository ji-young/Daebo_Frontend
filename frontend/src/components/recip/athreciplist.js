import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
import MuiExpansionPanel from '@material-ui/core/ExpansionPanel';
import MuiExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import MuiExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import Recipemodalscroll from 'components/recip/recipemodalscroll.js'


const useStyles = makeStyles((theme) => ({
  text:{
    fontWeight : 'bold',
    fontSize : 20,
    color: '#4CAF50'
  },
}));

const ExpansionPanel = withStyles({
  root: {
    border: '1px solid rgba(0, 0, 0, .125)',
    boxShadow: 'none',
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
    '&$expanded': {
      margin: 'auto',
    },
  },
  expanded: {},
})(MuiExpansionPanel);

const ExpansionPanelSummary = withStyles({
  root: {
    backgroundColor: 'rgba(0, 0, 0, .03)',
    borderBottom: '1px solid rgba(0, 0, 0, .125)',
    marginBottom: -1,
    minHeight: 56,
    '&$expanded': {
      minHeight: 56,
    },
  },
  content: {
    '&$expanded': {
      margin: '12px 0',
    },
  },
  expanded: {},
})(MuiExpansionPanelSummary);

const ExpansionPanelDetails = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiExpansionPanelDetails);

export default function CustomizedExpansionPanels(props) {
  const classes = useStyles();
 
  let list = []
  //console.log(props.data[0].cook_method)
  //console.log(props.data[1].cook_method)
  //console.log(props.data[2].cook_method)

  for(let i = 0; i<2; i++){
    list.push([])
    props.data[i].cook_method.split(".").forEach(character => 
    {
      if(character.length!=0 || character!=' ' || character!=null || character!='.')
        list[i].push(<p>{character}</p>)
    }
   )
  }
 
  const [expanded, setExpanded] = React.useState('panel1');
  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div>
      <ExpansionPanel square expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <ExpansionPanelSummary aria-controls="panel1d-content" id="panel1d-header">
        <img src={props.data[0].img} alt={props.data[0].name} height="50" width="50"/> &nbsp;&nbsp;
          <Typography>{props.data[0].name}</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
     <Typography>
      <p className={classes.text}>
        이미지
      </p>
      <img src={props.data[0].img} alt={props.data[0].name} height="400" width="500" /> 
      <p className={classes.text}>
       레시피 이름 
      </p>
      {props.data[0].name}
      <p className={classes.text}>
       레시피 재료
      </p>
      {props.data[0].ingredients}
      <p className={classes.text}>
        만드는데 걸리는 시간
      </p>
      {props.data[0].time_req}
      <p className={classes.text}>
        만드는 방법
      </p>
        {/* <Recipetreeview data={props.data[0]}></Recipetreeview> */}
        { 
          list[0].length==0 && <p>만드는 방법이 없어요 ^.ㅠ</p>
        }
        {
          list[0].length!=0 && list[0]
        }
        </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel square expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <ExpansionPanelSummary aria-controls="panel2d-content" id="panel2d-header">
        <img src={props.data[1].img} alt={props.data[1].name} height="50" width="50"/> &nbsp;&nbsp;
          <Typography>{props.data[1].name}</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
          <p className={classes.text}>
        이미지
      </p>
      <img src={props.data[1].img} alt={props.data[1].name} height="400" width="500" />
      <p className={classes.text}>
       레시피 이름 
      </p>
      {props.data[1].name}
      <p className={classes.text}>
       레시피 재료
      </p>
      {props.data[1].ingredients}
      <p className={classes.text}>
        만드는데 걸리는 시간
      </p>
      {props.data[1].time_req}
      <p className={classes.text}>
        만드는 방법
      </p>
        { 
          list[1].length==0 && <p>만드는 방법이 없어요 ^.ㅠ</p>
        }
        {
          list[1].length!=0 && list[1]
        }
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>

      {/* <ExpansionPanel square expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <ExpansionPanelSummary aria-controls="panel3d-content" id="panel3d-header">
        <img src={props.data[2].img} alt={props.data[2].name} height="50" width="50"/> &nbsp;&nbsp;
          <Typography>{props.data[2].name}</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
          <p className={classes.text}>
        이미지
      </p>
      <img src={props.data[2].img} alt={props.data[2].name} height="400" width="500" />
      <p className={classes.text}>
       레시피 이름 
      </p>
      {props.data[2].name}
      <p className={classes.text}>
       레시피 재료
      </p>
      {props.data[2].ingredients}
      <p className={classes.text}>
        만드는데 걸리는 시간
      </p>
      {props.data[2].time_req}
      <p className={classes.text}>
        만드는 방법
      </p>
        {list[2]}
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel> */}
    </div>
  );
}