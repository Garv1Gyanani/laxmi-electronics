import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useToast } from '../context/ToastContext';

const ProductCard = ({ id, title, image, originalPrice, discountedPrice, discount, options }) => {
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const showToast = useToast();

  const handleAddToCart = (e) => {
    e.stopPropagation();
    addToCart({ id, title, image, originalPrice, discountedPrice, discount, price: discountedPrice });
    showToast('Added to quote cart!', { type: 'success' });
  };

  return (
    <article 
      onClick={() => navigate(`/product/${id}`)}
      className="bg-surface-container-lowest border border-outline-variant rounded-xl overflow-hidden group hover:shadow-[0px_4px_12px_rgba(70,132,50,0.1)] transition-all flex flex-col h-full relative cursor-pointer"
    >
      {/* Badges */}
      <div className="absolute top-2 left-2 z-10 flex flex-col gap-1">
        <span className="bg-[#BBCB64] text-[#191c1e] text-[11px] font-black px-2 py-0.5 rounded-sm uppercase tracking-wide shadow-sm">In Stock</span>
        {discount > 0 && <span className="bg-[#CF0F0F] text-white text-[11px] font-black px-2 py-0.5 rounded-sm uppercase tracking-wide shadow-sm">-{discount}% OFF</span>}
      </div>
      
      {/* Image */}
      <div className="w-full aspect-square bg-surface-container-low overflow-hidden border-b border-outline-variant p-4 flex items-center justify-center">
        <img 
          src={image} 
          alt={title}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = 'https://lh3.googleusercontent.com/aida-public/AB6AXuBGMIuOf3NfIgvssHJMJSV_sm5NiFYhxQc6hIEbL23XO8anOwjDPp1OAKgAHtilWIISpyl34WB53BA47Hc0PSBzRGhzMFKfCJ3_DO_Gqlt9I5U4CQQGY0NulfCyIqyz0zZr0jlAY6qxr1mD1bwfK35uA9MSF8MxMpvVTNOtikkGY7-ckSud_uWkvFdG1h0-8FghyPBdBnP9TdegQEC6u4a4fDiC0w5Tfyc2KOw7eKbhYnp9oxzvm7KgULyXYc8GflSZ6jXscaLbRlba';
          }}
          className="w-full h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-300" 
        />
      </div>
      
      {/* Content */}
      <div className="p-4 flex flex-col flex-grow">
        <div className="text-label-md font-label-md text-on-surface-variant mb-1">Brand Name • SKU: {id}</div>
        <h3 className="text-title-lg font-title-lg text-on-surface mb-2 line-clamp-2">{title}</h3>
        
        <div className="flex items-end justify-between mt-auto pt-4 border-t border-outline-variant border-dashed">
          <div>
            <p className="text-label-md font-label-md text-on-surface-variant mb-0.5">Wholesale Price</p>
            <div className="flex items-center gap-2">
              <p className="text-price-display font-black text-[#CF0F0F]">₹{discountedPrice}</p>
              {originalPrice && <p className="text-[12px] text-outline line-through">₹{originalPrice}</p>}
            </div>
            <p className="text-[11px] text-on-surface-variant font-semibold mt-1">₹{(parseFloat(discountedPrice)/options).toFixed(2)} / unit</p>
          </div>
        </div>
      </div>
      
      {/* Actions */}
      <div className="p-4 pt-0 flex flex-col gap-2">
        <button 
          onClick={handleAddToCart}
          className="w-full bg-[#FFE52A] hover:bg-[#F79A19] text-[#191c1e] py-2.5 rounded-lg text-body-md font-extrabold transition-colors flex items-center justify-center gap-2 shadow-sm"
        >
          <span className="material-symbols-outlined text-[18px]">add_shopping_cart</span>
          Add to Quote
        </button>
        <button 
          onClick={(e) => { e.stopPropagation(); window.open('https://wa.me/918897107975', '_blank'); }}
          className="w-full border-2 border-[#BBCB64] text-[#191c1e] py-2.5 rounded-lg text-body-md font-bold hover:bg-[#BBCB64]/20 transition-colors flex items-center justify-center gap-2"
        >
          <svg className="w-4 h-4 fill-current text-[#191c1e]" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.487-1.761-1.659-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"></path></svg>
          Quick WhatsApp Quote
        </button>
      </div>
    </article>
  );
};

export default ProductCard;
