import React from 'react'
import { Icones } from './Icones'
import Titre from './Titre'

export default function Contenaire2() {
    return (
        <div className='p-2'>
            <div className='flex justify-between'>
                <Titre style="font-extrabold" name="Trends for you" />
                <Icones icones="src/assets/images/Settings.svg" />
            </div>

        </div>
    )
}
