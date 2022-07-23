import React, { useContext } from 'react';
import {
    BrowserRouter as Router,
    Switch,
} from "react-router-dom";
import { AuthContext } from '../auth/AuthContext';

import { LoginScreen } from "../components/login/LoginScreen";
import { DashboardRoutes } from './DashboardRoutes';
import { PrivateRouter } from './PrivateRouter';
import { PublicRouter } from './PublicRouter';


export const AppRouters = () => {
    const {user} = useContext(AuthContext)

    return (
        <Router>
            <Switch>
                <PublicRouter 
                    exact 
                    path='/login' 
                    component={LoginScreen} 
                    isAuthenticated={user.logged}
                />

                <PrivateRouter
                    path='/' 
                    component={DashboardRoutes} 
                    isAuthenticated={user.logged}
                />
            </Switch>
        </Router>
    )
}