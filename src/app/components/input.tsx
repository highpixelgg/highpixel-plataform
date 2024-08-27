import { ComponentProps, forwardRef } from "react";
import { cn } from "../lib/utils";

interface InputProps extends ComponentProps<"input"> {}

export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const { className, ...rest } = props;

  return (
    <div>
      <input
        className={cn(
          "w-full rounded-[10px] border-[1px] border-[#7A7A7A] bg-transparent px-4 py-3 text-zinc-50 focus:border-[#09DD09] focus:outline-none",
          className,
        )}
        ref={ref}
        {...rest}
      />
    </div>
  );
});

Input.displayName = "Input";
