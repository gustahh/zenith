import Button from '../Button'
import { Link } from 'react-router-dom'

function IndexTela5() {
    return (
        <>
            <div className='w-full h-[90%] bg-[#F6F4EB] flex items-center'>
                <div className='w-full text-center p-5'>
                    <div className='w-full pb-5'>
                        <span className='text-2xl font-bold'>✨ E aí? Vamos começar? ✨</span>
                    </div>
                    <div className='w-full'>
                        <Link to="/registrar">
                            <Button className='w-auto h-auto p-2 bg-verde rounded-md mr-2 text-white 
      font-bold text-sm' text='Crie uma conta' />
                        </Link>
                    </div>
                </div>


            </div>
        </>
    )
}


export default IndexTela5