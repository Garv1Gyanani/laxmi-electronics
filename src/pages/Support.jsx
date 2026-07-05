import React from 'react';
import { Link } from 'react-router-dom';

const Support = () => {
  return (
    <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-stack-lg min-h-[60vh]">
      <div className="flex items-center gap-2 text-on-surface-variant text-label-md mb-6">
        <Link to="/" className="hover:text-primary transition-colors">Home</Link>
        <span className="material-symbols-outlined text-[16px]">chevron_right</span>
        <span className="text-on-surface">Support</span>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h1 className="text-headline-lg font-headline-lg text-on-surface mb-4">How can we help?</h1>
          <p className="text-body-lg text-on-surface-variant mb-8">
            Our team is here to assist you with order inquiries, product specifications, and general support.
          </p>
          
          <div className="flex flex-col gap-6">
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center flex-shrink-0">
                <span className="material-symbols-outlined text-[24px]">call</span>
              </div>
              <div>
                <h3 className="text-title-lg font-bold text-on-surface">Phone Support</h3>
                <p className="text-body-md text-on-surface-variant mb-1">Mon-Sat, 9:00 AM - 7:00 PM</p>
                <a href="tel:+918897107975" className="text-primary font-semibold hover:underline">+91 889 710 7975</a>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center flex-shrink-0">
                <span className="material-symbols-outlined text-[24px]">mail</span>
              </div>
              <div>
                <h3 className="text-title-lg font-bold text-on-surface">Email Us</h3>
                <p className="text-body-md text-on-surface-variant mb-1">We'll reply within 24 hours</p>
                <a href="mailto:info@laxmielectrical.com" className="text-primary font-semibold hover:underline">info@laxmielectrical.com</a>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center flex-shrink-0">
                <span className="material-symbols-outlined text-[24px]">location_on</span>
              </div>
              <div>
                <h3 className="text-title-lg font-bold text-on-surface">Visit Store</h3>
                <p className="text-body-md text-on-surface-variant">Hyderabad, Telangana, India</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-surface-container-lowest border border-outline-variant/30 rounded-2xl p-8 shadow-sm">
          <h2 className="text-title-lg font-bold text-on-surface mb-6">Send a Message</h2>
          <form className="flex flex-col gap-4">
            <div>
              <label className="block text-label-md font-bold text-on-surface mb-1">Name</label>
              <input type="text" className="w-full bg-surface-container-low border border-outline-variant/50 rounded-lg px-4 py-2 focus:border-primary outline-none focus:ring-1 focus:ring-primary" placeholder="Your name" />
            </div>
            <div>
              <label className="block text-label-md font-bold text-on-surface mb-1">Email</label>
              <input type="email" className="w-full bg-surface-container-low border border-outline-variant/50 rounded-lg px-4 py-2 focus:border-primary outline-none focus:ring-1 focus:ring-primary" placeholder="Your email" />
            </div>
            <div>
              <label className="block text-label-md font-bold text-on-surface mb-1">Message</label>
              <textarea rows="4" className="w-full bg-surface-container-low border border-outline-variant/50 rounded-lg px-4 py-2 focus:border-primary outline-none focus:ring-1 focus:ring-primary" placeholder="How can we help?"></textarea>
            </div>
            <button type="button" onClick={(e) => { e.preventDefault(); alert('Message sent!'); }} className="bg-[#FFE52A] text-[#191c1e] px-6 py-3 rounded-lg font-black hover:bg-[#F79A19] transition-colors mt-2">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Support;
