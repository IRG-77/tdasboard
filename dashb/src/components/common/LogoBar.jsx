import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import logoImage from "/PNG 2.png";

const LogoBar = () => {
	return (
		<motion.div
			initial={{ opacity: 0, y: -20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5 }}
			className="fixed top-0 left-0 right-0 z-30 bg-white bg-opacity-95 backdrop-blur-md border-b border-gray-200 h-16 lg:hidden"
		>
			<div className="h-full flex items-center justify-center px-4">
				<Link to="/">
					<motion.img 
						src={logoImage} 
						alt="Nhocas Way Logo" 
						className="h-12 w-auto cursor-pointer"
						whileHover={{ scale: 1.05 }}
						transition={{ duration: 0.2 }}
						onLoad={() => console.log('Logo bar loaded successfully')}
						onError={(e) => {
							console.log('Logo bar failed to load:', e.target.src);
						}}
					/>
				</Link>
			</div>
		</motion.div>
	);
};

export default LogoBar;
