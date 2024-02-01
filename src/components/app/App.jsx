import { BrowserRouter, Routes, Route } from 'react-router-dom';


import MainPage from "../../pages/MainPage.jsx";
import AboutOurBeansPage from "../../pages/AboutOurBeansPage.jsx";
import AboutItPage from "../../pages/AboutItPage.jsx";

const App = () => {
	return (
		<main>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<MainPage/>}/>
					<Route path='/aboutOurBeans' element={<AboutOurBeansPage/>}/>
					<Route path='/product/:id' element={<AboutItPage/>}/>
				</Routes>
			</BrowserRouter>

		</main>
	)
}

export default App;