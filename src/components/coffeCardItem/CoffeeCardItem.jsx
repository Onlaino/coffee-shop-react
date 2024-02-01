import './cofeeCardItem.css'
import  {Link} from "react-router-dom";

const CoffeeCardItem = (props) => {
	// eslint-disable-next-line react/prop-types
	const {imgId, price, name, country, id} = props;
	return (
		<Link to={`/product/${id}`}>
			<div className="card w-56 bg-opacity-50 bg-white">
				<div className="card-into text-center">
					<img src={`../src/resources/img/coffeeImg/${imgId}`} className='m-auto w-36 h-32' alt="coffeImg"/>
					<p className={'text-center mt-3.5 text-sm'}>{name}</p>
					{country ? <p className={'mt-2.5 text-right text-sm'}>{country}</p> : null}
					<p className={'mt-2.5 text-end text-sm'}>{price}$</p>
				</div>
			</div>
		</Link>

	)
}

export default CoffeeCardItem;