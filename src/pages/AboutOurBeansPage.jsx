import OurCoffeeHeader from "../components/ourCoffeeHeader/ourCoffeeHeader.jsx";
import FilterCoffee from "../components/filterCoffeSection/FilterCoffee.jsx";
import AppFooter from "../components/appFooter/AppFooter.jsx";
import AboutOurBeans from "../components/aboutOurBeans/AboutOurBeans.jsx";
import AnimatedScroll from "../components/animatedRoute/animatedScroll.jsx";

import {useState} from "react";

const AboutOurBeansPage = (props) => {
	const {cartItems, setCartItems} = props;
	console.log(cartItems)
	return (
		<>
			<AnimatedScroll/>
			<OurCoffeeHeader cartItems={cartItems} setCartItems={setCartItems}/>
			<AboutOurBeans/>
			<FilterCoffee cartItems={cartItems} setCartItems={setCartItems}/>
			<AppFooter/>
		</>
	)
}

export default AboutOurBeansPage;