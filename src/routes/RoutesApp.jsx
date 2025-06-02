import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Menu from '../components/Menu';
import Home from '../pages/Home';
import CadastroFilmes from '../pages/CadastroFilmes';
import CadastroSalas from '../pages/CadastroSalas';
import CadastroSessoes from '../pages/CadastroSessoes';
import VendaIngressos from '../pages/VendaIngressos';
import ListaSessoes from '../pages/ListaSessoes';
import ListaIngressos from '../pages/ListaIngressos';

export default function RoutesApp() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cadastro-filmes" element={<CadastroFilmes />} />
        <Route path="/cadastro-salas" element={<CadastroSalas />} />
        <Route path="/cadastro-sessoes" element={<CadastroSessoes />} />
        <Route path="/venda-ingressos" element={<VendaIngressos />} />
        <Route path="/ingressos-vendidos" element={<ListaIngressos />} />
        <Route path="/sessoes" element={<ListaSessoes />} />
      </Routes>
    </BrowserRouter>
  );
}
