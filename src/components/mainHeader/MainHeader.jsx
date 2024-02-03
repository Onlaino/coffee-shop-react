import NavComponent from "../navComponent/NavComponent.jsx";
import DividerWhite from "../divider/Divider.jsx";


import './mainHeader.css'

const MainHeader = (props) => {
	const {cartItems, setCartItems} = props;
	return (
		<header className='main-header'>
			<NavComponent
				cartItems={cartItems}
				setCartItems={setCartItems}
				img={'../src/resources/icons/coffee-beans.svg'}
				clazz={'text-xs font-normal d-flex gap-x-12 pt-5 pl-44 pr-96 text-white relative'}
				divClazz={'relative'}
				beansClazz={'beans'}
			/>
			<div className='wrapper-text mt-28'>
				<h1 className='text-4xl color text-white main_h1'>Everything You Love About Coffee</h1>
				<DividerWhite/>
				<p className='text-white text-2xl font-bold mt-9'>We makes every day full of energy and taste</p>
				<p className='text-white text-2xl text-shadow font-bold mt-3'>Want to try our beans?</p>
				<a href="about-us" className={'text-white w-32 h-8 link-more mt-4'}>More</a>
			</div>
		</header>
	)
}

export default MainHeader;