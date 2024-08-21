interface ButtonProps extends React.ComponentProps<"button"> {}

export default function Button({ children, ...props }: ButtonProps) {
  return (
    <button
      className="w-full rounded-[10px] bg-gradient-to-r from-[#40D040] to-[#004B00] px-4 py-3 text-xl font-medium uppercase transition-all hover:brightness-75"
      {...props}
    >
      {children}
    </button>
  );
}
