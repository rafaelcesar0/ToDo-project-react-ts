interface IInputProps {
  type?: string
  value: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  placeholder?: string
  className?: string
}

function Input({
  type = 'text',
  value,
  onChange,
  placeholder,
  className = 'bg-white border border-slate-300 outline-slate-400 px-4 py-2 rounded-md',
}: IInputProps) {
  return (
    <input
      type={type}
      value={value}
      onChange={(event) => onChange(event)}
      placeholder={placeholder}
      className={className}
    />
  )
}

export default Input
