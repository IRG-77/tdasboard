import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import logoImage from "/PNG 2.png";
import instagramIcon from "/instagram.png";

const Footer = () => {
	return (
		<motion.footer
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5 }}
			className="bg-gray-900 bg-opacity-95 backdrop-blur-md border-t border-gray-700 -mt-0.5 lg:mt-0"
		>
			<div className="max-w-7xl mx-auto px-4 py-8">
				<div className="flex flex-col items-center space-y-3">
					{/* Logo */}
					<Link to="/" className="flex-shrink-0">
						<motion.img
							src={logoImage}
							alt="Nhocas Way Logo"
							className="h-16 w-auto cursor-pointer"
							whileHover={{ scale: 1.05 }}
							transition={{ duration: 0.2 }}
							onLoad={() => console.log('Footer logo loaded successfully')}
							onError={(e) => {
								console.log('Footer logo failed to load:', e.target.src);
							}}
						/>
					</Link>

					{/* Slogan and Instagram */}
					<div className="text-center space-y-1">
						<p className="text-orange-400 text-lg font-medium">
							The Journey Within and Beyond
						</p>
						
						{/* Instagram App Logo */}
						<div className="flex justify-center">
							<motion.a
								href="https://www.instagram.com/nhocasway/"
								target="_blank"
								rel="noopener noreferrer"
								whileHover={{ scale: 1.1 }}
								whileTap={{ scale: 0.95 }}
								transition={{ duration: 0.2 }}
							>
								<img 
									src={instagramIcon} 
									alt="Follow us on Instagram" 
									className="w-20 h-20 filter brightness-0 invert hover:opacity-80 transition-opacity duration-300"
								/>
							</motion.a>
						</div>
					</div>

					{/* Copyright and Creator */}
					<div className="text-center space-y-2 -mt-1">
						<p className="text-gray-400 text-sm">
							© 2025 Nhocas Way. All rights reserved.
						</p>
						<p className="text-gray-400 text-sm">
							All photographs © <span className="text-orange-400 font-medium">Irene Grilo</span>. All rights reserved.
						</p>
						<p className="text-gray-400 text-sm">
							Created by <span className="text-orange-400 font-medium">Irene Grilo Jr</span>
						</p>
						<p className="text-gray-400 text-sm">
							<a 
								href="mailto:irene.grltech@gmail.com" 
								className="text-orange-400 hover:text-orange-300 transition-colors"
							>
								irene.grltech@gmail.com
							</a>
						</p>
					</div>
				</div>
			</div>
		</motion.footer>
	);
};

export default Footer;
