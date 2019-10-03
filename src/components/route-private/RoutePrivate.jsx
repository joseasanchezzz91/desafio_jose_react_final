import React from 'react';
import { Route, Redirect } from 'react-router-dom';


const isLogin = () => {
   
    let jwt = localStorage['toke']; 
   if(jwt==="null"){
       jwt=null;
   }
    let result = !!jwt;
    console.log("localstorage",result);
    return result;
}

const RoutePrivate = ({component: Component, ...rest}) => {
    return (

        // Show the component only when the user is logged in
        // Otherwise, redirect the user to /signin page
        <Route {...rest} render={props => (
            isLogin() ?
                <Component {...props} />
            : <Redirect to="/" />
        )} />
    );
};

export default RoutePrivate;