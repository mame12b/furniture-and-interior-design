import React from "react";
// Importing data
import { features } from "../data";

const FeaturesSecond = React.forwardRef((props, ref) => {
	const { title, image, subtitle, items } = features.feature2;
	return (
		<section ref={ref} className="section">
			<div
				className='container mx-auto px-5 flex flex-col 
				gap-10 lg:flex-1 lg:flex-row lg:gap-x-20'>
				<img className='order-1' src={image.type} alt={title} />
				<div className=''>
					<h3 className='title'>{title}</h3>
					<h4 className='subtitle'>{subtitle}</h4>
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

export default FeaturesSecond;
