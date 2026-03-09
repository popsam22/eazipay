import type { ButtonProps } from "@/interfaces/button.interface";

const Button = ({ title, bgColor = "bg-ocean-blue", onClick, disabled, loading }: ButtonProps) => {
  const isDisabled = disabled || loading;
  return (
    <button
      onClick={onClick}
      disabled={isDisabled}
      aria-disabled={isDisabled}
      aria-busy={loading}
      className={`w-full flex p-3 ${bgColor} rounded-sm justify-center items-center gap-2 ${isDisabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`}
    >
      {loading && (
        <div
          className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"
          aria-hidden="true"
        />
      )}
      {loading && <span className="sr-only">Loading…</span>}
      <h1 className="text-white b6" aria-hidden={loading ? "true" : undefined}>{title}</h1>
    </button>
  );
};

export default Button;
