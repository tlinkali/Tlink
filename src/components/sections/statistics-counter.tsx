import React from 'react';
import { Users, GraduationCap, Building2, Smile } from 'lucide-react';

const StatisticsCounter: React.FC = () => {
  const stats = [
    {
      value: "1",
      label: "FORMATEUR",
      icon: <GraduationCap className="w-8 h-8 text-blue-400" />,
    },
    {
      value: "2",
      label: "MODULES DE FORMATION",
      icon: <Building2 className="w-8 h-8 text-blue-400" />,
    },
    {
      value: "15",
      label: "CLIENTS SATISFAITS",
      icon: <Smile className="w-8 h-8 text-blue-400" />,
    },
    {
      value: "8",
      label: "PARTENAIRES",
      icon: <Users className="w-8 h-8 text-blue-400" />,
    },
  ];

  return (
    <section className="bg-slate-50 py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-blue-600 font-bold tracking-widest text-sm uppercase mb-3">Chiffres Clés</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900">Notre impact en chiffres</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white p-10 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 group hover:-translate-y-2"
            >
              <div className="bg-blue-50 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors duration-300">
                {React.cloneElement(stat.icon as React.ReactElement, { 
                  className: "w-8 h-8 text-blue-600 group-hover:text-white transition-colors duration-300" 
                })}
              </div>
              <div className="space-y-2">
                <span className="text-5xl font-black text-slate-900 block leading-tight">
                  {stat.value}
                </span>
                <span className="text-slate-500 font-bold text-sm uppercase tracking-wider block">
                  {stat.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatisticsCounter;
