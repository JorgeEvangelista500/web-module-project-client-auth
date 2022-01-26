import axios from "axios";
import React, { useState } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";

const AddFriend = () => {

    const [values, setValues] = useState({
        name: '',
        email: '',
    })

    const handleChanges = e => {
        setValues({...values, [e.target.name]: e.target.value})
    }

    const submit = e => {
        e.preventDefault();
        axiosWithAuth()
            .post('/api/friends', values)
    }

    return(
        <div>
            <h1>ADD FRIEND</h1>
            <form onSubmit={submit}>
                <input
                    type='text'
                    name='name'
                    value={values.name}
                    onChange={handleChanges}
                />
                <input
                    type='text'
                    name='email'
                    values={values.email}
                    onChange={handleChanges}
                />
                <button>Submit</button>
            </form>
        </div>
    )
}

export default AddFriend;