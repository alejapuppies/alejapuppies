import React from "react"
import { Redirect, Route } from "react-router-dom"
import firebase from "firebase"

export const PrivateRouteLogin = ({component: Component, ...rest}) => (
   
    <Route
        {...rest}
        render = {
            props => !firebase.auth().currentUser ? (
                    <Component {...props} />
                ) : (
                    <Redirect 
                        to = {{
                            pathname: "/profile",
                        }}
                    />
            )
        }
    />
)