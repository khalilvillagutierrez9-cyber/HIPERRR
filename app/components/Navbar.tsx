'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Rocket } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0 flex items-center gap-2">
            <Rocket className="h-8 w-8 text-primary-600" />
            <span className="font-bold text-xl tracking-tight text-slate-900">BrandName</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#features" className="text-slate-600 hover:text-primary-600 transition-colors">Características</Link>
            <Link href="#testimonials" className="text-slate-600 hover:text-primary-600 transition-colors">Testimonios</Link>
            <Link href="#faq" className="text-slate-600 hover:text-primary-600 transition-colors">FAQ</Link>
            <Link 
              href="#pricing" 
              className="px-5 py-2.5 rounded-full bg-slate-900 text-white font-medium hover:bg-slate-800 transition-all hover:scale-105"
            >
              Comenzar Ahora
            </Link>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-700">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t">
          <div className="px-4 pt-4 pb-8 space-y-4 flex flex-col">
            <Link href="#features" onClick={() => setIsOpen(false)} className="text-slate-600 py-2">Características</Link>
            <Link href="#testimonials" onClick={() => setIsOpen(false)} className="text-slate-600 py-2">Testimonios</Link>
            <Link href="#pricing" onClick={() => setIsOpen(false)} className="bg-primary-600 text-white py-3 rounded-lg text-center font-bold">
              Comenzar Ahora
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}