import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Filter, Grid, List } from 'lucide-react';

const Shop = () => {
  const { category } = useParams();
  const [viewMode, setViewMode] = useState('grid');
  const [sortBy, setSortBy] = useState('featured');
  const [filterOpen, setFilterOpen] = useState(false);

  const categoryTitles = {
    'hand-knotted': 'Hand Knotted Rugs',
    'hand-tufted': 'Hand Tufted Rugs',
    'handloom': 'Handloom Rugs',
    'patched-work': 'Patched Work Rugs',
    'leather-carpet': 'Leather Carpets',
    'jute-rugs': 'Jute Rugs',
    'flat-weave': 'Flat Weave Rugs',
    'designers-edition': 'Designers Edition',
    'coir-mats': 'Coir Mats'
  };

  const allProducts = [
    {
      id: 1,
      name: 'Traditional Persian Rug',
      category: 'hand-knotted',
      image: 'https://images.unsplash.com/photo-1600166898405-da9535204843?w=500',
      size: "8' x 10'",
      material: 'Wool & Silk'
    },
    {
      id: 2,
      name: 'Modern Abstract Design',
      category: 'hand-tufted',
      image: 'https://images.unsplash.com/photo-1565624401737-2e93164e2ae1?w=500',
      size: "6' x 9'",
      material: 'Premium Wool'
    },
    {
      id: 3,
      name: 'Geometric Pattern Rug',
      category: 'handloom',
      image: 'https://images.unsplash.com/photo-1554995207-c18c203602cb?w=500',
      size: "5' x 8'",
      material: 'Cotton & Wool'
    },
    {
      id: 4,
      name: 'Vintage Patchwork',
      category: 'patched-work',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500',
      size: "4' x 6'",
      material: 'Recycled Wool'
    },
    {
      id: 5,
      name: 'Luxury Leather Carpet',
      category: 'leather-carpet',
      image: 'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?w=500',
      size: "8' x 10'",
      material: 'Genuine Leather'
    },
    {
      id: 6,
      name: 'Natural Jute Rug',
      category: 'jute-rugs',
      image: 'https://images.unsplash.com/photo-1584638369949-5fc0531c4e2f?w=500',
      size: "5' x 7'",
      material: 'Natural Jute'
    },
    {
      id: 7,
      name: 'Scandinavian Flat Weave',
      category: 'flat-weave',
      image: 'https://images.unsplash.com/photo-1588471980726-8346cb477a33?w=500',
      size: "6' x 9'",
      material: 'Cotton'
    },
    {
      id: 8,
      name: 'Contemporary Designer Rug',
      category: 'designers-edition',
      image: 'https://images.unsplash.com/photo-1604599455544-e72127c8fab7?w=500',
      size: "9' x 12'",
      material: 'Silk & Wool'
    },
    {
      id: 9,
      name: 'Eco-Friendly Coir Mat',
      category: 'coir-mats',
      image: 'https://images.unsplash.com/photo-1578507065211-1c4e99a5fd24?w=500',
      size: "3' x 5'",
      material: 'Natural Coir'
    },
    {
      id: 10,
      name: 'Royal Persian Design',
      category: 'hand-knotted',
      image: 'https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?w=500',
      size: "10' x 14'",
      material: 'Pure Silk'
    },
    {
      id: 11,
      name: 'Bohemian Hand Tufted',
      category: 'hand-tufted',
      image: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=500',
      size: "5' x 8'",
      material: 'Wool'
    },
    {
      id: 12,
      name: 'Striped Handloom Runner',
      category: 'handloom',
      image: 'https://images.unsplash.com/photo-1585847439961-0136a3c5c58e?w=500',
      size: "3' x 10'",
      material: 'Cotton'
    }
  ];

  const filteredProducts = category 
    ? allProducts.filter(p => p.category === category)
    : allProducts;

  const pageTitle = category 
    ? categoryTitles[category] 
    : 'All Rugs';

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Page Header */}
      <div className="bg-primary text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{pageTitle}</h1>
          <p className="text-lg text-gray-200">Discover our collection of handcrafted rugs</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Filters and Sort Bar */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setFilterOpen(!filterOpen)}
              className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 transition"
            >
              <Filter className="w-4 h-4" />
              Filters
            </button>
            <span className="text-gray-600">{filteredProducts.length} Products</span>
          </div>

          <div className="flex items-center gap-4">
            {/* Sort Dropdown */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option value="featured">Featured</option>
              <option value="name">Name: A to Z</option>
            </select>

            {/* View Toggle */}
            <div className="flex border border-gray-300 rounded-lg overflow-hidden">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 ${viewMode === 'grid' ? 'bg-primary text-white' : 'bg-white text-gray-600 hover:bg-gray-100'}`}
              >
                <Grid className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 ${viewMode === 'list' ? 'bg-primary text-white' : 'bg-white text-gray-600 hover:bg-gray-100'}`}
              >
                <List className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Products Grid/List */}
        <div className={viewMode === 'grid' 
          ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'
          : 'space-y-6'
        }>
          {filteredProducts.map((product) => (
            <Link
              key={product.id}
              to={`/product/${product.id}`}
              className={`bg-white rounded-lg shadow-md hover:shadow-xl transition overflow-hidden group ${
                viewMode === 'list' ? 'flex' : ''
              }`}
            >
              <div className={viewMode === 'list' ? 'w-64 flex-shrink-0' : 'aspect-square'}>
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-4 flex-1">
                <h3 className="font-semibold text-lg mb-2 text-gray-900 group-hover:text-primary transition">
                  {product.name}
                </h3>
                <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
                  <span>{product.size}</span>
                  <span>•</span>
                  <span>{product.material}</span>
                </div>
                <button className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-secondary transition text-sm">
                  View Details
                </button>
              </div>
            </Link>
          ))}
        </div>

        {/* No Products Message */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-600 text-lg">No products found in this category.</p>
            <Link to="/shop" className="text-primary hover:underline mt-4 inline-block">
              View All Products
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Shop;
