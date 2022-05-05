import { createContext, useState, useEffect } from 'react';
import { getCategoriesandDocuments } from '../utils/firebase/firebase.utils';

export const CategoryContext = createContext({
  categoriesMap: {},
});

export const CategoryContextProvider = ({ children }) => {
  const [categoriesMap, setCategoriesMap] = useState({});

  useEffect(() => {
    const getCategories = async () => {
      const categoryMap = await getCategoriesandDocuments('categories');
      console.log(categoryMap);
      setCategoriesMap(categoryMap);
    };
    getCategories();
  }, []);

  return (
    <CategoryContext.Provider value={{ categoriesMap, setCategoriesMap }}>
      {children}
    </CategoryContext.Provider>
  );
};
