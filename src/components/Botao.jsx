export default function Botao({ texto, onClick }) {
  return <button className="btn btn-primary mt-3" onClick={onClick}>{texto}</button>;
}
