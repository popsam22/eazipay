import arrow_right from "../assets/arrow-right-s-line.svg";
import type { ListItemsProps } from "../interfaces/listItems.interface";

const ListItems = ({
  title,
  subtitle,
  value,
  type,
  icon,
  iconBg,
  label,
  actionLabel,
  isLast,
  onClick,
}: ListItemsProps) => {
  const valueColor =
    type === "profit" ? "text-sea-green" : "text-golden-gate-bridge";

  return (
    <div>
      <div className="flex justify-between items-center">
        <div className="flex gap-2 items-center">
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center"
            style={iconBg ? { backgroundColor: iconBg } : undefined}
          >
            <img
              src={icon}
              alt={`${icon} icon`}
              className={`object-contain ${iconBg ? "w-5 h-5" : "w-6 h-6"}`}
            />
          </div>
          <div>
            {label && <p className="r7 text-slate-gray">{label}</p>}
            <h1 className="b7 text-black">{title}</h1>
            {subtitle && <p className="r7 text-slate-gray">{subtitle}</p>}
          </div>
        </div>
        <button className="flex gap-1 items-center" onClick={onClick}>
          {value && <p className={`r7 ${valueColor}`}>{value}</p>}
          {actionLabel ? (
            <p className="r7 text-celtic-blue cursor-pointer">{actionLabel}</p>
          ) : (
            <img src={arrow_right} alt="arrow right icon" className="w-4 h-4" />
          )}
        </button>
      </div>
      {!isLast && <hr className="border-t border-[#E0E0E0] mt-3" />}
    </div>
  );
};

export default ListItems;
