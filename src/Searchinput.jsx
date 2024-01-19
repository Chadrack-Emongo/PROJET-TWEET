import React from 'react'
import { Icones } from './Icones'

export default function Searchinput() {
  return (
    <div className='flex'>
      <Icones icones="src/assets/images/Search.svg"/>
      <input type="text" placeholder='Search twitter' />
    </div>
  )
}
