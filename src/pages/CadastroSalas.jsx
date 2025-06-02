import { useState } from 'react';
import Input from '../components/Input';
import Select from '../components/Select';
import Botao from '../components/Botao';

export default function CadastroSalas() {
  const [sala, setSala] = useState({
    nome: '',
    capacidade: '',
    tipo: ''
  });

  function salvarSala() {
    const salas = JSON.parse(localStorage.getItem('salas') || '[]');
    salas.push(sala);
    localStorage.setItem('salas', JSON.stringify(salas));
    alert('Sala salva com sucesso!');
    setSala({ nome: '', capacidade: '', tipo: '' });
  }

  return (
    <div className="container mt-4">
      <h2>Cadastro de Salas</h2>
      <Input label="Nome da Sala" value={sala.nome} onChange={e => setSala({ ...sala, nome: e.target.value })} />
      <Input label="Capacidade" type="number" value={sala.capacidade} onChange={e => setSala({ ...sala, capacidade: e.target.value })} />
      <Select
        label="Tipo"
        options={['2D', '3D', 'IMAX']}
        value={sala.tipo}
        onChange={e => setSala({ ...sala, tipo: e.target.value })}
      />
      <Botao texto="Salvar Sala" onClick={salvarSala} />
    </div>
  );
}
