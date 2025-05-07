
import React from 'react';
import { Link } from 'react-router-dom';

interface CarCardProps {
  id: number;
  imageUrl: string;
  brand: string;
  model: string;
  year: string;
  price: string;
  km: string;
  location: string;
}

const CarCard: React.FC<CarCardProps> = ({
  id,
  imageUrl,
  brand,
  model,
  year,
  price,
  km,
  location
}) => {
  return (
    <Link
      to={`/veiculo/${id}`}
      className="car-card block bg-white rounded-lg overflow-hidden custom-shadow"
    >
      <div className="relative h-48 overflow-hidden">
        <img 
          src={imageUrl} 
          alt={`${brand} ${model}`} 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-brand-gray-700 line-clamp-1">{brand} {model}</h3>
        <p className="text-sm text-brand-gray-500">{year}</p>
        <p className="text-xl font-bold text-brand-red mt-2">{price}</p>
        <div className="mt-3 pt-3 border-t border-brand-gray-200 grid grid-cols-2 gap-2 text-sm text-brand-gray-500">
          <div>{km}</div>
          <div className="text-right truncate">{location}</div>
        </div>
      </div>
    </Link>
  );
};

export default CarCard;
