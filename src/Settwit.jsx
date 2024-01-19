import React from 'react'
import Titre from './Titre'
import Settitle from './Settitle'
import { Icones } from './Icones'

export default function Settwit(props) {
    return (
        <div>
            <div className='flex justify-between p-4'>
                <div className=''>
                    <Settitle style="text-stone-300" name="Trending in Turkey" />
                    <Titre style="font-extrabold" name="#SQUID" />
                    <Settitle name="2,066 Tweets"/>
                </div>
                <div>
                    <Icones icones="src/assets/images/More-2.svg"/>
                </div>
            </div>
           
        </div>
    )
}
