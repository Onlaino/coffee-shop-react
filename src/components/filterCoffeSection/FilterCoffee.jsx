import './filterCoffee.css';
import CoffeeCardItem from "../coffeCardItem/CoffeeCardItem.jsx";

// DATA
import {coffeeFilterData} from "../../data-cofee.jsx";

const FilterCoffee = () => {
	return (
		<section className='filter__coffee'>
			<div className='filter__coffee-container mt-16 mb-20'>
				<div className="filter__coffee-line d-flex gap-x-20 justify-center mb-16">
					<div className="filter__coffee-wrapper d-flex gap-x-5 justify-center items-center">
						<div className="div">Looking for:</div>
						<input className='filter__coffee-wrapper-input px-9 py-1.5 text-xs' placeholder='start typing here...' type="text"/>
					</div>
					<div className="filter__coffee-input d-flex gap-x-5">
						<div className="div">Looking for:</div>
						<div className="filter__coffee-tabs d-flex justify-between gap-x-5">
							<div className="filter__coffee-tab d-flex justify-center items-center">Brazil</div>
							<div className="filter__coffee-tab d-flex justify-center items-center">Kenya</div>
							<div className="filter__coffee-tab d-flex justify-center items-center">Columbia</div>
						</div>
					</div>
				</div>
				<div className='filter__coffee-cards  d-flex justify-center gap-x-16 gap-y-16 flex-wrap mt-16'>

						{coffeeFilterData.map((item, index) => {
							return (
								<CoffeeCardItem
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