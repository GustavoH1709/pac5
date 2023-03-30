export function TextInput({
  disabled = false,
  label = "",
  placeholder = "",
  onChange = (e: any) => {},
  invalid = "",
  value = "",
}) {
  return (
    <div className="my-4">
      <label className="block text-gray-700 font-bold mb-2" htmlFor={label}>
        {label}
      </label>
      <input
        className="appearance-none w-full bg-gray-100 text-gray-700 border border-gray-300 rounded py-3 px-4 leading-tight focus:outline-none focus:border-blue-500"
        type="text"
        id={label}
        value={value}
        onChange={onChange}
      />
      {invalid && <p className="text-red-600">{invalid}</p>}
    </div>
  );
}

