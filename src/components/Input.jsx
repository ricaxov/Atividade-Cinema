export default function Input({ label, type = "text", value, onChange }) {
  return (
    <div className="mb-3">
      <label className="form-label">{label}</label>
      <input
        type={type}
        className="form-control"
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
