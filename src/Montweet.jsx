import React from 'react'
import { Profil } from './Profil'
import { Paragraphe } from './Paragraphe'
import { Icones } from './Icones'
import Nomtweet from './Nomtweet'


export default function Montweet({unTweet}) {
  return (
    <div class="border border-indigo-600...">
            <div className='flex p-3'>
              <Profil photo={unTweet.author_avatar} />
              <Nomtweet name={unTweet.source}/>
              <Icones icones="src/assets/images/Verified.svg" />
            </div>
            <div className='ml-12 p-4 p-2'>
              <div>
                <Paragraphe name={unTweet.text}/>
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
