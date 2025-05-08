
import React, { useState } from 'react';
import { Search, Filter } from 'lucide-react';
import { Car } from '@/data/carsData';

interface SearchFilterProps {
  onFilterChange: (filteredCars: Car[]) => void;
  allCars: Car[];
}

const SearchFilter: React.FC<SearchFilterProps> = ({ onFilterChange, allCars }) => {
  const [searchParams, setSearchParams] = useState({
    brand: '',
    model: '',
    year: '',
    priceMin: '',
    priceMax: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    const newParams = { ...searchParams, [name]: value };
    setSearchParams(newParams);
    
    // Applying filters
    const filteredCars = filterCars(allCars, newParams);
    onFilterChange(filteredCars);
  };

  const filterCars = (cars: Car[], filters: typeof searchParams) => {
    return cars.filter(car => {
      // Brand filter
      if (filters.brand && car.brand.toLowerCase() !== filters.brand.toLowerCase()) {
        return false;
      }
      
      // Model filter
      if (filters.model && car.model.toLowerCase() !== filters.model.toLowerCase()) {
        return false;
      }
      
      // Year filter
      if (filters.year && !car.year.includes(filters.year)) {
        return false;
      }
      
      // Price range filter
      if (filters.priceMin && car.priceValue && car.priceValue < Number(filters.priceMin)) {
        return false;
      }
      
      if (filters.priceMax && car.priceValue && car.priceValue > Number(filters.priceMax)) {
        return false;
      }
      
      return true;
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Apply all filters at once
    const filteredCars = filterCars(allCars, searchParams);
    onFilterChange(filteredCars);
  };

  // Get unique brands, models and years from data for dropdowns
  const uniqueBrands = [...new Set(allCars.map(car => car.brand))];
  const uniqueModels = [...new Set(allCars.map(car => car.model))];
  const uniqueYears = [...new Set(allCars.map(car => car.year))];

  return (
    <div className="bg-white rounded-lg custom-shadow p-4 md:p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold text-brand-gray-700">Encontre seu veículo</h2>
        <Filter size={20} className="text-brand-gray-500" />
      </div>
      
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          <div className="w-full">
            <label htmlFor="brand" className="block text-sm text-brand-gray-500 mb-1">
              Marca
            </label>
            <select 
              id="brand"
              name="brand"
              value={searchParams.brand}
              onChange={handleChange}
              className="w-full border border-brand-gray-200 rounded-md p-2 text-brand-gray-600 focus:outline-none focus:ring-2 focus:ring-brand-red"
            >
              <option value="">Todas as marcas</option>
              {uniqueBrands.map(brand => (
                <option key={brand} value={brand}>{brand}</option>
              ))}
            </select>
          </div>
          
          <div className="w-full">
            <label htmlFor="model" className="block text-sm text-brand-gray-500 mb-1">
              Modelo
            </label>
            <select 
              id="model"
              name="model"
              value={searchParams.model}
              onChange={handleChange}
              className="w-full border border-brand-gray-200 rounded-md p-2 text-brand-gray-600 focus:outline-none focus:ring-2 focus:ring-brand-red"
            >
              <option value="">Todos os modelos</option>
              {uniqueModels.map(model => (
                <option key={model} value={model}>{model}</option>
              ))}
            </select>
          </div>
          
          <div className="w-full">
            <label htmlFor="year" className="block text-sm text-brand-gray-500 mb-1">
              Ano
            </label>
            <select 
              id="year"
              name="year"
              value={searchParams.year}
              onChange={handleChange}
              className="w-full border border-brand-gray-200 rounded-md p-2 text-brand-gray-600 focus:outline-none focus:ring-2 focus:ring-brand-red"
            >
              <option value="">Todos os anos</option>
              {uniqueYears.map(year => (
                <option key={year} value={year}>{year}</option>
              ))}
            </select>
          </div>
          
          <div className="w-full">
            <label htmlFor="price" className="block text-sm text-brand-gray-500 mb-1">
              Faixa de Preço
            </label>
            <div className="flex items-center space-x-2">
              <select 
                id="priceMin"
                name="priceMin"
                value={searchParams.priceMin}
                onChange={handleChange}
                className="w-full border border-brand-gray-200 rounded-md p-2 text-brand-gray-600 focus:outline-none focus:ring-2 focus:ring-brand-red"
              >
                <option value="">De:</option>
                <option value="20000">R$ 20.000</option>
                <option value="40000">R$ 40.000</option>
                <option value="60000">R$ 60.000</option>
                <option value="80000">R$ 80.000</option>
              </select>
              
              <select 
                id="priceMax"
                name="priceMax"
                value={searchParams.priceMax}
                onChange={handleChange}
                className="w-full border border-brand-gray-200 rounded-md p-2 text-brand-gray-600 focus:outline-none focus:ring-2 focus:ring-brand-red"
              >
                <option value="">Até:</option>
                <option value="40000">R$ 40.000</option>
                <option value="60000">R$ 60.000</option>
                <option value="80000">R$ 80.000</option>
                <option value="100000">R$ 100.000</option>
                <option value="150000">R$ 150.000</option>
              </select>
            </div>
          </div>
          
          <div className="w-full flex items-end">
            <button 
              type="submit" 
              className="w-full bg-brand-red hover:bg-red-700 text-white rounded-md p-2 flex items-center justify-center font-medium transition-colors"
            >
              <Search size={18} className="mr-2" />
              Buscar
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SearchFilter;
