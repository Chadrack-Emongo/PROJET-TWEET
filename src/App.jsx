import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Icones } from './Icones'
import { Profil } from './Profil'
import { Bouton } from './Bouton'
import { Paragraphe } from './Paragraphe'
import Option from './Option'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='timeline'>

        <div className='w-1/3 flex justify-end'>
          <div className='w-1/2'>
            <div className='classMenu'>
              <Icones icones="src/assets/images/Twitter.svg" />
              <Option icones="src/assets/images/Home-Fill.svg" name="Home" />
              <Option icones="src/assets/images/Explore.svg" name="Explore" />
              <Option icones="src/assets/images/Notifications-Fill.svg" name="Notifications" />
              <Option icones="src/assets/images/Messages-Fill.svg" name="Messages" />
              <Option icones="src/assets/images/Bookmarks-Fill.svg" name="Bookmarks" />
              <Option icones="src/assets/images/Lists-Fill.svg" name="Listes" />
              <Option icones="src/assets/images/Profile-Fill.svg" name="Profile" />
              <Option icones="src/assets/images/More.svg" name="More" />
              <Bouton />
            </div>
          </div>
        </div>
        <div className='w-1/3'>
          <div className='header' >
            <h3>Home</h3>
            <Icones icones="src/assets/images/Timeline-Prop.svg" />
          </div>
          <form action="get">
            <div className='ml-6 mr-4 pt-9 bp-1' class="border border-indigo-600...">
              <div className='flex'>
                <Profil photo="src/assets/images/Profile-Photo.png" />
                <textarea className="textarea" type="text" placeholder='What’s happening?' />
              </div>
              <div className="flex gap-80">
                <div className='flex gap-5'>
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
          </form>
          <div class="border border-indigo-600..." className='tweeter'>
            <div className='fle'>
              <div className='flex'>
                <div className='tweets'>
                  <Profil photo="src/assets/images/image 1.png" />
                  {/* <h5>CNN</h5>
              <Icones icones="src/assets/images/Verified.svg" /> */}
                </div>
                {/* <div className='flex'> */}
                <div className=''>
                  <div><h5 className='flex'>CNN <Icones icones="src/assets/images/Verified.svg" /></h5></div>
                  {/* <Icones icones="src/assets/images/Verified.svg" /> */}
                </div>
              </div>
              <div className='tweeter-1'>
                <Paragraphe name="President Joe Biden touted a new agreement 
        reached with the European Union to ease Trump-era tariffs 
        on aluminum and steel as a major breakthrough that would serve to both strengthen 
        the US steel industry and combat the global climate crisis."/>
                <div className="flex gap-20">
                  <Icones icones="src/assets/images/Reply.svg" />
                  <Icones icones="src/assets/images/Retweet.svg" />
                  <Icones icones="src/assets/images/React.svg" />
                  <Icones icones="src/assets/images/Share.svg" />
                </div>
              </div>
            </div>
          </div>
          <div class="border border-indigo-600...">
            <div className='tweets'>
              <Profil photo="src/assets/images/Tweet-Profile-Photo.png" />
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
              <div className="flex gap-20">
                <Icones icones="src/assets/images/Reply.svg" />
                <Icones icones="src/assets/images/Retweet.svg" />
                <Icones icones="src/assets/images/React.svg" />
                <Icones icones="src/assets/images/Share.svg" />
              </div>
            </div>
          </div>
        </div>
        <div className='w-1/3 ml-5'>
          <input type="text" />
        </div>
      </div >
    </>
  )
}

export default App
