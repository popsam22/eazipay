import type { ButtonProps } from "../interfaces/button.interface";

const Button = ({ title, bgColor = "bg-ocean-blue", onClick }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`w-full flex p-3 ${bgColor} rounded-sm justify-center`}
    >
      <h1 className="text-white b6">{title}</h1>
    </button>
  );
};

export default Button;
