import {
    AUTH_LOGIN_START,
    AUTH_LOGIN_SUCCESS,
    AUTH_LOGIN_ERROR,
    AUTH_LOGOUT,
} from './const';

import { loginService } from '../../../services/login.services';

export const logoutActionCreator = () => ({
    type: AUTH_LOGOUT,
    payload: null,
})

const startActionCreator = () => ({
    type: AUTH_LOGIN_START,
    payload: null,
})

const successActionCreator = (data) => ({
    type: AUTH_LOGIN_SUCCESS,
    payload: data,
})

const errorActionCreator = () => ({
    type: AUTH_LOGIN_ERROR,
    payload: null,
})


export const loginActionsAsyncCreator = (email, password) => {
    return (dispatch, getStore) => {
        dispatch(startActionCreator());

        loginService({ username:email, password:password }).then(data => {
            console.log("data",data);
            if(data.message === 'success'){
                dispatch(successActionCreator(data.token));
            }else{
                dispatch(errorActionCreator(data.message));
            }
           
            localStorage['toke']=data.token;
            localStorage['login']=data.ok;
        }).catch(err => {
            dispatch(errorActionCreator(err));
        })
    }
}
