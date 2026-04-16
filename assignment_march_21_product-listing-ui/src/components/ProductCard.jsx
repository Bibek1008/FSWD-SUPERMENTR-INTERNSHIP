import React from "react";

export default function ProductCard({ product }) {
  return (
    <div style={{
      border: "1px solid #ccc",
      borderRadius: "8px",
      padding: "15px",
      margin: "10px",
      width: "200px",
      textAlign: "center",
      boxShadow: "0 2px 5px rgba(0,0,0,0.1)"
    }}>
      <img src={product.image} alt={product.name} style={{ width: "100%", height: "150px", objectFit: "cover", borderRadius: "4px" }} />
      <h3>{product.name}</h3>
      <p>${product.price}</p>
      <p style={{ fontStyle: "italic", color: "#555" }}>{product.category}</p>
    </div>
  );
}
