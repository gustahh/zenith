import React from 'react';
import View from '../../components/View';
import FraseDoDia from '../../components/Home/FraseDoDia';
import Cumprimento from '../../components/Home/Cumprimento';
import AnotacoesRecentes from '../../components/Home/AnotacoesRecentes';

const Home: React.FC = () => {
    return (
        <>
            <View>
                <Cumprimento />
                <FraseDoDia />
                <AnotacoesRecentes />
            </View>
        </>
    );
};

export default Home;
