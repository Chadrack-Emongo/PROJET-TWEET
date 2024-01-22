import React from 'react'
import Titre from './Titre'
import Settitle from './Settitle'
import { Icones } from './Icones'
import { Profil } from './Profil'
import { Bouton } from './Bouton'

export default function Seting2() {
    return (
        <div className='flex p-4 justify-between '>
            <div className='flex'>
                <Profil photo="src/assets/images/image 1.png" />
                <div className=''>
                    <div className='flex m-1'>
                        <Titre name="CNN" />
                        <Icones icones="src/assets/images/Verified.svg" />
                    </div>
                    <Settitle name="@CNN" />
                </div>
            </div>
            <div>
                <Bouton classBouton="w-20 h-10 rounded-full font-bold text-black bg-white" name="Follow" />
            </div>

        </div>
    )
}
