import ActionsCard from "../../components/ActionsCard";
import Navbar from "../../components/Navbar";
import { primaryItems, secondaryItems } from "../../constants/more";

const More = () => {
  return (
    <div className="py-6 px-4 flex flex-col gap-6 pb-24">
      <h1 className="text-black b2">More</h1>
      <div className="flex flex-col gap-3">
        {primaryItems.map((item, index) => (
          <ActionsCard
            key={item.title}
            {...item}
            isLast={index === primaryItems.length - 1}
          />
        ))}
      </div>
      <div className="h-1.5 bg-alice-blue -mx-4" />
      <div className="flex flex-col gap-3">
        {secondaryItems.map((item, index) => (
          <ActionsCard
            key={item.title}
            {...item}
            isLast={index === secondaryItems.length - 1}
          />
        ))}
      </div>
      <Navbar />
    </div>
  );
};

export default More;
