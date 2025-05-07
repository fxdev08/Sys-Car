
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Banner from '@/components/Banner';
import ActionButton from '@/components/ActionButton';
import SearchFilter from '@/components/SearchFilter';
import CarCard from '@/components/CarCard';
import { Calculator, MessageSquare, Car } from 'lucide-react';

// Dados simulados para os carros em destaque
const featuredCars = [
  {
    id: 1,
    imageUrl: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?q=80&w=1650&auto=format&fit=crop',
    brand: 'VOLKSWAGEN',
    model: 'GOL',
    year: '2020/2021',
    price: 'R$ 58.900,00',
    km: '45.000 km',
    location: 'São Paulo, SP'
  },
  {
    id: 2,
    imageUrl: 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?q=80&w=1664&auto=format&fit=crop',
    brand: 'CHEVROLET',
    model: 'ONIX',
    year: '2019/2020',
    price: 'R$ 62.500,00',
    km: '38.000 km',
    location: 'Rio de Janeiro, RJ'
  },
  {
    id: 3,
    imageUrl: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=1770&auto=format&fit=crop',
    brand: 'TOYOTA',
    model: 'COROLLA',
    year: '2022/2022',
    price: 'R$ 122.900,00',
    km: '15.000 km',
    location: 'Belo Horizonte, MG'
  },
  {
    id: 4,
    imageUrl: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?q=80&w=1664&auto=format&fit=crop',
    brand: 'MITSUBISHI',
    model: 'LANCER',
    year: '2013/2013',
    price: 'R$ 62.900,00',
    km: '120.000 km',
    location: 'Curitiba, PR'
  },
];

const Index: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-brand-gray-100">
      <Header />
      
      <main className="flex-1">
        {/* Banner Principal */}
        <Banner 
          title="Mega Feirão - Milhares de ofertas com as melhores condições"
          subtitle="Os melhores preços e condições você encontra aqui"
        />
        
        {/* Filtro de Busca - Apenas desktop */}
        <div className="container mx-auto px-4 -mt-6 z-10 relative hidden md:block">
          <SearchFilter />
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
            <SearchFilter />
          </div>
        </section>
        
        {/* Seção de Carros em Destaque */}
        <section className="container mx-auto px-4 py-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-brand-gray-700">O que está rolando</h2>
            <a href="#" className="text-brand-red hover:underline font-medium">Ver todos</a>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredCars.map(car => (
              <CarCard 
                key={car.id} 
                {...car} 
              />
            ))}
          </div>
        </section>
        
        {/* Seção de Marcas Populares */}
        <section className="container mx-auto px-4 py-8 md:py-12">
          <h2 className="text-2xl font-bold text-brand-gray-700 mb-6">Marcas populares</h2>
          
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
            {['Volkswagen', 'Chevrolet', 'Fiat', 'Toyota', 'Ford', 'Honda'].map(brand => (
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
