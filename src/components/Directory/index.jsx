import { categories } from '../../categories';
import CategoryItem from '../CategoryItem';
import './style.scss';

const Directory = () => {
	return (
		<div className='directory-container'>
			{categories.map((category) => (
				<CategoryItem category={category} key={category.id} />
			))}
		</div>
	);
};

export default Directory;
