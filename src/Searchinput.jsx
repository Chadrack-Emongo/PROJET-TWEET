import React from 'react'
import { Icones } from './Icones'

export default function Searchinput() {
  return (
    <div className='flex bg-slate-800 h-10 rounded-3xl'>
      <Icones icones="src/assets/images/Search.svg"/>
      <input className='bg-slate-800 rounded-3xl' type="text" placeholder='Search twitter' />
    </div>
  )
}
