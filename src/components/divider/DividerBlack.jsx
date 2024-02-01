import beans from "../../resources/icons/coffee-beans-black.svg";
import './divider.css';

const DividerBlack  = () => {
	return (
		<div className='divider-wrapper'>
			<div className="divider-black">
				<img src={beans} alt="coffe beans"/>
			</div>
		</div>
	)
}

export default DividerBlack;