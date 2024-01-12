import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Icones } from './Icones'
import { Profil } from './Profil'
import { Bouton } from './Bouton'
import { Paragraphe } from './Paragraphe'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='timeline'>
        <div>
          <Icones icones="src/assets/images/Twitter.svg" />
        </div>
        <div className='timeline1'>
          <div className='header' >
            <h3>Home</h3>
            <Icones icones="src/assets/images/Timeline-Prop.svg" />
          </div>
          <div className='tweet-editor'>
            <div className='tweet'>
              <Profil photo="src/assets/images/Profile-Photo.png" />
              <textarea className={"bien"} type="text" placeholder='What’s happening?' />

            </div>
            <div className='top-tweet'>
              <div className='tweet-editor-action'>
                <Icones icones="src/assets/images/Media.svg" />
                <Icones icones="src/assets/images/Gif.svg" />
                <Icones icones="src/assets/images/Poll.svg" />
                <Icones icones="src/assets/images/Emoji.svg" />
                <Icones icones="src/assets/images/Schedule.svg" />
              </div>
              <div>
                <Bouton />
              </div>
            </div>
          </div>
          <div>
            <div>
              <Profil photo="src/assets/images/image 1.png" />
            </div>
            <div>
              <h5>CNN</h5>
              <Icones icones="src/assets/images/Verified.svg" />
            </div>
            <Paragraphe name="President Joe Biden touted a new agreement 
        reached with the European Union to ease Trump-era tariffs 
        on aluminum and steel as a major breakthrough that would serve to both strengthen 
        the US steel industry and combat the global climate crisis."/>
            <div>
              <Icones icones="src/assets/images/Reply.svg" />
              <Icones icones="src/assets/images/Retweet.svg" />
              <Icones icones="src/assets/images/React.svg" />
              <Icones icones="src/assets/images/Share.svg" />
            </div>
          </div>
          <div>
            <div>
              <Profil photo="src/assets/images/Tweet-Profile-Photo.png" />
            </div>
            <div>
              <h5>The New York Times</h5>
              <Icones icones="src/assets/images/Verified.svg" />
            </div>
            <div>
              <Paragraphe name="Gardening boomed during the pandemic. Six Black writers 
        share how it has helped them re-establish, and reimagine, 
        a connection to cultivation and the land"/>
              <Profil photo="src/assets/images/Img.png" />
            </div>
            <div>
              <div>
                <Icones icones="src/assets/images/Reply.svg" />
                <Icones icones="src/assets/images/Retweet.svg" />
                <Icones icones="src/assets/images/React.svg" />
                <Icones icones="src/assets/images/Share.svg" />
              </div>
            </div>
          </div>
        </div>
        <div>
          <input type="text" />
        </div>
      </div>
    </>
  )
}

export default App
