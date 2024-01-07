import { useContext } from 'react';

import { CartContext } from '../../contexts/cartContext';
import { useNavigate } from 'react-router-dom';

import Button from '../Button';
import CartItem from '../CartItem';

import { CartDropdownContainer, EmptyMessage, CartItems } from './styles';

const CartDropdown = () => {
	const { cartItems } = useContext(CartContext);
	const navigate = useNavigate();

	const goToCheckoutHandler = () => {
		navigate('/checkout');
	};

	return (
		<CartDropdownContainer>
			<CartItems>
				{cartItems.length ? (
					cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
				) : (
					<EmptyMessage>Your cart is empty</EmptyMessage>
				)}
			</CartItems>
			<Button onClick={goToCheckoutHandler}>CHECKOUT</Button>
		</CartDropdownContainer>
	);
};

export default CartDropdown;
