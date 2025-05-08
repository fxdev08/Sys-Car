
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BrandLogo from '@/components/BrandLogo';
import { Calculator, MessageSquare, Share2, Heart, Check } from 'lucide-react';

// Base de dados de veículos
const vehiclesData = [
  {
    id: 1,
    imageUrl: 'https://i.postimg.cc/7LWDnMhm/Volkswagen-Gol-Highline-2023-53708009248-cropped.jpg',
    brand: 'VOLKSWAGEN',
    model: 'GOL',
    year: '2020/2021',
    km: '45.000',
    motor: '1.6 MSI FLEX MANUAL',
    price: 'R$ 58.900,00',
    location: 'São Paulo, SP',
    sellerName: 'Auto Premium São Paulo',
    sellerRating: 4.7,
    sellerSince: '2017',
    sellerVerified: true,
    images: [
      'https://i.postimg.cc/7LWDnMhm/Volkswagen-Gol-Highline-2023-53708009248-cropped.jpg',
      'https://images.unsplash.com/photo-1599912027611-484b9fc447af?q=80&w=1769&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1617469767053-8f4592b8992f?q=80&w=1771&auto=format&fit=crop'
    ],
    features: [
      'Ar condicionado',
      'Direção hidráulica',
      'Vidros elétricos',
      'Travas elétricas',
      'Airbag',
      'Alarme',
      'Som',
      'Sensor de estacionamento'
    ],
    fipePrice: 'R$ 57.600,00',
    fipeVariation: '+2,2%'
  },
  {
    id: 2,
    imageUrl: 'https://i.postimg.cc/3NMTP8gG/onix-rs-01.jpg',
    brand: 'CHEVROLET',
    model: 'ONIX',
    year: '2019/2020',
    km: '38.000',
    motor: '1.0 TURBO FLEX LT AUTOMÁTICO',
    price: 'R$ 62.500,00',
    location: 'Rio de Janeiro, RJ',
    sellerName: 'Nova Era Veículos',
    sellerRating: 4.9,
    sellerSince: '2019',
    sellerVerified: true,
    images: [
      'https://i.postimg.cc/3NMTP8gG/onix-rs-01.jpg',
      'https://images.unsplash.com/photo-1547731269-e45f2241046e?q=80&w=1769&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1560802891-2a9cf3945974?q=80&w=1974&auto=format&fit=crop'
    ],
    features: [
      'Ar condicionado',
      'Direção elétrica',
      'Vidros elétricos',
      'Travas elétricas',
      'Airbag duplo',
      'Alarme',
      'Multimídia',
      'Câmera de ré'
    ],
    fipePrice: 'R$ 60.800,00',
    fipeVariation: '+2,8%'
  },
  {
    id: 3,
    imageUrl: 'https://i.postimg.cc/85fGKJrD/360-F-309590738-R34phqyy-Tl-Qtj-Zjfs-I2mcg-S3-LNfleocw.jpg',
    brand: 'TOYOTA',
    model: 'COROLLA',
    year: '2022/2022',
    km: '15.000',
    motor: '2.0 VVT-iE FLEX XEI DIRECT SHIFT',
    price: 'R$ 122.900,00',
    location: 'Belo Horizonte, MG',
    sellerName: 'Toyota Nippon',
    sellerRating: 4.8,
    sellerSince: '2010',
    sellerVerified: true,
    images: [
      'https://i.postimg.cc/85fGKJrD/360-F-309590738-R34phqyy-Tl-Qtj-Zjfs-I2mcg-S3-LNfleocw.jpg',
      'https://images.unsplash.com/photo-1553440569-bcc63803a83d?q=80&w=1025&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1550355291-bbee04a92027?q=80&w=1036&auto=format&fit=crop'
    ],
    features: [
      'Ar condicionado digital',
      'Direção elétrica',
      'Vidros elétricos',
      'Travas elétricas',
      'Airbag 7',
      'Alarme',
      'Central multimídia',
      'Câmera 360°',
      'Bancos em couro',
      'Teto solar'
    ],
    fipePrice: 'R$ 121.500,00',
    fipeVariation: '+1,2%'
  },
  {
    id: 4,
    imageUrl: 'https://i.postimg.cc/fb0q1x5H/111024-lancer02.jpg',
    brand: 'MITSUBISHI',
    model: 'LANCER',
    year: '2013/2013',
    km: '120.000',
    motor: '2.0 GT 16V GASOLINA 4P AUTOMÁTICO',
    price: 'R$ 62.900,00',
    location: 'Curitiba, PR',
    sellerName: 'Auto Elite Veículos',
    sellerRating: 4.8,
    sellerSince: '2015',
    sellerVerified: true,
    images: [
      'https://i.postimg.cc/fb0q1x5H/111024-lancer02.jpg',
      'https://images.unsplash.com/photo-1547245324-d777c6f05e80?q=80&w=1770&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1494905998402-395d579af36f?q=80&w=1770&auto=format&fit=crop'
    ],
    features: [
      'Ar condicionado',
      'Direção hidráulica',
      'Vidros elétricos',
      'Travas elétricas',
      'Airbag',
      'Alarme',
      'Som',
      'Sensor de estacionamento'
    ],
    fipePrice: 'R$ 61.425,00',
    fipeVariation: '+2,4%'
  }
];

const VehicleDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const vehicleId = Number(id);
  
  // Encontra o veículo com o ID correspondente ou usa o primeiro como fallback
  const vehicle = vehiclesData.find(v => v.id === vehicleId) || vehiclesData[0];
  
  return (
    <div className="min-h-screen flex flex-col bg-brand-gray-100">
      <Header />
      
      <main className="flex-1 pb-8">
        {/* Galeria de Imagens */}
        <div className="relative w-full h-64 md:h-96 bg-brand-gray-300 overflow-hidden">
          <img 
            src={vehicle.images[0]} 
            alt={`${vehicle.brand} ${vehicle.model}`} 
            className="w-full h-full object-cover"
          />
          
          {/* Botões de ação na galeria */}
          <div className="absolute bottom-4 right-4 flex space-x-2">
            <button className="p-2 bg-white rounded-full text-brand-gray-600 hover:text-brand-red">
              <Share2 size={20} />
            </button>
            <button className="p-2 bg-white rounded-full text-brand-gray-600 hover:text-brand-red">
              <Heart size={20} />
            </button>
          </div>
          
          {/* Contador de imagens */}
          <div className="absolute bottom-4 left-4 bg-black bg-opacity-60 text-white px-3 py-1 rounded text-sm">
            1/{vehicle.images.length}
          </div>
        </div>
        
        {/* Informações do Veículo */}
        <div className="container mx-auto px-4 mt-6">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Coluna principal */}
            <div className="w-full lg:w-2/3">
              {/* Cabeçalho do anúncio */}
              <div className="flex items-start justify-between">
                <div>
                  <div className="flex items-center space-x-3">
                    <BrandLogo brand={vehicle.brand} size="md" />
                    <h1 className="text-2xl md:text-3xl font-bold text-brand-gray-700">
                      {vehicle.brand} {vehicle.model}
                    </h1>
                  </div>
                  <p className="text-brand-gray-500 mt-1">{vehicle.motor}</p>
                </div>
                <div>
                  <span className="text-brand-gray-500 text-sm">Código: #{vehicle.id}</span>
                </div>
              </div>
              
              {/* Preço e dados */}
              <div className="mt-6 flex flex-col md:flex-row md:items-end justify-between">
                <div>
                  <span className="text-sm text-brand-gray-500">Preço</span>
                  <h2 className="text-3xl font-bold text-brand-red">{vehicle.price}</h2>
                </div>
                
                <div className="mt-4 md:mt-0 grid grid-cols-2 gap-4">
                  <div>
                    <span className="text-sm text-brand-gray-500">Ano</span>
                    <p className="font-medium text-brand-gray-700">{vehicle.year}</p>
                  </div>
                  
                  <div>
                    <span className="text-sm text-brand-gray-500">Quilometragem</span>
                    <p className="font-medium text-brand-gray-700">{vehicle.km} km</p>
                  </div>
                </div>
              </div>
              
              {/* Botões de ação */}
              <div className="mt-6 grid grid-cols-2 gap-4">
                <button className="flex items-center justify-center space-x-2 bg-brand-red hover:bg-red-700 text-white py-3 px-6 rounded-lg transition-colors">
                  <Calculator size={20} />
                  <span className="font-medium">Ver parcelas</span>
                </button>
                
                <button className="flex items-center justify-center space-x-2 bg-white border border-brand-gray-300 hover:bg-brand-gray-100 text-brand-gray-700 py-3 px-6 rounded-lg transition-colors">
                  <MessageSquare size={20} />
                  <span className="font-medium">Enviar mensagem</span>
                </button>
              </div>
              
              {/* Tabs */}
              <div className="mt-10">
                <div className="border-b border-brand-gray-200">
                  <nav className="flex space-x-8">
                    <button className="border-b-2 border-brand-red text-brand-red font-medium py-2 px-1">
                      Veículo
                    </button>
                    <button className="text-brand-gray-500 hover:text-brand-gray-700 font-medium py-2 px-1">
                      Vendedor
                    </button>
                    <button className="text-brand-gray-500 hover:text-brand-gray-700 font-medium py-2 px-1">
                      Fipe
                    </button>
                  </nav>
                </div>
                
                {/* Conteúdo da tab */}
                <div className="py-6">
                  <h3 className="text-xl font-semibold text-brand-gray-700 mb-4">Características</h3>
                  
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-y-4">
                    {vehicle.features.map((feature, index) => (
                      <div key={index} className="flex items-center">
                        <Check size={16} className="text-brand-red mr-2" />
                        <span className="text-brand-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-8">
                    <h3 className="text-xl font-semibold text-brand-gray-700 mb-4">Descrição</h3>
                    <p className="text-brand-gray-600">
                      Veículo em excelente estado de conservação, com todos os itens de série
                      funcionando perfeitamente. Todas as revisões feitas na concessionária, 
                      documentação em dia e sem nenhum tipo de pendência.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Coluna lateral */}
            <div className="w-full lg:w-1/3">
              {/* Card do vendedor */}
              <div className="bg-white rounded-lg p-6 custom-shadow">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-bold text-lg text-brand-gray-700">{vehicle.sellerName}</h3>
                    <div className="flex items-center mt-1">
                      <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <svg 
                            key={i} 
                            xmlns="http://www.w3.org/2000/svg" 
                            className="h-4 w-4" 
                            fill={i < Math.floor(vehicle.sellerRating) ? "currentColor" : "none"} 
                            viewBox="0 0 24 24" 
                            stroke="currentColor"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                          </svg>
                        ))}
                      </div>
                      <span className="ml-2 text-sm text-brand-gray-500">{vehicle.sellerRating}/5.0</span>
                    </div>
                  </div>
                  
                  {vehicle.sellerVerified && (
                    <div className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded flex items-center">
                      <Check size={12} className="mr-1" />
                      Verificado
                    </div>
                  )}
                </div>
                
                <p className="text-sm text-brand-gray-500 mt-2">
                  Anunciante desde {vehicle.sellerSince}
                </p>
                
                <div className="mt-4">
                  <button className="w-full bg-brand-red hover:bg-red-700 text-white py-3 rounded-lg font-medium transition-colors">
                    Ver telefone
                  </button>
                  
                  <button className="w-full mt-3 border border-brand-gray-300 hover:bg-brand-gray-100 text-brand-gray-700 py-3 rounded-lg font-medium transition-colors">
                    Chat com vendedor
                  </button>
                </div>
                
                <div className="mt-5 pt-5 border-t border-brand-gray-200">
                  <p className="text-center text-sm text-brand-gray-500">
                    Viu este anúncio no Sys Car?
                  </p>
                </div>
              </div>
              
              {/* Card FIPE */}
              <div className="bg-white rounded-lg p-6 custom-shadow mt-6">
                <h3 className="font-bold text-lg text-brand-gray-700">Tabela FIPE</h3>
                
                <div className="flex items-center justify-between mt-3">
                  <span className="text-brand-gray-500">Preço médio</span>
                  <span className="font-medium text-brand-gray-700">{vehicle.fipePrice}</span>
                </div>
                
                <div className="flex items-center justify-between mt-2">
                  <span className="text-brand-gray-500">Variação</span>
                  <span className={vehicle.fipeVariation.startsWith('+') ? 'text-green-600' : 'text-red-600'}>
                    {vehicle.fipeVariation}
                  </span>
                </div>
                
                <div className="mt-4 pt-4 border-t border-brand-gray-200">
                  <p className="text-sm text-brand-gray-500">
                    Este veículo está {vehicle.fipeVariation.startsWith('+') ? 'acima' : 'abaixo'} da tabela FIPE.
                  </p>
                </div>
              </div>
              
              {/* Localização */}
              <div className="bg-white rounded-lg p-6 custom-shadow mt-6">
                <h3 className="font-bold text-lg text-brand-gray-700">Localização</h3>
                <p className="text-brand-gray-600 mt-2">{vehicle.location}</p>
                
                <div className="mt-4 h-40 bg-brand-gray-200 rounded-lg"></div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default VehicleDetail;
