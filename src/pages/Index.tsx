
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Banner from '@/components/Banner';
import ActionButton from '@/components/ActionButton';
import SearchFilter from '@/components/SearchFilter';
import CarCard from '@/components/CarCard';
import { Calculator, MessageSquare, Car } from 'lucide-react';
import { carsData, Car as CarType } from '@/data/carsData';
import { toast } from "@/components/ui/use-toast";

const Index: React.FC = () => {
  const [filteredCars, setFilteredCars] = useState<CarType[]>(carsData);
  
  const handleFilterChange = (newFilteredCars: CarType[]) => {
    setFilteredCars(newFilteredCars);
    
    if (newFilteredCars.length === 0) {
      toast({
        title: "Nenhum veículo encontrado",
        description: "Tente ajustar os filtros para encontrar veículos.",
        variant: "destructive",
      });
    } else if (newFilteredCars.length < carsData.length) {
      toast({
        title: `${newFilteredCars.length} veículos encontrados`,
        description: "Filtragem concluída com sucesso.",
      });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-brand-gray-100">
      <Header />
      
      <main className="flex-1">
        {/* Banner Principal */}
        <Banner 
          title="SYS Car - Milhares de ofertas com as melhores condições"
          subtitle="Os melhores preços e condições você encontra aqui"
        />
        
        {/* Filtro de Busca - Apenas desktop */}
        <div className="container mx-auto px-4 -mt-6 z-10 relative hidden md:block">
          <SearchFilter onFilterChange={handleFilterChange} allCars={carsData} />
        </div>
        
        {/* Seção de Ações Principais */}
        <section className="container mx-auto px-4 py-8 md:py-12">
          <div className="grid grid-cols-3 gap-3 md:gap-6">
            <ActionButton 
              icon={Calculator} 
              label="Quero financiar" 
            />
            <ActionButton 
              icon={Car} 
              label="Quero comprar" 
            />
            <ActionButton 
              icon={MessageSquare} 
              label="Quero vender" 
            />
          </div>
          
          {/* Filtro de Busca - Apenas mobile */}
          <div className="mt-8 md:hidden">
            <SearchFilter onFilterChange={handleFilterChange} allCars={carsData} />
          </div>
        </section>
        
        {/* Seção de Carros em Destaque */}
        <section className="container mx-auto px-4 py-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-brand-gray-700">
              {filteredCars.length === carsData.length 
                ? "O que está rolando" 
                : `Resultados da busca (${filteredCars.length})`}
            </h2>
            {filteredCars.length !== carsData.length && (
              <button 
                onClick={() => setFilteredCars(carsData)}
                className="text-brand-red hover:underline font-medium"
              >
                Limpar filtros
              </button>
            )}
            {filteredCars.length === carsData.length && (
              <a href="#" className="text-brand-red hover:underline font-medium">Ver todos</a>
            )}
          </div>
          
          {filteredCars.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredCars.map(car => (
                <CarCard 
                  key={car.id} 
                  {...car} 
                />
              ))}
            </div>
          ) : (
            <div className="bg-white p-8 rounded-lg text-center">
              <h3 className="text-xl text-brand-gray-600 mb-4">Nenhum veículo encontrado</h3>
              <p className="text-brand-gray-500">Tente ajustar seus filtros para encontrar veículos disponíveis.</p>
            </div>
          )}
        </section>
        
        {/* Seção de Marcas Populares */}
        <section className="container mx-auto px-4 py-8 md:py-12">
          <h2 className="text-2xl font-bold text-brand-gray-700 mb-6">Marcas populares</h2>
          
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
            {['Volkswagen', 'Chevrolet', 'Fiat', 'Toyota', 'Ford', 'BYD'].map(brand => (
              <a 
                key={brand} 
                href="#" 
                className="bg-white rounded-lg p-4 flex flex-col items-center justify-center custom-shadow hover:shadow-md transition-shadow"
              >
                <div className="bg-brand-gray-100 w-12 h-12 rounded-full flex items-center justify-center mb-2">
                  <span className="text-xl font-bold text-brand-gray-600">{brand.charAt(0)}</span>
                </div>
                <span className="text-sm text-brand-gray-600">{brand}</span>
              </a>
            ))}
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
