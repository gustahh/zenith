import React from 'react'

function Habilitar2FA() {
    return (
        <select value="false" name="trocatema" className='p-0 flex w-28 h-8 bg-preto/10 rounded mb-3 placeholder:text-cinzaTexto text-cinzaTexto'  >
            <option value="true">Habilitado</option>
            <option value="false" >Desabilitado</option>
        </select>
    )
}

export default Habilitar2FA