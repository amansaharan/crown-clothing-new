import { Link, Outlet } from 'react-router-dom';
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import './Navigation.styles.scss';

function Navigation() {
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
          <Link to='/auth' className='nav-link'>
            SignIn
          </Link>
        </div>
      </div>
      <Outlet />
    </>
  );
}
export default Navigation;
