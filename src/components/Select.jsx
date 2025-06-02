export default function Select({ label, options, value, onChange }) {
  return (
    <div className="mb-3">
      <label className="form-label">{label}</label>
      <select className="form-select" value={value} onChange={onChange}>
        <option value="">Selecione...</option>
        {options.map((opt, idx) => (
          <option key={idx} value={opt.value || opt}>{opt.label || opt}</option>
        ))}
      </select>
    </div>
  );
}
