import { Routes, Route } from 'react-router-dom';
import Index from '../pages/Index';
import Login from '../pages/Login';
import Registrar from '../pages/Registro';
import Home from '../pages/Home';
import Anotacoes from '../pages/Anotacoes';
import SeusRelatorios from '../pages/SeusRelatorios';
import Metas from '../pages/Metas';
import NovaAnotacao from '../pages/NovaAnotacao';
import NovaMeta from '../pages/NovaMeta';
import View from '../components/View';

function AppRoutes() {
  return (
    <Routes>
        <Route path='/' element={<Index />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/registrar' element={<Registrar />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/anotacoes' element={<View><Anotacoes /></View>}></Route>
        <Route path='/anotacoes/criar' element={<NovaAnotacao />}></Route>
        <Route path='/relatorio' element={<View><SeusRelatorios /></View>}></Route>
        <Route path='/metas' element={<View><Metas /></View>} ></Route>
        <Route path='/metas/criar' element={<NovaMeta />}></Route>
    </Routes>
  )
}

export default AppRoutes