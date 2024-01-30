import React from 'react'
import { Icones } from './Icones'
import Nomtweet from './Nomtweet'
import { Profil } from './Profil'
import { Bouton } from './Bouton'

export default function Profileeroute() {
  return (
    <div>
      <div className=' p-4 border-slate-700 border' >
        <h3 className='font-extrabold'>Home</h3>
        <Nomtweet name="Chadrack Emongo" />
        <div className=''>
          <Profil style='bg-center rounded-3xl h-64 w-full ' photo="src/assets/images/PIC.png"/>
          <Profil style="w-40 rounded-full -mt-32 m-6 border" photo="src/assets/images/chadrack.png"/>
        </div>
        <div className='flex justify-between'>
          <div>

          </div>
          <div>
            <Bouton classBouton="w-36 h-10 rounded-full font-bold text-black bg-white" name="Edite Profile" />
          </div>
        </div>
      </div>
    </div>
  )
}
