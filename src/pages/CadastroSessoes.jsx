import { useEffect, useState } from 'react';
import Input from '../components/Input';
import Select from '../components/Select';
import Botao from '../components/Botao';

export default function CadastroSessoes() {
  const [filmes, setFilmes] = useState([]);
  const [salas, setSalas] = useState([]);
  const [sessao, setSessao] = useState({
    filme: '',
    sala: '',
    dataHora: '',
    preco: '',
    idioma: '',
    formato: ''
  });

  useEffect(() => {
    setFilmes(JSON.parse(localStorage.getItem('filmes') || '[]'));
    setSalas(JSON.parse(localStorage.getItem('salas') || '[]'));
  }, []);

  function salvarSessao() {
    const sessoes = JSON.parse(localStorage.getItem('sessoes') || '[]');
    sessoes.push(sessao);
    localStorage.setItem('sessoes', JSON.stringify(sessoes));
    alert('Sessão salva com sucesso!');
    setSessao({ filme: '', sala: '', dataHora: '', preco: '', idioma: '', formato: '' });
  }

  return (
    <div className="container mt-4">
      <h2>Cadastro de Sessões</h2>
      <Select label="Filme" options={filmes.map(f => ({ value: f.titulo, label: f.titulo }))} value={sessao.filme} onChange={e => setSessao({ ...sessao, filme: e.target.value })} />
      <Select label="Sala" options={salas.map(s => ({ value: s.nome, label: s.nome }))} value={sessao.sala} onChange={e => setSessao({ ...sessao, sala: e.target.value })} />
      <Input label="Data e Hora" type="datetime-local" value={sessao.dataHora} onChange={e => setSessao({ ...sessao, dataHora: e.target.value })} />
      <Input label="Preço" type="number" value={sessao.preco} onChange={e => setSessao({ ...sessao, preco: e.target.value })} />
      <Select label="Idioma" options={['Dublado', 'Legendado']} value={sessao.idioma} onChange={e => setSessao({ ...sessao, idioma: e.target.value })} />
      <Select label="Formato" options={['2D', '3D']} value={sessao.formato} onChange={e => setSessao({ ...sessao, formato: e.target.value })} />
      <Botao texto="Salvar Sessão" onClick={salvarSessao} />
    </div>
  );
}
