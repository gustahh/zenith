import React from 'react'

function ViewConfiguracao(props) {
    return (
        <>
            <div className={`w-[50%] sm:w-[50%] h-screen bg-branco dark:bg-cinzaEscuro p-5 float-left`}>
                {props.children}
            </div>
        </>


    )
}

export default ViewConfiguracao