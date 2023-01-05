const Dropdown = ({ label, value, options, onChange }) => {

  return (
    <label>
      {label}
      <select value={value} onChange={onChange}>
        {options.map((option) => (
          <option value={option.id}>{option.label}</option>
        ))}
      </select>
    </label>

  );

};