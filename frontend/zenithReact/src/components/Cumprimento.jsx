import React from 'react'

function Cumprimento() {
 function hora() {
    let hora = new Date().getHours();

    if (hora >= 5 && hora < 12) {
        return 'Bom dia';
    } else if (hora >= 12 && hora < 18) {
        return 'Boa tarde';
    } else if (hora >= 18 && hora < 24) {
        return 'Boa noite';
    } else {
        return 'Boa madrugada';
    }
 }
  return (
    <div className='text-xl font-bold text-cinzaTexto pb-2'>{hora()}</div>
  )
}

export default Cumprimento