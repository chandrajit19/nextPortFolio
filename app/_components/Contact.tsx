'use client';
import { useActionState, useEffect, useState } from 'react';
import Image from 'next/image';
import getin from '/public/getintouch.webp'
import Script from 'next/script';
import { saveData } from '../serverFunction';
import Swal from 'sweetalert2';
  const is={
    msg:"",
    name:""
  }

const Contact = () => {
    const [state, formAction, pending]=useActionState(saveData, is);

    useEffect(()=>{
           if(state.msg=='Success'){
            Swal.fire({
              icon: 'success',
              title: `Thank you, ${state.name || 'there'}!`,
              text: 'I received your message and will reply soon.'
            });
            }
            if(state.msg=='Failed'){
                  Swal.fire({
              icon: 'error',
              title: `Hi ${state.name || 'there'}!`,
              text: 'Form is not submited'
            });
            }

    },[state.msg])


  return (
    <section id="contact" className="pt-5 pb-9 md:py-16  text-white relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-13 md:px-25 xl:px-30 pb-7">
        <h2 className="text-3xl md:text-4xl font-heading pb-2 border-b-2 border-b-emerald-600 inline-block">Get in Touch</h2>
        <div className="flex flex-col lg:flex-row gap-8 md:gap-12 mt-5 items-stretch">
          {/* Left Side: Form - Unique Design with Asymmetrical Glow and Animated Fields */}
          <div className="lg:w-1/2 relative p-8 bg-gray-800 rounded-3xl shadow-2xl overflow-hidden border  border-green-300  transition-transform duration-500">
            {/* Unique Background Glow */}
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_50%_50%,rgba(0,165,233,0.5)_0%,transparent_80%)] blur-3xl animate-pulse"></div>
            
            {/* Form Fields */}
           <Script src="https://www.google.com/recaptcha/api.js" async defer></Script>
            <form action={formAction} className="space-y-6 relative z-0">
              <div className="relative">
                <input
                  type="text"
                  name="name"
               
                  placeholder="Your Name"
                  className="w-full p-3 bg-gray-700 border-0 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-brand-color transition-all duration-300 placeholder-gray-400 z-0"
                  required
                />
                <div className="absolute inset-0 rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-brand-color/20 to-accent-color/20 blur-md pointer-events-none"></div>
              </div>
              <div className="relative">
                <input
                  type="email"
                  name="email"
            
                  placeholder="Your Email"
                  className="w-full p-3 bg-gray-700 border-0 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-brand-color transition-all duration-300 placeholder-gray-400 z-20"
                  required
                />
                <div className="absolute inset-0 rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-brand-color/20 to-accent-color/20 blur-md pointer-events-none"></div>
              </div>
              <div className="relative">
                <textarea
                  name="message"
              
                  placeholder="Your Message"
                  rows={5}
                  className="w-full p-3 bg-gray-700 border-0 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-brand-color transition-all duration-300 placeholder-gray-400 z-20 resize-none"
                  required
                />
                <div className="absolute inset-0 rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-brand-color/20 to-accent-color/20 blur-md pointer-events-none"></div>
              </div>

              {/* Empty Div for Google Captcha */}
              <div className="w-full h-16 rounded-lg flex items-center justify-center text-gray-400 z-20">
                <div className="g-recaptcha" data-sitekey="6LfApNYrAAAAAEIgqErDZmKRxotc0NGYpVrxzw45"></div>
              </div>

       
              <div className="flex gap-4 z-20">
                <button
                  type="submit"
                  className="px-6 py-3 bg-brand-color text-white rounded-lg hover:bg-accent-color transition font-medium relative overflow-hidden z-20 cursor-pointer"
                >
                  Submit
                  <span className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300 bg-radial-gradient(circle, rgba(255,255,255,0.2) 0%, transparent 100%) animate-ripple pointer-events-none"></span>
                </button>
                <button
                  type="reset"
                  className="px-6 py-3 bg-gray-700 text-brand-color border  border-green-300 rounded-lg hover:bg-brand-color hover:text-white transition font-medium relative overflow-hidden z-20  cursor-pointer"
                >
                  Reset
                  <span className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300 bg-radial-gradient(circle, rgba(255,255,255,0.2) 0%, transparent 100%) animate-ripple pointer-events-none"></span>
                </button>
              </div>
            </form>
          </div>

          {/* Right Side: Image */}
          <div className="lg:w-1/2 flex justify-center lg:justify-end">
            <Image
              src={getin} // Replace with your public image path
              alt="Contact Illustration"
              width={500}
              height={400}
              className="w-[100%] xl:w-[80%]  h-auto object-cover  lg:my-12  rounded-3xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;