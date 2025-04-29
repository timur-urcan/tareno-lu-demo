'use client';

import { useState } from 'react';
import { cn } from '../lib/utils';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    surname: '',
    email: '',
    interest: '',
    message: '',
    privacyAgreed: false
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData(prev => ({ ...prev, [name]: checked }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    
    // Reset form after submission
    setFormData({
      firstName: '',
      surname: '',
      email: '',
      interest: '',
      message: '',
      privacyAgreed: false
    });
    
    // Reset success message after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };
  
  return (
    <section id="contact" className="py-24 bg-[#f0f2f5]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-16">
          {/* Left side - Text */}
          <div className="md:w-1/2">
            <div className="border-t border-[#0a2e74]/20 pt-8 mb-6">
              <p className="text-sm text-[#0a2e74]/70 font-['campaign-serif']">Contact Us</p>
            </div>
            <h2 className="text-4xl md:text-5xl text-[#4a5568] font-['campaign-serif'] font-light leading-tight mb-6">
              We look forward to discussing how we can navigate the path to success together.
            </h2>
          </div>
          
          {/* Right side - Form */}
          <div className="md:w-1/2">
            <h3 className="text-xl text-[#4a5568] mb-8">Contact our experts</h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="First Name*"
                    required
                    className="w-full px-4 py-3 border border-[#0a2e74]/20 rounded-full focus:outline-none focus:ring-2 focus:ring-[#0a2e74]/30 focus:border-[#0a2e74]"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="surname"
                    value={formData.surname}
                    onChange={handleChange}
                    placeholder="Surname*"
                    required
                    className="w-full px-4 py-3 border border-[#0a2e74]/20 rounded-full focus:outline-none focus:ring-2 focus:ring-[#0a2e74]/30 focus:border-[#0a2e74]"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email*"
                    required
                    className="w-full px-4 py-3 border border-[#0a2e74]/20 rounded-full focus:outline-none focus:ring-2 focus:ring-[#0a2e74]/30 focus:border-[#0a2e74]"
                  />
                </div>
                <div className="relative">
                  <select
                    name="interest"
                    value={formData.interest}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-[#0a2e74]/20 rounded-full focus:outline-none focus:ring-2 focus:ring-[#0a2e74]/30 focus:border-[#0a2e74] appearance-none bg-white"
                  >
                    <option value="" disabled>Point of Interest</option>
                    <option value="wealth-management">Wealth Management</option>
                    <option value="asset-management">Asset Management</option>
                    <option value="financial-planning">Financial Planning</option>
                    <option value="retirement-planning">Retirement Planning</option>
                    <option value="other">Other</option>
                  </select>
                  <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6 9l6 6 6-6" stroke="#0a2e74" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
              </div>
              
              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Message*"
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-[#0a2e74]/20 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#0a2e74]/30 focus:border-[#0a2e74]"
                ></textarea>
              </div>
              
              <div className="flex items-start gap-2">
                <input
                  type="checkbox"
                  id="privacyAgreed"
                  name="privacyAgreed"
                  checked={formData.privacyAgreed}
                  onChange={handleCheckboxChange}
                  required
                  className="mt-1"
                />
                <label htmlFor="privacyAgreed" className="text-sm text-[#4a5568]">
                  I have agreed with the <a href="#" className="text-[#0a2e74] hover:underline">Privacy Declaration terms</a>.
                </label>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-sm text-[#4a5568]">Mandatory Fields*</span>
                <button
                  type="submit"
                  className={cn(
                    "px-6 py-2 border border-[#0a2e74] rounded-full",
                    "inline-flex items-center gap-2",
                    "hover:bg-[#0a2e74] hover:text-white transition-colors",
                    "focus:outline-none focus:ring-2 focus:ring-[#0a2e74]/50"
                  )}
                >
                  <span>SUBMIT MESSAGE</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            </form>
            
            {isSubmitted && (
              <div className="mt-4 text-green-600 animate-fade-in">
                Thank you for your message! We will get back to you shortly.
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
