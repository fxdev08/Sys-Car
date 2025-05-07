
import React from 'react';
import { AspectRatio } from "@/components/ui/aspect-ratio";

interface BannerProps {
  imageUrl?: string;
  title: string;
  subtitle?: string;
}

const Banner: React.FC<BannerProps> = ({ imageUrl, title, subtitle }) => {
  return (
    <div className="relative w-full overflow-hidden">
      <AspectRatio ratio={16/5} className="w-full">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-r from-brand-red to-red-700" />
        )}
      </AspectRatio>
      
      <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center text-white p-6">
        <h1 className="text-2xl md:text-3xl font-bold text-center">{title}</h1>
        {subtitle && <p className="mt-2 text-center max-w-2xl">{subtitle}</p>}
      </div>
    </div>
  );
};

export default Banner;
