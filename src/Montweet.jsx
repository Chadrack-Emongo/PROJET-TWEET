import React from 'react'
import { Profil } from './Profil'
import { Paragraphe } from './Paragraphe'
import { Icones } from './Icones'


export default function Montweet() {
  return (
    <div class="border border-indigo-600...">
            <div className='flex p-3'>
              <Profil photo="src/assets/images/Tweet-Profile-Photo.png" />
              <h5>The New York Times</h5>
              <Icones icones="src/assets/images/Verified.svg" />
            </div>
            <div className='ml-12 p-4 p-2'>
              <div>
                <Paragraphe name="Gardening boomed during the pandemic. Six Black writers 
        share how it has helped them re-establish, and reimagine, 
        a connection to cultivation and the land"/>
                <Profil photo="src/assets/images/Img.png" />
              </div>
              <div>
                <div className="flex gap-20">
                  <Icones icones="src/assets/images/Reply.svg" />
                  <Icones icones="src/assets/images/Retweet.svg" />
                  <Icones icones="src/assets/images/React.svg" />
                  <Icones icones="src/assets/images/Share.svg" />
                </div>
              </div>
            </div>
          </div>
  )
}
