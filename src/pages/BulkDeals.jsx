import React from 'react';

const BulkDeals = () => {
  return (
    <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-stack-lg">
      <div className="bg-primary rounded-3xl p-6 sm:p-8 md:p-16 text-white shadow-xl overflow-hidden relative mb-12">
        <div className="absolute top-0 right-0 p-12 opacity-10 pointer-events-none transform translate-x-1/4 -translate-y-1/4">
          <span className="material-symbols-outlined text-[300px]">inventory</span>
        </div>
        
        <div className="relative z-10 max-w-2xl">
          <span className="bg-tertiary text-on-tertiary text-[12px] font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-4 inline-block shadow-sm">B2B Exclusive</span>
          <h1 className="text-headline-xl md:text-display-lg font-black mb-6 leading-tight">Wholesale &<br/>Bulk Project Deals</h1>
          <p className="text-body-lg text-primary-fixed mb-8">
            Special tier-based pricing available for contractors, builders, architects, and retailers. 
            Get the best rates in the market for your large-scale requirements.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <a href="#inquiry-form" className="bg-white text-primary px-8 py-4 rounded-xl font-bold text-[16px] hover:bg-surface-container-low transition-colors shadow-lg text-center">
              Submit Inquiry
            </a>
            <a href="https://wa.me/918897107975" target="_blank" rel="noreferrer" className="bg-transparent border-2 border-white/30 text-white px-8 py-4 rounded-xl font-bold text-[16px] hover:bg-white/10 transition-colors flex items-center justify-center gap-2">
              <span className="material-symbols-outlined text-[24px]">chat</span>
              WhatsApp Sales
            </a>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start" id="inquiry-form">
        <div>
          <h2 className="text-headline-md font-bold text-primary mb-6">Why Partner With Us?</h2>
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-secondary/20 text-primary rounded-full flex items-center justify-center flex-shrink-0">
                <span className="material-symbols-outlined">payments</span>
              </div>
              <div>
                <h3 className="text-title-lg font-bold text-on-surface">Tiered Volume Discounts</h3>
                <p className="text-on-surface-variant">The more you buy, the more you save. Up to 40% off standard retail prices for mega-projects.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-secondary/20 text-primary rounded-full flex items-center justify-center flex-shrink-0">
                <span className="material-symbols-outlined">local_shipping</span>
              </div>
              <div>
                <h3 className="text-title-lg font-bold text-on-surface">Priority Dispatch</h3>
                <p className="text-on-surface-variant">Dedicated logistics support ensures your project materials reach the site on time, every time.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-secondary/20 text-primary rounded-full flex items-center justify-center flex-shrink-0">
                <span className="material-symbols-outlined">support_agent</span>
              </div>
              <div>
                <h3 className="text-title-lg font-bold text-on-surface">Dedicated Account Manager</h3>
                <p className="text-on-surface-variant">Get a single point of contact for all your sourcing, billing, and technical support needs.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-surface border border-outline-variant/30 rounded-2xl p-6 sm:p-8 shadow-lg">
          <h2 className="text-headline-sm font-bold text-primary mb-2">Request a Bulk Quote</h2>
          <p className="text-on-surface-variant mb-6">Fill out your project details and we will get back to you with a custom rate card within 24 hours.</p>
          
          <form className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-label-md font-bold text-on-surface mb-1">Company Name</label>
                <input type="text" className="w-full bg-surface-container-low border border-outline-variant/50 rounded-lg px-4 py-3 focus:border-primary outline-none focus:ring-1 focus:ring-primary/20" placeholder="Enter company" />
              </div>
              <div>
                <label className="block text-label-md font-bold text-on-surface mb-1">Contact Person</label>
                <input type="text" className="w-full bg-surface-container-low border border-outline-variant/50 rounded-lg px-4 py-3 focus:border-primary outline-none focus:ring-1 focus:ring-primary/20" placeholder="Your name" />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-label-md font-bold text-on-surface mb-1">Email</label>
                <input type="email" className="w-full bg-surface-container-low border border-outline-variant/50 rounded-lg px-4 py-3 focus:border-primary outline-none focus:ring-1 focus:ring-primary/20" placeholder="Email address" />
              </div>
              <div>
                <label className="block text-label-md font-bold text-on-surface mb-1">Phone / WhatsApp</label>
                <input type="tel" className="w-full bg-surface-container-low border border-outline-variant/50 rounded-lg px-4 py-3 focus:border-primary outline-none focus:ring-1 focus:ring-primary/20" placeholder="Phone number" />
              </div>
            </div>
            <div>
              <label className="block text-label-md font-bold text-on-surface mb-1">Project Details & Requirements</label>
              <textarea rows="4" className="w-full bg-surface-container-low border border-outline-variant/50 rounded-lg px-4 py-3 focus:border-primary outline-none focus:ring-1 focus:ring-primary/20" placeholder="List the brands, items, and estimated quantities you need..."></textarea>
            </div>
            <button type="button" onClick={() => alert('Quote Request Submitted Successfully!')} className="w-full bg-[#FFE52A] text-[#191c1e] px-6 py-4 rounded-lg font-black text-[16px] hover:bg-[#F79A19] transition-colors mt-2 shadow-md">
              Submit Request
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BulkDeals;
