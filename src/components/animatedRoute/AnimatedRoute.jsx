import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import MainPage from "../../pages/MainPage.jsx";
import AboutOurBeansPage from "../../pages/AboutOurBeansPage.jsx";
import AboutItPage from "../../pages/AboutItPage.jsx";

const pageTransitionVariants = {
	initial: {
		opacity: 0,
		x: 0,
		visible: 'hidden',
		zIndex: -5,
	},
	in: {
		opacity: 1,
		x: 0,
		visible: 'visible',
		zIndex: 1,
	},
	out: {
		opacity: 0,
		x: '0',
		visible: 'visible',
		zIndex: 2,
	},
};

const AnimatedRoute = (props) => {
	const {setCartItems, cartItems, plus, setPlus} = props
	const location = useLocation();
	return (
		<AnimatePresence mode='wait'>
			<Routes location={location} key={location.pathname}>
				<Route path='/' element={
					<motion.div
						initial="initial"
						animate="in"
						exit="out"
						variants={pageTransitionVariants}
						transition={{ type: "spring", duration: 0.5 }}
					>
						<MainPage
							cartItems={cartItems}
							setCartItems={setCartItems}
							plus={plus}
							setPlus={setPlus}
						/>
					</motion.div>
				}/>
				<Route path='/aboutOurBeans' element={
					<motion.div
						initial="initial"
						animate="in"
						exit="out"
						variants={pageTransitionVariants}
						transition={{ type: "spring", duration: 0.5 }}
					>
						<AboutOurBeansPage
							cartItems={cartItems}
							setCartItems={setCartItems}
							plus={plus}
							setPlus={setPlus}
						/>
					</motion.div>
				}/>
				<Route path='/product/:id' element={
					<motion.div
						initial="initial"
						animate="in"
						exit="out"
						variants={pageTransitionVariants}
						transition={{ type: "spring", duration: 0.5 }}
					>
						<AboutItPage />
					</motion.div>
				}/>
			</Routes>
		</AnimatePresence>
	);
};

export default AnimatedRoute;