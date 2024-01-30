import React from 'react'
import Icones2 from './Icones2'

export default function Option(props) {
    return (
        <div className='flex mb-10 gap-6'>
            <Icones2  className="w-8" icones={props.icones} />
            <h3 className='font-extrabold'> {props.name} </h3>
        </div>
    )
}
