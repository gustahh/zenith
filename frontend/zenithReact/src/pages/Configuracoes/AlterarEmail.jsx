import React from 'react';
import Button from '../../components/Button';
import Voltar from '../../icons/Voltar';
import Label from '../../components/Label';
import Input from '../../components/Input';

function AlterarEmail() {
  return (
    <>
      <div>
        <Voltar fill="#999999"/>
        <span className='text-xl font-bold text-cinzaTexto pb-3'>Alterar Email</span>

      </div>
      <div>
        <Label nome="Novo E-mail"></Label>
        <Input type="email" name="novoEmail" placeholder="Digite o seu novo endereço de email"></Input>
        <Button type="submit" className="w-20 h-10 pr-1 bg-verde rounded-md text-white
      font-bold text-sm text-center" text="Salvar"></Button>
      </div>

    </>

  )
}

export default AlterarEmail