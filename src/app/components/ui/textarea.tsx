type Props = {
  placeholder: string;
  rows: number;
  value?: string;
};

export const TextArea = ({ placeholder, rows, value }: Props) => {
  return (
    <div className="flex items-center rounded-3xl border-2 border-[#3b3b3b] has-[:focus]:border-white">
      <textarea
        className="h-full flex-1 resize-none bg-transparent p-5 outline-none"
        rows={rows}
        value={value}
        placeholder={placeholder}
      ></textarea>
    </div>
  );
};
