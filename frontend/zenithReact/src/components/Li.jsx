import React, { useState } from 'react'

function Li(props) {

    return (
        <li className='w-44 h-8 flex items-center p-4 rounded-md hover:dark:bg-white/20 hover:bg-black/20'>
            {props.children}
            <span className={`text-${props.cor} float-left font-bold pl-2`}>{props.nome}</span>
        </li>
    )
}

export default Li