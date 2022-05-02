import { useContext } from 'react';
import Button from '../button/Button';
import './product-card.styles.scss';
import { CartContext } from '../../contexts/CartContext';

function ProductCard({ product }) {
  const { name, imageUrl, price } = product;

  const { addItemToCart } = useContext(CartContext);

  const addItemInCarthandler = () => {
    addItemToCart(product);
  };
  return (
    <div className='product-card-container'>
      <img src={imageUrl} alt={`${name}`} />
      <div className='footer'>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
      </div>
      <Button buttonType='inverted' onClick={addItemInCarthandler}>
        ADD TO CART
      </Button>
    </div>
  );
}
export default ProductCard;
