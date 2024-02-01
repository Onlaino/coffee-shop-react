import './divider.css'
import beans from '../../resources/icons/coffee-beans.svg'

const DividerWhite = () => {
	return (
		<div className='divider-wrapper'>
			<div className="divider">
				<img src={beans} alt="coffe beans"/>
			</div>

		</div>
	)
}

export default DividerWhite;