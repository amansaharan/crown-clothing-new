import { ReactComponent as CartIconSvg } from '../../assets/shopping-bag.svg';
import { useContext } from 'react';
import './cart-icon.styles.scss';
import { CartContext } from '../../contexts/CartContext';

function CartIcon() {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);

  console.log(isCartOpen);

  const carttoggler = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <div className='cart-icon-container'>
      <CartIconSvg className='shopping-icon' onClick={carttoggler} />{' '}
      <span className='item-count'>{cartCount}</span>
    </div>
  );
}
export default CartIcon;
