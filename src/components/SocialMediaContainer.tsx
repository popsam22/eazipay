import type { SocialMediaContainerProps } from "@/interfaces/socialMediaContainer.interface";

const SocialMediaContainer = ({ img }: SocialMediaContainerProps) => {
  return (
    <div className="flex border-alice-blue dark:border-gray-600 border rounded-sm p-2 gap-2 justify-center dark:bg-gray-800">
      <img src={img} alt={`${img} icon`} className="object-contain w-6 h-6" />
    </div>
  );
};

export default SocialMediaContainer;
