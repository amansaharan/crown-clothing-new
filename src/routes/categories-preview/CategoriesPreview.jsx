import { useContext } from 'react';
import Categorypreview from '../../components/category-preview/CategoryPreview';

import { CategoryContext } from '../../contexts/CategoryContext';

function CategoriesPreview() {
  const { categoriesMap } = useContext(CategoryContext);

  return (
    <>
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];
        return (
          <Categorypreview key={title} title={title} products={products} />
        );
      })}
    </>
  );
}
export default CategoriesPreview;
