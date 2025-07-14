'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12">
          {/* Company Info */}
          <div className="col-span-2 md:col-span-1">
            <h3 className="text-3xl font-bold text-white mb-4">inreal</h3>
            <p className="text-gray-400 mb-6">
              We architect sophisticated digital ecosystems that drive business transformation.
            </p>
            <div className="flex space-x-6">
              <Link href="https://www.linkedin.com/company/inrealofficial/" target="_blank" rel="noopener noreferrer"><Image src="/img_vector.svg" alt="Social" width={24} height={24} className="cursor-pointer hover:opacity-80 transition-opacity" />
              </Link>
              <Link href="https://github.com/inrealOfficial" target="_blank" rel="noopener noreferrer"> <Image src="/img_link_svg_blue_gray_300.svg" alt="Social" width={24} height={24} className="cursor-pointer hover:opacity-80 transition-opacity" />
            </Link>
            </div>
           
          </div>
          
          {/* Services */}
          <div className="w-full">
            <h4 className="text-white font-bold text-sm uppercase mb-6">About us</h4>
            <ul className="space-y-4">
              <li> privacy </li>
              <li>Terms</li>
              <li>Sitemap</li>
             
            </ul>
          </div>
          
          {/* Company */}
          <div className="w-full">
            <h4 className="text-white font-bold text-sm uppercase mb-6">Company</h4>
            <ul className="space-y-4">
              <li><Link href="/job-portal/job-listing" className="text-gray-400 hover:text-white transition-colors block">All Job</Link></li>
              <li><Link href="/job-portal/job-application" className="text-gray-400 hover:text-white transition-colors block">Apply</Link></li>
              <li><Link href="/job-portal/faq" className="text-gray-400 hover:text-white transition-colors block">FAQ</Link></li>  
          </ul>
          </div>

          {/* Contact Info */}
          <div className="w-full">
            <h4 className="text-white font-bold text-sm uppercase mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="text-gray-400">
                <a 
                  href="https://www.google.com/maps/search/?api=1&query=Shop+no.2+Bldg+no.24+Shastri+nagar+Goregaon+Mumbai+India"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors inline-block"
                >
                  Shop no.2, Bldg no.24<br />
                  Shastri nagar,Goregaon<br />
                  Mumbai, India
                </a>
              </li>
              <li>
                <a href="mailto:aryan@inreal.in" className="text-gray-400 hover:text-white transition-colors block">
                  aryan@inreal.in
                </a>
              </li>
              <li>
                <a href="tel:+91 70450 13337" className="text-gray-400 hover:text-white transition-colors block">
                   +91 70450 13337
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 items-center">
            <p className="text-gray-400 text-sm order-2 md:order-1 text-center md:text-left">
              © 2025 inreal. All rights reserved.
            </p>
            
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;