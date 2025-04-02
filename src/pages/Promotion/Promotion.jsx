import React, { useState, useEffect } from "react";
import { FaTag, FaFilter, FaSortAmountDown } from "react-icons/fa";
import "./Promotion.css";
import ProductCard from "../../components/ProductCard/ProductCard";

// Sample product data (replace with your actual data)
const sampleProducts = [
  {
    id: 1,
    title: "Product 1",
    category: "Skincare",
    originalPrice: 299000,
    discountedPrice: 249000,
    discountPercent: 17,
    img: "/images/Main_banner_1.png",
    badge: "Best Seller",
  },
  {
    id: 2,
    title: "Product 2",
    category: "Makeup",
    originalPrice: 350000,
    discountedPrice: 280000,
    discountPercent: 20,
    img: "/images/Main_banner_1.png",
    badge: "New",
  },
  {
    id: 3,
    title: "Product 3",
    category: "Haircare",
    originalPrice: 199000,
    discountedPrice: 179000,
    discountPercent: 10,
    img: "/images/Main_banner_1.png",
  },
  {
    id: 4,
    title: "Product 4",
    category: "Skincare",
    originalPrice: 450000,
    discountedPrice: 315000,
    discountPercent: 30,
    img: "/images/Main_banner_1.png",
    badge: "Hot Deal",
  },
  {
    id: 5,
    title: "Product 5",
    category: "Bodycare",
    originalPrice: 279000,
    discountedPrice: 195000,
    discountPercent: 30,
    img: "/images/Main_banner_1.png",
  },
  {
    id: 6,
    title: "Product 6",
    category: "Makeup",
    originalPrice: 399000,
    discountedPrice: 299000,
    discountPercent: 25,
    img: "/images/Main_banner_1.png",
  },
  {
    id: 7,
    title: "Product 7",
    category: "Fragrance",
    originalPrice: 1200000,
    discountedPrice: 899000,
    discountPercent: 25,
    img: "/images/Main_banner_1.png",
    badge: "Limited",
  },
  {
    id: 8,
    title: "Product 8",
    category: "Skincare",
    originalPrice: 329000,
    discountedPrice: 279000,
    discountPercent: 15,
    img: "/images/Main_banner_1.png",
  },
];

export default function Promotion() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortOption, setSortOption] = useState("discount"); // default sorting by discount

  useEffect(() => {
    setProducts(sampleProducts);

    const uniqueCategories = [
      ...new Set(sampleProducts.map((product) => product.category)),
    ];
    setCategories(uniqueCategories);

    setFilteredProducts(sampleProducts);
  }, []);

  useEffect(() => {
    let result = [...products];

    if (selectedCategory !== "All") {
      result = result.filter(
        (product) => product.category === selectedCategory
      );
    }

    switch (sortOption) {
      case "discount":
        result.sort((a, b) => b.discountPercent - a.discountPercent);
        break;
      case "priceAsc":
        result.sort((a, b) => a.discountedPrice - b.discountedPrice);
        break;
      case "priceDesc":
        result.sort((a, b) => b.discountedPrice - a.discountedPrice);
        break;
      default:
        break;
    }

    setFilteredProducts(result);
  }, [selectedCategory, sortOption, products]);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const formatPrice = (price) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };

  return (
    <div className="promotional-page">
      {/* Promotional Banner */}
      <div className="promo-banner">
        <div className="banner-content">
          <h1>SPRING SALE</h1>
          <h2>Discount up to 50%</h2>
          <p>Special offers on selected items until March 31, 2025</p>
        </div>
      </div>

      {/* Filter and Sort Section */}
      <div className="filter-sort-container">
        <div className="category-filter">
          <div className="filter-header">
            <FaFilter />
            <h3>Categories</h3>
          </div>
          <div className="category-buttons">
            <button
              className={selectedCategory === "All" ? "active" : ""}
              onClick={() => handleCategoryChange("All")}
            >
              All Products
            </button>
            {categories.map((category) => (
              <button
                key={category}
                className={selectedCategory === category ? "active" : ""}
                onClick={() => handleCategoryChange(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="sort-options">
          <div className="sort-header">
            <FaSortAmountDown />
            <h3>Sort By</h3>
          </div>
          <select
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
          >
            <option value="discount">Highest Discount</option>
            <option value="priceAsc">Price: Low to High</option>
            <option value="priceDesc">Price: High to Low</option>
          </select>
        </div>
      </div>

      {/* Products Grid */}
      <div className="products-section">
        <h2>
          <FaTag /> PROMOTIONAL PRODUCTS
          {selectedCategory !== "All" && ` - ${selectedCategory}`}
        </h2>

        <div className="products-grid">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          ) : (
            <div className="no-products">
              <p>No promotional products found in this category.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
