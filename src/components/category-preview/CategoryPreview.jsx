import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../product-card/ProductCard';

import './category-preview.styles.scss';

const Categorypreview = ({ title, products }) => {
  return (
    <div className='category-preview-container'>
      <h2>
        <Link to={`/shop/${title}`}>
          <span className='title'>{title.toUpperCase()}</span>
        </Link>
      </h2>
      <div className='preview'>
        {products
          .filter((_, idx) => idx < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </div>
  );
};

export default Categorypreview;
