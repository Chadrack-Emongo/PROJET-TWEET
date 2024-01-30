import React from 'react'
import { useState } from 'react'

export default function Like({ }) {
    const [imageClick, setImageClick] = useState(false);
    const [like, setLike] = useState(0);
    const handleclick = () => {
        setImageClick(!imageClick);
        imageClick ? setLike(like - 1) : setLike(like + 1);
    }
    const likeIcone = imageClick ? "src/assets/images/icons8-costume-de-coeur-emoji-96.png" : "src/assets/images/React.svg"
    return (
        <div className='flex'>
            <div className='rounded-full w-6'>
                <img onClick={handleclick} src={likeIcone} alt='' />
            </div>
            <span> {like} </span>
        </div>
    )
}
