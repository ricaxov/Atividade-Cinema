import { Link } from 'react-router-dom';

export default function Menu() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <i className="bi bi-camera-reels me-2"></i>CineFlex
        </Link>

        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ms-auto d-flex flex-row gap-3">
            <li className="nav-item">
              <Link className="nav-link" to="/cadastro-filmes">
                <i className="bi bi-film me-1"></i>Cadastro de Filmes
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/cadastro-salas">
                <i className="bi bi-building me-1"></i>Cadastro de Salas
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/cadastro-sessoes">
                <i className="bi bi-clock me-1"></i>Cadastro de Sessões
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/venda-ingressos">
                <i className="bi bi-ticket-perforated me-1"></i>Venda de Ingressos
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/sessoes">
                <i className="bi bi-calendar2-week me-1"></i>Listar Sessões
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/ingressos-vendidos">
                <i className="bi bi-person-lines-fill me-1"></i>Ingressos Vendidos
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
