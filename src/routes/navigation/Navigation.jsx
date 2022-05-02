import { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import './Navigation.styles.scss';
import { UserContext } from '../../contexts/UserContext';
import { signOutUser } from '../../utils/firebase/firebase.utils';
import CartIcon from '../../components/cart-icon/CartIcon';
import CartdropDown from '../../components/cart-dropdown/CartdropDown';
import { CartContext } from '../../contexts/CartContext';

function Navigation() {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);
  console.log(currentUser);

  return (
    <>
      <div className='navigation'>
        <Link className='logo-container' to='/'>
          <CrwnLogo className='logo' />
        </Link>
        <div className='nav-links-container'>
          <Link to='/' className='nav-link'>
            Home
          </Link>
          <Link to='/shop' className='nav-link'>
            Shop
          </Link>
          {currentUser ? (
            <span onClick={signOutUser} className='nav-link'>
              SignOut
            </span>
          ) : (
            <Link to='/auth' className='nav-link'>
              SignIn
            </Link>
          )}
          <CartIcon />
        </div>
        {isCartOpen && <CartdropDown />}
      </div>
      <Outlet />
    </>
  );
}
export default Navigation;
