import React from "react";
import { features } from "../data";

const Features = React.forwardRef((props, ref) => {
  const { title, subtitle, image, items } = features;
  return (
    <section ref={ref} className="section">
      <div className="container mx-auto px-6 flex flex-col-reverse lg:flex-row gap-x-24">
        {/* Images */}
        <div className="py-10 lg:p-0 rounded">
          <img
            className="object-cover"
            src={image.type} // Use the correct image source
            alt="Furniture Sofa & Table"
          />
        </div>
        {/* Text */}
        <div className="flex-1 flex flex-col justify-end">
          <h1 className="title">{title}</h1>
          <h3 className="subtitle">{subtitle}</h3>
          <div>
            {items.map((item, index) => (
              <div key={index} className="flex w-full gap-x-5 align-top py-3">
                <div className="text-xl mt-1 lg:text-3xl lg:mt-0">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-base font-semibold lg:text-xl mb-3">
                    {item.title}
                  </h3>
                  <p>{item.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
});

export default Features;
