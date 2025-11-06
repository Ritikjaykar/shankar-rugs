import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import logo from '../assets/logo.png'; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [collectionOpen, setCollectionOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);

  const collections = [
    { name: 'Shop', path: '/shop' },
    { name: 'Hand Knotted', path: '/collection/hand-knotted' },
    { name: 'Hand Tufted', path: '/collection/hand-tufted' },
    { name: 'Handloom', path: '/collection/handloom' },
    { name: 'Patched Work', path: '/collection/patched-work' },
    { name: 'Leather Carpet', path: '/collection/leather-carpet' },
    { name: 'Jute Rugs', path: '/collection/jute-rugs' },
    { name: 'Flat Weave', path: '/collection/flat-weave' },
    { name: 'Designers Edition', path: '/collection/designers-edition' },
    { name: 'Coir Mats', path: '/collection/coir-mats' },
  ];

  const moreItems = [
    { name: 'Size Guide', path: '/size-guide' },
    { name: 'About Us', path: '/about' },
    { name: 'How We Work', path: '/how-we-work' },
    { name: 'What People Say', path: '/testimonials' },
    { name: 'Blog', path: '/blog' },
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
{/*  Logo */}
<Link to="/" className="flex items-center space-x-3">
  <div className="p-[3px] rounded-xl bg-gradient-to-r">
    <img
      src={logo}
      alt="Shahkar Rugs Logo"
      className="h-12 w-12 rounded-lg object-cover bg-white "
    />
  </div>
  <div>
    <h1
      className="text-2xl font-extrabold text-[#6B3A00]"
      style={{ fontFamily: 'Playfair Display, serif' }}
    >
      Shahkar Rugs
    </h1>
    <p className="text-sm text-gray-500 hidden sm:block">
      Manufacturer and Exporter
    </p>
  </div>
</Link>


          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-primary transition">
              Home
            </Link>
            <Link
              to="/custom-rug-form"
              className="text-gray-700 hover:text-primary transition"
            >
              Custom Rug Form
            </Link>

            {/* Our Collection Dropdown */}
            <div className="relative group">
              <button className="flex items-center text-gray-700 hover:text-primary transition">
                Our Collection <ChevronDown className="ml-1 w-4 h-4" />
              </button>
              <div className="absolute left-0 mt-2 w-56 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                {collections.map((item, index) => (
                  <Link
                    key={index}
                    to={item.path}
                    className="block px-4 py-3 text-sm text-gray-700 hover:bg-primary hover:text-white transition"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            <Link
              to="/contact"
              className="text-gray-700 hover:text-primary transition"
            >
              Contact Us
            </Link>

            {/* More Dropdown */}
            <div className="relative group">
              <button className="flex items-center text-gray-700 hover:text-primary transition">
                More <ChevronDown className="ml-1 w-4 h-4" />
              </button>
              <div className="absolute left-0 mt-2 w-48 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                {moreItems.map((item, index) => (
                  <Link
                    key={index}
                    to={item.path}
                    className="block px-4 py-3 text-sm text-gray-700 hover:bg-primary hover:text-white transition"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden pb-4">
            <Link to="/" className="block py-2 text-gray-700 hover:text-primary">
              Home
            </Link>
            <Link
              to="/custom-rug-form"
              className="block py-2 text-gray-700 hover:text-primary"
            >
              Custom Rug Form
            </Link>

            <button
              onClick={() => setCollectionOpen(!collectionOpen)}
              className="flex items-center justify-between w-full py-2 text-gray-700 hover:text-primary"
            >
              Our Collection{' '}
              <ChevronDown
                className={`w-4 h-4 transition-transform ${
                  collectionOpen ? 'rotate-180' : ''
                }`}
              />
            </button>
            {collectionOpen && (
              <div className="pl-4 space-y-2">
                {collections.map((item, index) => (
                  <Link
                    key={index}
                    to={item.path}
                    className="block py-2 text-sm text-gray-600 hover:text-primary"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            )}

            <Link
              to="/contact"
              className="block py-2 text-gray-700 hover:text-primary"
            >
              Contact Us
            </Link>

            <button
              onClick={() => setMoreOpen(!moreOpen)}
              className="flex items-center justify-between w-full py-2 text-gray-700 hover:text-primary"
            >
              More{' '}
              <ChevronDown
                className={`w-4 h-4 transition-transform ${
                  moreOpen ? 'rotate-180' : ''
                }`}
              />
            </button>
            {moreOpen && (
              <div className="pl-4 space-y-2">
                {moreItems.map((item, index) => (
                  <Link
                    key={index}
                    to={item.path}
                    className="block py-2 text-sm text-gray-600 hover:text-primary"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
