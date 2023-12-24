import SignUpForm from '../../components/SignUp';
import SignInForm from '../../components/SignIn';

import './style.scss';

const Authentication = () => {
	return (
		<div className='authentication-container'>
			<SignInForm />
			<SignUpForm />
		</div>
	);
};

export default Authentication;
