import React from 'react'
import Icones2 from './Icones2'

export default function Option(props) {
    return (
        <div className='flex mb-5 gap-6'>
            <Icones2 icones={props.icones} />
            <h3 className='font-extrabold'> {props.name} </h3>
        </div>
    )
}
