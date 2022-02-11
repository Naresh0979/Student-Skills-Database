import React from "react";
import { Route, Navigate, RouteProps } from "react-router-dom";

interface Props extends RouteProps {
    isAuthenticated: boolean;
    redirectTo: string;
}

class AuthenticatedRoute extends React.Component<Props> {
    render() {
        return this.props.isAuthenticated ? <Route {...this.props}></Route> : <Navigate to={this.props.redirectTo}></Navigate>
    }
}

export default AuthenticatedRoute;