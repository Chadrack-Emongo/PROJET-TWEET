import React from 'react'
import Titre from './Titre'
import Settitle from './Settitle'
import { Icones } from './Icones'

export default function Settwit(props) {
    return (
        <div>
            <div className='flex justify-between p-2'>
                <div className=''>
                    <Settitle style="text-stone-300" name="Trending in Turkey" />
                    <Titre style="font-extrabold" name="#SQUID" />
                    <Settitle name="2,066 Tweets" />
                </div>
                <div>
                    <Icones>
                        <path d="M5 14C6.10457 14 7 13.1046 7 12C7 10.8954 6.10457 10 5 10C3.89543 10 3 10.8954 3 12C3 13.1046 3.89543 14 5 14Z" fill="#D9D9D9" />
                        <path d="M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z" fill="#D9D9D9" />
                        <path d="M19 14C20.1046 14 21 13.1046 21 12C21 10.8954 20.1046 10 19 10C17.8954 10 17 10.8954 17 12C17 13.1046 17.8954 14 19 14Z" fill="#D9D9D9" />
                    </Icones>
                </div>
            </div>

        </div>
    )
}
