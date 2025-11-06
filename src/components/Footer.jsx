import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Phone, MapPin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <>
      {/* Newsletter Section */}
      <section className="bg-white py-12 border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full px-4 py-3 border-b-2 border-gray-300 focus:border-primary focus:outline-none"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email*"
                  required
                  className="w-full px-4 py-3 border-b-2 border-gray-300 focus:border-primary focus:outline-none"
                />
              </div>
            </div>
            
            <div className="flex items-center justify-between flex-wrap gap-4">
              <label className="flex items-center cursor-pointer">
                <input type="checkbox" className="mr-2" required />
                <span className="text-sm text-gray-700">I accept terms & conditions</span>
              </label>
              <button
                type="submit"
                className="px-8 py-3 bg-primary hover:bg-secondary text-white rounded-lg font-semibold transition"
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Visit Us Section */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">VISIT US</h2>
          <div className="space-y-2 text-gray-700 mb-6">
            <p>Monday - Friday 09:00 - 18:00</p>
            <p>Saturday : 10:00 - 17:00</p>
            <p>Sunday : Closed</p>
          </div>
          <div className="flex justify-center space-x-6 mb-6">
            <a href="https://www.facebook.com/shahkarrugs2015/" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-primary transition">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="https://www.instagram.com/shahkarrugs/" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-primary transition">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="https://www.linkedin.com/authwall?trk=bf&trkInfo=AQEqcfrND_iGOQAAAZpaf0bQwwni5v5KynIJAt-q8kKcTNC8_YQQNqGJvFC6lgxBCFsjyRfszqB0YmxWpuYwmHlaAZ0gGyl_AC14A9CCItwR3xG1uezCZ8cw_frq4RKnLAabQac=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fin%2Fshahkar-rugs-aaaaa4279" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-primary transition">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="https://api.whatsapp.com/send/?phone=918960430890&text=Hello+%21+I+am+interested+in+you+products+and+would+like+to+buy+them+.&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-primary transition">
              <Phone className="w-5 h-5" />
            </a>
            <a href="https://www.google.co.in/maps/place/Shahkar+Rugs/@25.3929864,82.570311,17z/data=!3m1!4b1!4m5!3m4!1s0x398fe0a6ec57e813:0xa0ad0462869b37a1!8m2!3d25.3929864!4d82.5724997" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-primary transition">
              <MapPin className="w-5 h-5" />
            </a>
          </div>
          <div className="space-y-1 text-gray-700">
            <p><a href="mailto:info@shahkarrugs.com" className="hover:text-primary transition">info@shahkarrugs.com</a> , <a href="mailto:order@shahkarrugs.com" className="hover:text-primary transition">order@shahkarrugs.com</a></p>
            <p><a href="tel:+918960430890" className="hover:text-primary transition">+91 8960 430 890</a></p>
            <p className="text-sm">Bazar Sardar Khan,Chowri Road, Bhadohi,Uttar Pradesh 221401, India</p>
          </div>
        </div>
      </section>

      {/* Main Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* About */}
            <div>
              <h3 className="text-xl font-bold mb-4 text-secondary">Shahkar Rugs</h3>
              <p className="text-gray-400 text-sm mb-4">
                Manufacturer and exporter of handmade rugs. Making homes beautiful since 2003.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link to="/about" className="text-gray-400 hover:text-white transition text-sm">About Us</Link></li>
                <li><Link to="/shop" className="text-gray-400 hover:text-white transition text-sm">Shop</Link></li>
                <li><Link to="/custom-rug-form" className="text-gray-400 hover:text-white transition text-sm">Custom Rug Form</Link></li>
                <li><Link to="/how-we-work" className="text-gray-400 hover:text-white transition text-sm">How We Work</Link></li>
                <li><Link to="/blog" className="text-gray-400 hover:text-white transition text-sm">Blog</Link></li>
              </ul>
            </div>

            {/* Collections */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Collections</h3>
              <ul className="space-y-2">
                <li><Link to="/collection/hand-knotted" className="text-gray-400 hover:text-white transition text-sm">Hand Knotted</Link></li>
                <li><Link to="/collection/hand-tufted" className="text-gray-400 hover:text-white transition text-sm">Hand Tufted</Link></li>
                <li><Link to="/collection/handloom" className="text-gray-400 hover:text-white transition text-sm">Handloom</Link></li>
                <li><Link to="/collection/leather-carpet" className="text-gray-400 hover:text-white transition text-sm">Leather Carpet</Link></li>
                <li><Link to="/collection/designers-edition" className="text-gray-400 hover:text-white transition text-sm">Designers Edition</Link></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <MapPin className="w-5 h-5 text-secondary mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-400 text-sm">Bhadohi, Uttar Pradesh, India</span>
                </li>
                <li className="flex items-center">
                  <Phone className="w-5 h-5 text-secondary mr-2 flex-shrink-0" />
                  <span className="text-gray-400 text-sm">+91 8960 430 890</span>
                </li>
                <li className="flex items-center">
                  <Mail className="w-5 h-5 text-secondary mr-2 flex-shrink-0" />
                  <span className="text-gray-400 text-sm">info@shahkarrugs.com</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Shahkar Rugs. All rights reserved. | Handcrafted with care in India
            </p>
            <p className="text-gray-500 text-xs mt-2">
              All of the material on this website is Copyright © by Shahkar Rugs. Do not use, publish or reproduce without written permission by the author.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;