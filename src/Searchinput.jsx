import React from 'react'
import Icones2 from './Icones2'

export default function Searchinput() {
  return (
    <div className='flex bg-slate-800 h-10 rounded-3xl'>
      <Icones2 className="w-8" icones="src/assets/images/Search.svg"/>
      <input className='bg-slate-800 rounded-3xl' type="text" placeholder='Search twitter' />
    </div>
  )
}
