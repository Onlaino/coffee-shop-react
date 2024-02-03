import './animated.css'
import {useScroll, motion} from "framer-motion";


const AnimatedScroll = () => {
	const { scrollYProgress } = useScroll();
	return (
		<motion.div
			className="progress-bar"
			style={{scaleX: scrollYProgress}}
		/>
	)
}

export default AnimatedScroll;