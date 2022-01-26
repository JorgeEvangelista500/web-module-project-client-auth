import axios from "axios";
import React, { useState } from "react";
import { useHistory } from 'react-router-dom'


const Login = () => {
    // const [username, setUsername] = useState('')
    // const [password, setPassword] = useState('')
    const  { push } = useHistory();

    const [credentials, setCredentials] = useState({
            username: '',
            password: ''
    })

    const handleChange = e => {
        setCredentials({...credentials, [e.target.name]: e.target.value })
    }

    const login = e => {
        e.preventDefault();
        // console.log(credentials)
        axios.post('http://localhost:9000/api/login', credentials)
            .then(resp=> {
                localStorage.setItem('token', resp.data.token)
                push('/friends')
            })
            .catch(err=> {
                console.log(err)
            })
    } 
    return (
        <div>
            <h1>LOGIN</h1>
            <form onSubmit={login}>
                <input
                    type='text'
                    name='username'
                    value={credentials.username}
                    onChange={handleChange}
                />
                <input
                    type='password'
                    name='password'
                    value={credentials.password}
                    onChange={handleChange}
                />
                <button>Log in</button>
            </form>
        </div>
    )
}

export default Login;