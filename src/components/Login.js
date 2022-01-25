import React, { useState } from "react";
;


const Login = () => {
    // const [username, setUsername] = useState('')
    // const [password, setPassword] = useState('')

    const [credentials, setCredentials] = useState({
            username: '',
            password: ''
    })

    const handleChange = e => {
        setCredentials({...state, [e.target.name]: e.target.value })
    }
    return (
        <div>
            <form>
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