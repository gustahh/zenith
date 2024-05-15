import React from 'react';
import Erro404 from '../img/404.png';
import { Link, useNavigate } from 'react-router-dom';

function PaginaNaoEncontrada() {
  return (
    <>
      <div className='w-full h-screen bg-verdeLimao flex flex-col items-center 
      justify-center'>
        <span className='font-bold opacity-70 text-6xl pt-10'>
          Oooops, essa página não existe.
        </span>
        <span className='font-bold opacity-70 text-md pt-5'>
          Foque no que realmente existe:
          <Link to="/home" className='underline pl-1'>
            Ir para a página inicial do Zenith!
          </Link>
        </span>

        <div className='pb-30 text-center'>
          <img src={Erro404} alt="" />
          <span className='font-bold opacity-50'>
            <a href="https://www.freepik.com/free-vector/404-error-with-tired-person-concept-illustration_20602776.htm#fromView=search&page=1&position=49&uuid=ae588b4a-d5cc-4572-94c4-5876c9d0f1de">
              Image by storyset on Freepik
            </a>
          </span>
        </div>

      </div>

    </>

  )
}

export default PaginaNaoEncontrada