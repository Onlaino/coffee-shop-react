import DividerBlack from "../divider/DividerBlack.jsx";
import {coffeeFilterData} from "../../data-cofee.jsx";

import './aboutIt.css'
import {useParams} from "react-router";
import {useEffect, useState} from "react";

const AboutIt = () => {
	const {id} = useParams();
	const [product, setProduct] = useState([]);

	useEffect(() => {
		let item = coffeeFilterData.find(item => item.id === id);
		setProduct(item);
	}, [id]);

	console.log(product);

	return (
		<section className='about-our-beans-section'>
			<div className='d-flex justify-center about-our-beans gap-x-20'>
				<div>
					<img className='about-our-beans-image' src={`../src/resources/img/coffeeImg/${product.imgId}`} alt=""/>
				</div>
				<div>
					<h3 className='text-center mb-2 text-2xl'>About It</h3>
					<DividerBlack/>
					<div className='text-center w-96 mt-6 '>
						<p className='mb-2 text-sm leading-6'>Country: {product.country ? product.country : null}</p>
						<p className='text-sm leading-6'>{product.description}</p>
						<p className='text-sm leading-6'>{product.price}</p>
					</div>
				</div>
			</div>
		</section>
	)
}

export default AboutIt;