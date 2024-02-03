import DividerBlack from "../divider/DividerBlack.jsx";

import {coffeeFilterData} from "../../data-cofee.jsx";

import './aboutIt.css'
import { motion } from "framer-motion";

import {useParams} from "react-router";
import {Link} from "react-router-dom";

import {useEffect, useState} from "react";


const AboutIt = () => {
	const {id} = useParams();
	const [product, setProduct] = useState([]);

	useEffect(() => {
		let item = coffeeFilterData.find(item => item.id === id);
		setProduct(item);
	}, [id]);

	return (
		<section className='about-our-beans-section'>
			<div className='d-flex justify-center about-our-beans gap-x-20'>
				<div>
					<img style={{width: '400px', height: '355px'}} className='about-our-beans-image' src={`../src/resources/img/coffeeImg/${product.imgId}`} alt=""/>
				</div>
				<div>
					<h3 className='text-center mb-2 text-2xl'>About It</h3>
					<DividerBlack/>
					<div className='text-left w-96 mt-6 '>
						<p className='mb-2 text-sm leading-6'><b>Country:</b> {product.country ? product.country : null}</p>
						<p className='text-sm leading-6'><b>Description:</b> {product.description}</p>
						<p className='text-sm leading-6 mt-2.5'>price: <span className='text-xl'>{product.price}$</span></p>
						<Link  to='/aboutOurBeans'>
							<motion.div
								className='text-base leading-6 mt-3.5'
								animate={{scale: [1, 0.89, 1]}}
								transition={{
									duration: 2,
									repeat: Infinity,
								}}
								style={{display: 'inline-block'}}
							>
								<b>&larr; Back to all</b>
							</motion.div>
						</Link>
					</div>
				</div>
			</div>
		</section>
	)
}

export default AboutIt;