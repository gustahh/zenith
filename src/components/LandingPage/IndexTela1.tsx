import Button from '../Button';
import { Link } from 'react-router-dom';
import Imagem1 from '../../img/img1.png';

function IndexTela1() {
    return (
        <div className='w-full h-screen bg-[#F6F4EB] flex flex-col items-center justify-center'>
            <div className='text-center'>
                <h1 className='text-6xl font-bold mb-4'>Organize a sua vida.</h1>
                <h3 className='text-xl font-bold mb-8'>
                    Organize seus pensamentos, sentimentos e estipule as suas metas.
                </h3>

                <div className='flex justify-center mb-8'>
                    <Link to="/registrar">
                        <Button
                            className='w-auto h-auto p-2 bg-verde rounded-md mr-2 text-white font-bold text-sm'
                            text='Comece a usar gratuitamente'
                        />
                    </Link>
                    <Link to="/login">
                        <Button
                            className='w-auto h-auto p-2 bg-transparent rounded-md mr-2 text-verde font-bold text-sm'
                            text='Já tenho uma conta'
                        />
                    </Link>
                </div>

                <div className='flex justify-center'>
                    <img
                        className='max-w-full h-auto'
                        src={Imagem1}
                        alt='Imagem de exemplo'
                        title='Designed by Freepik'
                    />
                </div>
            </div>
        </div>
    );
}

export default IndexTela1;
