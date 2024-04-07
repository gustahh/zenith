import React from 'react'

function Select() {
    return (
        <select name="genero" className='w-full h-8 bg-preto rounded mb-3 placeholder:text-cinzaTexto text-cinzaTexto'>
            <option value="M">masculino</option>
            <option value="F">feminino</option>
            <option value="O">outro</option>
        </select>
    )
}

export default Select