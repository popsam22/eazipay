import arrow_right from "../assets/arrow-right-s-line.svg";
import type { ActionsCardProps } from "../interfaces/actionsCard.interface";

const ActionsCard = ({
  title,
  subtitle,
  value,
  type,
  icon,
  isLast,
}: ActionsCardProps) => {
  const valueColor =
    type === "profit" ? "text-sea-green" : "text-golden-gate-bridge";

  return (
    <div>
      <div className="flex justify-between items-center">
        <div className="flex gap-2">
          <img src={icon} alt="actions icon" className="object-contain w-8 h-8" />
          <div>
            <h1 className="b7 text-black">{title}</h1>
            {subtitle && <p className="r7 text-slate-gray">{subtitle}</p>}
          </div>
        </div>
        <div className="flex gap-1">
          {value && <p className={`r7 ${valueColor}`}>{value}</p>}
          <img src={arrow_right} alt="arrow right icon" className="w-4 h-4" />
        </div>
      </div>
      {!isLast && <hr className="border-t border-[#E0E0E0] mt-3" />}
    </div>
  );
};

export default ActionsCard;
