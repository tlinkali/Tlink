import React from 'react';
import { Users, Building2, PhoneCall, Globe2 } from 'lucide-react';

const KeyMetrics = () => {
  const metrics = [
    {
      label: "Années d'expertise",
      value: "15+",
      icon: <Building2 className="w-6 h-6 text-[#2DD4BF]" />,
    },
    {
      label: "Clients Entreprises",
      value: "1000+",
      icon: <Users className="w-6 h-6 text-[#2563EB]" />,
    },
    {
      label: "Lignes actives",
      value: "5000+",
      icon: <PhoneCall className="w-6 h-6 text-[#2DD4BF]" />,
    },
    {
      label: "Points de présence",
      value: "12",
      icon: <Globe2 className="w-6 h-6 text-[#2563EB]" />,
    },
  ];

  return (
    <section className="bg-white py-12 border-y border-slate-100">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((metric, index) => (
            <div key={index} className="flex flex-col items-center text-center p-6 rounded-2xl hover:bg-slate-50 transition-colors duration-300">
              <div className="mb-4 p-3 bg-slate-50 rounded-xl">
                {metric.icon}
              </div>
              <div className="text-3xl md:text-4xl font-bold text-slate-900 mb-2 font-display">
                {metric.value}
              </div>
              <div className="text-sm font-medium text-slate-500 uppercase tracking-wider">
                {metric.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyMetrics;