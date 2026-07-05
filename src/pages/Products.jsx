import React from 'react';
import ProductCard from '../components/ProductCard';

const Products = () => {
  // Using some dummy products for the grid based on the design
  const products = [
    {
      id: 'HV-SW-001',
      title: 'Crabtree Athena 10A 1 Way Switch (Box of 20)',
      brand: 'Havells',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBGMIuOf3NfIgvssHJMJSV_sm5NiFYhxQc6hIEbL23XO8anOwjDPp1OAKgAHtilWIISpyl34WB53BA47Hc0PSBzRGhzMFKfCJ3_DO_Gqlt9I5U4CQQGY0NulfCyIqyz0zZr0jlAY6qxr1mD1bwfK35uA9MSF8MxMpvVTNOtikkGY7-ckSud_uWkvFdG1h0-8FghyPBdBnP9TdegQEC6u4a4fDiC0w5Tfyc2KOw7eKbhYnp9oxzvm7KgULyXYc8GflSZ6jXscaLbRlba',
      discountedPrice: '1850.00',
      discount: 10,
      options: 20
    },
    {
      id: 'LG-CP-104',
      title: 'Arteor 4 Module Cover Plate, Magnesium (Box of 10)',
      brand: 'Legrand',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD0mxeRHgYPxu1-TTwtuYAVdUOcQFiIPTDRJjasYNn6Y9PXUHqzhBLag2ekSxjNpnfmfSjQRpHb05etJirJKIINGNzwpZ97bI25tfPNqJdpaOc0OrbjyUEN4Q7BQtfbQaObeoLUPWCrHlWrTqMIdeeDQdSiXW2jf-UuPQL91AAhiIo6ywr9rBbPmizx05wonC3zFdjM1iUseibJsOfqvIQkXwXSdMwTAoKbBt7RuCf7KDWF-QV8w5kIiaDPfjgW2rtYP-A_VXZXnQRV',
      discountedPrice: '2400.00',
      discount: 0,
      options: 10
    },
    {
      id: 'SE-IS-063',
      title: 'Acti9 63A 4 Pole Isolator Switch (Master Carton of 50)',
      brand: 'Schneider Electric',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBpofnSJAuuJH0-g0-JhR7ZlSX0jrX-k_sTnOS_8GOMz5Y3fJQ-_J4UjcjNX75oyX5N2hsswkdnjy89hguhq7hWtLNisaqSb8Wud1QDuA_bgipbw7UjaY5y-J85fKsrNtysjJoNxt_Z3N2iWSYlFIZ3zIJniXL_Y836I6Df9o_CHLZL4KD3dtLAqejs5rd82PW9R01ahLIFpsAJE_UZYeAbmjzvb-Lg74txrryGl2JmhtulVkVPNoR0_Por2_GNRj-fFadawjBzn2Xu',
      discountedPrice: '28500.00',
      discount: 0,
      options: 50
    }
  ];

  return (
    <div className="w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-stack-lg">
      {/* Breadcrumbs & Header */}
      <div className="mb-stack-md flex flex-col md:flex-row md:items-end justify-between gap-stack-md">
        <div>
          <nav aria-label="Breadcrumb" className="flex text-body-md text-on-surface-variant mb-unit">
            <ol className="inline-flex items-center space-x-1 md:space-x-2">
              <li className="inline-flex items-center">
                <a className="hover:text-primary transition-colors" href="/">Home</a>
              </li>
              <li>
                <div className="flex items-center">
                  <span className="material-symbols-outlined text-[16px] mx-1">chevron_right</span>
                  <a className="hover:text-primary transition-colors" href="#">Electrical</a>
                </div>
              </li>
              <li aria-current="page">
                <div className="flex items-center">
                  <span className="material-symbols-outlined text-[16px] mx-1">chevron_right</span>
                  <span className="text-on-surface font-semibold">Switches & Sockets</span>
                </div>
              </li>
            </ol>
          </nav>
          <h1 className="text-headline-lg-mobile md:text-headline-lg font-headline-lg text-primary">Wholesale Switches & Sockets</h1>
        </div>
        <div className="text-body-md text-on-surface-variant">
          Showing <span className="font-bold text-on-surface">1-3</span> of <span className="font-bold text-on-surface">1,240</span> items
        </div>
      </div>

      {/* Utility Bar (Search & Sort) */}
      <div className="bg-surface-container-lowest border border-outline-variant rounded-DEFAULT p-4 mb-stack-lg flex flex-col sm:flex-row gap-4 items-center justify-between shadow-sm">
        <div className="relative w-full max-w-md">
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant">search</span>
          <input className="w-full pl-10 pr-4 py-2 bg-surface border border-outline-variant rounded-DEFAULT text-body-md focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-all" placeholder="Search by SKU, Product Name, or Brand..." type="text"/>
        </div>
        <div className="flex items-center gap-2 w-full sm:w-auto">
          <label className="text-label-md font-label-md text-on-surface-variant whitespace-nowrap" htmlFor="sort">Sort by:</label>
          <select className="w-full sm:w-auto bg-surface border border-outline-variant rounded-DEFAULT py-2 px-3 text-body-md focus:outline-none focus:border-secondary" id="sort">
            <option>Recommended</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
            <option>Newest Arrivals</option>
          </select>
        </div>
      </div>

      {/* Layout Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-start">
        {/* Sidebar Filters */}
        <aside className="md:col-span-3 bg-surface-container-lowest border border-outline-variant rounded-DEFAULT p-6 h-auto sticky top-24">
          <div className="flex items-center justify-between mb-stack-md border-b border-outline-variant pb-2">
            <h2 className="text-title-lg font-title-lg text-primary">Filters</h2>
            <button className="text-label-md font-label-md text-secondary hover:underline">Clear All</button>
          </div>

          {/* Filter Section: Categories */}
          <div className="mb-stack-md">
            <h3 className="text-label-md font-label-md text-on-surface-variant uppercase tracking-wider mb-3">Category</h3>
            <div className="space-y-2 max-h-48 overflow-y-auto custom-scrollbar pr-2">
              <label className="flex items-center gap-2 cursor-pointer group">
                <input defaultChecked className="w-4 h-4 rounded-sm border-outline-variant text-secondary focus:ring-secondary bg-surface" type="checkbox"/>
                <span className="text-body-md text-on-surface group-hover:text-secondary transition-colors">Modular Switches (450)</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer group">
                <input className="w-4 h-4 rounded-sm border-outline-variant text-secondary focus:ring-secondary bg-surface" type="checkbox"/>
                <span className="text-body-md text-on-surface group-hover:text-secondary transition-colors">Wall Sockets (320)</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer group">
                <input className="w-4 h-4 rounded-sm border-outline-variant text-secondary focus:ring-secondary bg-surface" type="checkbox"/>
                <span className="text-body-md text-on-surface group-hover:text-secondary transition-colors">Fan Regulators (115)</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer group">
                <input className="w-4 h-4 rounded-sm border-outline-variant text-secondary focus:ring-secondary bg-surface" type="checkbox"/>
                <span className="text-body-md text-on-surface group-hover:text-secondary transition-colors">Cover Plates (280)</span>
              </label>
            </div>
          </div>

          {/* Filter Section: Brands */}
          <div className="mb-stack-md">
            <h3 className="text-label-md font-label-md text-on-surface-variant uppercase tracking-wider mb-3">Brand</h3>
            <div className="space-y-2 max-h-48 overflow-y-auto custom-scrollbar pr-2">
              <label className="flex items-center gap-2 cursor-pointer group">
                <input className="w-4 h-4 rounded-sm border-outline-variant text-secondary focus:ring-secondary bg-surface" type="checkbox"/>
                <span className="text-body-md text-on-surface group-hover:text-secondary transition-colors">Legrand</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer group">
                <input defaultChecked className="w-4 h-4 rounded-sm border-outline-variant text-secondary focus:ring-secondary bg-surface" type="checkbox"/>
                <span className="text-body-md text-on-surface group-hover:text-secondary transition-colors">Havells</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer group">
                <input className="w-4 h-4 rounded-sm border-outline-variant text-secondary focus:ring-secondary bg-surface" type="checkbox"/>
                <span className="text-body-md text-on-surface group-hover:text-secondary transition-colors">Anchor by Panasonic</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer group">
                <input className="w-4 h-4 rounded-sm border-outline-variant text-secondary focus:ring-secondary bg-surface" type="checkbox"/>
                <span className="text-body-md text-on-surface group-hover:text-secondary transition-colors">Schneider Electric</span>
              </label>
            </div>
          </div>

          {/* Filter Section: Price Range */}
          <div className="mb-stack-md">
            <h3 className="text-label-md font-label-md text-on-surface-variant uppercase tracking-wider mb-3">Wholesale Price (per unit)</h3>
            <div className="flex items-center gap-2">
              <div className="relative w-full">
                <span className="absolute left-2 top-1/2 -translate-y-1/2 text-on-surface-variant text-body-md">₹</span>
                <input className="w-full pl-6 pr-2 py-1.5 bg-surface border border-outline-variant rounded-DEFAULT text-body-md focus:outline-none focus:border-secondary" placeholder="Min" type="number"/>
              </div>
              <span className="text-on-surface-variant">-</span>
              <div className="relative w-full">
                <span className="absolute left-2 top-1/2 -translate-y-1/2 text-on-surface-variant text-body-md">₹</span>
                <input className="w-full pl-6 pr-2 py-1.5 bg-surface border border-outline-variant rounded-DEFAULT text-body-md focus:outline-none focus:border-secondary" placeholder="Max" type="number"/>
              </div>
            </div>
          </div>

          {/* Filter Section: Availability */}
          <div>
            <h3 className="text-label-md font-label-md text-on-surface-variant uppercase tracking-wider mb-3">Availability</h3>
            <label className="flex items-center gap-2 cursor-pointer group">
              <input defaultChecked className="w-4 h-4 rounded-sm border-outline-variant text-secondary focus:ring-secondary bg-surface" type="checkbox"/>
              <span className="text-body-md text-on-surface group-hover:text-secondary transition-colors">In Stock (Ready to Dispatch)</span>
            </label>
          </div>
        </aside>

        {/* Product Grid */}
        <div className="md:col-span-9 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-gutter">
          {products.map(p => (
            <ProductCard key={p.id} {...p} />
          ))}
        </div>
      </div>

      {/* Pagination */}
      <div className="mt-stack-lg flex justify-center border-t border-outline-variant pt-stack-md">
        <nav aria-label="Pagination" className="inline-flex rounded-DEFAULT shadow-sm">
          <a className="relative inline-flex items-center rounded-l-DEFAULT px-2 py-2 text-on-surface-variant border border-outline-variant bg-surface hover:bg-surface-container transition-colors" href="#">
            <span className="material-symbols-outlined text-[20px]">chevron_left</span>
          </a>
          <a aria-current="page" className="relative z-10 inline-flex items-center bg-secondary px-4 py-2 text-body-md font-semibold text-on-secondary border border-secondary" href="#">1</a>
          <a className="relative inline-flex items-center px-4 py-2 text-body-md font-semibold text-on-surface hover:bg-surface-container border border-outline-variant bg-surface-container-lowest transition-colors" href="#">2</a>
          <a className="relative inline-flex items-center px-4 py-2 text-body-md font-semibold text-on-surface hover:bg-surface-container border border-outline-variant bg-surface-container-lowest transition-colors" href="#">3</a>
          <span className="relative inline-flex items-center px-4 py-2 text-body-md font-semibold text-on-surface-variant border border-outline-variant bg-surface-container-lowest">...</span>
          <a className="relative inline-flex items-center px-4 py-2 text-body-md font-semibold text-on-surface hover:bg-surface-container border border-outline-variant bg-surface-container-lowest transition-colors" href="#">12</a>
          <a className="relative inline-flex items-center rounded-r-DEFAULT px-2 py-2 text-on-surface-variant border border-outline-variant bg-surface hover:bg-surface-container transition-colors" href="#">
            <span className="material-symbols-outlined text-[20px]">chevron_right</span>
          </a>
        </nav>
      </div>
    </div>
  );
};

export default Products;
