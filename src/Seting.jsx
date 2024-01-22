import React from 'react'
import Titre from './Titre'
import Settitle from './Settitle'
import { Icones } from './Icones'
import { Profil } from './Profil'

export default function Seting() {
  return (
    <div>
      <Profil photo=""/>
      <Titre />
      <Icones/>
      <Settitle/>

    </div>
  )
}
