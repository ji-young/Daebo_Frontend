import React from 'react';
import {Box ,Button , Grid} from '@material-ui/core'
import { Link ,withRouter} from "react-router-dom";
import { connect } from 'react-redux'
import {delUserInfo} from 'store/actions/index' 


 function Menu(props) {

    function handleLogout() {
        localStorage.removeItem("userInfo");
        props.DelUserInfo() 
        props.history.push('/Login')
    }
        return(
            <Box  >
            <Grid  container>
                <Grid item xs={8} md={10}>
                    <Button component = {Link} to='/Main'>
                       FoodAll {/* About */}
                    </Button> 
                </Grid>
                <Grid item xs={4} md={2}>
                    {!props.userinfo.auth ?(
                        <div>
                        <Grid container>
                            <Grid item xs={6} md={6}>
                                <Button fullWidth={true} size="large" color="primary"
                                        component = {Link} to='/Login'>
                                    Login {/* login */}
                                </Button> 
                            </Grid>
                        <Grid item xs={6} md={6}>
                            <Button fullWidth={true} size="large" color="secondary"
                                    component = {Link} to='/Join'>
                                Join {/* join */}
                            </Button>  
                        </Grid>
                    </Grid>
                        </div>
                    ):
                    (
                        <div>
                        <Grid container>
                            {/* <Grid item xs={6} md={6}> */}
                                <Button fullWidth={true} size="large" color="secondary"
                                        onClick={handleLogout}>
                                        LOGOUT {/* login */}
                                </Button> 
                            {/* </Grid> */}
                        </Grid>
                        </div>
                    )
                    }
                </Grid>
            </Grid>    
          </Box>  
        );
    }



const mapStateToProps  = state => {
    return{
      userinfo : state.userinfo 
    }
  }
  
  const mapDispatchToProps = dispatch => {
    return {
      DelUserInfo: ( ) => {
        dispatch(delUserInfo( ));
      }
    };
  };

  export default withRouter(
    connect(
        mapStateToProps,mapDispatchToProps
      )(Menu)
  ) 