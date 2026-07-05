import React from 'react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity, cartTotal, clearCart } = useCart();

  if (cartItems.length === 0) {
    return (
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-stack-lg min-h-[50vh] flex flex-col items-center justify-center">
        <span className="material-symbols-outlined text-[64px] text-outline-variant mb-4">shopping_cart</span>
        <h2 className="text-headline-md font-headline-md text-on-surface mb-2">Your Quote Cart is Empty</h2>
        <p className="text-body-lg text-on-surface-variant mb-6 text-center max-w-md">Browse our catalogue and add products to request a bulk quote.</p>
        <Link to="/" className="bg-[#FFE52A] text-[#191c1e] font-black px-6 py-3 rounded-lg text-title-lg hover:bg-[#F79A19] transition-colors shadow-md">
          Browse Catalogue
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-stack-lg">
      <h1 className="text-headline-lg font-headline-lg text-primary mb-stack-lg">Quote Request Cart</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-gutter">
        {/* Cart Items List */}
        <div className="lg:col-span-2 flex flex-col gap-4">
          <div className="bg-surface-container-lowest border border-outline-variant rounded-DEFAULT shadow-sm p-4 hidden md:grid grid-cols-12 gap-4 text-label-md font-label-md text-on-surface-variant uppercase tracking-wider">
            <div className="col-span-6">Product</div>
            <div className="col-span-2 text-center">Price</div>
            <div className="col-span-3 text-center">Quantity</div>
            <div className="col-span-1 text-right">Remove</div>
          </div>
          
          {cartItems.map((item) => (
            <div key={item.id} className="bg-surface-container-lowest border border-outline-variant rounded-DEFAULT shadow-sm p-4 flex flex-col md:grid md:grid-cols-12 gap-4 items-center relative">
              {/* Product Info */}
              <div className="col-span-6 flex items-center gap-4 w-full">
                <div className="w-20 h-20 bg-surface-container-low rounded flex-shrink-0 border border-outline-variant/30 overflow-hidden">
                  <img src={item.image} alt={item.title} className="w-full h-full object-contain mix-blend-multiply p-1" />
                </div>
                <div className="flex flex-col">
                  <span className="text-label-md text-on-surface-variant mb-1">SKU: {item.id}</span>
                  <Link to={`/product/${item.id}`} className="text-title-lg font-title-lg text-primary hover:text-secondary line-clamp-2">{item.title}</Link>
                </div>
              </div>
              
              {/* Price */}
              <div className="col-span-2 text-center w-full md:w-auto flex justify-between md:block mt-2 md:mt-0">
                <span className="md:hidden text-on-surface-variant text-label-md">Price: </span>
                <span className="text-body-lg font-semibold text-on-surface">₹{item.price}</span>
              </div>
              
              {/* Quantity */}
              <div className="col-span-3 flex justify-center w-full md:w-auto mt-2 md:mt-0">
                <div className="flex items-center border border-outline-variant rounded bg-surface">
                  <button 
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className="p-1 text-on-surface-variant hover:bg-surface-container hover:text-primary transition-colors"
                  >
                    <span className="material-symbols-outlined text-[20px]">remove</span>
                  </button>
                  <span className="w-12 text-center text-body-md font-semibold text-on-surface">{item.quantity}</span>
                  <button 
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="p-1 text-on-surface-variant hover:bg-surface-container hover:text-primary transition-colors"
                  >
                    <span className="material-symbols-outlined text-[20px]">add</span>
                  </button>
                </div>
              </div>
              
              {/* Remove */}
              <div className="col-span-1 text-right absolute top-2 right-2 md:relative md:top-0 md:right-0">
                <button 
                  onClick={() => removeFromCart(item.id)}
                  className="text-outline hover:text-error transition-colors p-1"
                  aria-label="Remove item"
                >
                  <span className="material-symbols-outlined">delete</span>
                </button>
              </div>
            </div>
          ))}
          
          <div className="flex justify-between items-center mt-4">
            <Link to="/" className="text-secondary hover:underline text-body-md font-semibold flex items-center gap-1">
              <span className="material-symbols-outlined text-[18px]">arrow_back</span>
              Continue Shopping
            </Link>
            <button 
              onClick={clearCart}
              className="text-error hover:underline text-body-md"
            >
              Clear Cart
            </button>
          </div>
        </div>
        
        {/* Order Summary */}
        <div className="lg:col-span-1">
          <div className="bg-surface-container-lowest border border-outline-variant rounded-DEFAULT shadow-sm p-6 sticky top-24">
            <h2 className="text-title-lg font-title-lg text-primary mb-4 border-b border-outline-variant pb-2">Quote Summary</h2>
            
            <div className="flex flex-col gap-3 mb-6">
              <div className="flex justify-between text-body-md text-on-surface-variant">
                <span>Total Items</span>
                <span>{cartItems.reduce((acc, item) => acc + item.quantity, 0)}</span>
              </div>
              <div className="flex justify-between text-body-md text-on-surface-variant">
                <span>Subtotal (Estimated)</span>
                <span>₹{cartTotal.toFixed(2)}</span>
              </div>
              <div className="text-label-md text-tertiary mt-1 italic">
                * Final wholesale price will be confirmed in the official quote.
              </div>
            </div>
            
            <div className="border-t border-outline-variant pt-4 mb-6">
              <div className="flex justify-between text-title-lg font-title-lg text-on-surface mb-2">
                <span>Est. Total</span>
                <span className="text-secondary">₹{cartTotal.toFixed(2)}</span>
              </div>
              <p className="text-[12px] text-on-surface-variant text-right">Exclusive of GST & Shipping</p>
            </div>
            
            <button 
              onClick={() => {
                alert('Quote request sent! Our sales team will contact you shortly.');
                clearCart();
              }}
              className="w-full bg-[#FFE52A] text-[#191c1e] py-3 rounded-lg text-title-lg font-black hover:bg-[#F79A19] transition-colors shadow-md mb-3 flex items-center justify-center gap-2"
            >
              <span className="material-symbols-outlined text-[20px]">send</span>
              Submit Quote Request
            </button>
            <a 
              href="https://wa.me/918897107975" 
              target="_blank" 
              rel="noreferrer"
              className="w-full border-2 border-[#25d366] text-[#25d366] py-3 rounded-DEFAULT text-title-lg font-semibold hover:bg-[#25d366]/10 transition-colors flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.487-1.761-1.659-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"></path></svg>
              WhatsApp Quote
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
