import DividerBlack from "../divider/DividerBlack.jsx";
import NavComponent from "../navComponent/NavComponent.jsx";

const AppFooter = () => {
	return (
		<footer>
			<div className="footer-wrapper pb-4">
				<NavComponent
					img={'../src/resources/icons/coffee-beans-footer-black.svg'}
					clazz={'text-xs font-normal d-flex justify-center items-center gap-x-12 mt-10 text-black relative text-center'}
					divClazz={'text-center'}
					beansClazz={'beansBlack absolute'}
				/>
				<DividerBlack />
			</div>
		</footer>
	)
}

export default AppFooter;