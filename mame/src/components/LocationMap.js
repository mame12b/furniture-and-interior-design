import React, { useEffect, useRef } from "react";
import { MapContainer, Marker, TileLayer } from '@react-google-maps/api';



const LocationMap = () => {
  const mapRef = useRef(null);

  useEffect(() => {
    const loadMap = () => {
      if (window.google && window.google.maps) {
        const map = new window.google.maps.Map(mapRef.current, {
          center: { lat: 25.276168, lng: 55.272764 }, // Centered on Dubai
          zoom: 12, // Adjust zoom level as needed
        });
        // Marker 1: Dubai Mall
        new window.google.maps.Marker({
          position: { lat: 25.1972, lng: 55.2796 },
          map,
          title: "Dubai Mall",
        });
        // Marker 2: Jumeirah Beach
        new window.google.maps.Marker({
          position: { lat: 25.2038, lng: 55.2694 },
          map,
          title: "Jumeirah Beach", 
        });
      } else {
        console.error("Google Maps API is not available.");
      }
    };
    if (!window.google || !window.google.maps) {
      window.initializeMap = loadMap;
      const script = document.createElement("script");
      script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyBfiziHNWdLYI1ejhVZsiWJ8AuX41TqWec&callback=initializeMap`;
      script.async = true;
      script.defer = true;
      document.head.appendChild(script);
    } else {
      loadMap();
    }
    return () => {
      if (window.google && window.google.maps) {
        // Optionally, remove the map instance here
      }
    };
  }, []);
  return <div ref={mapRef} className="w-full h-96 rounded-lg shadow-lg"></div>;
};


export default LocationMap;
