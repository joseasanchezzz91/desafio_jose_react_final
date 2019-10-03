import React from 'react';
import { Route, Redirect } from 'react-router-dom';


const isLogin = () => {
   
    let jwt = localStorage['toke']; 
   if(jwt==="null" ){
       jwt=null;
   }
 
    let result = !!jwt;
   
    return result;
}

const RoutePrivate = ({component: Component, ...rest}) => {
    return (
        <div>
        <Route {...rest} render={props => (
            isLogin() ?
                <Component {...props} />
            : <Redirect to="/" />
        )} />
</div>
    );
};

export default RoutePrivate;