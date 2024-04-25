import React from 'react'

function Select(props) {
    return (
        <select name="genero" className='w-full h-8 bg-preto rounded mb-3 placeholder:text-cinzaTexto text-cinzaTexto' onChange={props.handle}>
            <option value="">Selecione uma opção</option>
            <option value="M">masculino</option>
            <option value="F">feminino</option>
            <option value="O">outro</option>
        </select>
    )
}

export default Select