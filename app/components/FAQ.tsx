'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: "¿Necesito conocimientos técnicos?",
    answer: "No, en absoluto. Nuestra plataforma está diseñada para ser 'No-Code'. Si sabes usar un correo electrónico, sabes usar nuestra herramienta."
  },
  {
    question: "¿Puedo cancelar en cualquier momento?",
    answer: "Sí, creemos en la libertad. Puedes cancelar tu suscripción desde tu panel de control con un solo clic, sin preguntas."
  },
  {
    question: "¿Ofrecen garantía de devolución?",
    answer: "Ofrecemos una garantía de devolución de dinero de 30 días. Si no estás satisfecho, te devolvemos el 100% de tu inversión."
  },
  {
    question: "¿Hay soporte disponible?",
    answer: "Sí, nuestro equipo de soporte está disponible 24/7 para ayudarte con cualquier duda o problema técnico que puedas tener."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900">Preguntas Frecuentes</h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-slate-200 rounded-lg overflow-hidden">
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center bg-slate-50 hover:bg-slate-100 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-semibold text-slate-900">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-slate-500" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-slate-500" />
                )}
              </button>
              
              <div 
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  openIndex === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 py-4 text-slate-600 bg-white">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}