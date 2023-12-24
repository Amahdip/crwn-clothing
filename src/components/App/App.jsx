import Home from '../../routes/Home';
import Authentication from '../../routes/Authentication';
import { Routes, Route } from 'react-router-dom';
import Navigation from '../../routes/NavigationBar';

const Shop = () => {
	return <div>I'm the Shopping page</div>;
};

const App = () => {
	return (
		<Routes>
			<Route path='/' element={<Navigation />}>
				<Route index element={<Home />}></Route>
				<Route path='/shop' element={<Shop />}></Route>
				<Route path='/auth' element={<Authentication />}></Route>
			</Route>
		</Routes>
	);
};

export default App;
