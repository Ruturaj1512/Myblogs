import React from 'react'
import { Link, Navigate } from 'react-router-dom'


export default function Header() {
    const logout = () => {
        // remove the token and username from sessionStorage
        sessionStorage.removeItem('token')
        sessionStorage.removeItem('username')

        // redirect to signin
        Navigate('/signup')
    }
    return (

        <div>
            <div className='alignLast'>
                <div className="dropdown" style={{ backgroundColor: '#f9f9f9', color: 'black' }}>
                    <a className=" dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                        Welcome
                    </a>

                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                        <li ><Link className="dropdown-item" to="/create-blog  "> Create Blog</Link></li>
                        <li ><Link className="dropdown-item" to="/profile-page">My Profile</Link></li>
                        <li><a className="dropdown-item" onClick={logout} > Logout </a></li>
                    </ul>
                </div>
            </div>
            <div className='w-100 alignCenter'>
                <h1 style={{ color: 'red' }}>My blogs</h1>
                <h6 style={{ color: 'orange' }}>This is demo app</h6>
            </div>
        </div>
    )

}