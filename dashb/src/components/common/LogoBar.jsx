import { motion } from "framer-motion";

const LogoBar = () => {
	return (
		<motion.div
			initial={{ opacity: 0, y: -20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5 }}
			className="fixed top-0 left-0 right-0 z-30 bg-white bg-opacity-95 backdrop-blur-md border-b border-gray-200 h-16 lg:hidden"
		>
			<div className="h-full flex items-center justify-center px-4">
				<img 
					src="./PNG 2.png" 
					alt="Nhocas Way Logo" 
					className="h-12 w-auto"
					onLoad={() => console.log('Logo bar loaded successfully')}
					onError={(e) => {
						console.log('Logo bar failed to load:', e.target.src);
						e.target.style.display = 'none';
					}}
				/>
			</div>
		</motion.div>
	);
};

export default LogoBar;
