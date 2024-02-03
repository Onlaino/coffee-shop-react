import MainHeader from "../components/mainHeader/MainHeader.jsx";
import AppFooter from "../components/appFooter/AppFooter.jsx";
import AboutUs from "../components/aboutUs/AboutUs.jsx";
import OurBest from "../components/ourBest/OurBest.jsx";
import AnimatedScroll from "../components/animatedRoute/animatedScroll.jsx";

const MainPage = (props) => {
	const {cartItems, setCartItems} = props
	return (
		<>
				<AnimatedScroll/>
				<MainHeader cartItems={cartItems} setCartItems={setCartItems}/>
				<AboutUs/>
				<OurBest cartItems={cartItems} setCartItems={setCartItems}/>
				<AppFooter/>

		</>
	)
}
export default MainPage;