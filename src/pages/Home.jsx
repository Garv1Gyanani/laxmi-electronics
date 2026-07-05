import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    'images/sliding_banner_1_1783228965984.png',
    'images/sliding_banner_2_1783228976096.png',
    'images/sliding_banner_3_1783228987254.png'
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const hardwareProducts = [
    { id: 'h1', title: 'Industrial Door Hinges, Heavy Duty Steel', image: 'images/door_hinges.png', originalPrice: '23672.00', discountedPrice: '16081.01', discount: 32, options: 2 },
    { id: 'h2', title: 'Box of Brass Screws for Construction', image: 'images/brass_screws.png', originalPrice: '302.00', discountedPrice: '183.56', discount: 39, options: 8 },
    { id: 'h3', title: 'Heavy Duty Industrial Door Lock, Secure', image: 'images/door_lock.png', originalPrice: '454.00', discountedPrice: '308.41', discount: 32, options: 3 },
    { id: 'h4', title: 'Premium Modern Door Handle, Brushed Metal', image: 'images/door_handle.png', originalPrice: '172.00', discountedPrice: '116.84', discount: 32, options: 1 },
  ];

  const paintProducts = [
    { id: 'p1', title: 'Birla Opus Exterior Economy Style Power Bright White (9900) 10L', image: 'https://images.unsplash.com/photo-1562184552-997c461abbe6?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80', originalPrice: '2490.00', discountedPrice: '1730.52', discount: 31, options: 16 },
    { id: 'p2', title: 'Birla Opus Exterior Economy Style Power Fit Tintable White (9913) 10L', image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80', originalPrice: '2060.00', discountedPrice: '1190.71', discount: 42, options: 6 },
    { id: 'p3', title: 'Birla Opus Exterior Premium Calista Neo Star White (9900) 10L', image: 'https://images.unsplash.com/photo-1572981779307-38b8cabb2407?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80', originalPrice: '4260.00', discountedPrice: '2825.72', discount: 34, options: 16 },
    { id: 'p4', title: 'Birla Opus Exterior Premium Calista Perfect Choice Primer White 10L', image: 'https://images.unsplash.com/photo-1589407335682-1262d1cfa978?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80', originalPrice: '2250.00', discountedPrice: '1602.83', discount: 29, options: 4 },
  ];

  const dealProducts = [
    { id: 'd1', title: 'High Power LED Outdoor Floodlight', image: 'images/led_floodlight.png', originalPrice: '1655.00', discountedPrice: '1514.49', discount: 8, options: 16 },
    { id: 'd2', title: 'High Quality Chrome Wrench Set', image: 'images/wrench_set.png', originalPrice: '3400.00', discountedPrice: '2250.00', discount: 34, options: 1 },
    { id: 'd3', title: 'Premium Industrial Drill Machine', image: 'images/drill_machine.png', originalPrice: '625.00', discountedPrice: '498.40', discount: 20, options: 1 },
    { id: 'd4', title: 'Modern Safety Headphones for Construction', image: 'images/safety_headphones.png', originalPrice: '1875.00', discountedPrice: '1459.60', discount: 22, options: 1 },
  ];

  const visualCategories = [
    { name: 'Building materials', image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=150&q=80' },
    { name: 'Bathroom', image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=150&q=80' },
    { name: 'Plumbing', image: 'https://images.unsplash.com/photo-1585435421671-0c16764628ce?w=150&q=80' },
    { name: 'Electrical', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=150&q=80' },
    { name: 'Lighting', image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?w=150&q=80' },
    { name: 'Fans', image: 'images/fan_category_1783228996076.png' },
    { name: 'Plywood and Boards', image: 'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?w=150&q=80' },
    { name: 'Laminates', image: 'images/laminates_category_1783229006980.png' },
    { name: 'Hardware and Fittings', image: 'images/hardware_category_1783229017545.png' },
    { name: 'Paints, Putty and Coatings', image: 'https://images.unsplash.com/photo-1562184552-997c461abbe6?w=150&q=80' },
    { name: 'Tiles', image: 'https://images.unsplash.com/photo-1523413363574-c30aa1c2a516?w=150&q=80' },
    { name: 'Kitchen', image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=150&q=80' },
    { name: 'Heating and AC', image: 'images/heating_ac_category_1783229027909.png' },
  ];

  const popularBrands = [
    'ASIAN PAINTS', 'POLYCAB', 'HAVELLS', 'JAQUAR', 'CERA', 'HINDWARE', 'CENTURY PLY', 'EBCO', 'LEGRAND', 'FINOLEX'
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full h-[600px] md:h-[700px] flex items-center overflow-hidden">
        {/* Background Images Slider */}
        <div className="absolute inset-0 z-0">
          {slides.map((slide, index) => (
            <div 
              key={index}
              className={`absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`} 
              style={{ backgroundImage: `url('${slide}')` }}
            />
          ))}
          {/* Gradient Overlay for text legibility */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>
        </div>
        <div className="relative z-10 w-full px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
          <div className="max-w-2xl text-white">
            <span className="inline-block py-1 px-3.5 bg-[#BBCB64] text-[#191c1e] font-extrabold rounded-full text-label-md mb-stack-md uppercase tracking-wider shadow-md">
              B2B Wholesale Excellence
            </span>
            <h1 className="text-headline-lg-mobile md:text-display-lg font-black mb-stack-md leading-tight text-white drop-shadow-xl">
              South India's Trusted B2B Wholesale Partner for Electrical & Sanitary
            </h1>
            <p className="text-body-lg font-medium mb-stack-lg text-white/90 max-w-xl drop-shadow-md">
              Streamline your procurement with our vast catalogue of top-tier industrial hardware, designer fittings, and construction materials. Guaranteed bulk availability and priority logistics.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 relative z-10">
              <Link to="/products" className="bg-[#FFE52A] hover:bg-[#F79A19] text-[#191c1e] font-extrabold px-8 py-4 rounded-lg text-title-lg transition-colors flex items-center justify-center gap-2 group shadow-xl">
                Browse Catalog
                <span aria-hidden="true" className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </Link>
              <Link to="/cart" className="bg-[#F79A19] hover:bg-[#CF0F0F] text-white font-extrabold px-8 py-4 rounded-lg text-title-lg transition-colors flex items-center justify-center shadow-xl">
                Get Bulk Quote
              </Link>
            </div>
            {/* Slider Dots */}
            <div className="flex gap-2.5 mt-8">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-3 rounded-full transition-all ${index === currentSlide ? 'bg-[#FFE52A] w-8' : 'bg-white/50 hover:bg-white/80 w-3'}`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative -mt-8 z-20 mx-margin-mobile md:mx-margin-desktop">
        <div className="bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-outline-variant/20 overflow-hidden">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {[
              { icon: 'verified', value: '15+ Years', label: 'Industry Trust', color: 'from-primary/8 to-primary/2' },
              { icon: 'inventory_2', value: '5k+', label: 'Products in Stock', color: 'from-tertiary/8 to-tertiary/2' },
              { icon: 'construction', value: '1.2k+', label: 'Builder Partners', color: 'from-secondary/8 to-secondary/2' },
              { icon: 'schedule', value: '24hr', label: 'Quote Turnaround', color: 'from-primary/8 to-primary/2' },
            ].map((stat, idx) => (
              <div key={idx} className={`relative flex flex-col items-center justify-center text-center px-6 py-8 group hover:bg-gradient-to-b ${stat.color} transition-all duration-300 ${idx === 1 ? 'md:border-r border-outline-variant/20' : ''} ${idx === 2 ? 'border-t md:border-t-0 md:border-r border-outline-variant/20' : ''} ${idx === 3 ? 'border-t md:border-t-0 border-outline-variant/20' : ''}`}>
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                  <span aria-hidden="true" className="material-symbols-outlined text-primary text-[28px]" data-icon={stat.icon}>{stat.icon}</span>
                </div>
                <h3 className="text-headline-md font-headline-md text-on-surface mb-1">{stat.value}</h3>
                <p className="text-body-md font-body-md text-on-surface-variant">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-20 bg-gradient-to-b from-surface to-surface-container-low">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="text-center mb-12">
            <span className="inline-block py-1 px-4 bg-primary/10 text-primary font-bold rounded-full text-label-md mb-4 uppercase tracking-wider">Browse Our Range</span>
            <h2 className="text-headline-lg md:text-headline-xl font-headline-lg md:font-headline-xl text-on-surface mb-3">Shop by Category</h2>
            <p className="text-body-lg text-on-surface-variant max-w-lg mx-auto">Find everything you need for your next project from our extensive collection</p>
          </div>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-5">
            {visualCategories.map((cat, idx) => (
              <a key={idx} className="group relative flex flex-col items-center" href="#">
                <div className="relative w-full aspect-square rounded-2xl overflow-hidden mb-3 shadow-sm group-hover:shadow-lg transition-all duration-300 border border-outline-variant/20 group-hover:border-primary/40">
                  <img alt={cat.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src={cat.image}/>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-2 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <span className="text-white text-label-md font-bold text-center block drop-shadow-lg">View All</span>
                  </div>
                </div>
                <span className="text-body-md font-semibold text-center group-hover:text-primary transition-colors duration-300 text-sm leading-tight px-1">{cat.name}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Product Carousels */}
      <section className="py-12 bg-white">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop space-y-16">
          
          {/* Deal of the Day */}
          <div>
            <div className="flex justify-between items-end mb-6">
              <h2 className="text-headline-sm font-headline-sm text-on-surface border-l-4 border-tertiary pl-3">Deal of the Day</h2>
              <a className="text-body-md font-semibold text-primary hover:underline" href="#">View All</a>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {dealProducts.map(p => <ProductCard key={p.id} {...p} />)}
            </div>
          </div>

          {/* Hardware */}
          <div>
            <div className="flex justify-between items-end mb-6">
              <h2 className="text-headline-sm font-headline-sm text-on-surface border-l-4 border-primary pl-3">Hardware Essentials</h2>
              <a className="text-body-md font-semibold text-primary hover:underline" href="#">View All</a>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {hardwareProducts.map(p => <ProductCard key={p.id} {...p} />)}
            </div>
          </div>

          {/* Paint */}
          <div>
            <div className="flex justify-between items-end mb-6">
              <h2 className="text-headline-sm font-headline-sm text-on-surface border-l-4 border-secondary pl-3">Paints & Coatings</h2>
              <a className="text-body-md font-semibold text-primary hover:underline" href="#">View All</a>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {paintProducts.map(p => <ProductCard key={p.id} {...p} />)}
            </div>
          </div>

        </div>
      </section>

      {/* Popular Brands */}
      <section className="py-20 bg-gradient-to-b from-surface-container-lowest to-surface-container relative overflow-hidden">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, #468432 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop relative z-10 mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="material-symbols-outlined text-primary text-[28px]">verified</span>
            <p className="text-label-lg font-label-lg text-primary uppercase tracking-widest">Authorized Dealer</p>
          </div>
          <h2 className="text-headline-lg md:text-headline-xl font-headline-lg md:font-headline-xl text-on-surface text-center mb-3">Trusted by Leading Brands</h2>
          <p className="text-body-lg text-on-surface-variant text-center max-w-xl mx-auto">We are authorized distributors for India's most trusted electrical and sanitary brands</p>
        </div>
        {/* Scrolling Marquee */}
        <div className="relative z-10">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-r from-surface-container-lowest to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-l from-surface-container-lowest to-transparent z-10 pointer-events-none"></div>
          <div className="flex animate-marquee">
            {[...popularBrands, ...popularBrands].map((brand, idx) => (
              <div key={idx} className="flex-shrink-0 mx-3 group">
                <div className="bg-white border border-outline-variant/40 rounded-xl px-8 py-5 flex items-center justify-center min-w-[180px] shadow-sm hover:shadow-md hover:border-primary/30 hover:bg-primary/[0.02] transition-all duration-300 cursor-default">
                  <span className="text-title-md md:text-title-lg font-title-lg font-bold text-on-surface/70 group-hover:text-primary transition-colors tracking-wide">
                    {brand}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <h2 className="text-headline-lg font-headline-lg text-on-surface mb-10 text-center">What Our Partners Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            <div className="bg-surface p-8 rounded-xl border border-outline-variant/30 relative">
              <span className="material-symbols-outlined text-primary/10 text-[64px] absolute top-4 right-4">format_quote</span>
              <div className="flex text-tertiary mb-4">
                <span className="material-symbols-outlined" data-icon="star">star</span>
                <span className="material-symbols-outlined" data-icon="star">star</span>
                <span className="material-symbols-outlined" data-icon="star">star</span>
                <span className="material-symbols-outlined" data-icon="star">star</span>
                <span className="material-symbols-outlined" data-icon="star">star</span>
              </div>
              <p className="text-body-lg text-on-surface-variant italic mb-6">"Laxmi Electrical has transformed our procurement process. Their bulk pricing and reliable delivery have made them an indispensable partner for all our major construction projects."</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 overflow-hidden flex items-center justify-center text-primary font-bold">
                  RS
                </div>
                <div>
                  <h4 className="text-title-lg font-bold text-on-surface">Rajeev Sharma</h4>
                  <p className="text-label-md text-on-surface-variant">Procurement Head, Horizon Builders</p>
                </div>
              </div>
            </div>

            <div className="bg-surface p-8 rounded-xl border border-outline-variant/30 relative">
              <span className="material-symbols-outlined text-primary/10 text-[64px] absolute top-4 right-4">format_quote</span>
              <div className="flex text-tertiary mb-4">
                <span className="material-symbols-outlined" data-icon="star">star</span>
                <span className="material-symbols-outlined" data-icon="star">star</span>
                <span className="material-symbols-outlined" data-icon="star">star</span>
                <span className="material-symbols-outlined" data-icon="star">star</span>
                <span className="material-symbols-outlined" data-icon="star">star</span>
              </div>
              <p className="text-body-lg text-on-surface-variant italic mb-6">"The inventory availability is unmatched. Whenever we have urgent requirements for sanitary fittings or electricals, they always deliver on time. Highly recommended for B2B needs."</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 overflow-hidden flex items-center justify-center text-primary font-bold">
                  AM
                </div>
                <div>
                  <h4 className="text-title-lg font-bold text-on-surface">Amit Mishra</h4>
                  <p className="text-label-md text-on-surface-variant">Owner, Mishra Hardware Retail</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
