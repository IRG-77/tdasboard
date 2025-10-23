import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import logoImage from "/PNG 2.png";

const NAVIGATION_ITEMS = [
	{
		name: "Home",
		color: "#F59E0B",
		href: "/",
	},
	{ name: "Locations", color: "#F59E0B", href: "/location" },
	{ name: "Accommodations", color: "#F59E0B", href: "/accommodations" },
	{ name: "Activities", color: "#F59E0B", href: "/activities" },
	{ name: "Contacts", color: "#F59E0B", href: "/contacts" },
];

const TopNavigation = () => {
	const location = useLocation();
	const [hasNavigated, setHasNavigated] = useState(false);

	// Track if user has navigated away from initial load
	useEffect(() => {
		if (location.pathname !== '/') {
			setHasNavigated(true);
		}
	}, [location.pathname]);

	return (
		<motion.div
			initial={{ opacity: 0, y: -20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5 }}
			className="fixed top-0 left-0 right-0 z-20 bg-white bg-opacity-95 backdrop-blur-md border-b border-gray-200 h-32"
		>
			<div className="max-w-7xl mx-auto px-4 h-full">
				<div className="flex items-center justify-between h-full">
					{/* Logo */}
					<Link to="/" className="flex-shrink-0 h-full flex items-center">
						<motion.img 
							src={logoImage} 
							alt="Nhocas Way Logo" 
							className="h-full w-auto max-h-28 cursor-pointer"
							whileHover={{ scale: 1.05 }}
							transition={{ duration: 0.2 }}
							onLoad={() => console.log('Logo loaded successfully')}
							onError={(e) => {
								console.log('Logo failed to load:', e.target.src);
							}}
						/>
					</Link>
					
					{/* Navigation */}
					<nav className="flex space-x-8">
					{NAVIGATION_ITEMS.map((item, index) => {
						// Don't show home as active on initial load
						const isActive = location.pathname === item.href && (item.href !== '/' || hasNavigated);
						
						return (
							<Link key={item.href} to={item.href}>
								<motion.div
									initial={{ opacity: 0, y: -10 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.3, delay: index * 0.1 }}
									whileHover={{ scale: 1.05 }}
									className={`relative px-6 py-3 rounded-lg transition-all duration-150 ${
										isActive 
											? 'bg-gray-100 shadow-lg' 
											: 'hover:bg-gray-100 hover:shadow-md'
									}`}
								>
									<motion.span
										className={`text-lg font-semibold transition-colors duration-300 ${
											isActive ? 'text-gray-900' : 'text-gray-600 hover:text-gray-900'
										}`}
										style={{ 
											color: isActive ? item.color : undefined
										}}
									>
										{item.name}
									</motion.span>
									
									{isActive && (
										<motion.div
											layoutId="activeIndicator"
											className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-300 to-transparent opacity-20 rounded-lg"
											initial={false}
											transition={{ type: "spring", stiffness: 500, damping: 30 }}
										/>
									)}
								</motion.div>
							</Link>
						);
					})}
					</nav>
				</div>
			</div>
		</motion.div>
	);
};

export default TopNavigation;
