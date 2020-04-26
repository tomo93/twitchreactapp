import {SIGN_IN, SIGN_OUT} from '../actions/types';


const INITIAL_STATE ={
    isSignedIn: null,
    userId: null
}

//a reducer
export default (state=INITIAL_STATE, action) =>{

    switch(action.type){
        case SIGN_IN:
        return {...state,isSignedIn: true,userId: action.payload}; //a spread operator

        case SIGN_OUT:

        return {...state,isSignedIn: false, userId: null}; //a spread operator

        default:
            return state;
    }
};