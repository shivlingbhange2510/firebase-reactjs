import React from 'react'
import { Login } from './Login'
import { SignUp } from './SignUp'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { signout } from '../redux/actions/authAction'

export const Navbar = () => {
    const state = useSelector((state) => state)
    const dispatch = useDispatch();

   const signOutFn = () => {
        dispatch(signout())
    }
    return (
        <div id='navbar'>

           {state?.auth?.user?.email && ( <div style={{fontSize:'15px'}}>

            user email: {state?.auth?.user?.email}
            </div>)}
            {! state?.auth?.user?.email ? 
            <div>
                <Link to="/login">
                {/* login */}
             {state?.auth?.user?.email ? 'logout' : 'login'}
                </Link>
            </div> :
            <div  onClick={signOutFn}>
                <Link to="/logout">
                logout
                </Link>
            </div>
            }
            <div>
                <Link to="/signup">signup</Link>
            </div>
            <div>
                <Link to="/">Dashboard</Link>
            </div>
           


        </div>
    )
}
