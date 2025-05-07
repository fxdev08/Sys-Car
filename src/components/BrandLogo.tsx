
import React from 'react';

interface BrandLogoProps {
  brand: string;
  size?: 'sm' | 'md' | 'lg';
}

const BrandLogo: React.FC<BrandLogoProps> = ({ brand, size = 'md' }) => {
  const getBrandLogo = (brand: string) => {
    // Simulação: na prática seria bom ter logos reais
    const brandLowercase = brand.toLowerCase();
    const sizeClass = {
      sm: 'w-6 h-6',
      md: 'w-10 h-10',
      lg: 'w-16 h-16'
    }[size];

    return (
      <div className={`${sizeClass} rounded-full bg-brand-gray-200 flex items-center justify-center overflow-hidden`}>
        <span className="uppercase font-bold text-brand-gray-600">{brand[0]}</span>
      </div>
    );
  };

  return getBrandLogo(brand);
};

export default BrandLogo;
