import React from 'react'
import { Link } from "react-router-dom"
import { Profil } from './Profil'
export default function Login() {
    return (
        <div className='flex text-white'>
            <div className="w-1/2 h-screen flex items-center justify-center">
                <Profil style='flex justify-center items-center h-96' photo="src/assets/images/Logo_of_Twitter.svg-removebg-preview.png"  alt="images-tweter"/>
            </div>
            <div className="w-1/2">
                <div className=''>
                <h1 className='text-9xl mt-6 font-black'>ça se passe <br></br> maintenant</h1>
                <h3 className='text-3xl mt-6 font-black'>Connectez-vous</h3>
                <form className='grid grid-cols'>
                    <label className='text-xl mt-6 font-bold' for="form_element">User Name</label>
                    <input className='w-96 rounded-full h-12 text-black font-bold' type="text"/>
                    <label className='text-xl mt-6 font-bold' for="form_element">Password</label>
                    <input className='w-96 rounded-full border-none h-12 text-black font-bold' type="Password"/>
                    <button className="bg-sky-600 w-96 h-12 mt-6  rounded-full font-bold hover:bg-blue-600">Se connecter</button>
                </form>
                <h3 className='text-3xl mt-40 font-black'>Inscrivez-vous</h3>
                <button className="bg-gray-50 text-sky-600 w-96 h-12 mt-6  rounded-full font-bold">Créer un compte</button>
                </div>
            </div>
        </div>
    )
}

