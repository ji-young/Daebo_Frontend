import React from 'react'
import {Container,Grid, makeStyles  ,Typography, Paper } from '@material-ui/core'


const AboutStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      paddingTop : 130
    },
    paper: {
      height: 120,
    },
    
  }));

export default function About_body() {
        const classes = AboutStyles();
        return(
            <Container className = {classes.root} align = 'center'>
                <Typography>
                안녕하세요 저희는 빅데희터입니다.
                </Typography>
                <Grid container spacing={3}>
                    <Grid item xs ={3}>
                        <Paper className = {classes.paper}>1
                          <Typography>
                             맛집 추천을 받아보세요.
                          </Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs ={3}>
                        <Paper className = {classes.paper}>2
                          <Typography>
                             여행의 음식 계획을 짜보세요.
                          </Typography>
                        </Paper >
                    </Grid>
                    <Grid item xs ={3}>
                        <Paper className = {classes.paper} >3
                          <Typography>
                             지금 만들수 있는 레시피를 찾아보세요.
                          </Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs ={3}>
                        <Paper className = {classes.paper} >4
                          <Typography>
                             방문한 맛집을 검증해보세요 
                          </Typography>
                        </Paper>
                    </Grid>
                </Grid>   
            </Container>
        )
    
}