import Tela1 from '../../img/tela-1.png';

function IndexTela2() {
    return (
        <div className='w-full h-screen flex justify-center items-center bg-[#F6F4EB]'>
            <div className='w-full max-w-4xl flex flex-col md:flex-row items-center p-5'>
                <div className='w-full md:w-1/2 flex justify-center mb-5 md:mb-0'>
                    <img
                        className='max-w-full h-auto'
                        src={Tela1}
                        alt='Tela de exemplo'
                        title='Tela de exemplo'
                    />
                </div>
                <div className='w-full md:w-1/2 p-5 text-center md:text-left'>
                    <span className='block text-4xl md:text-6xl font-bold text-cinzaTexto mb-4'>
                        Registre seus momentos
                    </span>
                    <p className='text-xl text-cinzaTexto'>
                        Crie quantas anotações quiser diariamente. Registre seus sentimentos.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default IndexTela2;
