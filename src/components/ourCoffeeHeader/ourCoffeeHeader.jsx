import NavComponent from "../navComponent/NavComponent.jsx";
import './ourBest.css';


const OurCoffeeHeader = (props) => {
	const {cartItems, setCartItems} = props
	return (
		<section className='our-best-header'>
			<NavComponent
				cartItems={cartItems}
				setCartItems={setCartItems}
				img={'../src/resources/icons/coffee-beans.svg'}
				clazz={'text-xs font-normal d-flex gap-x-12 pt-5 pl-44 pr-96 text-white relative'}
				divClazz={'relative'}
				beansClazz={'beans'}
			/>
			<h1 className='mt-14 text-center text-4xl color text-white'>Our Coffee</h1>
		</section>

	)
}

export default OurCoffeeHeader;