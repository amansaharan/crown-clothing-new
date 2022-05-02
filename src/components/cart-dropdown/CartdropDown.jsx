import Button from '../button/Button';
import './cart-dropdown.scss';

function CartdropDown() {
  return (
    <div className='cart-dropdown-container'>
      <div className='cart-items' />
      <Button>GO TO CHECKOUT</Button>
    </div>
  );
}
export default CartdropDown;
