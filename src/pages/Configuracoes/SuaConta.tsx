import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/Button';
import Label from '../../components/Label';
import axios from 'axios';

interface ImagemProps {
  foto: string;
}

const Imagem: React.FC<ImagemProps> = ({ foto }) => {
  const caminho = `/src/img/${foto}`;

  return (
    <img src={caminho} alt={foto} />
  );
};

const SuaConta: React.FC = () => {
  const [nome, setNome] = useState<string>('');
  const [foto, setFoto] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [senha, setSenha] = useState<string>('');

  useEffect(() => {
    const token = localStorage.getItem('token');

    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    axios.get('http://localhost:3000/perfil')
      .then((res) => {
        setNome(res.data.results[0].nome);
        setFoto(res.data.results[0].foto_perfil);
        setEmail(res.data.results[0].email);
        setSenha(res.data.results[0].senha);
      });
  }, []);

  return (
    <div>
      <span className='text-xl font-bold text-cinzaTexto pb-3'>Sua conta</span>

      <div className='w-full h-auto bg-black/5 rounded-md pt-3 pr-10'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center'>
            <div className='w-20 h-20 rounded-full overflow-hidden'>
              <Imagem foto={foto} />
            </div>
            <span className='text-xl font-bold text-cinzaTexto pl-3'>{nome}</span>
          </div>

          <div>
            <Link to='editarPerfil'>
              <Button type="submit" className="w-auto h-10 pr-1 bg-verde rounded-md text-white font-bold text-sm text-center" text="Editar perfil" />
            </Link>
          </div>
        </div>

        <div className='w-full h-20 p-2'>
          <div className='w-full h-auto flex items-center'>
            <Label nome="E-mail" />
          </div>

          <div className='flex items-center justify-between'>
            <span className='float-left text-cinzaTexto'>{email}</span>
            <Link to='alterarEmail'>
              <Button type="submit" className="w-20 h-10 pr-1 bg-cinzaTexto rounded-md text-white text-center font-bold text-sm" text="Editar" />
            </Link>
          </div>
        </div>

        <div className='w-full h-20 p-2'>
          <div className='w-full h-auto flex items-center'>
            <Label nome="Senha" />
          </div>

          <div className='flex items-center justify-between'>
            <span className='float-left text-cinzaTexto'>Alterar sua senha</span>
            <Link to='alterarSenha'>
              <Button type="submit" className="w-20 h-10 pr-1 bg-cinzaTexto rounded-md text-white text-center font-bold text-sm" text="Editar" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuaConta;
