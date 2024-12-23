// /////////////////////////////////
// components/Location.js
import React from "react";
import LocationMap from "./LocationMap";

function Location() {
  return (
    <section className="p-6 text-center bg-gray-300 text-black">
      <h2 className="text-2xl font-bold mb-4">Our Location in Addis Ababa</h2>
      <p className="text-lg mb-4">Here is where you can find our furniture:</p>
      <LocationMap />
      <div className="text-center mt-4">
        <p className="text-lg font-medium text-gray-700">
          Discover our premium furniture collection at our Dubai showroom. Visit
          us to experience the elegance and craftsmanship of our pieces,
          prominently located on the map.
        </p>
      </div>
    </section>
  );
};
export default Location;
