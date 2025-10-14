import { Menu } from "lucide-react";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

const SIDEBAR_ITEMS = [
	{
		name: "Home",
		color: "#6366f1",
		href: "/",
	},
	{ name: "Locations", color: "#8B5CF6", href: "/location" },
	{ name: "Accommodations", color: "#EC4899", href: "/accommodations" },
	{ name: "Activities", color: "#10B981", href: "/activities" },
	{ name: "Contacts", color: "#F59E0B", href: "/contacts" },
];

const Sidebar = () => {
	const [isSidebarOpen, setIsSidebarOpen] = useState(true);
	const location = useLocation();

	return (
		<motion.div
			className={`fixed top-0 left-0 z-40 transition-all duration-300 ease-in-out flex-shrink-0 lg:hidden ${
				isSidebarOpen ? "w-64" : "w-20"
			}`}
			animate={{ width: isSidebarOpen ? 256 : 80 }}
		>
			<div className={`bg-white bg-opacity-95 backdrop-blur-md p-4 flex flex-col border-r border-gray-200 ${
				isSidebarOpen ? "h-full" : "h-16"
			}`}>
				<motion.button
					whileHover={{ scale: 1.1 }}
					whileTap={{ scale: 0.9 }}
					onClick={() => setIsSidebarOpen(!isSidebarOpen)}
					className='p-2 rounded-full hover:bg-gray-100 transition-colors max-w-fit'
				>
					<Menu size={24} className="text-gray-900" />
				</motion.button>

				<nav className='mt-8 flex-grow'>
					{SIDEBAR_ITEMS.map((item) => (
						<Link key={item.href} to={item.href}>
							<motion.div className='flex items-center p-4 text-sm font-medium rounded-lg hover:bg-gray-100 transition-colors mb-2'>
								<AnimatePresence>
									{isSidebarOpen && (
										<motion.span
											className='whitespace-nowrap text-gray-600 hover:text-gray-900'
											style={{ color: location.pathname === item.href ? item.color : undefined }}
											initial={{ opacity: 0, width: 0 }}
											animate={{ opacity: 1, width: "auto" }}
											exit={{ opacity: 0, width: 0 }}
											transition={{ duration: 0.2, delay: 0.3 }}
										>
											{item.name}
										</motion.span>
									)}
								</AnimatePresence>
							</motion.div>
						</Link>
					))}
				</nav>
			</div>
		</motion.div>
	);
};
export default Sidebar;