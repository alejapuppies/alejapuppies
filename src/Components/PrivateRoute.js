import React from "react"
import { Redirect, Route } from "react-router-dom"
import UserService from "./Services/UserService"
import firebase from "firebase"

export const PrivateRoute = ({component: Component, ...rest}) => (
    
    <Route
        {...rest}
        render = {
            props => false ? (
                    <Component {...props} />
                ) : (
                    <Redirect 
                        to = {{
                            pathname: "/register",
                        }}
                    />
            )
        }
    />
)