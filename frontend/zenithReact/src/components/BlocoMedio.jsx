import React from 'react';

const BlocoMedio = (props) => {
    return (
        <>
            <div className={`flex-initial w-64 h-20 bg-${props.cor} rounded-md ml-4 mb-4`}>
                {props.titulo}
            </div>
        </>
    );
};

export default BlocoMedio;