
import React, { useState, useEffect } from "react";
import axiosWithAuth from '../utils/axiosWithAuth'

const FriendList = () => {
   const  [friends, setFriends] = useState([])

    useEffect(()=> {
        axiosWithAuth()
            .get('/api/friends')
            .then(resp => {
                console.log(resp)
                setFriends(resp.data)
            })
            .catch(err => {
                console.log(err)
            })

    }, [])
    
    return (
        <div>
            <ul>
           {friends.map(friend =>{
                return(<li>-${friend.name}-${friend.email}</li>)
            })}  
            </ul>
        </div>
    )
}

export default FriendList;