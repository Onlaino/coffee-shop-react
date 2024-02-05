import MainHeader from "../components/mainHeader/MainHeader.jsx";
import AppFooter from "../components/appFooter/AppFooter.jsx";
import AboutUs from "../components/aboutUs/AboutUs.jsx";
import OurBest from "../components/ourBest/OurBest.jsx";
import AnimatedScroll from "../components/animatedRoute/animatedScroll.jsx";

const MainPage = (props) => {
	const {cartItems, setCartItems, plus, setPlus} = props
	return (
		<>
				<AnimatedScroll/>
				<MainHeader
					cartItems={cartItems}
					setCartItems={setCartItems}
					setPlus={setPlus}
					plus={plus}
				/>
				<AboutUs/>
				<OurBest
					cartItems={cartItems}
					setCartItems={setCartItems}
					setPlus={setPlus}
					plus={plus}
				/>
				<AppFooter/>

		</>
	)
}
export default MainPage;