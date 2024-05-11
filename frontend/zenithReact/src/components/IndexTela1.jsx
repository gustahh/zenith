import React from 'react'
import Button from './Button'
import { Link, useNavigate } from 'react-router-dom';

function IndexTela1() {
    return (
        <div className='w-full h-screen bg-[#F6F4EB] flex'>
            <div className='w-full text-center pt-32'>
                <h1 className='text-3xl font-bold'>Organize a sua vida.</h1>
                <h3 className='text-xl font-bold pt-5'>Organize seus pensamentos, sentimentos, rotina e
                    estipule as suas metas.
                </h3>
                
                <div className={`pt-5 flex items-center justify-center`}>
                    <Link to="/registrar">
                    <Button className='w-auto h-auto p-2 bg-verde rounded-md mr-2 text-white 
      font-bold text-sm' text='Comece a usar gratuitamente' />
                    </Link>
                    <Link to="/login">
                        <Button className='w-auto h-auto p-2 bg-transparent rounded-md mr-2 text-verde 
      font-bold text-sm' text='Já tenho uma conta' />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default IndexTela1