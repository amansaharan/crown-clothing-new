import Signup from '../../components/sign-up/Signup';
import Signin from '../../components/sign-in/Signin';
import './authentication.styles.scss';

function Authentication() {
  return (
    <div className='authentication-container'>
      <Signin />
      <Signup />
    </div>
  );
}
export default Authentication;
