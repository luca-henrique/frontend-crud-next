interface ButtonProps {
  color?: 'green' | 'blue' | 'gray';
  children: any;
  className?: string;
}

export default function Button({
  children,
  color = 'gray',
  className,
}: ButtonProps) {
  return (
    <button
      className={`bg-gradient-to-r from-${color}-400 to-${color}-700 text-white px-4 py-2 rounded-md ${className}`}
    >
      {children}
    </button>
  );
}
