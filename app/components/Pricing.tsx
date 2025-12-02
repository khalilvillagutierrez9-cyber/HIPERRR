import { Check } from 'lucide-react';
import Link from 'next/link';

const tiers = [
  {
    name: 'Básico',
    price: '29',
    description: 'Perfecto para comenzar',
    features: ['1 Usuario', '5 Proyectos', 'Analíticas Básicas', 'Soporte por Email'],
    cta: 'Comenzar Gratis',
    mostPopular: false,
  },
  {
    name: 'Pro',
    price: '79',
    description: 'Para negocios en crecimiento',
    features: ['5 Usuarios', 'Proyectos Ilimitados', 'Analíticas Avanzadas', 'Soporte Prioritario 24/7', 'API Access'],
    cta: 'Obtener Pro',
    mostPopular: true,
  },
  {
    name: 'Empresa',
    price: '199',
    description: 'Escalabilidad total',
    features: ['Usuarios Ilimitados', 'Seguridad Dedicada', 'SLA Garantizado', 'Gerente de Cuenta', 'Entrenamiento Personalizado'],
    cta: 'Contactar Ventas',
    mostPopular: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">Planes Simples y Transparentes</h2>
          <p className="text-xl text-slate-600">Sin contratos ocultos. Cancela cuando quieras.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {tiers.map((tier) => (
            <div 
              key={tier.name}
              className={`relative rounded-2xl p-8 bg-white border ${tier.mostPopular ? 'border-primary-500 shadow-xl scale-105 z-10' : 'border-slate-200 shadow-sm'}`}
            >
              {tier.mostPopular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary-600 text-white px-4 py-1 rounded-full text-sm font-bold tracking-wide uppercase">
                  Más Popular
                </div>
              )}
              
              <div className="text-center">
                <h3 className="text-xl font-bold text-slate-900">{tier.name}</h3>
                <p className="text-sm text-slate-500 mt-2">{tier.description}</p>
                <div className="mt-6 flex items-baseline justify-center gap-1">
                  <span className="text-4xl font-extrabold text-slate-900">${tier.price}</span>
                  <span className="text-slate-500">/mes</span>
                </div>
              </div>

              <ul className="mt-8 space-y-4">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary-600 flex-shrink-0" />
                    <span className="text-slate-700 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <Link
                  href="#"
                  className={`block w-full py-3 px-4 rounded-lg text-center font-bold transition-all ${
                    tier.mostPopular 
                      ? 'bg-primary-600 text-white hover:bg-primary-700 shadow-lg shadow-primary-500/30' 
                      : 'bg-slate-100 text-slate-900 hover:bg-slate-200'
                  }`}
                >
                  {tier.cta}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}