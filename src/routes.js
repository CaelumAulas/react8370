import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Home from './pages/Home'
import LoginPage from './pages/LoginPage'


const PrivateRoute = ({ path, component, ...props }) => {
    const isLogado = localStorage.getItem('TOKEN');

    if(isLogado) {
        return ( <Route path={path} component={component} {...props} /> )
    }

    return <Redirect to="/login" />
}

const Routes = () => {
    return (
        <Switch>
            <PrivateRoute path="/" component={Home} exact />
            <Route path="/login" component={LoginPage} />
        </Switch>
    )
}
export default Routes