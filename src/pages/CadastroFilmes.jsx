import { useState } from 'react';
import Input from '../components/Input';
import Botao from '../components/Botao';

export default function CadastroFilmes() {
  const [filme, setFilme] = useState({
    titulo: '',
    descricao: '',
    genero: '',
    classificacao: '',
    duracao: '',
    estreia: ''
  });

  function salvarFilme() {
    const filmes = JSON.parse(localStorage.getItem('filmes') || '[]');
    filmes.push(filme);
    localStorage.setItem('filmes', JSON.stringify(filmes));
    alert('Filme salvo com sucesso!');
    setFilme({ titulo: '', descricao: '', genero: '', classificacao: '', duracao: '', estreia: '' });
  }

  return (
    <div className="container mt-4">
      <h2>Cadastro de Filmes</h2>
      <Input label="Título" value={filme.titulo} onChange={e => setFilme({ ...filme, titulo: e.target.value })} />
      <Input label="Descrição" value={filme.descricao} onChange={e => setFilme({ ...filme, descricao: e.target.value })} />
      <Input label="Gênero" value={filme.genero} onChange={e => setFilme({ ...filme, genero: e.target.value })} />
      <Input label="Classificação Indicativa" value={filme.classificacao} onChange={e => setFilme({ ...filme, classificacao: e.target.value })} />
      <Input label="Duração (minutos)" type="number" value={filme.duracao} onChange={e => setFilme({ ...filme, duracao: e.target.value })} />
      <Input label="Data de Estreia" type="date" value={filme.estreia} onChange={e => setFilme({ ...filme, estreia: e.target.value })} />
      <Botao texto="Salvar Filme" onClick={salvarFilme} />
    </div>
  );
}
