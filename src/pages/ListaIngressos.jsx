import { useEffect, useState } from 'react';

export default function ListaIngressos() {
  const [ingressos, setIngressos] = useState([]);

  useEffect(() => {
    const dados = JSON.parse(localStorage.getItem('ingressos') || '[]');
    setIngressos(dados);
  }, []);

  return (
    <div className="container mt-4">
      <h2>Ingressos Vendidos</h2>
      {ingressos.length === 0 && <p>Nenhum ingresso vendido ainda.</p>}
      {ingressos.map((ingresso, index) => (
        <div key={index} className="border rounded p-3 mb-3">
          <p><i className="bi bi-person"></i> <strong>Cliente:</strong> {ingresso.nome}</p>
          <p><i className="bi bi-credit-card"></i> <strong>CPF:</strong> {ingresso.cpf}</p>
          <p><i className="bi bi-chair"></i> <strong>Assento:</strong> {ingresso.assento}</p>
          <p><i className="bi bi-cash-stack"></i> <strong>Pagamento:</strong> {ingresso.pagamento}</p>
          <p><i className="bi bi-film"></i> <strong>Filme:</strong> {ingresso.sessao?.filme}</p>
          <p><i className="bi bi-building"></i> <strong>Sala:</strong> {ingresso.sessao?.sala}</p>
          <p><i className="bi bi-clock-history"></i> <strong>Data e Hora:</strong> {ingresso.sessao?.dataHora}</p>
        </div>
      ))}
    </div>
  );
}
