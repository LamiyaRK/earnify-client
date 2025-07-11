import React, { use } from 'react';
import { AuthContext } from '../../Context/AuthContext';
import Spinner from './Spinner';
import { Navigate, useLocation } from 'react-router';

const PrivateRoute = ({children}) => {
    const {user,load}=use(AuthContext)
    const loc=useLocation()
    if(load)
    {
        return <Spinner></Spinner>
    }
    if(user)
        return children
    return (
        <Navigate to='/login' state={{from:loc}} replace='true'/>
    );
};

export default PrivateRoute;