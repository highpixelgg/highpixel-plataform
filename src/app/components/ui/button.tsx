interface ButtonProps extends React.ComponentProps<"button"> {}

type Props = {
  label: string;
  onClick?: () => void;
  size: 1 | 2 | 3 | 4;
  borderounded?: boolean;
};

export const Button = ({ label, onClick, size, borderounded }: Props) => {
  return (
    <button
      className={`--font-rubik flex cursor-pointer items-center justify-center rounded-[10px] bg-[#FFFFFF] px-4 py-3 text-xl font-medium text-black transition-all hover:brightness-75 ${size === 1 && "h-14 text-lg"} ${size === 2 && "h-10 w-36 text-base"} ${size === 3 && "h-7 w-20 text-xs font-bold"} ${size === 4 && "h-7 w-20 text-xs font-bold"} ${borderounded === true && "rounded-full"}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};
