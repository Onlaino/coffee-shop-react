import CoffeeCardItem from "../coffeCardItem/CoffeeCardItem.jsx";
import './ourBest.css'
import {coffeeData} from "../../data-cofee.jsx";
import {useEffect, useState} from "react";

const OurBest = (props) => {
	const [products, setProducts] = useState([]);
	const {cartItems, setCartItems} = props;
	useEffect(() => {
		setProducts(() => {
			return products.concat(coffeeData);
		})
	}, []);

	return (
		<section className='our-best-section'>
			<div className="our-best ">
				<h2 className='text-2xl text-center font-normal '>Our best</h2>
				<div className='cards-wrapper mt-10 bg-transparent d-flex justify-center  flex-row gap-x-10'>
					{
						products.map(item => {
							return (
								<CoffeeCardItem
									cartItems={cartItems}
									setCartItems={setCartItems}
									id={item.id}
									key={item.id}
									name={item.name}
									price={item.price}
									imgId={item.imgId}
								/>
							)
						})
					}
				</div>
			</div>
		</section>
	)
}
export default OurBest;