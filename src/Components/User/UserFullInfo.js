import React from "react"
import UserProfile from "./UserProfile"

export default function UserFullInfo(props){
    const user = props.user;
    return(
        <div>
            <UserProfile />
        </div>
    )
}