import React from 'react';
import { Leaf } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full py-12 px-6 md:px-12 border-t border-surface-container-high bg-surface-container-lowest">
      <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2 text-lg font-semibold text-primary">
            <Leaf className="w-5 h-5 text-primary" fill="currentColor" />
            <span>HKT ECOTECH</span>
          </div>
          <p className="text-sm text-on-surface-variant">
            © 2024 HKT ECOTECH Platform. Empowering Sustainable Development through Green Tech.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <h4 className="font-semibold text-primary mb-2 text-sm uppercase tracking-wider">Platform</h4>
          <a href="#" className="text-sm text-on-surface-variant hover:text-primary transition-colors">SDG Commitments</a>
          <a href="#" className="text-sm text-on-surface-variant hover:text-primary transition-colors">Project SH1</a>
        </div>

        <div className="flex flex-col gap-3">
          <h4 className="font-semibold text-primary mb-2 text-sm uppercase tracking-wider">Data & Impact</h4>
          <a href="#" className="text-sm text-on-surface-variant hover:text-primary transition-colors">Carbon MRV</a>
          <a href="#" className="text-sm text-on-surface-variant hover:text-primary transition-colors">Transparency Hub</a>
        </div>

        <div className="flex flex-col gap-3">
          <h4 className="font-semibold text-primary mb-2 text-sm uppercase tracking-wider">Legal</h4>
          <a href="#" className="text-sm text-on-surface-variant hover:text-primary transition-colors">Privacy Policy</a>
          <a href="#" className="text-sm text-on-surface-variant hover:text-primary transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};
