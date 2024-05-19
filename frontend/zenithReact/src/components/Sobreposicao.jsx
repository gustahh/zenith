import React from 'react'

function Sobreposicao(props) {
    return (
        <>
            <div className='w-full h-full backdrop-blur-sm bg-black/10 dark:bg-white/10 z-10 absolute'>
                {props.children}
            </div>
        </>

    )
}

export default Sobreposicao