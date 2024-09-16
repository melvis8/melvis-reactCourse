import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
  type: string;
  placeholder: string;
}

export const Input: React.FC<InputProps> = (props:InputProps) => {  
  return (
    <div className="flex flex-col justify-center gap-6 w-[20rem]">
      <label htmlFor={props.name} className="text-4xl font-bold text-secondary_color">{props.label}</label>
      <div className="relative w-[42rem] h-[2rem]">
        <input 
          id={props.name}
          className="w-full h-full outline-none rounded-[1.2rem] border-[0.1rem] border-solid border-border_color p-12 text-[1.6rem]"
        />
      </div>
    </div>
  )
}