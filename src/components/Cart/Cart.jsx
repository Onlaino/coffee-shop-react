import './cart.css'
import {AnimatePresence, motion} from "framer-motion";

const cartVariants = {
	initial: {
		opacity: 0,
		scale: 0.5,
		x: "50%",
		y: "50%",
	},
	animate: {
		opacity: 1,
		scale: 1,
		transform: 'translateX(-50%) translateY(-50%)',
		x: "0%",
		y: "0%",
		transition: {
			type: "spring",
			stiffness: 260,
			damping: 20
		}
	},
	exit: {
		opacity: 0,
		scale: 0.5,
		x: "50%",
		y: "50%",
		transition : {
			duration: .5,
		}
	}
};
const cartItemsVariants = {
	initial : {
		opacity: 1,
		scale: 1,
	},
	animate: {
		opacity: 0,
		y: '-50%',
		scale: 0.5
	},
	exit: {
		opacity: 0,
		y: '-100%',
		scale: 0.1
	}
}

const Cart = (props) => {
	const {handleOpenCart,
			isCartOpen,
			cartItems,
			setCartItems} = props;
	let totalProductPrice = cartItems.reduce((acc, val) => acc + val.price, 0);

	const deleteItemFromCart = (id) => {
		setCartItems(cartItems.filter((item) => item.id !== id));
	}

	return (
		<AnimatePresence>
			<motion.div
				className='cart-wrapper w-svw h-svh absolute bg-black bg-opacity-50 z-20'
			>
				<motion.div
					variants={cartVariants}
					initial="initial"
					animate={isCartOpen ? "animate" : "exit"}
					className='cart '>
					<div className="cart-header">
						<h3 className="cart-title text-white text-center pt-5">Cart</h3>
						<div
							onClick={handleOpenCart}
							className={'cart-close text-white cursor-pointer'}>&#9749;
						</div>
					</div>
					<div className="cart-body">
						{
							cartItems.length < 1 ?
								<div>
									<h3 className='text-center text-black text-xl pt-36'>No item in cart...</h3>
								</div>
								: cartItems.map(item => (
									<AnimatePresence key={item.id}>
										<motion.div
											variants={cartItemsVariants}
											initial="initial"
											exit="exit"
											animate="initial"
											transition={{ duration: 1 }}
											className="cart-items"
										>
											<div
												className="cart-item d-flex justify-between items-center p-3 ">
												<img
													style={{width: 60, height: 60}}
													src={`../src/resources/img/coffeeImg/${item.imgId}`} alt=""/>
												<p>{item.name}</p>
												<p>{item.price}$</p>
												<div
													onClick={() => deleteItemFromCart(item.id)}
													className='cursor-pointer hover:scale-110 active:scale-90 select-none'>&#10006;</div>
											</div>
										</motion.div>
									</AnimatePresence>

								))
						}
					</div>
					<div className="cart-price">
						<div className={' text-2xl text-center p-10'}>Price:{Math.floor(totalProductPrice)}$
						</div>
					</div>
				</motion.div>
			</motion.div>
		</AnimatePresence>
	)
}

export default Cart;