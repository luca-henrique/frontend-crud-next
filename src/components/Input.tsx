interface InputProps {
  text?: string;
  value?: string;
  onChange?: (string) => void;
  type?: string;
  readOnly?: boolean;
}

export default function Input({
  text,
  type = 'text',
  value,
  onChange,
  readOnly,
}: InputProps) {
  return (
    <div className='flex flex-col'>
      <label className='my-2'>{text}</label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        readOnly={readOnly}
        className={`border border-purple-500 rounded-lg focus:outline-none bg-gray-100 px-4 py-2 ${
          readOnly ? '' : 'focus:bg-white'
        }`}
      />
    </div>
  );
}
