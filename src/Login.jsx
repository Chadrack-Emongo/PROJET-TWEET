import React from 'react'
import { Link } from "react-router-dom"
import { Profil } from './Profil'
export default function Login() {
    return (
        <div className='flex'>
            <div className="w-1/2">
                <Profil style='' photo="src/assets/images/images-removebg-preview.png" />
            </div>
            <div className="w-1/2">
                <form action="">
                    <h1>ça se passe maintenant</h1>
                    <input type="text" />
                    <input type="text" />
                </form>
            </div>
        </div>
    )
}

