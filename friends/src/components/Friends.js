import React, { useState, useEffect } from 'react'
import { axiosWithAuth } from '../utils/axiosWithAuth'

const Friends = () => {

 const [friends, setFriends] = useState([])
 const [newFriend, setNewFriend] = useState({
    name: '',
    age: 0,
    email: ''
 })

    useEffect(() => {
        axiosWithAuth()
        .get('/api/friends')
        .then(res => {
            setFriends(
                ...friends, res.data
            )
        })
    }, [])

    const handleChange = e => {
        const value = e.target.value
        const name = e.target.name
        setNewFriend({
            ...newFriend,
            [name]: value
        })
    }

    const onSubmit = e => {
        axiosWithAuth()
        .post('/api/friends', newFriend)
    }

    return(
        <>
            <h1>Friends List:</h1>
            <div className="card-container">
            {friends.map(friend => {
                return <div className="friendCard">
                    <h3>Name: {friend.name}</h3>
                    <p>Age: {friend.age}</p>
                    <p>Email: {friend.email}</p>
                </div>
            })}
            </div>
            <h2>Add a friend:</h2>
            <form onSubmit={onSubmit}>
                <input type="text" name="name" placeholder="Name:" onChange={handleChange}/><br/>
                <input type="number" name="age" placeholder="Age:" onChange={handleChange}/><br/>
                <input type="text"  name="email" placeholder="Email:" onChange={handleChange}/><br/>
                <button>Add Friend</button>
            </form>
        </>
    )
}

export default Friends;