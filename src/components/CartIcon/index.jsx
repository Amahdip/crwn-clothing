import { CartContext } from '../../contexts/cartContext';
import { useContext } from 'react';

import { ShoppingIcon, CartIconContainer, ItemCount } from './styles';

const CartIcon = () => {
	const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);

	const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

	return (
		<CartIconContainer onClick={toggleIsCartOpen}>
			<ShoppingIcon className='shopping-icon' />
			<ItemCount>{cartCount}</ItemCount>
		</CartIconContainer>
	);
};

export default CartIcon;
