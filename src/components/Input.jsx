/* eslint-disable react/prop-types */
const Input = ({value, type, placeholder, id, onChange, name }) => {
  return (
    <input
      className="h-10 w-full border rounded-md p-2 outline-none mt-3"
      value={value}
      type={type}
      id={id}
      name={name}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
};

export default Input;
