import {SET_RECIP_COMPARISON, DEL_USERINFO,SET_SOMETHIG,SET_TYPE,SET_JARYO,ADD_JARYO,SET_USERINFO,DEL_JARYO,SET_RECIP,SET_SEARCHINPUT} from 'store/constants'


export function setSomeTing(st){
    return {
        type :SET_SOMETHIG,
        something:st
    }
}

export function setType(tp){
    return {
        type :SET_TYPE,
        mode:tp
    }
}

export function setJaryo(jr){
    return {
        type :SET_JARYO,
        jaryo:jr,
    }
}

export function addJaryo(name){
    return {
        type :ADD_JARYO,
        name,
    }
}

export function delJaryo(name){
    return {
        type :DEL_JARYO,
        name,
    }
}

export function setUserInfo(userinfo){
    return {
        type :SET_USERINFO,
        userinfo
    }
}

export function setRecip(data){
    return {
        type :SET_RECIP,
        data
    }
}

export function delUserInfo(){
    return {
        type :DEL_USERINFO
    }
}

export function setSerchInput(input){
    return {
        type :SET_SEARCHINPUT,
        input
    }
}

export function setRecipComparison(data){
    return {
        type : SET_RECIP_COMPARISON,
        data
    }
}