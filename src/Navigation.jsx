import React from 'react'
import { Profil } from './Profil'
import { Bouton } from './Bouton'
import { Link, Route, Routes } from 'react-router-dom'
import Option from './Option'
import Nomtweet from './Nomtweet'
import Monmap from './Monmap'
import Profileeroute from './Profileeroute'
import Searchinput from './Searchinput'
import Contenaire2 from './Contenaire2'
import Settwit from './Settwit'
import Contenaire3 from './Contenaire3'
import Seting from './Seting'
import Seting2 from './Seting2'
import Seting3 from './Seting3'
import Titre from './Titre'

export default function Navigation() {
    return (
        <>
            <div className='flex text-white m-5'>

                <div className='w-1/3 flex justify-end '>
                    <div className='fixed mr-20'>
                        <div className='w-3/5'>
                            <div>
                                <Option icones="src/assets/images/Twitter.svg" />
                                <Option icones="src/assets/images/Home.svg" name="Home" />
                                <Option icones="src/assets/images/Explore.svg" name="Explore" />
                                <Option icones="src/assets/images/Notifications.svg" name="Notifications" />
                                <Option icones="src/assets/images/Messages.svg" name="Messages" />
                                <Option icones="src/assets/images/Bookmarks.svg" name="Bookmarks" />
                                <Option icones="src/assets/images/Lists.svg" name="Listes" />
                                <Link to="Profile"> <Option icones="src/assets/images/Profile.svg" name="Profile" /></Link>
                                <Option icones="src/assets/images/More.svg" name="More" />
                                <Bouton classBouton="bg-sky-600 w-48 h-10 rounded-full font-bold hover:bg-blue-600" name="Post" />
                            </div>
                            <div className='flex'>
                                <Profil style="rounded-full h-12" photo="src/assets/images/chadrack.png" />
                                <div>
                                    <Nomtweet name="Chadrack Emongo" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-1/3'>
                    <Routes>
                        <Route path='/' element={<Monmap />} />
                        <Route path="Profile" element={<Profileeroute />} />
                    </Routes>

                </div>
                <div className='w-96 ml-5'>
                    <div className='fixed'>
                        <div>
                            <Searchinput />
                            <div className='bg-slate-800 rounded-xl mt-2'>
                                <Contenaire2 />
                                <Settwit />
                                <Settwit />
                                <Settwit />
                                <Settwit />
                                <Titre style="m-3 font-extrabold text-blue-500" name="Show more" />
                            </div>
                            <div className='bg-slate-800 rounded-xl mt-2'>
                                <Contenaire3 />
                                <Seting />
                                <Seting2 />
                                <Seting3 />
                                <Titre style="m-3 font-extrabold text-blue-500" name="Show more" />
                            </div>
                        </div>
                    </div>
                </div>
            </div >



        </>
    )
}

