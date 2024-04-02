import { Routes, Route } from 'react-router-dom';
import Index from '../pages/Index';
import Login from '../pages/Login';
import Registrar from '../pages/Registro';
import Anotacoes from '../pages/Anotacoes';
import SeusRelatorios from '../pages/SeusRelatorios';
import Metas from '../pages/Metas';
import NovaAnotacao from '../pages/NovaAnotacao';
import NovaMeta from '../pages/NovaMeta';

function AppRoutes() {
  return (
    <Routes>
        <Route path='/' element={<Index />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/registrar' element={<Registrar />}></Route>
        <Route path='/anotacoes' element={<Anotacoes />}></Route>
        <Route path='/anotacoes/criar' element={<NovaAnotacao />}></Route>
        <Route path='/relatorio' element={<SeusRelatorios />}></Route>
        <Route path='/metas' element={<Metas />}></Route>
        <Route path='/metas/criar' element={<NovaMeta />}></Route>
    </Routes>
  )
}

export default AppRoutes