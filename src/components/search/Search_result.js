import React, {useState} from 'react';
import {FormLabel,Box ,InputBase ,makeStyles,Paper,Grid,IconButton  } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search';
import Refrigerator from 'components/refrigerator/Refrigerator'
import styles from 'components/search/SearchStyle'
import { connect } from 'react-redux'
import { withRouter  } from 'react-router-dom';

function  Search(props) {
  const classes = styles();
    return( 
      <div>
        <Box>
        <Paper>
         <Grid container justify="center"  alignItems="center">
            <Grid item  xs = {10} sm ={10} md ={10}>
            <InputBase 
                value = {props.value}
                onChange={props.onChange}
                fullWidth = {true}
                className={classes.input}
                placeholder={"재료와 선호 키워드로 검색해보세요."}
                inputProps={{ 'aria-label': 'search google maps' }}
              />
            </Grid>
            <Grid item  xs = {2} sm ={2} md ={2}>
            
            <IconButton className={classes.iconButton} aria-label="search">
              <SearchIcon onClick={props.onClick} />
            </IconButton>
        </Grid>
         </Grid>
      </Paper>
   </Box>
   </div>
    )
}

const mapStateToProps = state => {
  return{
    test : state.test
  }
}


export default  withRouter(
  connect(
  mapStateToProps
)(Search))
