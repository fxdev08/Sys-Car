
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-gray-700 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">MotorBrasil</h3>
            <p className="text-brand-gray-200">
              Seu portal para compra e venda de veículos novos e seminovos com as melhores condições.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-3">Links Rápidos</h4>
            <ul className="space-y-2">
              <li><a href="/" className="text-brand-gray-200 hover:text-white">Home</a></li>
              <li><a href="/" className="text-brand-gray-200 hover:text-white">Comprar</a></li>
              <li><a href="/" className="text-brand-gray-200 hover:text-white">Vender</a></li>
              <li><a href="/" className="text-brand-gray-200 hover:text-white">Financiar</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-3">Ajuda & Suporte</h4>
            <ul className="space-y-2">
              <li><a href="/" className="text-brand-gray-200 hover:text-white">Perguntas Frequentes</a></li>
              <li><a href="/" className="text-brand-gray-200 hover:text-white">Contato</a></li>
              <li><a href="/" className="text-brand-gray-200 hover:text-white">Política de Privacidade</a></li>
              <li><a href="/" className="text-brand-gray-200 hover:text-white">Termos de Uso</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-600 mt-8 pt-6 text-center text-brand-gray-300">
          <p>&copy; {new Date().getFullYear()} MotorBrasil. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
