import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

function PrivateRoute({ component: Component, accessFor, auth, ...otherProps }) {
    const { auth: { roles, isAuthenticated } } = useSelector(state => state);

    return (
        <Route
            {...otherProps}
            render={props => (
                <React.Fragment>
                    {
                        (accessFor && roles && !Boolean(roles.find((value) => accessFor.includes(value)))) 
                            || (auth && isAuthenticated !== auth) || (accessFor && !roles)
                        ? <Redirect to="/" />
                        : <Component {...props} />
                    }
                </React.Fragment>
            )}
        />
    );
}

export default PrivateRoute;