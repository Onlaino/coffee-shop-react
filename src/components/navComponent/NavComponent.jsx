import beans from '../../resources/icons/coffee-beans.svg'
import './navComponent.css'
import {Link} from "react-router-dom";

const NavComponent = (props) => {
	return (
		<nav>
			<div className={props.divClazz}>
				<ul className={props.clazz}>
					<li>
						{/* eslint-disable-next-line react/prop-types */}
						<img src={props.img} className={props.beansClazz} alt="coffee-beans"/>
						<Link to={'/'}>Coffee house</Link>
					</li>
					<li>
						<Link to={'/aboutOurBeans'}>Our coffee</Link>
					</li>
					<li>
						<a href="#">For your pleasure</a>
					</li>
				</ul>
			</div>
		</nav>
	)
}

export default NavComponent;