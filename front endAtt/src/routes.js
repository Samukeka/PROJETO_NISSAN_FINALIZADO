import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Erro from './pages/Erro';
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Login from './pages/Login';
import Loja from './pages/Loja';
import Header from './components/Header';
import Cadastro from './pages/NovoUsuario';

function RouterApp(props) {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home texto={props.texto} />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/loja" element={<Loja />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="*" element={<Erro />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RouterApp;