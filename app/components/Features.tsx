import { Zap, Shield, BarChart3, Globe, Users, Clock } from 'lucide-react';

const features = [
  {
    icon: <Zap className="h-6 w-6 text-white" />,
    title: "Velocidad Relámpago",
    description: "Optimizado para rendir al máximo. Tus clientes no esperarán ni un segundo extra.",
    color: "bg-orange-500"
  },
  {
    icon: <Shield className="h-6 w-6 text-white" />,
    title: "Seguridad Militar",
    description: "Tus datos están protegidos con encriptación de punta a punta. Duerme tranquilo.",
    color: "bg-blue-500"
  },
  {
    icon: <BarChart3 className="h-6 w-6 text-white" />,
    title: "Analíticas en Tiempo Real",
    description: "Toma decisiones basadas en datos, no en suposiciones. Dashboard completo incluido.",
    color: "bg-purple-500"
  },
  {
    icon: <Globe className="h-6 w-6 text-white" />,
    title: "Acceso Global",
    description: "Gestiona tu negocio desde cualquier lugar del mundo. Solo necesitas internet.",
    color: "bg-green-500"
  },
  {
    icon: <Users className="h-6 w-6 text-white" />,
    title: "Colaboración en Equipo",
    description: "Invita a tu equipo y asigna roles específicos. El trabajo en equipo, simplificado.",
    color: "bg-pink-500"
  },
  {
    icon: <Clock className="h-6 w-6 text-white" />,
    title: "Ahorra 20h/Semana",
    description: "Nuestros usuarios reportan un ahorro promedio de 20 horas semanales en gestión.",
    color: "bg-indigo-500"
  }
];

export default function Features() {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-base font-semibold text-primary-600 tracking-wide uppercase">Características</h2>
          <p className="mt-2 text-3xl font-extrabold text-slate-900 sm:text-4xl">
            Todo lo que necesitas para triunfar
          </p>
          <p className="mt-4 text-xl text-slate-500">
            Hemos diseñado cada herramienta pensando en tu productividad y crecimiento.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="relative group bg-slate-50 p-8 rounded-2xl hover:bg-slate-100 transition-colors border border-slate-100">
              <div className={`absolute top-8 left-8 inline-flex items-center justify-center h-12 w-12 rounded-xl shadow-lg ${feature.color}`}>
                {feature.icon}
              </div>
              <div className="mt-16">
                <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}