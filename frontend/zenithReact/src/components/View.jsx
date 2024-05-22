import React from 'react'
import BarraLateral from './BarraLateral'
import BarraMobile from './BarraMobile'

function View(props) {
    return (
        <>
            
            <BarraLateral />
            <div className={`w-[83%] sm:w-[75%] h-screen bg-ice dark:bg-cinzaEscuro p-5 float-left overflow-y-scroll`}>
                {props.children}
            </div>
        </>


    )
}

export default View