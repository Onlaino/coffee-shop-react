import DividerBlack from "../divider/DividerBlack.jsx";
import coffeeGirl from '../../resources/img/backgrounds/coffee-girl.jpg'
import './aboutOurBeans.css';

const AboutOurBeans = () => {
	return (
		<section className='about-our-beans-section'>
			<div className='d-flex justify-center about-our-beans gap-x-20'>
				<div>
					<img className='about-our-beans-image'  src={coffeeGirl} alt=""/>
				</div>
				<div>
					<h3 className='text-center mb-2 text-2xl'>About our beans</h3>
					<DividerBlack/>
					<div className='text-center w-96 mt-6 '>
						<p className='mb-2 text-sm leading-6'>Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.</p>
						<p className='text-sm leading-6'>Afraid at highly months do things on at. Situation <br/>recommend objection do intention br
							so questions. </p>
						<p className='text-sm leading-6'>As greatly removed calling pleased improve an. <br/> Last ask him cold feel <br/>met spot shy want.
							Children me laughing we prospect answered followed. At it went
							is song that held help face.</p>
					</div>
				</div>
			</div>
		</section>
	)
}

export default AboutOurBeans;