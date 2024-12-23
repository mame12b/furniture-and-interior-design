import React from "react";
import { products } from "../data";
import ProductSlider from "./ProductSlider";

// const Products = () => {
const Products = React.forwardRef((props, ref) => {
  const { title, subtitle } = products;
  return (
    <section ref={ref} className="section">
      <div className="container mx-auto">
        <h1 className="title text-center">{title}</h1>
        <h3 className="subtitle text-center">{subtitle}</h3>

        {/* Products */}
        <ProductSlider />
      </div>
    </section>
  );
});

export default Products;
