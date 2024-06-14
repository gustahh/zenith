import React from 'react';
import Button from '../../components/Button';
import Voltar from '../../icons/Voltar';
import Label from '../../components/Label';
import Input from '../../components/Input';

function AlterarSenha() {
    return (
        <>
            <div>
                <Voltar fill="#999999" />
                <span className='text-xl font-bold text-cinzaTexto pb-3'>Alterar Senha</span>

            </div>
            <div>
                <Label nome="Senha atual"></Label>
                <Input type="password" name="novoEmail" placeholder="Digite a sua senha atual"></Input>

                <Label nome="Nova senha"></Label>
                <Input type="password" name="novoEmail" placeholder="Digite a sua nova senha"></Input>
                <Button type="submit" className="w-20 h-10 pr-1 bg-verde rounded-md text-white
      font-bold text-sm text-center" text="Salvar"></Button>
            </div>

        </>

    )
}

export default AlterarSenha