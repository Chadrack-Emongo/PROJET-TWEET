import React from 'react'
import { Icones } from './Icones'

export default function Option(props) {
    return (
        <div className='flex'>
            <Icones icones={props.icones} />
            <h3> {props.name} </h3>
        </div>
    )
}
