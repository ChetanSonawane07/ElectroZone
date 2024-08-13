import React, { useEffect, useState } from 'react';
import { getBrands } from '../services/brand';
import Brand from './Brand';

function BrandList() {
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    loadBrands();
  }, []);

  const loadBrands = async () => {
    try {
      const result = await getBrands();
      console.log(result);
      if (result) {
        console.log("Inside result");
        const brandsWithImages = result.map(brand => ({
          ...brand,
          image: brand.image ? `data:image/svg+xml;base64,${brand.image}` : null
        }));
        setBrands(brandsWithImages);
      } else {
        console.error('Failed to load brands: ', result.message);
      }
    } catch (error) {
      console.error('Failed to load brands:', error);
    }
  };

  return (
    <div style={{ margin: 10 }}>
      <h2>
        Shop by Brands{" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-caret-right-fill"
          viewBox="0 0 16 16"
        >
          <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
        </svg>
      </h2>
      <div style={{ display: "inline-block" }}>
        {brands.length > 0 ? (
          brands.map((brand) => (
            <Brand
              key={brand.id}
              name={brand.name}
              image={brand.image}
            />
          ))
        ) : (
          <p>No brands available</p>
        )}
      </div>
    </div>
  );
}

export default BrandList;
