
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
            {friends.map(friend =>{
                return(`-${friend.name}-${friend.email}`)
            })}
        </div>
    )
}

export default FriendList;