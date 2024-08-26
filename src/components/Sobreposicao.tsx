import React from 'react';

interface SobreposicaoProps {
    children?: React.ReactNode;
}

const Sobreposicao: React.FC<SobreposicaoProps> = ({ children }) => {
    return (
        <>
            <div className='w-full h-full backdrop-blur-sm bg-black/10 z-10 absolute'>
                {children}
            </div>
        </>
    );
}

export default Sobreposicao;
