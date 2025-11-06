import React from 'react';
import { Link } from 'react-router-dom';
import { Star, Sparkles, Leaf, Users } from 'lucide-react';

const Home = () => {
  const rugCategories = [
    {
      title: 'Hand Knotted',
      image: 'https://images.unsplash.com/photo-1600166898405-da9535204843?w=400',
      description: 'Traditional Persian & Oriental rugs',
      path: '/collection/hand-knotted'
    },
    {
      title: 'Hand Tufted',
      image: 'https://images.unsplash.com/photo-1565624401737-2e93164e2ae1?w=400',
      description: 'Modern designs with premium wool',
      path: '/collection/hand-tufted'
    },
    {
      title: 'Handloom',
      image: 'https://images.unsplash.com/photo-1554995207-c18c203602cb?w=400',
      description: 'Woven on traditional looms',
      path: '/collection/handloom'
    },
    {
      title: 'Designers Edition',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400',
      description: 'Exclusive contemporary designs',
      path: '/collection/designers-edition'
    }
  ];

  const features = [
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: 'Premium Quality',
      description: 'Handcrafted using age-old techniques and finest natural materials'
    },
    {
      icon: <Leaf className="w-8 h-8" />,
      title: 'Eco-Friendly',
      description: 'Sustainable practices with eco-friendly colors and minimal environmental impact'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Skilled Artisans',
      description: 'Crafted by talented artisans from rural India with precision and passion'
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: 'Timeless Pieces',
      description: 'Every rug is unique, blending artistry and craftsmanship for elegance'
    }
  ];

  const processSteps = [
    {
      image: 'https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?w=400',
      title: 'Material Selection',
      description: 'Premium wool and silk hand-selected by skilled artisans'
    },
    {
      image: 'https://images.unsplash.com/photo-1608889175250-c3b0c1667d3a?w=400',
      title: 'Traditional Looms',
      description: 'Woven on traditional looms ensuring intricate patterns'
    },
    {
      image: 'https://images.unsplash.com/photo-1585888812544-0d06e2e7ba9f?w=400',
      title: 'Hand Finishing',
      description: 'Meticulous hand finishing for superior quality'
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[600px] md:h-[700px] bg-gradient-to-r from-gray-900 to-gray-700">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1600166898405-da9535204843?w=1200')"
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="text-white max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Making Homes Beautiful
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-200">
              SHAHKAR RUGS is one-stop destination of the fascinating Home Decor Carpets. 
              We are a reputed manufacturer, exporter, and supplier of Handmade Carpets.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/shop" 
                className="bg-secondary hover:bg-primary text-white px-8 py-3 rounded-lg font-semibold transition transform hover:scale-105 text-center"
              >
                Designer Rugs
              </Link>
              <Link 
                to="/custom-rug-form" 
                className="border-2 border-white hover:bg-white hover:text-gray-900 text-white px-8 py-3 rounded-lg font-semibold transition text-center"
              >
                Get Custom Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Preview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {rugCategories.map((category, index) => (
              <Link
                key={index}
                to={category.path}
                className="group relative overflow-hidden rounded-full aspect-square"
              >
                <img 
                  src={category.image} 
                  alt={category.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How We Do It Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">How We Do It.</h2>
          </div>

          <div className="mb-16 max-w-4xl mx-auto text-center space-y-4 text-gray-700">
            <p>
              At Shahkar Rugs, we meticulously craft handmade rugs using age-old techniques and the finest natural materials.
              Our skilled artisans hand-select premium wool and silk, then dye them with eco-friendly colors.
            </p>
            <p>
              Each rug is woven by hand on traditional looms, ensuring intricate patterns and superior quality. Our process, from knotting
              to finishing, embodies precision and passion, creating unique, timeless pieces.
            </p>
            <p>
              We prioritize sustainability, employing ethical practices and minimal environmental impact.
            </p>
            <p>
              At Shahkar Rugs, every rug is a masterpiece, blending artistry and craftsmanship to enhance your space with elegance and
              durability.
            </p>
            <p className="font-semibold text-gray-900">
              Experience the luxury of our handmade creations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition">
                <img 
                  src={step.image} 
                  alt={step.title}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary/10 text-secondary rounded-full mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hand Knotted CTA Section */}
      <section className="py-20 bg-primary text-white relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1600166898405-da9535204843?w=1200')",
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Hand Knotted</h2>
          <p className="text-xl mb-2">We are THE Persian & Oriental Rug specialists and</p>
          <p className="text-xl mb-8">we've brought together the biggest collection of hand knotted rugs ever</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/collection/hand-knotted" 
              className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition inline-block"
            >
              VIEW MORE
            </Link>
            <Link 
              to="/about" 
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary transition inline-block"
            >
              Read More
            </Link>
          </div>
        </div>
      </section>

      {/* Origins Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-50 rounded-2xl p-12 shadow-lg">
            <h2 className="text-4xl font-bold text-center mb-6 text-gray-900" style={{fontFamily: 'Brush Script MT, cursive'}}>
              Origins
            </h2>
            <p className="text-center text-sm text-gray-600 mb-8">HOW WE GOT HERE</p>
            <p className="text-gray-700 leading-relaxed text-center">
              A leader in the rug retail and manufacturing industry since 2003, SHAHKAR RUGS is
              dedicated to bringing you high-quality rugs, furniture, and home decor from the most talented
              artisan in Rural India at rock-bottom prices. With our low-price commitment and dedication to
              customer service, we aim to make your next rug purchase a pleasant and enjoyable
              experience.
            </p>
            <div className="text-center mt-8">
              <Link 
                to="/shop" 
                className="border-2 border-gray-900 text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-900 hover:text-white transition inline-block"
              >
                View Products
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-2">Stay Updated</h3>
            <p className="text-gray-400">Subscribe to get special offers and updates</p>
          </div>
          <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <input
              type="text"
              placeholder="Name"
              className="flex-1 px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-secondary text-white"
            />
            <input
              type="email"
              placeholder="Email*"
              required
              className="flex-1 px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-secondary text-white"
            />
            <button
              type="submit"
              className="px-8 py-3 bg-secondary hover:bg-primary rounded-lg font-semibold transition"
            >
              Subscribe
            </button>
          </form>
          <div className="flex items-center justify-center mt-4">
            <input type="checkbox" id="terms" className="mr-2" required />
            <label htmlFor="terms" className="text-sm text-gray-400">
              I accept terms & conditions
            </label>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;