import React, { useState } from "react";
import ProductCard from "./ProductCard";

// Import local images
import tshirtImg from "../images/tshirt.jpg";
import sneakersImg from "../images/sneakers.jpg";
import watchImg from "../images/watch.jpg";
import jeansImg from "../images/jeans.jpg";
import bootsImg from "../images/boots.jpg";
import sunglassesImg from "../images/sunglasses.jpg";

// Product data
const productsData = [
  { id: 1, name: "T-Shirt", price: 25, category: "Clothing", image: tshirtImg },
  { id: 2, name: "Sneakers", price: 60, category: "Footwear", image: sneakersImg },
  { id: 3, name: "Watch", price: 120, category: "Accessories", image: watchImg },
  { id: 4, name: "Jeans", price: 40, category: "Clothing", image: jeansImg },
  { id: 5, name: "Boots", price: 80, category: "Footwear", image: bootsImg },
  { id: 6, name: "Sunglasses", price: 50, category: "Accessories", image: sunglassesImg },
];

export default function ProductList() {
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");

  // Apply filters, search, and sorting
  let displayedProducts = productsData.filter(p =>
    (filter === "All" || p.category === filter) &&
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  if (sort === "low") displayedProducts.sort((a, b) => a.price - b.price);
  if (sort === "high") displayedProducts.sort((a, b) => b.price - a.price);

  return (
    <div style={{ width: "90%", margin: "50px auto", textAlign: "center" }}>
      <h1>Product Listing UI</h1>

      {/* Search */}
      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={e => setSearch(e.target.value)}
        style={{ padding: "8px", margin: "10px", width: "250px" }}
      />

      {/* Category Filters */}
      <div style={{ marginBottom: "20px" }}>
        <button onClick={() => setFilter("All")} style={{ margin: "0 5px" }}>All</button>
        <button onClick={() => setFilter("Clothing")} style={{ margin: "0 5px" }}>Clothing</button>
        <button onClick={() => setFilter("Footwear")} style={{ margin: "0 5px" }}>Footwear</button>
        <button onClick={() => setFilter("Accessories")} style={{ margin: "0 5px" }}>Accessories</button>
      </div>

      {/* Sorting */}
      <div style={{ marginBottom: "20px" }}>
        <button onClick={() => setSort("low")} style={{ margin: "0 5px" }}>Price: Low → High</button>
        <button onClick={() => setSort("high")} style={{ margin: "0 5px" }}>Price: High → Low</button>
      </div>

      {/* Product Cards */}
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        {displayedProducts.length > 0 ? (
          displayedProducts.map(product => <ProductCard key={product.id} product={product} />)
        ) : (
          <p>No products found!</p>
        )}
      </div>
    </div>
  );
}
