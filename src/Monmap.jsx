import React from 'react'
import Montweet from './Montweet'
import { Profil } from './Profil'
import { Bouton } from './Bouton'
import { Icones } from './Icones'
import Imagetweet from './Imagetweet'

export default function Monmap() {
    let tableau = [

        {

            "author_avatar": "https://picsum.photos/200?random=1604299903000",

            "source": "Twitter",

            "date": 1604299903000,

            "favorites": "92746",

            "id": "1323155810910982145",

            "isVerified": true,

            "replies": "24785",

            "retweets": "16287",

            "text": "...As I said at the debate – “Will you remember that Texas?Pennsylvania? Ohio? New Mexico?” I will always protect American Energy and American Jobs! Get out and VOTE #MAGA!"

        },

        {

            "author_avatar": "https://picsum.photos/200?random=1609942590000",

            "source": "Apple",

            "date": 1609942590000,

            "favorites": "396603",

            "id": "1346822958006886400",

            "isVerified": false,

            "replies": "896",

            "retweets": "54694",

            "text": "Even Mexico uses Voter I.D.",

            "image": "https://picsum.photos/1024/200?random=1346822958006886400"

        },

        {

            "author_avatar": "https://picsum.photos/200?random=1604231375000",

            "source": "Twitter for iPhone",

            "date": 1604231375000,

            "favorites": "124689",

            "id": "1322868385361891328",

            "isVerified": true,

            "replies": "8",

            "retweets": "22972",

            "text": "When I originally became your all time favorite President, the Great State of Michigan was hemorrhaging car companies and jobs. Plants were closing and moving to Mexico, and other places. No new plants for decades. I stopped the moves, &amp; now many plants are and have been built...",

            "image": "https://picsum.photos/200/800?random=1322868385361891328"

        },

        {

            "author_avatar": "https://picsum.photos/200?random=1604084613000",

            "source": "CNN",

            "date": 1604084613000,

            "favorites": "44842",

            "id": "1322252819299135488",

            "isVerified": false,

            "replies": "1024",

            "retweets": "9563",

            "text": "...a cheerleader for NAFTA – sending your auto Jobs to Mexico. He voted for China’s entry into the World Trade Organization – gutting your industries to finance China’s rise. HALF of all Michigan auto manufacturing jobs were ELIMINATED after the Biden-Backed NAFTA and China...",

            "image": "https://picsum.photos/200?random=1322252819299135488"

        },

        {

            "author_avatar": "https://picsum.photos/200?random=1603037689000",

            "source": "Trump D.",

            "date": 1603037689000,

            "favorites": 62414,

            "id": "1317861704819118080",

            "isVerified": false,

            "replies": "258",

            "retweets": 16811,

            "text": "Not my Wall, which will soon be finished (and Mexico will pay for the Wall!). Totally unrelated, but I think Steve will be just fine. By the way, is this the same job hopping Tim O’Brien that headed Mini Mike Bloomberg’s humiliating 2 Billion Dollar Presidential run? Debate prep! https://t.co/cQfEtszRrB"

        },

        {

            "author_avatar": "https://picsum.photos/200?random=1602377246000",

            "source": "Lauraine L.",

            "date": 1602377246000,

            "favorites": 34952,

            "id": "1315091604496158720",

            "isVerified": true,

            "replies": "85",

            "retweets": 10008,

            "text": "Yvette Herrell (@Yvette4Congress) is a proven fighter for New Mexico! She strongly supports our Brave Law Enforcement, Life and the Second Amendment. Strong on the Border and Trade, Yvette has my Complete and Total Endorsement! #NM02 https://t.co/77hjYfVWAB",

            "image": "https://picsum.photos/200?random=1315091604496158720"

        },

        {

            "author_avatar": "https://picsum.photos/200?random=1601996447000",

            "source": "Mexico City",

            "date": 1601996447000,

            "favorites": 58201,

            "id": "1313494418314457090",

            "isVerified": true,

            "replies": "0",

            "retweets": 14359,

            "text": "NEW MEXICO! Today is the last day you can register to vote online or via mail. Make sure your vote counts! \nhttps://t.co/WwzdPhDkAZ"

        },

        {

            "author_avatar": "https://picsum.photos/200?random=1554075712000",

            "source": "New York Times",

            "date": 1554075712000,

            "favorites": 58201,

            "id": "1313494418314457090",

            "isVerified": true,

            "replies": "0",

            "retweets": 14359,

            "text": "....However, if for any reason Mexico stops apprehending and bringing the illegals back to where they came from, the U.S. will be forced to Tariff at 25% all cars made in Mexico and shipped over the Border to us. If that doesn’t work, which it will, I will close the Border......."

        },

        {

            "author_avatar": "https://picsum.photos/200?random=1604231375000",

            "source": "Twitter for iPhone",

            "date": 1601996447000,

            "favorites": 58201,

            "id": "1313494418314457090",

            "isVerified": true,

            "replies": "0",

            "retweets": 14359,

            "text": "A 9th Circuit Judge just ruled that Mexico is too dangerous for migrants. So unfair to the U.S. OUT OF CONTROL! https://t.co/XF8o3jMDle"

        },

        {

            "author_avatar": "https://picsum.photos/200?random=1548956601000",

            "source": "Samsung",

            "date": 1601996447000,

            "favorites": 58201,

            "id": "1313494418314457090",

            "isVerified": true,

            "replies": "0",

            "retweets": 14359,

            "text": "A 9th Circuit Judge just ruled that Mexico is too dangerous for migrants. So unfair to the U.S. OUT OF CONTROL! https://t.co/XF8o3jMDle",

            "image": "https://picsum.photos/2048/1024?random=1313494418314457090"

        }

    ]

    return (
        <div>
            <div className='flex justify-between p-4 border-slate-700 border' >
                <h3 className='font-extrabold'>Home</h3>
                <Icones icones="src/assets/images/Timeline-Prop.svg" />
                <Icones>
                    <path d="M22.772 10.506L17.154 8.314L14.994 1.814C14.892 1.507 14.604 1.3 14.282 1.3C13.96 1.3 13.672 1.507 13.57 1.813L11.41 8.313L5.79 10.505C5.503 10.617 5.313 10.895 5.313 11.205C5.313 11.515 5.503 11.79 5.791 11.903L11.411 14.095L13.571 20.595C13.673 20.901 13.961 21.108 14.283 21.108C14.605 21.108 14.893 20.901 14.995 20.595L17.155 14.095L22.775 11.903C23.062 11.791 23.252 11.513 23.252 11.203C23.252 10.893 23.062 10.618 22.774 10.506H22.772ZM16.282 12.826C16.074 12.906 15.912 13.076 15.842 13.286L14.282 17.981L12.722 13.288C12.652 13.078 12.492 12.908 12.284 12.826L8.129 11.206L12.283 9.584C12.491 9.504 12.653 9.334 12.723 9.122L14.283 4.429L15.843 9.123C15.913 9.335 16.073 9.505 16.281 9.586L20.436 11.206L16.281 12.828L16.282 12.826ZM6.663 3.812H4.783V2.05C4.783 1.636 4.446 1.3 4.033 1.3C3.62 1.3 3.283 1.636 3.283 2.05V3.812H1.5C1.086 3.812 0.75 4.148 0.75 4.562C0.75 4.976 1.086 5.312 1.5 5.312H3.282V7.074C3.282 7.488 3.618 7.824 4.032 7.824C4.446 7.824 4.782 7.488 4.782 7.074V5.312H6.662C7.077 5.312 7.412 4.976 7.412 4.562C7.412 4.148 7.077 3.812 6.662 3.812H6.663ZM9.198 19.434H8.098V18.418C8.098 18.004 7.763 17.668 7.348 17.668C6.933 17.668 6.598 18.004 6.598 18.418V19.434H5.57C5.156 19.434 4.82 19.77 4.82 20.184C4.82 20.598 5.156 20.934 5.57 20.934H6.6V21.95C6.6 22.364 6.935 22.7 7.35 22.7C7.765 22.7 8.1 22.364 8.1 21.95V20.934H9.198C9.612 20.934 9.948 20.598 9.948 20.184C9.948 19.77 9.612 19.434 9.198 19.434Z" fill="#D9D9D9" />
                </Icones>
            </div>
            <form action="get">
                <div className='pt-2 ml-6 mr-4 pt-9 bp-1' class="border-slate-700 border">
                    <div className='flex'>
                        <Profil photo="src/assets/images/Profile-Photo.png" />
                        <textarea className="textarea" type="text" placeholder='What’s happening?' />
                    </div>
                    <div className="p-4 flex justify-between">
                        <div className='flex gap-5'>
                            <Icones>
                                <path d="M19.75 2H4.25C3.01 2 2 3.01 2 4.25V19.75C2 20.99 3.01 22 4.25 22H19.75C20.99 22 22 20.99 22 19.75V4.25C22 3.01 20.99 2 19.75 2ZM4.25 3.5H19.75C20.163 3.5 20.5 3.837 20.5 4.25V13.926L16.642 10.068C16.502 9.928 16.312 9.848 16.112 9.848H16.109C15.909 9.848 15.716 9.928 15.577 10.072L11.26 14.456L9.447 12.65C9.307 12.51 9.117 12.43 8.917 12.43C8.724 12.4 8.522 12.51 8.382 12.657L3.5 17.642V4.25C3.5 3.837 3.837 3.5 4.25 3.5ZM3.506 19.78L8.924 14.246L15.206 20.5H4.25C3.848 20.5 3.523 20.178 3.506 19.78ZM19.75 20.5H17.33L12.323 15.513L16.115 11.663L20.5 16.047V19.75C20.5 20.163 20.163 20.5 19.75 20.5Z" fill="#D9D9D9" />
                                <path d="M8.86805 9.851C9.71967 9.851 10.41 9.16062 10.41 8.309C10.41 7.45738 9.71967 6.767 8.86805 6.767C8.01643 6.767 7.32605 7.45738 7.32605 8.309C7.32605 9.16062 8.01643 9.851 8.86805 9.851Z" fill="#D9D9D9" />
                            </Icones>
                            <Icones>
                                <path d="M19 10.5V8.8H14.6V15.2H16.3V13.2H18.3V11.5H16.3V10.5H19ZM11.7 8.8H13.4V15.2H11.7V8.8ZM8.10002 10.4C8.50002 10.4 9.00002 10.6 9.30002 10.9L10.5 9.89999C9.90002 9.19999 9.00002 8.8 8.10002 8.8C6.30002 8.8 4.90002 10.2 4.90002 12C4.90002 13.8 6.30002 15.2 8.10002 15.2C9.10002 15.2 9.90002 14.8 10.5 14.1V11.6H7.70002V12.8H8.90002V13.4C8.70002 13.5 8.40002 13.6 8.10002 13.6C7.20002 13.6 6.50002 12.9 6.50002 12C6.50002 11.2 7.20002 10.4 8.10002 10.4Z" fill="#D9D9D9" />
                                <path d="M20.5 2.02H3.5C2.26 2.02 1.25 3.027 1.25 4.267V19.774C1.25 21.012 2.26 22.02 3.5 22.02H20.5C21.74 22.02 22.75 21.012 22.75 19.774V4.267C22.75 3.027 21.74 2.02 20.5 2.02ZM21.25 19.774C21.25 20.184 20.914 20.52 20.5 20.52H3.5C3.086 20.52 2.75 20.184 2.75 19.774V4.267C2.75 3.855 3.086 3.52 3.5 3.52H20.5C20.914 3.52 21.25 3.855 21.25 4.267V19.774Z" fill="#D9D9D9" />
                            </Icones>
                            <Icones>
                                <path d="M20.222 9.16H18.888C18.903 9.07 18.916 8.978 18.916 8.883V6.57C18.916 5.59 18.119 4.793 17.138 4.793H3.5V3.358C3.5 2.944 3.164 2.608 2.75 2.608C2.336 2.608 2 2.944 2 3.358V20.83C2 21.245 2.336 21.58 2.75 21.58C3.164 21.58 3.5 21.245 3.5 20.83V19.396H14.056C15.036 19.396 15.834 18.599 15.834 17.619V15.306C15.834 15.211 15.82 15.119 15.806 15.028H20.223C21.203 15.028 22.001 14.23 22.001 13.25V10.94C22.001 9.957 21.204 9.16 20.223 9.16H20.222ZM17.14 6.293C17.292 6.293 17.417 6.417 17.417 6.57V8.88C17.417 9.034 17.292 9.16 17.139 9.16H3.5V6.29H17.14V6.293ZM14.333 15.307V17.619C14.333 17.772 14.208 17.896 14.055 17.896H3.5V15.028H14.056C14.209 15.028 14.333 15.154 14.333 15.308V15.307ZM20.5 13.25C20.5 13.403 20.375 13.527 20.222 13.527H3.5V10.66H20.222C20.375 10.66 20.5 10.784 20.5 10.937V13.25Z" fill="#D9D9D9" />
                            </Icones>
                            <Icones>
                                <path d="M12 22.75C6.072 22.75 1.25 17.928 1.25 12C1.25 6.072 6.072 1.25 12 1.25C17.928 1.25 22.75 6.072 22.75 12C22.75 17.928 17.928 22.75 12 22.75ZM12 2.75C6.9 2.75 2.75 6.9 2.75 12C2.75 17.1 6.9 21.25 12 21.25C17.1 21.25 21.25 17.1 21.25 12C21.25 6.9 17.1 2.75 12 2.75Z" fill="#D9D9D9" />
                                <path d="M12 17.115C10.108 17.115 8.36701 16.165 7.34401 14.571C7.12001 14.223 7.22101 13.761 7.57001 13.536C7.91801 13.31 8.38201 13.412 8.60601 13.762C9.35301 14.924 10.622 15.617 12.001 15.617C13.38 15.617 14.649 14.924 15.397 13.763C15.621 13.413 16.085 13.313 16.433 13.538C16.783 13.762 16.883 14.226 16.659 14.574C15.634 16.168 13.893 17.119 12.001 17.119L12 17.115Z" fill="#D9D9D9F" />
                                <path d="M14.738 10.936C15.5543 10.936 16.216 10.2743 16.216 9.458C16.216 8.64173 15.5543 7.98 14.738 7.98C13.9217 7.98 13.26 8.64173 13.26 9.458C13.26 10.2743 13.9217 10.936 14.738 10.936Z" fill="#D9D9D9" />
                                <path d="M9.26206 10.936C10.0783 10.936 10.7401 10.2743 10.7401 9.458C10.7401 8.64173 10.0783 7.98 9.26206 7.98C8.44578 7.98 7.78406 8.64173 7.78406 9.458C7.78406 10.2743 8.44578 10.936 9.26206 10.936Z" fill="#D9D9D9" />
                            </Icones>
                            <Icones>
                                <path d="M-37.9 18C-38 17.9 -38 17.9 -38 17.8C-37.9 17.8 -37.9 17.9 -37.9 18ZM18 2.2H16.7V1.9C16.7 1.5 16.4 1.1 15.9 1.1C15.5 1.1 15.1 1.4 15.1 1.9V2.2H7.7V1.9C7.7 1.5 7.4 1.1 6.9 1.1C6.5 1.1 6.1 1.4 6.1 1.9V2.2H4.8C3.4 2.2 2.3 3.3 2.3 4.7V17.8C2.3 19.2 3.4 20.3 4.8 20.3H7.7C8.1 20.3 8.5 20 8.5 19.5C8.5 19.1 8.2 18.7 7.7 18.7H4.8C4.2 18.7 3.8 18.2 3.8 17.7V7.9C3.8 7.6 4.2 7.2 4.8 7.2H18C18.6 7.2 19 7.6 19 7.9V9.7C19 10.1 19.3 10.5 19.8 10.5C20.2 10.5 20.6 10.2 20.6 9.7V4.7C20.5 3.3 19.4 2.2 18 2.2ZM19 5.9C18.7 5.8 18.3 5.7 18 5.7H4.8C4.4 5.7 4.1 5.8 3.8 5.9V4.7C3.8 4.1 4.3 3.7 4.8 3.7H6.1V4.2C6.1 4.6 6.4 5 6.9 5C7.3 5 7.7 4.7 7.7 4.2V3.7H15.2V4.2C15.2 4.6 15.5 5 16 5C16.4 5 16.8 4.7 16.8 4.2V3.7H18C18.6 3.7 19 4.2 19 4.7V5.9Z" fill="#D9D9D9" />
                                <path d="M15.5 10.4C12.1 10.4 9.29999 13.2 9.29999 16.6C9.29999 20 12.1 22.8 15.5 22.8C18.9 22.8 21.7 20 21.7 16.6C21.7 13.2 18.9 10.4 15.5 10.4ZM15.5 21.4C12.9 21.4 10.8 19.3 10.8 16.7C10.8 14.1 12.9 12 15.5 12C18.1 12 20.2 14.1 20.2 16.7C20.2 19.2 18.1 21.4 15.5 21.4Z" fill="#D9D9D9" />
                                <path d="M18.9 18.7C18.8 18.9 18.5 19.1 18.3 19.1C18.2 19.1 18 19.1 17.9 19L14.8 17V14C14.8 13.6 15.1 13.2 15.6 13.2C16 13.2 16.4 13.5 16.4 14V16.2L18.8 17.7C19 17.9 19.1 18.3 18.9 18.7Z" fill="#D9D9D9" />
                            </Icones>
                        </div>
                        <div>
                            <Bouton classBouton="bg-sky-600 w-20 h-10 rounded-full font-bold" name="Tweet" />
                        </div>
                    </div>
                </div>
            </form>
            {
                tableau.map((tab) => (<Montweet unTweet={tab} />))
            }

        </div>
    )
}
