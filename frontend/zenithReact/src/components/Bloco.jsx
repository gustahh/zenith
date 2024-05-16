import React from 'react';

const BlocoGrande = (props) => {
    return (
        <>
          <div className={`flex-none w-40 h-40 bg-${props.cor} rounded-md 
          mr-4 mb-4 flex items-center cursor-pointer`}>
            <span className='font-bold opacity-70 text-xl pl-3'>{props.titulo}</span>
          </div>
        </>
    );
};

export default BlocoGrande;