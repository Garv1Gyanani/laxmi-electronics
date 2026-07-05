import React from 'react';
import { Link } from 'react-router-dom';

const Brands = () => {
  const brands = [
    { name: 'Havells', category: 'Electrical', tag: 'Premium Partner' },
    { name: 'Legrand', category: 'Electrical', tag: 'Official Distributor' },
    { name: 'Schneider Electric', category: 'Electrical', tag: '' },
    { name: 'Anchor', category: 'Electrical', tag: '' },
    { name: 'Jaquar', category: 'Sanitary', tag: 'Premium Partner' },
    { name: 'Hindware', category: 'Sanitary', tag: '' },
    { name: 'Ashirvad', category: 'Plumbing', tag: 'Official Distributor' },
    { name: 'Astral Pipes', category: 'Plumbing', tag: '' },
    { name: 'Crompton', category: 'Electrical', tag: '' },
    { name: 'V-Guard', category: 'Electrical', tag: '' },
    { name: 'Cera', category: 'Sanitary', tag: '' },
    { name: 'Parryware', category: 'Sanitary', tag: '' }
  ];

  return (
    <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-stack-lg">
      <div className="text-center mb-12">
        <h1 className="text-headline-lg font-headline-lg text-primary mb-4">Our Partner Brands</h1>
        <p className="text-body-lg text-on-surface-variant max-w-2xl mx-auto">
          We are proud authorized distributors and partners for the most trusted names in the electrical and sanitary industry. We guarantee 100% authentic products.
        </p>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {brands.map((brand, i) => (
          <div key={i} className="bg-white border border-outline-variant/30 rounded-xl p-6 flex flex-col items-center justify-center text-center shadow-sm hover:shadow-md transition-shadow cursor-pointer group">
            <div className="w-16 h-16 bg-surface-container-low rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-[32px] text-tertiary">verified</span>
            </div>
            <h3 className="text-title-lg font-bold text-on-surface mb-1">{brand.name}</h3>
            <p className="text-label-md text-on-surface-variant uppercase tracking-wider mb-2">{brand.category}</p>
            {brand.tag && (
              <span className="bg-tertiary-fixed text-on-tertiary-fixed text-[10px] font-bold px-2 py-1 rounded-md">
                {brand.tag}
              </span>
            )}
          </div>
        ))}
      </div>
      
      <div className="mt-16 bg-primary rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6 text-white">
        <div>
          <h2 className="text-headline-md font-headline-md mb-2">Looking for a specific brand?</h2>
          <p className="text-primary-fixed-dim">Contact our sourcing team for special brand requirements.</p>
        </div>
        <Link to="/support" className="bg-white text-primary px-6 py-3 rounded-lg font-bold hover:bg-surface-container transition-colors whitespace-nowrap">
          Contact Sourcing
        </Link>
      </div>
    </div>
  );
};

export default Brands;
