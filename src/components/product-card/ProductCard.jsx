import Button from '../button/Button';
import './product-card.styles.scss';

function ProductCard({ product }) {
  const { name, imageUrl, price } = product;
  return (
    <div className='product-card-container'>
      <img src={imageUrl} alt={`${name}`} />
      <div className='footer'>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
      </div>
      <Button buttonType='inverted'>ADD TO CART</Button>
    </div>
  );
}
export default ProductCard;
