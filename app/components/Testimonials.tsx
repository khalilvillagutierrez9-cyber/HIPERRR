import Image from 'next/image';

const testimonials = [
  {
    content: "Esta herramienta ha cambiado completamente la forma en que operamos. Hemos duplicado nuestros ingresos en 3 meses.",
    author: "Carlos Rodríguez",
    role: "CEO, TechStart",
    avatar: "https://picsum.photos/100/100?random=1"
  },
  {
    content: "La mejor inversión que hemos hecho este año. El soporte es increíble y la plataforma es muy intuitiva.",
    author: "Ana García",
    role: "Directora de Marketing",
    avatar: "https://picsum.photos/100/100?random=2"
  },
  {
    content: "Simplemente funciona. Sin complicaciones, sin curvas de aprendizaje empinadas. Recomendado 100%.",
    author: "Miguel Torres",
    role: "Freelancer",
    avatar: "https://picsum.photos/100/100?random=3"
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-slate-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Confían en nosotros</h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Únete a más de 10,000 profesionales que ya están escalando sus negocios.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-slate-800 p-8 rounded-2xl border border-slate-700 relative">
              {/* Quote icon decoration */}
              <div className="text-slate-600 absolute top-4 right-6 text-6xl font-serif opacity-20">"</div>
              
              <p className="text-slate-300 text-lg mb-8 relative z-10">
                "{t.content}"
              </p>
              
              <div className="flex items-center gap-4">
                <div className="relative h-12 w-12 rounded-full overflow-hidden border-2 border-primary-500">
                  <Image 
                    src={t.avatar} 
                    alt={t.author}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="font-bold text-white">{t.author}</div>
                  <div className="text-sm text-primary-400">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}