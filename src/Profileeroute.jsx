import React from 'react'
import { Icones } from './Icones'
import Nomtweet from './Nomtweet'
import { Profil } from './Profil'

export default function Profileeroute() {
  return (
    <div>
      <div className=' p-4 border-slate-700 border' >
      <h3 className='font-extrabold'>Home</h3>
      <Nomtweet  name="Chadrack Emongo"/>
      <Profil photo="src/assets/images/Img.png"/>
      <Profil  photo="src/assets/images/chadrack.png" />
      </div>
    </div>
  )
}
