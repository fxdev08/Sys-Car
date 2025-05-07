
import React, { useState } from 'react';
import { Search } from 'lucide-react';

const SearchFilter: React.FC = () => {
  const [searchParams, setSearchParams] = useState({
    brand: '',
    model: '',
    year: '',
    priceMin: '',
    priceMax: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setSearchParams(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Implementar a busca
    console.log('Buscando com os parâmetros:', searchParams);
  };

  return (
    <div className="bg-white rounded-lg custom-shadow p-4 md:p-6">
      <h2 className="text-xl font-bold text-brand-gray-700 mb-4">Encontre seu veículo</h2>
      
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
              <option value="fiat">Fiat</option>
              <option value="volkswagen">Volkswagen</option>
              <option value="chevrolet">Chevrolet</option>
              <option value="ford">Ford</option>
              <option value="toyota">Toyota</option>
              <option value="byd">BYD</option>
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
              <option value="onix">Onix</option>
              <option value="gol">Gol</option>
              <option value="hilux">Hilux</option>
              <option value="corolla">Corolla</option>
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
              <option value="2023">2023</option>
              <option value="2022">2022</option>
              <option value="2021">2021</option>
              <option value="2020">2020</option>
              <option value="2019">2019</option>
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
