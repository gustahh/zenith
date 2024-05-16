import React from 'react'
import BarraLateral from './BarraLateral'

function View(props) {
    return (
        <>
            <BarraLateral />
            <div className='w-[75%] h-screen bg-ice dark:bg-cinzaEscuro p-5 float-left overflow-y-scroll'>
                {props.children}
            </div>
            
        </>


    )
}

export default View