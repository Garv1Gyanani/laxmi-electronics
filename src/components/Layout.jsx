import React, { useState } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Layout = () => {
  const { cartCount } = useCart();
  const location = useLocation();
  const isBulkDealsPage = location.pathname === '/bulk-deals';
  const isSupportPage = location.pathname === '/support';
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <div className="bg-background text-on-surface font-body-md antialiased min-h-screen flex flex-col">
      {/* TopNavBar */}
      <header className="w-full top-0 sticky z-50">
        {/* Top utility bar */}
        <div className="bg-[#BBCB64] text-[#191c1e] font-bold hidden md:block border-b border-black/10">
          <div className="max-w-container-max mx-auto px-margin-desktop flex justify-between items-center h-9 text-[12px]">
            <div className="flex items-center gap-5">
              <span className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[14px]">call</span>
                +91 889 710 7975
              </span>
              <span className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[14px]">mail</span>
                info@laxmielectrical.com
              </span>
            </div>
            <div className="flex items-center gap-5">
              <span className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[14px]">schedule</span>
                Mon - Sat: 9:00 AM - 7:00 PM
              </span>
              <span className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[14px]">location_on</span>
                Hyderabad, Telangana
              </span>
            </div>
          </div>
        </div>
        {/* Main nav bar */}
        <div className="bg-white/95 backdrop-blur-md border-b border-outline-variant/50 shadow-sm flex flex-col">
          {/* Tier 1: Logo, Search, Actions */}
          <div className="flex justify-between items-center w-full px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto py-3 gap-6">
            <Link to="/" className="flex-shrink-0 flex items-center gap-3">
              <div className="w-11 h-11 bg-[#CF0F0F] rounded-lg flex items-center justify-center shadow-md">
                <span className="material-symbols-outlined text-white text-[24px]">bolt</span>
              </div>
              <div className="flex flex-col leading-tight">
                <span className="text-[22px] font-black text-[#191c1e] tracking-tight">LAXMI</span>
                <span className="text-[10px] font-extrabold text-[#CF0F0F] tracking-[0.18em] uppercase -mt-0.5">Electrical & Sanitary</span>
              </div>
            </Link>

            {/* Wide Search Bar */}
            <div className="hidden md:flex flex-grow max-w-2xl relative group">
              <input className="w-full pl-12 pr-4 py-2.5 bg-surface-container-low border border-outline-variant/60 focus:bg-white focus:border-[#F79A19] focus:ring-2 focus:ring-[#F79A19]/30 rounded-full text-[14px] text-on-surface placeholder:text-outline transition-all outline-none shadow-inner" placeholder="Search products, brands, SKUs..." type="text"/>
              <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline group-focus-within:text-[#F79A19] text-[20px]">search</span>
            </div>
            
            {/* Action buttons */}
            <div className="flex items-center gap-3">
              <Link to="/cart" aria-label="Quote Cart" className="relative p-2.5 text-on-surface hover:text-[#CF0F0F] hover:bg-surface-container-low rounded-full transition-all flex items-center justify-center">
                <span className="material-symbols-outlined text-[26px]">shopping_cart</span>
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-[#CF0F0F] text-white text-[11px] font-black min-w-[20px] h-[20px] flex items-center justify-center rounded-full shadow-sm border-2 border-white">
                    {cartCount}
                  </span>
                )}
              </Link>
              <Link to="/bulk-deals" aria-label="Quote Request" className="hidden lg:flex items-center gap-2 bg-[#FFE52A] hover:bg-[#F79A19] text-[#191c1e] font-extrabold px-5 py-2.5 rounded-lg text-[13px] transition-all shadow-md">
                <span className="material-symbols-outlined text-[18px]">request_quote</span>
                Get Quote
              </Link>
              <button aria-label="Account" className="hidden md:flex p-2.5 text-on-surface hover:text-[#CF0F0F] hover:bg-surface-container-low rounded-full transition-all items-center justify-center">
                <span className="material-symbols-outlined text-[26px]">account_circle</span>
              </button>
              <button onClick={toggleMobileMenu} aria-label="Mobile Menu" className="p-2.5 text-on-surface hover:text-[#BBCB64] hover:bg-[#BBCB64]/[0.1] rounded-xl transition-all flex items-center justify-center md:hidden">
                <span className="material-symbols-outlined text-[26px]">menu</span>
              </button>
            </div>
          </div>
          
          {/* Tier 2: Navigation Links */}
          <div className="hidden md:flex border-t border-outline-variant/30 bg-surface-container-low/50">
            <div className="max-w-container-max mx-auto px-margin-desktop w-full flex items-center gap-6 h-12">
              <Link to="/products" className="flex items-center gap-2 bg-[#BBCB64] border border-[#BBCB64] text-[#191c1e] font-extrabold text-[14px] px-4 py-1.5 rounded-md hover:bg-[#FFE52A] transition-all shadow-sm">
                Products
              </Link>
              <nav className="flex items-center gap-6 text-[14px] font-bold text-on-surface">
                <Link to="/electrical" className="hover:text-[#CF0F0F] transition-colors">Electrical</Link>
                <Link to="/sanitary" className="hover:text-[#CF0F0F] transition-colors">Sanitary</Link>
                <Link to="/brands" className="hover:text-[#CF0F0F] transition-colors">Brands</Link>
                <Link to="/bulk-deals" className="hover:text-[#CF0F0F] transition-colors">Bulk Deals</Link>
                <Link to="/support" className="hover:text-[#CF0F0F] transition-colors">Support</Link>
              </nav>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Bottom Navigation (Hidden on Desktop) */}
      <nav className="md:hidden fixed bottom-0 left-0 w-full bg-surface-container-lowest border-t border-outline-variant z-50 pb-safe shadow-[0_-2px_10px_rgba(0,0,0,0.05)] flex justify-around items-center h-16 px-2">
        <a className="flex flex-col items-center justify-center w-full h-full text-primary font-bold" href="#">
          <span aria-hidden="true" className="material-symbols-outlined mb-1 text-[24px]" data-icon="home">home</span>
          <span className="text-[10px] font-semibold leading-none">Home</span>
        </a>
        <a className="flex flex-col items-center justify-center w-full h-full text-on-surface-variant hover:text-primary transition-colors" href="#">
          <span aria-hidden="true" className="material-symbols-outlined mb-1 text-[24px]" data-icon="category">category</span>
          <span className="text-[10px] font-medium leading-none">Categories</span>
        </a>
        <a className="flex flex-col items-center justify-center w-full h-full text-on-surface-variant hover:text-primary transition-colors relative" href="#">
          <span aria-hidden="true" className="material-symbols-outlined mb-1 text-[24px]" data-icon="request_quote">request_quote</span>
          <span className="text-[10px] font-medium leading-none">Quote</span>
        </a>
        <a className="flex flex-col items-center justify-center w-full h-full text-on-surface-variant hover:text-primary transition-colors" href="#">
          <span aria-hidden="true" className="material-symbols-outlined mb-1 text-[24px]" data-icon="account_circle">account_circle</span>
          <span className="text-[10px] font-medium leading-none">Profile</span>
        </a>
      </nav>

      <main className="flex-grow pb-20 md:pb-0">
        <Outlet />
      </main>

      {/* Bulk Quote CTA Section */}
      {!isBulkDealsPage && !isSupportPage && (
      <section className="bg-surface py-16 md:py-20">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          {/* Hero Banner Card */}
          <div className="bg-[#1a2e10] rounded-3xl p-6 sm:p-10 md:p-14 relative overflow-hidden mb-12">
            {/* Decorative background shapes */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-white/[0.03] rounded-full -translate-y-1/2 translate-x-1/4"></div>
            <div className="absolute bottom-0 right-20 w-60 h-60 bg-white/[0.02] rounded-full translate-y-1/2"></div>
            <div className="absolute top-8 right-8 opacity-[0.06]">
              <span className="material-symbols-outlined text-white text-[200px]">inventory_2</span>
            </div>
            <div className="relative z-10 max-w-2xl">
              <span className="inline-block bg-primary text-white text-[11px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">B2B Exclusive</span>
              <h2 className="text-headline-xl md:text-[42px] font-headline-xl md:font-headline-xl text-white leading-[1.15] mb-5">
                Wholesale &<br />Bulk Project Deals
              </h2>
              <p className="text-body-lg text-white/60 mb-8 max-w-lg leading-relaxed">
                Special tier-based pricing available for contractors, builders, architects, and retailers. Get the best rates in the market for your large-scale requirements.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#bulk-form" className="bg-white text-[#1a2e10] px-8 py-3.5 rounded-xl text-body-lg font-bold hover:bg-white/90 transition-all text-center">
                  Submit Inquiry
                </a>
                <a href="https://wa.me/918897107975" target="_blank" rel="noreferrer" className="border-2 border-white/30 text-white px-8 py-3.5 rounded-xl text-body-lg font-bold hover:bg-white/10 transition-all flex items-center justify-center gap-2">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.487-1.761-1.659-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>
                  WhatsApp Sales
                </a>
              </div>
            </div>
          </div>

          {/* Why Partner + Form Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            {/* Left: Why Partner With Us */}
            <div>
              <h3 className="text-headline-sm font-headline-sm text-on-surface mb-8">Why Partner With Us?</h3>
              <div className="flex flex-col gap-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/[0.08] rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="material-symbols-outlined text-primary text-[24px]">local_offer</span>
                  </div>
                  <div>
                    <h4 className="text-title-lg font-bold text-on-surface mb-1">Tiered Volume Discounts</h4>
                    <p className="text-body-md text-on-surface-variant leading-relaxed">The more you buy, the more you save. Up to 40% off standard retail prices for mega-projects.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/[0.08] rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="material-symbols-outlined text-primary text-[24px]">local_shipping</span>
                  </div>
                  <div>
                    <h4 className="text-title-lg font-bold text-on-surface mb-1">Priority Delivery</h4>
                    <p className="text-body-md text-on-surface-variant leading-relaxed">Same-day dispatch for in-stock items. Dedicated logistics for bulk project deliveries across Telangana.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/[0.08] rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="material-symbols-outlined text-primary text-[24px]">support_agent</span>
                  </div>
                  <div>
                    <h4 className="text-title-lg font-bold text-on-surface mb-1">Dedicated Account Manager</h4>
                    <p className="text-body-md text-on-surface-variant leading-relaxed">A single point of contact for all your orders, quotes, and after-sales support.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Bulk Quote Form */}
            <div id="bulk-form" className="bg-white rounded-2xl p-8 border border-outline-variant/50 shadow-lg">
              <h3 className="text-headline-sm font-headline-sm text-on-surface mb-2">Request a Bulk Quote</h3>
              <p className="text-body-md text-on-surface-variant mb-6">Fill out your project details and we will get back to you with a custom rate card within 24 hours.</p>
              <form onSubmit={(e) => { e.preventDefault(); }} className="flex flex-col gap-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-label-md font-semibold text-on-surface block mb-1.5">Company Name</label>
                    <input type="text" placeholder="Your company" className="w-full px-4 py-3 border border-outline-variant rounded-xl text-body-md text-on-surface placeholder:text-outline focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none transition-all" />
                  </div>
                  <div>
                    <label className="text-label-md font-semibold text-on-surface block mb-1.5">Contact Person</label>
                    <input type="text" placeholder="Full name" className="w-full px-4 py-3 border border-outline-variant rounded-xl text-body-md text-on-surface placeholder:text-outline focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none transition-all" />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-label-md font-semibold text-on-surface block mb-1.5">Phone Number</label>
                    <input type="tel" placeholder="+91 000 000 0000" className="w-full px-4 py-3 border border-outline-variant rounded-xl text-body-md text-on-surface placeholder:text-outline focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none transition-all" />
                  </div>
                  <div>
                    <label className="text-label-md font-semibold text-on-surface block mb-1.5">Email</label>
                    <input type="email" placeholder="you@company.com" className="w-full px-4 py-3 border border-outline-variant rounded-xl text-body-md text-on-surface placeholder:text-outline focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none transition-all" />
                  </div>
                </div>
                <div>
                  <label className="text-label-md font-semibold text-on-surface block mb-1.5">Product / Project Requirement</label>
                  <textarea rows={3} placeholder="Describe what you need..." className="w-full px-4 py-3 border border-outline-variant rounded-xl text-body-md text-on-surface placeholder:text-outline focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none transition-all resize-none"></textarea>
                </div>
                <button type="submit" className="w-full bg-primary text-white py-3.5 rounded-xl text-body-lg font-bold hover:bg-primary-container transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2">
                  Submit Bulk Inquiry
                  <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
                </button>
              </form>
              <p className="text-[12px] text-on-surface-variant text-center mt-4">We respond within 2 business hours. No spam, ever.</p>
            </div>
          </div>
        </div>
      </section>
      )}

      {/* Footer */}
      <footer className="bg-[#141716] text-white border-t border-white/10 mt-auto w-full">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          {/* Main footer content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 py-14">
            {/* Brand column */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 bg-[#CF0F0F] rounded-lg flex items-center justify-center shadow-md">
                  <span className="material-symbols-outlined text-white text-[22px]">bolt</span>
                </div>
                <div className="flex flex-col leading-tight">
                  <span className="text-[18px] font-black text-white tracking-tight">LAXMI</span>
                  <span className="text-[10px] font-extrabold text-[#FFE52A] tracking-[0.18em] uppercase -mt-0.5">Electrical & Sanitary</span>
                </div>
              </div>
              <p className="text-[14px] text-white/70 leading-relaxed mb-6">Your trusted partner for wholesale electrical and sanitary supplies. Quality products, competitive pricing, reliable delivery.</p>
              <div className="flex items-center gap-3">
                <a href="#" className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center text-white/80 hover:bg-[#FFE52A] hover:text-[#141716] transition-all">
                  <svg className="w-[18px] h-[18px] fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                </a>
                <a href="#" className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center text-white/80 hover:bg-[#FFE52A] hover:text-[#141716] transition-all">
                  <svg className="w-[18px] h-[18px] fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                </a>
                <a href="#" className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center text-white/80 hover:bg-[#FFE52A] hover:text-[#141716] transition-all">
                  <svg className="w-[18px] h-[18px] fill-current" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zM9 16V8l8 3.993L9 16z"/></svg>
                </a>
                <a href="#" className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center text-white/80 hover:bg-[#FFE52A] hover:text-[#141716] transition-all">
                  <svg className="w-[18px] h-[18px] fill-current" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-[13px] font-black text-[#FFE52A] uppercase tracking-wider mb-5">Quick Links</h4>
              <div className="flex flex-col gap-3">
                <Link to="/" className="text-[14px] text-white/70 hover:text-[#FFE52A] transition-colors">About Us</Link>
                <Link to="/products" className="text-[14px] text-white/70 hover:text-[#FFE52A] transition-colors">Our Products</Link>
                <Link to="/bulk-deals" className="text-[14px] text-white/70 hover:text-[#FFE52A] transition-colors">Bulk Orders</Link>
                <Link to="/support" className="text-[14px] text-white/70 hover:text-[#FFE52A] transition-colors">Contact Support</Link>
                <Link to="/support" className="text-[14px] text-white/70 hover:text-[#FFE52A] transition-colors">Career</Link>
              </div>
            </div>

            {/* Categories */}
            <div>
              <h4 className="text-[13px] font-black text-[#FFE52A] uppercase tracking-wider mb-5">Categories</h4>
              <div className="flex flex-col gap-3">
                <Link to="/electrical" className="text-[14px] text-white/70 hover:text-[#FFE52A] transition-colors">Electrical Supplies</Link>
                <Link to="/sanitary" className="text-[14px] text-white/70 hover:text-[#FFE52A] transition-colors">Sanitary Ware</Link>
                <Link to="/products" className="text-[14px] text-white/70 hover:text-[#FFE52A] transition-colors">LED Lighting</Link>
                <Link to="/products" className="text-[14px] text-white/70 hover:text-[#FFE52A] transition-colors">Power Tools</Link>
                <Link to="/products" className="text-[14px] text-white/70 hover:text-[#FFE52A] transition-colors">Hardware & Fittings</Link>
              </div>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-[13px] font-black text-[#FFE52A] uppercase tracking-wider mb-5">Get in Touch</h4>
              <div className="flex flex-col gap-4">
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-[#F79A19] text-[20px] mt-0.5">location_on</span>
                  <span className="text-[14px] text-white/70 leading-relaxed">Hyderabad, Telangana, India</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-[#F79A19] text-[20px] mt-0.5">call</span>
                  <span className="text-[14px] text-white/70">+91 889 710 7975</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-[#F79A19] text-[20px] mt-0.5">mail</span>
                  <span className="text-[14px] text-white/70">info@laxmielectrical.com</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-[#F79A19] text-[20px] mt-0.5">schedule</span>
                  <span className="text-[14px] text-white/70">Mon - Sat: 9:00 AM - 7:00 PM</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="border-t border-white/10 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[13px] text-white/50">© 2025 Laxmi Electrical & Sanitary. All Rights Reserved.</p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-[13px] text-white/50 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-[13px] text-white/50 hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="text-[13px] text-white/50 hover:text-white transition-colors">Refund Policy</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Global Floating WhatsApp Button */}
      <a 
        aria-label="Chat on WhatsApp" 
        className="fixed bottom-24 md:bottom-margin-desktop right-margin-mobile md:right-margin-desktop bg-[#25d366] hover:bg-[#20ba5a] text-white p-4 rounded-full shadow-2xl transition-all duration-300 z-50 flex items-center justify-center group hover:scale-110 active:scale-95 shadow-green-500/20" 
        href="https://wa.me/918897107975" 
        target="_blank" 
        rel="noreferrer"
      >
        <svg className="w-8 h-8 fill-current text-white group-hover:scale-110 transition-transform" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.487-1.761-1.659-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"></path></svg>
      </a>

      {/* Mobile Menu Drawer Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[90] transition-opacity md:hidden"
          onClick={toggleMobileMenu}
        />
      )}

      {/* Mobile Menu Drawer Panel */}
      <div className={`fixed top-0 right-0 h-full w-[290px] bg-white z-[100] shadow-2xl transform transition-transform duration-300 ease-in-out md:hidden flex flex-col ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex items-center justify-between p-4 border-b border-outline-variant/40">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 bg-[#CF0F0F] rounded flex items-center justify-center text-white shadow-sm">
              <span className="material-symbols-outlined text-[20px]">bolt</span>
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-[16px] font-black text-[#191c1e] tracking-tight">LAXMI</span>
              <span className="text-[8px] font-extrabold text-[#CF0F0F] tracking-[0.1em] uppercase">Electrical</span>
            </div>
          </div>
          <button 
            onClick={toggleMobileMenu} 
            className="p-1.5 hover:bg-surface-container-low rounded-full transition-colors flex items-center justify-center text-[#191c1e] border border-outline-variant/30"
            aria-label="Close Mobile Menu"
          >
            <span className="material-symbols-outlined text-[22px]">close</span>
          </button>
        </div>

        <nav className="flex flex-col p-5 gap-4 text-[15px] font-extrabold text-[#191c1e] flex-grow overflow-y-auto">
          <Link to="/products" onClick={toggleMobileMenu} className="flex items-center gap-3 py-2.5 px-3 hover:bg-[#BBCB64]/10 rounded-lg hover:text-[#CF0F0F] transition-all">
            <span className="material-symbols-outlined text-[#BBCB64]">inventory</span>
            Browse All Products
          </Link>
          <hr className="border-outline-variant/30" />
          <Link to="/electrical" onClick={toggleMobileMenu} className="flex items-center gap-3 py-2 px-3 hover:bg-[#BBCB64]/10 rounded-lg hover:text-[#CF0F0F] transition-all">
            <span className="material-symbols-outlined text-[#BBCB64]">bolt</span>
            Electrical Supplies
          </Link>
          <Link to="/sanitary" onClick={toggleMobileMenu} className="flex items-center gap-3 py-2 px-3 hover:bg-[#BBCB64]/10 rounded-lg hover:text-[#CF0F0F] transition-all">
            <span className="material-symbols-outlined text-[#BBCB64]">water_drop</span>
            Sanitary & Plumbing
          </Link>
          <Link to="/brands" onClick={toggleMobileMenu} className="flex items-center gap-3 py-2 px-3 hover:bg-[#BBCB64]/10 rounded-lg hover:text-[#CF0F0F] transition-all">
            <span className="material-symbols-outlined text-[#BBCB64]">stars</span>
            Featured Brands
          </Link>
          <Link to="/bulk-deals" onClick={toggleMobileMenu} className="flex items-center gap-3 py-2 px-3 hover:bg-[#BBCB64]/10 rounded-lg hover:text-[#CF0F0F] transition-all">
            <span className="material-symbols-outlined text-[#BBCB64]">receipt_long</span>
            Bulk Project Deals
          </Link>
          <Link to="/support" onClick={toggleMobileMenu} className="flex items-center gap-3 py-2 px-3 hover:bg-[#BBCB64]/10 rounded-lg hover:text-[#CF0F0F] transition-all">
            <span className="material-symbols-outlined text-[#BBCB64]">support_agent</span>
            Help & Support
          </Link>
        </nav>

        <div className="p-5 border-t border-outline-variant/30 bg-surface-container-lowest flex flex-col gap-3">
          <Link to="/cart" onClick={toggleMobileMenu} className="w-full bg-[#FFE52A] hover:bg-[#F79A19] text-[#191c1e] text-center py-3 rounded-lg font-black text-[13px] transition-all flex items-center justify-center gap-2 shadow-md">
            <span className="material-symbols-outlined text-[18px]">request_quote</span>
            Get Bulk Quote ({cartCount})
          </Link>
          <div className="text-center text-[10px] text-on-surface-variant font-bold">
            Mon - Sat: 9:00 AM - 7:00 PM
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
