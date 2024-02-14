import './cofeeCardItem.css'
import {motion} from "framer-motion";
import  {Link} from "react-router-dom";
import {useState} from "react";

const CoffeeCardItem = (props) => {
	const [plus, setPlus] = useState(true);
	const {setCartItems, cartItems} = props;
	// const [cartItems, setCartItems] = useState([]);

	// eslint-disable-next-line react/prop-types
	const {imgId, price, name, country, id} = props;

	const isItemInCart = (cartItems, itemId) => {
		return cartItems.some(item => item.id === itemId);
	};

	const handleAddToCart = () => {
		if (!isItemInCart(cartItems, id)) {
			setCartItems(prevState => [...prevState, {id, name, price, imgId}]);
		}
		setPlus(!plus);
	};

	return (
			<motion.div className="card w-56 bg-opacity-50 bg-white">
				<div className="card-into text-center">
					<img src={`../src/resources/img/coffeeImg/${imgId}`} className='m-auto w-36 h-32' alt="coffeImg"/>
					<p className={'text-center mt-3.5 text-sm'}>{name}</p>
					{country ? <p className={'mt-2.5 text-right text-sm'}>{country}</p> : null}
					<p className={'mt-2.5 text-end text-sm'}>{price}$</p>
					<div className='d-flex justify-around mt-3'>
						<Link to={`/product/${id}`}>
							<div
								className='cursor-pointer hover:scale-110 active:scale-90'>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="orange"
									stroke="currentColor"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
								>
									<path d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
								</svg>
							</div>
						</Link>
						{plus
							? <Plus
								onClick={handleAddToCart}
							/>
							: <Minus
								onClick={handleAddToCart}
							/>}
					</div>
				</div>
			</motion.div>
	)
}

const Minus = (props) => {
	return (
		<div className={'text-right cursor-pointer hover:scale-110 active:scale-90'} onClick={props.onClick}>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			>
				<line x1="5" y1="12" x2="19" y2="12"></line>
			</svg>
		</div>
	)

}
const Plus = (props) => {
	return (
		<div className={'text-right cursor-pointer hover:scale-110 active:scale-90'} onClick={props.onClick}>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			>
				<line x1="12" y1="5" x2="12" y2="19"></line>
				<line x1="5" y1="12" x2="19" y2="12"></line>
			</svg>
		</div>
	)
}

export default CoffeeCardItem;