import { createContext, useState } from 'react';

import PRODUCTS from '../shop-data.json';

export const ProductContext = createContext({ products: [] });

export const ProductContextProvider = ({ children }) => {
  const [products, setProducts] = useState(PRODUCTS);

  return (
    <ProductContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductContext.Provider>
  );
};
