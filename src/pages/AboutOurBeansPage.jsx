import OurCoffeeHeader from "../components/ourCoffeeHeader/ourCoffeeHeader.jsx";
import FilterCoffee from "../components/filterCoffeSection/FilterCoffee.jsx";
import AppFooter from "../components/appFooter/AppFooter.jsx";
import AboutOurBeans from "../components/aboutOurBeans/AboutOurBeans.jsx";

const AboutOurBeansPage = () => {
	return (
		<>
			<OurCoffeeHeader/>
			<AboutOurBeans/>
			<FilterCoffee/>
			<AppFooter/>
		</>
	)
}

export default AboutOurBeansPage;