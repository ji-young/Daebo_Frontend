import React, {useState} from 'react';
import { InputBase ,makeStyles,Paper,Grid,IconButton  } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search';
import styles from 'components/search/SearchStyle'
 
function  Search(props) {
  const classes = styles();

return( <Paper>
        <Grid container justify="center"  alignItems="center">

          <Grid item  xs = {10} sm ={10} md ={10}>
           <InputBase 
              value = {props.value}
              onChange={props.onChange}
              fullWidth = {true}
              className={classes.input}
              placeholder="맛집 위치나 메뉴를 검색해보세요."
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
    )
}

export default Search