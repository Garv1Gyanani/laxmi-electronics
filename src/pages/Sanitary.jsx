import React from 'react';
import ProductCard from '../components/ProductCard';

const Sanitary = () => {
  const products = [
    {
      id: 'SAN-FAU-01',
      title: 'Jaquar Continental Basin Mixer with Popup Waste',
      brand: 'Jaquar',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBGkYg2bHIq01JufAV3eBqpIkGY3yhRqvEYAP2vrrFt7QAf3YDn3VvVSpVYUck-3nkCVzhMYjgCYI_QCKKumLLCcvNz5_p3--FtruRHPpMWaz2dwkRXTDrs_3enymG-PU84tW4m8SLYunA8CYvbrRB8OKkeMz9bDmnRVv6KUXTQN8IVjMG2FTf9AA4nwfkdyHy1LYg-z5pBBMkj5Lz-oS0rDdc81_CarV6Is8E4NaYkuuOlMlOxMhEYZqz1nz6h0LaZWzL_mllcjcxC',
      discountedPrice: '3200.00',
      discount: 20,
      options: 1
    },
    {
      id: 'SAN-PIPE-02',
      title: 'Ashirvad CPVC Pro Pipe 1-inch (3m length)',
      brand: 'Ashirvad',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBGMIuOf3NfIgvssHJMJSV_sm5NiFYhxQc6hIEbL23XO8anOwjDPp1OAKgAHtilWIISpyl34WB53BA47Hc0PSBzRGhzMFKfCJ3_DO_Gqlt9I5U4CQQGY0NulfCyIqyz0zZr0jlAY6qxr1mD1bwfK35uA9MSF8MxMpvVTNOtikkGY7-ckSud_uWkvFdG1h0-8FghyPBdBnP9TdegQEC6u4a4fDiC0w5Tfyc2KOw7eKbhYnp9oxzvm7KgULyXYc8GflSZ6jXscaLbRlba',
      discountedPrice: '380.00',
      discount: 12,
      options: 3
    },
    {
      id: 'SAN-WC-03',
      title: 'Hindware Element Wall Mounted Water Closet',
      brand: 'Hindware',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD0mxeRHgYPxu1-TTwtuYAVdUOcQFiIPTDRJjasYNn6Y9PXUHqzhBLag2ekSxjNpnfmfSjQRpHb05etJirJKIINGNzwpZ97bI25tfPNqJdpaOc0OrbjyUEN4Q7BQtfbQaObeoLUPWCrHlWrTqMIdeeDQdSiXW2jf-UuPQL91AAhiIo6ywr9rBbPmizx05wonC3zFdjM1iUseibJsOfqvIQkXwXSdMwTAoKbBt7RuCf7KDWF-QV8w5kIiaDPfjgW2rtYP-A_VXZXnQRV',
      discountedPrice: '8500.00',
      discount: 25,
      options: 1
    }
  ];

  return (
    <div className="w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-stack-lg">
      <div className="mb-stack-md flex flex-col md:flex-row md:items-end justify-between gap-stack-md">
        <div>
          <nav aria-label="Breadcrumb" className="flex text-body-md text-on-surface-variant mb-unit">
            <ol className="inline-flex items-center space-x-1 md:space-x-2">
              <li className="inline-flex items-center"><a className="hover:text-primary transition-colors" href="/">Home</a></li>
              <li aria-current="page"><div className="flex items-center"><span className="material-symbols-outlined text-[16px] mx-1">chevron_right</span><span className="text-on-surface font-semibold">Sanitary & Plumbing</span></div></li>
            </ol>
          </nav>
          <h1 className="text-headline-lg-mobile md:text-headline-lg font-headline-lg text-primary">Sanitary & Plumbing</h1>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-start">
        <aside className="md:col-span-3 bg-white border border-outline-variant/40 rounded-2xl p-6 shadow-md h-auto sticky top-24">
          <div className="flex items-center justify-between mb-6 border-b border-outline-variant/40 pb-4">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[20px] text-[#CF0F0F] font-bold">filter_alt</span>
              <h2 className="text-title-lg font-black text-[#191c1e]">Filters</h2>
            </div>
            <button className="text-label-md font-black text-[#CF0F0F] hover:text-[#F79A19] transition-colors">Clear All</button>
          </div>
          
          <div className="mb-6">
            <h3 className="text-[11px] font-black text-on-surface-variant uppercase tracking-wider mb-3">Category</h3>
            <div className="space-y-2.5">
              {['Faucets & Taps', 'Pipes & Fittings', 'Sanitaryware'].map((cat) => (
                <label key={cat} className="flex items-center gap-3 cursor-pointer group text-on-surface hover:text-[#CF0F0F] transition-all">
                  <input type="checkbox" className="w-5 h-5 rounded border-outline-variant/60 text-[#BBCB64] focus:ring-[#BBCB64] focus:ring-opacity-25 transition-all cursor-pointer"/>
                  <span className="text-body-md font-semibold group-hover:translate-x-0.5 transition-transform">{cat}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="mb-6 border-t border-outline-variant/30 pt-6">
            <h3 className="text-[11px] font-black text-on-surface-variant uppercase tracking-wider mb-3">Brands</h3>
            <div className="space-y-2.5">
              {['Jaquar', 'Ashirvad', 'Hindware', 'Cera'].map((brand) => (
                <label key={brand} className="flex items-center gap-3 cursor-pointer group text-on-surface hover:text-[#CF0F0F] transition-all">
                  <input type="checkbox" className="w-5 h-5 rounded border-outline-variant/60 text-[#BBCB64] focus:ring-[#BBCB64] focus:ring-opacity-25 transition-all cursor-pointer"/>
                  <span className="text-body-md font-semibold group-hover:translate-x-0.5 transition-transform">{brand}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="border-t border-outline-variant/30 pt-6">
            <h3 className="text-[11px] font-black text-on-surface-variant uppercase tracking-wider mb-3">Availability</h3>
            <div className="space-y-2.5">
              <label className="flex items-center gap-3 cursor-pointer group text-on-surface hover:text-[#CF0F0F] transition-all">
                <input type="checkbox" defaultChecked className="w-5 h-5 rounded border-outline-variant/60 text-[#BBCB64] focus:ring-[#BBCB64] focus:ring-opacity-25 transition-all cursor-pointer"/>
                <span className="text-body-md font-semibold">In Stock Only</span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer group text-on-surface hover:text-[#CF0F0F] transition-all">
                <input type="checkbox" className="w-5 h-5 rounded border-outline-variant/60 text-[#BBCB64] focus:ring-[#BBCB64] focus:ring-opacity-25 transition-all cursor-pointer"/>
                <span className="text-body-md font-semibold">Bulk Offers Only</span>
              </label>
            </div>
          </div>
        </aside>
        <div className="md:col-span-9 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-gutter">
          {products.map(p => <ProductCard key={p.id} {...p} />)}
        </div>
      </div>
    </div>
  );
};
export default Sanitary;
