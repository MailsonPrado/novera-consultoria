import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import noveraLogo from '../assets/novera_logo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 novera-bg-black border-b border-gray-800">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src={noveraLogo} 
              alt="Novera Logo" 
              className="h-12 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="novera-text-white hover:novera-text-gold smooth-transition font-medium"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('quem-somos')}
              className="novera-text-white hover:novera-text-gold smooth-transition font-medium"
            >
              Quem Somos
            </button>
            <button 
              onClick={() => scrollToSection('servicos')}
              className="novera-text-white hover:novera-text-gold smooth-transition font-medium"
            >
              Serviços
            </button>
            <button 
              onClick={() => scrollToSection('contato')}
              className="novera-text-white hover:novera-text-gold smooth-transition font-medium"
            >
              Contato
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMenu}
            className="md:hidden novera-text-white hover:novera-text-gold smooth-transition"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-gray-800 pt-4">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('home')}
                className="novera-text-white hover:novera-text-gold smooth-transition font-medium text-left"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('quem-somos')}
                className="novera-text-white hover:novera-text-gold smooth-transition font-medium text-left"
              >
                Quem Somos
              </button>
              <button 
                onClick={() => scrollToSection('servicos')}
                className="novera-text-white hover:novera-text-gold smooth-transition font-medium text-left"
              >
                Serviços
              </button>
              <button 
                onClick={() => scrollToSection('contato')}
                className="novera-text-white hover:novera-text-gold smooth-transition font-medium text-left"
              >
                Contato
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;

