import './navComponent.css'
import {Link} from "react-router-dom";
import {useState} from "react";
import Cart from "../Cart/Cart.jsx";

const NavComponent = (props) => {
	const [isCartOpen, setIsCartOpen] = useState(false);
	const {cartItems, setCartItems} = props
	const handleOpenCart = () => {
		if  (!isCartOpen) {
			document.body.style.overflow = `hidden`
		} else {
			document.body.style.overflow = `auto`
		}
		setIsCartOpen(!isCartOpen);
	}
	return (
		<nav>
			{isCartOpen
				&& <Cart
					isCartOpen={isCartOpen}
					handleOpenCart={handleOpenCart}
					cartItems={cartItems}
					setCartItems={setCartItems}
				/>}
			{/* eslint-disable-next-line react/prop-types */}
			<div className={props.divClazz}>
				{/* eslint-disable-next-line react/prop-types */}
				<ul className={props.clazz}>
					<li>
						{/* eslint-disable-next-line react/prop-types */}
						<img src={props.img} className={props.beansClazz} alt="coffee-beans"/>
						<Link to={'/'}>Coffee house</Link>
					</li>
					<li>
						<Link to={'/aboutOurBeans'}>Our coffee</Link>
					</li>
					<li>
						<a className='cursor-pointer' onClick={handleOpenCart}>Cart</a>
					</li>
				</ul>
			</div>
		</nav>
	)
}

export default NavComponent;