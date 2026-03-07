import type { TextInputProps } from "../interfaces/textInput.interface";

const TextInput = ({
  label,
  placeholder,
  type = "text",
  icon,
  iconOnClick,
}: TextInputProps) => {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-black r7"> {label}</label>
      <div className="flex justify-between border  border-azureish-white rounded-sm p-3 gap-2">
        <input
          type={type}
          placeholder={placeholder}
          className="r6 placeholder:text-silver-sand bg-inherit w-full outline-none"
        />
        {icon && (
          <img
            src={icon}
            alt={`${icon} icon`}
            className="w-5 h-5"
            onClick={iconOnClick}
            style={iconOnClick ? { cursor: "pointer" } : undefined}
          />
        )}
      </div>
    </div>
  );
};

export default TextInput;
