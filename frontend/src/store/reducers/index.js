import {SET_RECIP_COMPARISON, DEL_USERINFO,SET_SOMETHIG ,SET_TYPE,SET_JARYO,ADD_JARYO,DEL_JARYO,SET_RECIP,SET_SEARCHINPUT} from 'store/constants'
import { combineReducers} from 'redux';
import { SET_USERINFO } from '../constants';
import axios from 'axios'

const initialState = {
    something: 1,
}

const something =(state = initialState, action) => {
    console.log(action.type)
    switch(action.type){
        case SET_SOMETHIG:
           
            return{...state, something: action.something};
        default:
            return state;
    }
}

const inituserinfo = {
    token: '',
    name:'',
    auth:false
}

const userinfo =(state = inituserinfo, action) => {
    console.log(action.type)
    switch(action.type){
        case SET_USERINFO:
            axios.defaults.headers.common['Authorization'] = 'jwt '+action.userinfo.token
            return{...state, token : action.userinfo.token , name : action.userinfo.name, auth:true };
        case DEL_USERINFO:
            axios.defaults.headers.common['Authorization'] = undefined
            return{...state, token : '' , name :'', auth:false }
        default:
            return state;
    }
}


const initialjaryo = 
        [
               
        ]
    
const jaryo =(state = initialjaryo, action) => {
    console.log(action.type)
    switch(action.type){
        case SET_JARYO:
            localStorage.setItem('jaryo', JSON.stringify({...state, jaryo: action.jaryo}));
           
            return{...state, jaryo: action.jaryo};

        case ADD_JARYO:
            localStorage.setItem('jaryo', JSON.stringify([...state, {name: action.name}]));
           
            return[ {name: action.name}, ...state];

        case DEL_JARYO:

            let rstate = [...state] 
            const idx = rstate.findIndex(function(item) {return item.name === action.name}) // 
            // findIndex = find + indexOf 
            if (idx > -1) rstate.splice(idx, 1)
            localStorage.setItem('jaryo', JSON.stringify(rstate));

            return rstate;
        default:
            return state;
    }
}

const recipe = []

const recipes =(state = recipe, action) => {
    console.log(action.type)
    switch(action.type){
        case SET_RECIP:
            return{...state, recipes: action.data};
        default:
            return state;
    }
}


const initialMode = {
    mode:'레시피'
}


const mode =(state = initialMode, action) => {
    console.log(action.type)
    switch(action.type){
        case SET_TYPE:
            return{...state, mode: action.mode};
        default:
            return state;
    }
}


const initialinput = {
    input:''
}


const searchinput =(state = initialinput, action) => {
    console.log(action.type)
    switch(action.type){
        case SET_SEARCHINPUT:
            localStorage.setItem('searchinput', JSON.stringify(action.input));
            return{...state, input: action.input};
        default:
            return state;
    }
}
const initialrecipcomparison ={

}
const recipcomparison = (state=initialrecipcomparison, action)=>{
    console.log('recipcomparison')
    console.log(action.type)
    switch(action.type){
        case SET_RECIP_COMPARISON:
                return{...state, info : action.data};
        default : 
            return state;
    }
}

const reducer = combineReducers({searchinput,recipes,mode,something,jaryo,userinfo});

export default reducer