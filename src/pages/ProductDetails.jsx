import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useToast } from '../context/ToastContext';

const ProductDetails = () => {
  const { id } = useParams();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const allProducts = [
    // Home & Hardware
    { id: 'h1', title: 'Industrial Door Hinges, Heavy Duty Steel', brand: 'Generic B2B', image: 'images/door_hinges.png', originalPrice: '23672.00', discountedPrice: '16081.01', discount: 32, options: 2 },
    { id: 'h2', title: 'Box of Brass Screws for Construction', brand: 'Generic B2B', image: 'images/brass_screws.png', originalPrice: '302.00', discountedPrice: '183.56', discount: 39, options: 8 },
    { id: 'h3', title: 'Heavy Duty Industrial Door Lock, Secure', brand: 'Generic B2B', image: 'images/door_lock.png', originalPrice: '454.00', discountedPrice: '308.41', discount: 32, options: 3 },
    { id: 'h4', title: 'Premium Modern Door Handle, Brushed Metal', brand: 'Generic B2B', image: 'images/door_handle.png', originalPrice: '172.00', discountedPrice: '116.84', discount: 32, options: 1 },
    
    // Paints & Coatings
    { id: 'p1', title: 'Birla Opus Exterior Economy Style Power Bright White (9900) 10L', brand: 'Birla Opus', image: 'https://images.unsplash.com/photo-1562184552-997c461abbe6?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80', originalPrice: '2490.00', discountedPrice: '1730.52', discount: 31, options: 16 },
    { id: 'p2', title: 'Birla Opus Exterior Economy Style Power Fit Tintable White (9913) 10L', brand: 'Birla Opus', image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80', originalPrice: '2060.00', discountedPrice: '1190.71', discount: 42, options: 6 },
    { id: 'p3', title: 'Birla Opus Exterior Premium Calista Neo Star White (9900) 10L', brand: 'Birla Opus', image: 'https://images.unsplash.com/photo-1572981779307-38b8cabb2407?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80', originalPrice: '4260.00', discountedPrice: '2825.72', discount: 34, options: 16 },
    { id: 'p4', title: 'Birla Opus Exterior Premium Calista Perfect Choice Primer White 10L', brand: 'Birla Opus', image: 'https://images.unsplash.com/photo-1589407335682-1262d1cfa978?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80', originalPrice: '2250.00', discountedPrice: '1602.83', discount: 29, options: 4 },
    
    // Tools & Lighting
    { id: 'd1', title: 'High Power LED Outdoor Floodlight', brand: 'Philips', image: 'images/led_floodlight.png', originalPrice: '1655.00', discountedPrice: '1514.49', discount: 8, options: 16 },
    { id: 'd2', title: 'High Quality Chrome Wrench Set', brand: 'Taparia', image: 'images/wrench_set.png', originalPrice: '3400.00', discountedPrice: '2250.00', discount: 34, options: 1 },
    { id: 'd3', title: 'Premium Industrial Drill Machine', brand: 'Bosch', image: 'images/drill_machine.png', originalPrice: '625.00', discountedPrice: '498.40', discount: 20, options: 1 },
    { id: 'd4', title: 'Modern Safety Headphones for Construction', brand: '3M', image: 'images/safety_headphones.png', originalPrice: '1875.00', discountedPrice: '1459.60', discount: 22, options: 1 },
    
    // Products.jsx
    { id: 'HV-SW-001', title: 'Crabtree Athena 10A 1 Way Switch (Box of 20)', brand: 'Havells', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBGMIuOf3NfIgvssHJMJSV_sm5NiFYhxQc6hIEbL23XO8anOwjDPp1OAKgAHtilWIISpyl34WB53BA47Hc0PSBzRGhzMFKfCJ3_DO_Gqlt9I5U4CQQGY0NulfCyIqyz0zZr0jlAY6qxr1mD1bwfK35uA9MSF8MxMpvVTNOtikkGY7-ckSud_uWkvFdG1h0-8FghyPBdBnP9TdegQEC6u4a4fDiC0w5Tfyc2KOw7eKbhYnp9oxzvm7KgULyXYc8GflSZ6jXscaLbRlba', originalPrice: '2050.00', discountedPrice: '1850.00', discount: 10, options: 20 },
    { id: 'LG-CP-104', title: 'Arteor 4 Module Cover Plate, Magnesium (Box of 10)', brand: 'Legrand', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD0mxeRHgYPxu1-TTwtuYAVdUOcQFiIPTDRJjasYNn6Y9PXUHqzhBLag2ekSxjNpnfmfSjQRpHb05etJirJKIINGNzwpZ97bI25tfPNqJdpaOc0OrbjyUEN4Q7BQtfbQaObeoLUPWCrHlWrTqMIdeeDQdSiXW2jf-UuPQL91AAhiIo6ywr9rBbPmizx05wonC3zFdjM1iUseibJsOfqvIQkXwXSdMwTAoKbBt7RuCf7KDWF-QV8w5kIiaDPfjgW2rtYP-A_VXZXnQRV', originalPrice: '2400.00', discountedPrice: '2400.00', discount: 0, options: 10 },
    { id: 'SE-IS-063', title: 'Acti9 63A 4 Pole Isolator Switch (Master Carton of 50)', brand: 'Schneider Electric', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBpofnSJAuuJH0-g0-JhR7ZlSX0jrX-k_sTnOS_8GOMz5Y3fJQ-_J4UjcjNX75oyX5N2hsswkdnjy89hguhq7hWtLNisaqSb8Wud1QDuA_bgipbw7UjaY5y-J85fKsrNtysjJoNxt_Z3N2iWSYlFIZ3zIJniXL_Y836I6Df9o_CHLZL4KD3dtLAqejs5rd82PW9R01ahLIFpsAJE_UZYeAbmjzvb-Lg74txrryGl2JmhtulVkVPNoR0_Por2_GNRj-fFadawjBzn2Xu', originalPrice: '30000.00', discountedPrice: '28500.00', discount: 5, options: 50 },

    // Electrical.jsx
    { id: 'ELEC-W-01', title: 'Polycab 1.5 sq mm FR PVC Insulated Copper Wire (90m)', brand: 'Polycab', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBGMIuOf3NfIgvssHJMJSV_sm5NiFYhxQc6hIEbL23XO8anOwjDPp1OAKgAHtilWIISpyl34WB53BA47Hc0PSBzRGhzMFKfCJ3_DO_Gqlt9I5U4CQQGY0NulfCyIqyz0zZr0jlAY6qxr1mD1bwfK35uA9MSF8MxMpvVTNOtikkGY7-ckSud_uWkvFdG1h0-8FghyPBdBnP9TdegQEC6u4a4fDiC0w5Tfyc2KOw7eKbhYnp9oxzvm7KgULyXYc8GflSZ6jXscaLbRlba', originalPrice: '1470.00', discountedPrice: '1250.00', discount: 15, options: 90 },
    { id: 'ELEC-SW-02', title: 'Anchor Roma Classic 10A Switch (Box of 20)', brand: 'Anchor by Panasonic', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD0mxeRHgYPxu1-TTwtuYAVdUOcQFiIPTDRJjasYNn6Y9PXUHqzhBLag2ekSxjNpnfmfSjQRpHb05etJirJKIINGNzwpZ97bI25tfPNqJdpaOc0OrbjyUEN4Q7BQtfbQaObeoLUPWCrHlWrTqMIdeeDQdSiXW2jf-UuPQL91AAhiIo6ywr9rBbPmizx05wonC3zFdjM1iUseibJsOfqvIQkXwXSdMwTAoKbBt7RuCf7KDWF-QV8w5kIiaDPfjgW2rtYP-A_VXZXnQRV', originalPrice: '945.00', discountedPrice: '850.00', discount: 10, options: 20 },
    { id: 'ELEC-MCB-03', title: 'Legrand RX3 32A C Curve Double Pole MCB', brand: 'Legrand', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBpofnSJAuuJH0-g0-JhR7ZlSX0jrX-k_sTnOS_8GOMz5Y3fJQ-_J4UjcjNX75oyX5N2hsswkdnjy89hguhq7hWtLNisaqSb8Wud1QDuA_bgipbw7UjaY5y-J85fKsrNtysjJoNxt_Z3N2iWSYlFIZ3zIJniXL_Y836I6Df9o_CHLZL4KD3dtLAqejs5rd82PW9R01ahLIFpsAJE_UZYeAbmjzvb-Lg74txrryGl2JmhtulVkVPNoR0_Por2_GNRj-fFadawjBzn2Xu', originalPrice: '475.00', discountedPrice: '450.00', discount: 5, options: 1 },

    // Sanitary.jsx
    { id: 'SAN-FAU-01', title: 'Jaquar Continental Basin Mixer with Popup Waste', brand: 'Jaquar', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBGkYg2bHIq01JufAV3eBqpIkGY3yhRqvEYAP2vrrFt7QAf3YDn3VvVSpVYUck-3nkCVzhMYjgCYI_QCKKumLLCcvNz5_p3--FtruRHPpMWaz2dwkRXTDrs_3enymG-PU84tW4m8SLYunA8CYvbrRB8OKkeMz9bDmnRVv6KUXTQN8IVjMG2FTf9AA4nwfkdyHy1LYg-z5pBBMkj5Lz-oS0rDdc81_CarV6Is8E4NaYkuuOlMlOxMhEYZqz1nz6h0LaZWzL_mllcjcxC', originalPrice: '4000.00', discountedPrice: '3200.00', discount: 20, options: 1 },
    { id: 'SAN-PIPE-02', title: 'Ashirvad CPVC Pro Pipe 1-inch (3m length)', brand: 'Ashirvad', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBGMIuOf3NfIgvssHJMJSV_sm5NiFYhxQc6hIEbL23XO8anOwjDPp1OAKgAHtilWIISpyl34WB53BA47Hc0PSBzRGhzMFKfCJ3_DO_Gqlt9I5U4CQQGY0NulfCyIqyz0zZr0jlAY6qxr1mD1bwfK35uA9MSF8MxMpvVTNOtikkGY7-ckSud_uWkvFdG1h0-8FghyPBdBnP9TdegQEC6u4a4fDiC0w5Tfyc2KOw7eKbhYnp9oxzvm7KgULyXYc8GflSZ6jXscaLbRlba', originalPrice: '430.00', discountedPrice: '380.00', discount: 12, options: 3 },
    { id: 'SAN-WC-03', title: 'Hindware Element Wall Mounted Water Closet', brand: 'Hindware', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD0mxeRHgYPxu1-TTwtuYAVdUOcQFiIPTDRJjasYNn6Y9PXUHqzhBLag2ekSxjNpnfmfSjQRpHb05etJirJKIINGNzwpZ97bI25tfPNqJdpaOc0OrbjyUEN4Q7BQtfbQaObeoLUPWCrHlWrTqMIdeeDQdSiXW2jf-UuPQL91AAhiIo6ywr9rBbPmizx05wonC3zFdjM1iUseibJsOfqvIQkXwXSdMwTAoKbBt7RuCf7KDWF-QV8w5kIiaDPfjgW2rtYP-A_VXZXnQRV', originalPrice: '11330.00', discountedPrice: '8500.00', discount: 25, options: 1 }
  ];

  const foundProduct = allProducts.find(p => p.id === id);

  const product = foundProduct ? {
    id: foundProduct.id,
    title: foundProduct.title,
    brand: 'Generic',
    collection: 'Standard',
    finish: 'Standard',
    material: 'Standard',
    price: foundProduct.discountedPrice,
    mrp: foundProduct.originalPrice,
    discount: foundProduct.discount,
    image: foundProduct.image
  } : {
    id: id || 'KUB-CHR-35011B',
    title: 'Kubix Prime Single Lever Basin Mixer',
    brand: 'Jaquar',
    collection: 'Kubix Prime',
    finish: 'Chrome Plated',
    material: 'Solid Brass',
    price: '4250',
    mrp: '5800',
    discount: '26',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBGkYg2bHIq01JufAV3eBqpIkGY3yhRqvEYAP2vrrFt7QAf3YDn3VvVSpVYUck-3nkCVzhMYjgCYI_QCKKumLLCcvNz5_p3--FtruRHPpMWaz2dwkRXTDrs_3enymG-PU84tW4m8SLYunA8CYvbrRB8OKkeMz9bDmnRVv6KUXTQN8IVjMG2FTf9AA4nwfkdyHy1LYg-z5pBBMkj5Lz-oS0rDdc81_CarV6Is8E4NaYkuuOlMlOxMhEYZqz1nz6h0LaZWzL_mllcjcxC'
  };

  const [activeTab, setActiveTab] = useState('specs');
  const { addToCart } = useCart();
  const showToast = useToast();

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      title: product.title,
      image: product.image,
      originalPrice: product.mrp,
      discountedPrice: product.price,
      discount: product.discount,
      price: parseFloat(product.price),
    });
    showToast(`${product.title} added to quote cart!`, { type: 'success' });
  };

  return (
    <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-stack-lg">
      {/* Breadcrumbs */}
      <nav className="flex items-center text-label-md font-label-md text-on-surface-variant mb-stack-md min-w-0">
        <Link to="/" className="hover:text-primary flex-shrink-0">Home</Link>
        <span className="material-symbols-outlined mx-2 text-[14px] flex-shrink-0">chevron_right</span>
        <span className="text-on-surface truncate">{product.title}</span>
      </nav>

      {/* Product Hero Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter mb-stack-lg">
        {/* Left: Gallery */}
        <div className="lg:col-span-7 flex flex-col gap-stack-sm">
          {/* Main Image */}
          <div className="relative w-full aspect-square bg-surface-container-lowest border border-outline-variant rounded-lg overflow-hidden group cursor-zoom-in">
            <div className="w-full h-full bg-contain bg-center bg-no-repeat transition-transform duration-500 group-hover:scale-110" style={{ backgroundImage: `url('${product.image}')` }}></div>
            {/* Badges overlaid */}
            <div className="absolute top-4 left-4 flex flex-col gap-2">
              <span className="bg-primary text-white text-label-md font-label-md px-3 py-1 rounded-sm shadow-sm flex items-center gap-1">
                <span className="material-symbols-outlined text-[14px]">new_releases</span>
                New Arrival
              </span>
            </div>
            {/* Zoom Hint */}
            <div className="absolute bottom-4 right-4 bg-surface-container-lowest/80 backdrop-blur-sm p-2 rounded-full shadow-sm text-on-surface flex items-center justify-center pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
              <span className="material-symbols-outlined text-[20px]">zoom_in</span>
            </div>
          </div>
          {/* Thumbnails Strip */}
          <div className="flex gap-stack-sm overflow-x-auto hide-scrollbar py-1">
            <button className="flex-shrink-0 w-24 h-24 border-2 border-primary rounded-lg overflow-hidden p-2">
              <div className="w-full h-full bg-contain bg-no-repeat bg-center" style={{ backgroundImage: `url('${product.image}')` }}></div>
            </button>
            <button className="flex-shrink-0 w-24 h-24 border border-outline-variant rounded-lg overflow-hidden hover:border-outline transition-colors bg-surface-container-low flex items-center justify-center text-on-surface-variant flex-col gap-1">
              <span className="material-symbols-outlined">description</span>
              <span className="text-[10px] font-bold uppercase">Spec Sheet</span>
            </button>
          </div>
        </div>

        {/* Right: Product Details */}
        <div className="lg:col-span-5 flex flex-col pt-2 lg:pl-4">
          <div className="mb-stack-md border-b border-outline-variant pb-stack-md">
            <span className="text-label-md font-label-md text-on-surface-variant uppercase tracking-wider block mb-1">{product.brand}</span>
            <h1 className="text-headline-lg-mobile md:text-headline-lg font-headline-lg-mobile md:font-headline-lg text-on-surface mb-3">{product.title}</h1>
            <p className="text-body-md font-body-md text-on-surface-variant">Code: {product.id}</p>
          </div>

          {/* Status Badges */}
          <div className="flex flex-wrap gap-3 mb-stack-md">
            <div className="flex items-center gap-1.5 text-label-md font-label-md text-primary bg-primary/[0.08] px-3 py-1.5 rounded-sm border border-primary/20">
              <span className="material-symbols-outlined text-[16px] font-bold">check_circle</span>
              In Stock (150+ units)
            </div>
            <div className="flex items-center gap-1.5 text-label-md font-label-md text-on-surface bg-surface-container px-3 py-1.5 rounded-sm border border-outline-variant">
              <span className="material-symbols-outlined text-[16px]">local_shipping</span>
              Hyderabad 24hr Delivery
            </div>
          </div>

          {/* Pricing Section */}
          <div className="bg-surface-container-lowest border border-outline-variant rounded-lg p-stack-md mb-stack-lg shadow-sm">
            <div className="mb-4">
              <span className="text-label-md font-label-md text-on-surface-variant block mb-1">Base Wholesale Price</span>
              <div className="flex items-baseline gap-2">
                <span className="text-display-lg font-display-lg text-primary">₹{product.price}</span>
                <span className="text-body-md font-body-md text-on-surface-variant">/ unit (ex. GST)</span>
              </div>
              <p className="text-[12px] text-on-surface-variant mt-1">MRP: <del>₹{product.mrp}</del> (Save {product.discount}%)</p>
            </div>

            {/* Bulk Tiers Table */}
            <div className="border border-outline-variant rounded overflow-hidden overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-surface-container text-label-md font-label-md text-on-surface">
                    <th className="py-2 px-3 border-b border-outline-variant">Qty Bracket</th>
                    <th className="py-2 px-3 border-b border-outline-variant">Unit Price</th>
                    <th className="py-2 px-3 border-b border-outline-variant text-right">Discount</th>
                  </tr>
                </thead>
                <tbody className="text-body-md font-body-md text-on-surface">
                  <tr className="border-b border-outline-variant hover:bg-surface-container-low transition-colors">
                    <td className="py-2 px-3">1 - 10</td>
                    <td className="py-2 px-3 font-semibold">₹{product.price}</td>
                    <td className="py-2 px-3 text-right text-on-surface-variant">-</td>
                  </tr>
                  <tr className="border-b border-outline-variant hover:bg-surface-container-low transition-colors">
                    <td className="py-2 px-3">11 - 50</td>
                    <td className="py-2 px-3 font-semibold">₹{(product.price * 0.93).toFixed(0)}</td>
                    <td className="py-2 px-3 text-right text-primary font-medium">7% Off</td>
                  </tr>
                  <tr className="hover:bg-surface-container-low transition-colors bg-primary/[0.04]">
                    <td className="py-2 px-3">51+</td>
                    <td className="py-2 px-3 font-semibold text-primary">₹{(product.price * 0.87).toFixed(0)}</td>
                    <td className="py-2 px-3 text-right text-primary font-medium">13% Off</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col gap-stack-sm mt-auto">
            <button onClick={handleAddToCart} className="w-full bg-[#FFE52A] text-[#191c1e] text-title-lg font-black py-4 px-6 rounded-lg flex items-center justify-center gap-2 hover:bg-[#F79A19] transition-colors shadow-sm">
              <span className="material-symbols-outlined text-[24px]">shopping_cart</span>
              Add to Quote Cart
            </button>
            <a href="https://wa.me/918897107975" target="_blank" rel="noreferrer" className="w-full bg-[#BBCB64] text-[#191c1e] text-title-lg font-extrabold py-4 px-6 rounded-lg flex items-center justify-center gap-2 hover:bg-[#FFE52A] transition-colors shadow-sm border border-[#BBCB64]/50">
              <span className="material-symbols-outlined">forum</span>
              Request Quote on WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Tabs Section */}
      <div className="mb-stack-lg border border-outline-variant rounded-lg bg-surface-container-lowest shadow-sm overflow-hidden">
        {/* Tab Headers */}
        <div className="flex border-b border-outline-variant bg-surface-container-low overflow-x-auto hide-scrollbar">
          <button 
            onClick={() => setActiveTab('specs')}
            className={`px-6 py-4 text-title-lg font-title-lg whitespace-nowrap transition-colors ${activeTab === 'specs' ? 'text-primary border-b-2 border-primary font-bold bg-surface-container-lowest' : 'text-on-surface-variant hover:text-primary hover:bg-surface-container-highest'}`}>
            Technical Specifications
          </button>
          <button 
            onClick={() => setActiveTab('desc')}
            className={`px-6 py-4 text-title-lg font-title-lg whitespace-nowrap transition-colors ${activeTab === 'desc' ? 'text-primary border-b-2 border-primary font-bold bg-surface-container-lowest' : 'text-on-surface-variant hover:text-primary hover:bg-surface-container-highest'}`}>
            Description & Features
          </button>
          <button 
            onClick={() => setActiveTab('bulk')}
            className={`px-6 py-4 text-title-lg font-title-lg whitespace-nowrap transition-colors ${activeTab === 'bulk' ? 'text-primary border-b-2 border-primary font-bold bg-surface-container-lowest' : 'text-on-surface-variant hover:text-primary hover:bg-surface-container-highest'}`}>
            Bulk Order Info
          </button>
        </div>

        {/* Tab Content (Specs) */}
        {activeTab === 'specs' && (
          <div className="p-stack-md md:p-stack-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
              {/* Spec List */}
              <ul className="flex flex-col border-t border-outline-variant">
                <li className="flex justify-between py-3 border-b border-outline-variant">
                  <span className="text-body-md font-body-md text-on-surface-variant">Brand</span>
                  <span className="text-body-md font-body-md text-on-surface font-semibold">{product.brand}</span>
                </li>
                <li className="flex justify-between py-3 border-b border-outline-variant">
                  <span className="text-body-md font-body-md text-on-surface-variant">Collection</span>
                  <span className="text-body-md font-body-md text-on-surface font-semibold">{product.collection}</span>
                </li>
                <li className="flex justify-between py-3 border-b border-outline-variant">
                  <span className="text-body-md font-body-md text-on-surface-variant">Product Code</span>
                  <span className="text-body-md font-body-md text-on-surface font-semibold">{product.id}</span>
                </li>
                <li className="flex justify-between py-3 border-b border-outline-variant">
                  <span className="text-body-md font-body-md text-on-surface-variant">Finish</span>
                  <span className="text-body-md font-body-md text-on-surface font-semibold">{product.finish}</span>
                </li>
                <li className="flex justify-between py-3 border-b border-outline-variant">
                  <span className="text-body-md font-body-md text-on-surface-variant">Material</span>
                  <span className="text-body-md font-body-md text-on-surface font-semibold">{product.material}</span>
                </li>
              </ul>
              {/* Additional Details / Downloads */}
              <div className="bg-primary/[0.04] p-stack-md rounded border border-primary/10 h-fit">
                <h3 className="text-headline-sm font-headline-sm text-on-surface mb-3">Technical Resources</h3>
                <p className="text-body-md font-body-md text-on-surface-variant mb-4">Download comprehensive technical drawings and installation guides for project planning.</p>
                <div className="flex flex-col gap-2">
                  <button className="flex items-center justify-between p-3 border border-outline-variant rounded hover:bg-surface-container-low transition-colors text-left group">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-primary">picture_as_pdf</span>
                      <span className="text-body-md font-body-md text-on-surface font-medium group-hover:text-primary">2D CAD Drawing</span>
                    </div>
                    <span className="material-symbols-outlined text-on-surface-variant text-[18px]">download</span>
                  </button>
                  <button className="flex items-center justify-between p-3 border border-outline-variant rounded hover:bg-surface-container-low transition-colors text-left group">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-primary">inventory_2</span>
                      <span className="text-body-md font-body-md text-on-surface font-medium group-hover:text-primary">Installation Manual</span>
                    </div>
                    <span className="material-symbols-outlined text-on-surface-variant text-[18px]">download</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
        {activeTab === 'desc' && (
          <div className="p-stack-md md:p-stack-lg">
             <p className="text-body-lg text-on-surface-variant">Premium quality product designed for durability and performance in demanding environments. Perfect for both commercial and high-end residential applications.</p>
          </div>
        )}
        {activeTab === 'bulk' && (
          <div className="p-stack-md md:p-stack-lg">
             <p className="text-body-lg text-on-surface-variant">Special bulk pricing available for orders exceeding 100 units. Please contact our sales team directly for large project requirements and customized logistics solutions.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetails;
