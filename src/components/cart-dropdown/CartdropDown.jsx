import { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';
import Button from '../button/Button';
import CartItem from '../cart-tem/CartItem';
import './cart-dropdown.scss';

function CartdropDown() {
  const { cartItems } = useContext(CartContext);
  return (
    <div className='cart-dropdown-container'>
      <div className='cart-items'>
        {cartItems.map((item) => {
          return <CartItem key={item.id} cartItem={item} />;
        })}
      </div>
      <Button>GO TO CHECKOUT</Button>
    </div>
  );
}
export default CartdropDown;
