
export interface Car {
  id: number;
  imageUrl: string;
  brand: string;
  model: string;
  year: string;
  price: string;
  km: string;
  location: string;
  priceValue?: number; // Numeric value for filtering
}

// Dados simulados para os carros em destaque
export const carsData: Car[] = [
  {
    id: 1,
    imageUrl: 'https://i.postimg.cc/7LWDnMhm/Volkswagen-Gol-Highline-2023-53708009248-cropped.jpg',
    brand: 'VOLKSWAGEN',
    model: 'GOL',
    year: '2020/2021',
    price: 'R$ 58.900,00',
    priceValue: 58900,
    km: '45.000 km',
    location: 'São Paulo, SP'
  },
  {
    id: 2,
    imageUrl: 'https://i.postimg.cc/3NMTP8gG/onix-rs-01.jpg',
    brand: 'CHEVROLET',
    model: 'ONIX',
    year: '2019/2020',
    price: 'R$ 62.500,00',
    priceValue: 62500,
    km: '38.000 km',
    location: 'Rio de Janeiro, RJ'
  },
  {
    id: 3,
    imageUrl: 'https://i.postimg.cc/85fGKJrD/360-F-309590738-R34phqyy-Tl-Qtj-Zjfs-I2mcg-S3-LNfleocw.jpg',
    brand: 'TOYOTA',
    model: 'COROLLA',
    year: '2022/2022',
    price: 'R$ 122.900,00',
    priceValue: 122900,
    km: '15.000 km',
    location: 'Belo Horizonte, MG'
  },
  {
    id: 4,
    imageUrl: 'https://i.postimg.cc/fb0q1x5H/111024-lancer02.jpg',
    brand: 'MITSUBISHI',
    model: 'LANCER',
    year: '2013/2013',
    price: 'R$ 62.900,00',
    priceValue: 62900,
    km: '120.000 km',
    location: 'Curitiba, PR'
  },
];
