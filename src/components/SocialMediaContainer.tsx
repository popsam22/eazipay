import type { SocialMediaContainerProps } from "../interfaces/socialMediaContainer.interface";

const SocialMediaContainer = ({ img }: SocialMediaContainerProps) => {
  return (
    <div className="flex border-alice-blue border rounded-sm p-2 gap-2 justify-center">
      <img src={img} alt={`${img} icon`} className="object-contain w-6 h-6" />
    </div>
  );
};

export default SocialMediaContainer;
