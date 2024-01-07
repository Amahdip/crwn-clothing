import { Fragment, useContext } from 'react';
import { Outlet } from 'react-router-dom';

import { UserContext } from '../../contexts/userContext';
import { CartContext } from '../../contexts/cartContext';

import CartIcon from '../../components/CartIcon';
import CartDropdown from '../../components/CartDropdown';
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';

import { signOutUser } from '../../utils/firebase/firebase';

import {
	NavigationContainer,
	NavLinks,
	NavLink,
	LogoContainer,
} from './styles';

const Navigation = () => {
	const { currentUser } = useContext(UserContext);
	const { isCartOpen } = useContext(CartContext);

	return (
		<Fragment>
			<NavigationContainer>
				<LogoContainer to='/'>
					<CrwnLogo className='logo' />
				</LogoContainer>
				<NavLinks>
					<NavLink to='/shop'>SHOP</NavLink>

					{currentUser ? (
						<NavLink as='span' onClick={signOutUser}>
							SIGN OUT
						</NavLink>
					) : (
						<NavLink to='/auth'>SIGN IN</NavLink>
					)}
					<CartIcon />
				</NavLinks>
				{isCartOpen && <CartDropdown />}
			</NavigationContainer>
			<Outlet />
		</Fragment>
	);
};

export default Navigation;
