import { Routes, Route, Navigate } from 'react-router-dom';
import Index from '../pages/Index';
import Login from '../pages/Login/Login';
import Registrar from '../pages/Registro/Registro';
import Home from '../pages/Home/Home';
import Anotacoes from '../pages/Anotacoes/Anotacoes';
import Arquivadas from '../pages/Anotacoes/Arquivadas';
import SeusRelatorios from '../pages/Relatorio/SeusRelatorios';
import TodosRelatorios from '../components/Relatório/TodosRelatorios';
import Relatorio from '../pages/Relatorio/Relatorio';
import Metas from '../pages/Meta/Metas';
import NovaAnotacao from '../pages/Anotacoes/NovaAnotacao';
import ArquivarAnotacao from '../pages/Anotacoes/ArquivarAnotacao';
import FixarAnotacao from '../pages/Anotacoes/FixarAnotacao';
import DesafixarAnotacao from '../pages/Anotacoes/DesafixarAnotacao';
import NovaMeta from '../pages/Meta/NovaMeta';
import EditarMeta from '../pages/Meta/EditarMeta';
import DeletarMeta from '../pages/Meta/DeletarMeta';
import Configuracoes from '../pages/Configuracoes/Configuracoes';
import SuaConta from '../pages/Configuracoes/SuaConta';
import PaginaNaoEncontrada from '../pages/PaginaNaoEncontrada';
import View from '../components/View';
import ViewConfiguracao from '../components/ViewConfiguracao'
import usePreviousLocation from './hook';
import Aparencia from '../pages/Configuracoes/Aparencia';
import PrivacidadeConta from '../components/Autentificacao/PrivacidadeConta';
import ConfirmarSenha from '../pages/Configuracoes/ConfirmarSenha'
import AlterarEmail from '../pages/Configuracoes/AlterarEmail';
import AlterarSenha from '../pages/Configuracoes/AlterarSenha';
import EditarPerfil from '../pages/Configuracoes/EditarPerfil';
import EscolherPergunta from '../components/Autentificacao/EscolherPergunta';

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

      //anotacoes
      <Route path='/anotacoes' element={token ? <View><Anotacoes /></View> : <Navigate to="/login" />} />
      <Route path='/anotacoes/arquivadas' element={token ? <View><Arquivadas /></View> : <Navigate to="/login" />} />
      <Route path='/anotacoes/:id' element={token ? <> <NovaAnotacao /> <View> {prevLocation.pathname === "/anotacoes" ? <Anotacoes /> : <Home />}</View></> : <Navigate to="/login" />} />
      <Route path='/anotacoes/arquivar/:id' element={token ? <> <ArquivarAnotacao /> <View> {prevLocation.pathname === "/anotacoes" ? <Anotacoes /> : <Home />}</View></> : <Navigate to="/login" />} />
      <Route path='/anotacoes/fixar/:id' element={token ? <> <FixarAnotacao /> <View> {prevLocation.pathname === "/anotacoes" ? <Anotacoes /> : <Home />}</View></> : <Navigate to="/login" />} />
      <Route path='/anotacoes/desafixar/:id' element={token ? <> <DesafixarAnotacao /> <View> {prevLocation.pathname === "/anotacoes" ? <Anotacoes /> : <Home />}</View></> : <Navigate to="/login" />} />

      //relatorio
      <Route path='/relatorio' element={token ? <View><SeusRelatorios /></View> : <Navigate to="/login" />} />
      <Route path='/relatorio/todos' element={token ? <View><TodosRelatorios /></View> : <Navigate to="/login" />} />
      <Route path='/relatorio/:id' element={token ? <View><Relatorio /></View> : <Navigate to="/login" />} />

      //metas
      <Route path='/metas' element={token ? <View><Metas /></View> : <Navigate to="/login" />} />
      <Route path='/metas/criar' element={token ? <><NovaMeta /><View><Metas /></View></> : <Navigate to="/login" />} />
      <Route path='/metas/editar/:id' element={token ? <><EditarMeta /><View><Metas /></View></> : <Navigate to="/login" />} />
      <Route path='/metas/deletar/:id' element={token ? <><DeletarMeta /><View><Metas /></View></> : <Navigate to="/login" />} />

      //config
      <Route path='/config' element={token ? <View><Configuracoes /><ViewConfiguracao></ViewConfiguracao></View> : <Navigate to="/login" />} />
      <Route path='/config/suaconta' element={token ? <View><Configuracoes /><ViewConfiguracao><SuaConta /></ViewConfiguracao></View> : <Navigate to="/login" />} />
      <Route path='/config/suaconta/alterarEmail' element={token ? <View><Configuracoes /><ViewConfiguracao><AlterarEmail /></ViewConfiguracao></View> : <Navigate to="/login" />} />
      <Route path='/config/suaconta/alterarSenha' element={token ? <View><Configuracoes /><ViewConfiguracao><AlterarSenha /></ViewConfiguracao></View> : <Navigate to="/login" />} />
      <Route path='/config/suaconta/editarPerfil' element={token ? <View><Configuracoes /><ViewConfiguracao><EditarPerfil /></ViewConfiguracao></View> : <Navigate to="/login" />} />
      <Route path='/config/aparencia' element={token ? <View><Configuracoes /><ViewConfiguracao><Aparencia /></ViewConfiguracao></View> : <Navigate to="/login" />} />
      <Route path='/config/PrivacidadeConta' element={token ? <View><Configuracoes /><ViewConfiguracao><PrivacidadeConta /></ViewConfiguracao></View> : <Navigate to="/login" />} />
      <Route path='/config/ConfirmarSenha' element={token ? <View><Configuracoes /><ConfirmarSenha /><ViewConfiguracao></ViewConfiguracao></View> : <Navigate to="/login" />} />
      <Route path='/config/privacidadeconta/2FA/pergunta' element={token ? <><EscolherPergunta /><View><Configuracoes /></View></> : <Navigate to="/login" />} />
     


      <Route path='*' element={<PaginaNaoEncontrada />} />
    </Routes>
  )
}

export default AppRoutes