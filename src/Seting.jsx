import React from 'react'
import Titre from './Titre'
import Settitle from './Settitle'
import { Icones } from './Icones'
import { Profil } from './Profil'
import { Bouton } from './Bouton'

export default function Seting() {
    return (
        <div className='flex p-2 justify-between hover:bg-slate-600'>
            <div className='flex'>
                <Profil photo="src/assets/images/Tweet-Profile-Photo.png" />
                <div className=''>
                    <div className='flex m-1'>
                        <Titre name="The New York Times" />
                        <Icones icones="src/assets/images/Verified.svg" />
                    </div>
                    <Settitle name="@nytimes" />
                </div>
            </div>
            <div>
                <Bouton classBouton="w-20 h-10 rounded-full font-bold text-black bg-white hover:bg-blue-600" name="Follow" />
            </div>
            
        </div>
    )
}
