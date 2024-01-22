import { useState } from 'react'
import './App.css'
import { Icones } from './Icones'
import { Profil } from './Profil'
import { Bouton } from './Bouton'
import { Paragraphe } from './Paragraphe'
import Option from './Option'
import Montweet from './Montweet'
import Nomtweet from './Nomtweet'
import Searchinput from './Searchinput'
import Titre from './Titre'
import Contenaire2 from './Contenaire2'
import Settitle from './Settitle'
import Settwit from './Settwit'
import { Routes, Route, Link } from 'react-router-dom'
import Profileeroute from './Profileeroute'
import Monmap from './Monmap'
import Contenaire3 from './Contenaire3'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='flex text-white m-5'>

        <div className='w-1/3 flex justify-end'>
          <div className='w-1/2'>
            <div>
              <Option icones="src/assets/images/Twitter.svg" />
              <Option icones="src/assets/images/Home-Fill.svg" name="Home" />
              <Option icones="src/assets/images/Explore.svg" name="Explore" />
              <Option icones="src/assets/images/Notifications-Fill.svg" name="Notifications" />
              <Option icones="src/assets/images/Messages-Fill.svg" name="Messages" />
              <Option icones="src/assets/images/Bookmarks-Fill.svg" name="Bookmarks" />
              <Option icones="src/assets/images/Lists-Fill.svg" name="Listes" />
              <Link to="Profile"> <Option icones="src/assets/images/Profile-Fill.svg" name="Profile" /></Link>
              <Option icones="src/assets/images/More.svg" name="More" />
              <Bouton classBouton="bg-sky-600 w-40 h-10 rounded-full font-bold" name="Tweet" />
            </div>
          </div>
        </div>
        <div className='w-1/3'>
          <Routes>
            <Route path='/' element={<Monmap />} />
            <Route path="Profile" element={<Profileeroute />} />
          </Routes>

        </div>
        <div className='w-1/3 ml-5'>
          <div className='w-1/2'>
            <Searchinput />
            <div className='bg-slate-800 rounded-xl mt-5'>
              <Contenaire2 />
              <Settwit />
              <Settwit />
              <Settwit />
              <Settwit />
              <Titre style="m-3 font-extrabold text-blue-500" name="Show more" />
            </div>
            <div>
              <Contenaire3/>

            </div>
          </div>
        </div>
      </div >



    </>
  )
}

export default App
