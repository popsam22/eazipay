import type { ButtonProps } from "@/interfaces/button.interface";

const Button = ({ title, bgColor = "bg-ocean-blue", onClick, disabled }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`w-full flex p-3 ${bgColor} rounded-sm justify-center ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`}
    >
      <h1 className="text-white b6">{title}</h1>
    </button>
  );
};

export default Button;
