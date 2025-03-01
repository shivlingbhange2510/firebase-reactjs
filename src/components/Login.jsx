import React, { useState } from 'react'
// import {signin}
import {signin} from '../redux/actions/authAction'
import { useDispatch } from 'react-redux';
export const Login = () => {
    const dispatch = useDispatch();
      const [email, setEmail] = useState('');
        const [password, setPassword] = useState('')
        const hadnleLogin=()=>{
            dispatch(signin(email, password))
        }
    return (
        <div>Login
            <input type='text' placeholder='enter email' value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type='password' placeholder='enter email' value={password} onChange={(e) => setPassword(e.target.value)} />
            <button onClick={hadnleLogin}>SUbmit</button>
        </div>
    )
}
