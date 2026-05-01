import React from 'react';
import { Handshake, Globe2, Building2, Users2, ArrowRight } from 'lucide-react';

export const Partnerships = () => {
  const partners = [
    {
      name: 'Oxfam',
      role: 'Strategic Partner',
      description: 'Collaborating on the "Fair for All" project to enhance agricultural value chains and support local farmers.',
      icon: <Globe2 className="w-8 h-8 text-primary" />,
    },
    {
      name: 'SNV',
      role: 'Implementation Partner',
      description: 'Working together on the TRVC project for low-emission rice production in the Mekong Delta.',
      icon: <Users2 className="w-8 h-8 text-secondary" />,
    },
    {
      name: 'UNDP',
      role: 'Development Partner',
      description: 'Partnering on the ACE-Biz project to pilot circular economy models for businesses.',
      icon: <Building2 className="w-8 h-8 text-tertiary" />,
    },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="pt-32 pb-24 px-6 md:px-12 bg-surface text-center">
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full font-medium text-sm">
            <Handshake className="w-4 h-4" />
            Global Collaboration
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-on-surface">
            Building a Greener Future, Together
          </h1>
          <p className="text-lg md:text-xl text-on-surface-variant max-w-2xl mx-auto">
            We partner with leading global organizations, NGOs, and local communities to drive sustainable agricultural transformation in the Mekong Delta.
          </p>
          <div className="pt-8">
            <button className="inline-flex items-center gap-2 px-8 py-3.5 bg-primary text-on-primary text-base font-semibold rounded-full hover:bg-primary/90 transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5">
              Become a Partner <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Partners List */}
      <section className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {partners.map((partner, index) => (
              <div 
                key={index}
                className="group p-8 rounded-3xl bg-surface-container-lowest border border-surface-container-high hover:border-primary/20 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-2xl bg-white border border-surface-container shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  {partner.icon}
                </div>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-on-surface">{partner.name}</h3>
                    <p className="text-sm font-medium text-primary mt-1">{partner.role}</p>
                  </div>
                  <p className="text-on-surface-variant leading-relaxed">
                    {partner.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
