import { Routes, Route, Navigate } from 'react-router-dom';
import Index from '../pages/Index';
import Login from '../pages/Login';
import Registrar from '../pages/Registro';
import Home from '../pages/Home';
import Anotacoes from '../pages/Anotacoes';
import SeusRelatorios from '../pages/SeusRelatorios';
import Relatorio from '../pages/Relatorio';
import Metas from '../pages/Metas';
import NovaAnotacao from '../pages/NovaAnotacao';
import DeletarAnotacao from '../pages/DeletarAnotacao';
import NovaMeta from '../pages/NovaMeta';
import EditarMeta from '../pages/EditarMeta';
import DeletarMeta from '../pages/DeletarMeta';
import Configuracoes from '../pages/Configuracoes';
import SuaConta from '../pages/SuaConta';
import PaginaNaoEncontrada from '../pages/PaginaNaoEncontrada';
import View from '../components/View';
import ViewConfiguracao from '../components/ViewConfiguracao'
import usePreviousLocation from './hook';

function AppRoutes() {
  const prevLocation = usePreviousLocation();

  const token = localStorage.getItem('token');

  return (
    <Routes>
      // Caso exista o token, redireciona para home, caso não mantém na pagina
      <Route path='/' element={<Index />} />
      <Route path='/login' element={token ? <Navigate to="/home" /> : <Login />} />
      <Route path='/registrar' element={token ? <Navigate to="/home" /> : <Registrar />} />

      // Caso exista o token, mantém na página, caso contrário redireciona para login
      <Route path='/home' element={token ? <Home /> : <Navigate to="/login" />} />
      <Route path='/anotacoes' element={token ? <View><Anotacoes /></View> : <Navigate to="/login" />} />
      <Route path='/anotacoes/:id' element={token ? <> <NovaAnotacao /> <View> {prevLocation.pathname === "/anotacoes" ? <Anotacoes /> : <Home />}</View></> : <Navigate to="/login" />} />
      <Route path='/anotacoes/deletar/:id' element={token ? <> <DeletarAnotacao /> <View> {prevLocation.pathname === "/anotacoes" ? <Anotacoes /> : <Home />}</View></> : <Navigate to="/login" />} />
      <Route path='/relatorio' element={token ? <View><SeusRelatorios /></View> : <Navigate to="/login" />} />
      <Route path='/relatorio/:id' element={token ? <View><Relatorio /></View> : <Navigate to="/login" />} />
      <Route path='/metas' element={token ? <View><Metas /></View> : <Navigate to="/login" />} />
      <Route path='/metas/criar' element={token ? <><NovaMeta /><View><Metas /></View></> : <Navigate to="/login" />} />
      <Route path='/metas/editar/:id' element={token ? <><EditarMeta /><View><Metas /></View></> : <Navigate to="/login" />} />
      <Route path='/metas/deletar/:id' element={token ? <><DeletarMeta /><View><Metas /></View></> : <Navigate to="/login" />} />
      <Route path='/config' element={token ? <View><Configuracoes /><ViewConfiguracao></ViewConfiguracao></View> : <Navigate to="/login" />} />
      <Route path='/config/suaconta' element={token ? <View><Configuracoes /><SuaConta /><ViewConfiguracao></ViewConfiguracao></View> : <Navigate to="/login" />} />

      <Route path='*' element={<PaginaNaoEncontrada />} />
    </Routes>
  )
}

export default AppRoutes