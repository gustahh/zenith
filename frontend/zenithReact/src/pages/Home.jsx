import React from 'react'
import BarraLateral from '../components/BarraLateral'
import View from '../components/View'
import BookCinza from '../icons/BookCinza'
import BookVerde from '../icons/BookVerde'
import FraseDoDia from '../components/Home/FraseDoDia'
import Cumprimento from '../components/Home/Cumprimento'
import AnotacoesRecentes from '../components/Home/AnotacoesRecentes'
function Home() {
    return (
        <>
            <View>
                <Cumprimento />
                <FraseDoDia />
                <AnotacoesRecentes />
            </View>

        </>

    )
}

export default Home