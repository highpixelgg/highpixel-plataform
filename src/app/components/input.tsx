import { ComponentProps, forwardRef } from "react";

interface InputProps extends ComponentProps<"input"> { }

export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  return (
    <div >
      <input
        className="w-full rounded-[10px] border-[1px] border-[#7A7A7A] bg-transparent px-4 py-3 focus:border-[#09DD09] focus:outline-none"
        ref={ref}
        {...props}
      />
    </div>
  )
})
Input.displayName = "Input";