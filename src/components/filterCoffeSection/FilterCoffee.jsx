import './filterCoffee.css';
import CoffeeCardItem from "../coffeCardItem/CoffeeCardItem.jsx";

//hooks
import {useState} from "react";
// DATA
import {coffeeFilterData} from "../../data-cofee.jsx";

const FilterCoffee = (props) => {
	const [coffee, setCoffee] = useState(coffeeFilterData);
	const [selectedCountry, setSelectedCountry] = useState('');
	const [inputCountryValue, setInputCountryValue] = useState('');
	const {setCartItems, cartItems, plus, setPlus} = props;

	const filterByCountry = (country) => {
		if (selectedCountry === country) {
			setCoffee(coffeeFilterData);
			setSelectedCountry('');
		} else {
			const filteredCoffee = coffeeFilterData.filter(item => item.country === country);
			setCoffee(filteredCoffee);
			setSelectedCountry(country);
		}
	};

	const setActiveClass = (country) => {
		if (selectedCountry === country) {
			return "filter__coffee-tab filter__coffee-tab-active d-flex justify-center items-center";
		} else {
			return "filter__coffee-tab d-flex justify-center items-center";
		}
	}

	const handleFilterTextChange = (event) => {
		const newText = event.target.value;
		setInputCountryValue(newText);

		let filteredCoffee = coffeeFilterData;

		if (selectedCountry) {
			filteredCoffee = filteredCoffee.filter(item => item.country === selectedCountry);
		}

		if (newText) {
			filteredCoffee = filteredCoffee.filter(item =>
				item.name.toLowerCase().includes(newText.toLowerCase())
			);
		}

		setCoffee(filteredCoffee);
	};



	return (
		<section className='filter__coffee'>
			<div className='filter__coffee-container mt-16 mb-20'>
				<div className="filter__coffee-line d-flex gap-x-20 justify-center mb-16">
					<div className="filter__coffee-wrapper d-flex gap-x-5 justify-center items-center">
						<div className="div">Looking for:</div>
						<input
							className='filter__coffee-wrapper-input px-9 py-1.5 text-xs'
							placeholder='start typing here...'
							type="text"
							onChange={handleFilterTextChange}
						/>
					</div>
					<div className="filter__coffee-input d-flex gap-x-5">
						<div className="div">Looking for:</div>
						<div className="filter__coffee-tabs d-flex justify-between gap-x-5">
							<div
								onClick={() => filterByCountry('Brazil')}
								className= {setActiveClass('Brazil')}
							>
								Brazil
							</div>
							<div
								onClick={() => filterByCountry('Kenya')}
								className= {setActiveClass('Kenya')}
							>
								Kenya
							</div>
							<div
								onClick={() => filterByCountry('Columbia')}
								className= {setActiveClass('Columbia')}
							>
								Columbia
							</div>
						</div>
					</div>
				</div>
				<div className='filter__coffee-cards  d-flex justify-center gap-x-16 gap-y-16 flex-wrap mt-16'>
						{coffee.map((item, index) => {
							return (
								<CoffeeCardItem
									plus={plus}
									setPlus={setPlus}
									cartItems={cartItems}
									setCartItems={setCartItems}
									id={item.id}
									key={index}
									imgId={item.imgId}
									price={item.price}
									name={item.name}
									country={item.country}
								/>
							)
						})}
				</div>
			</div>
		</section>
	)
}

export default FilterCoffee;