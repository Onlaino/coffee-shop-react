import {BrowserRouter} from 'react-router-dom';
import AnimatedRoute from "../animatedRoute/AnimatedRoute.jsx";

import {useState} from "react";




const App = () => {
	const [cartItems, setCartItems] = useState([]);
	return (
		<main>
			<BrowserRouter>
					<AnimatedRoute cartItems={cartItems} setCartItems={setCartItems}/>
			</BrowserRouter>
		</main>
	)
}

export default App;