import { useState, useEffect } from 'react';
import Input from '../components/Input';
import Select from '../components/Select';
import Botao from '../components/Botao';

export default function VendaIngressos() {
  const [sessao, setSessao] = useState({});
  const [ingresso, setIngresso] = useState({
    nome: '',
    cpf: '',
    assento: '',
    pagamento: ''
  });

  useEffect(() => {
    const s = JSON.parse(localStorage.getItem('sessaoSelecionada'));
    setSessao(s || {});
  }, []);

  function confirmarVenda() {
    const ingressos = JSON.parse(localStorage.getItem('ingressos') || '[]');
    ingressos.push({ ...ingresso, sessao });
    localStorage.setItem('ingressos', JSON.stringify(ingressos));
    alert('Venda confirmada!');
    setIngresso({ nome: '', cpf: '', assento: '', pagamento: '' });
  }

  return (
    <div className="container mt-4">
      <h2>Venda de Ingressos</h2>
      {sessao?.filme && (
        <div className="mb-3">
          <strong>Filme:</strong> {sessao.filme} <br />
          <strong>Data:</strong> {sessao.dataHora} <br />
          <strong>Sala:</strong> {sessao.sala}
        </div>
      )}
      <Input label="Nome do Cliente" value={ingresso.nome} onChange={e => setIngresso({ ...ingresso, nome: e.target.value })} />
      <Input label="CPF" value={ingresso.cpf} onChange={e => setIngresso({ ...ingresso, cpf: e.target.value })} />
      <Input label="Assento" value={ingresso.assento} onChange={e => setIngresso({ ...ingresso, assento: e.target.value })} />
      <Select label="Tipo de Pagamento" options={['Cartão', 'Pix', 'Dinheiro']} value={ingresso.pagamento} onChange={e => setIngresso({ ...ingresso, pagamento: e.target.value })} />
      <Botao texto="Confirmar Venda" onClick={confirmarVenda} />
    </div>
  );
}
