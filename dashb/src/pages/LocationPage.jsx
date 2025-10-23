import { motion } from "framer-motion";
import { MapPin, Navigation, Clock, Wifi, Plane, Tent, Building, Waves, Sun, Home, Crown } from "lucide-react";
import { useEffect, useState } from "react";
import rainbowImg from "/locations/Rainbow.png";

// Import all location images in folder order
import c1Img from "/locations/c-1.png";
import c10Img from "/locations/c-10.jpg";
import c11Img from "/locations/c-11.png";
import c12Img from "/locations/c-12.png";
import c13Img from "/locations/c-13.png";
import c14Img from "/locations/c-14.jpg";
import c15Img from "/locations/c-15.jpg";
import c16Img from "/locations/c-16.jpg";
import c2Img from "/locations/c-2.png";
import c3Img from "/locations/c-3.png";
import c4Img from "/locations/c-4.jpg";
import c5Img from "/locations/c-5.jpg";
import c5_5Img from "/locations/c-5.5.jpg";
import c6Img from "/locations/c-6.5.jpg";
import c7Img from "/locations/c-7.jpg";
import c8Img from "/locations/c-8.png";
import c8_5Img from "/locations/c-8.5.png";
import c9Img from "/locations/c-9.png";
import c17Img from "/locations/c-17.jpg";
import c18Img from "/locations/c-18.jpg";

const LocationPage = () => {
	const [currentIndex, setCurrentIndex] = useState(0);

	// Location showcase images in numerical order
	const locationImages = [
		c1Img,                  // c-1.png
		c2Img,                  // c-2.png
		c3Img,                  // c-3.png
		c4Img,                  // c-4.jpg
		c5Img,                  // c-5.jpg
		c5_5Img,                // c-5.5.jpg
		c6Img,                  // c-6.5.jpg
		c7Img,                  // c-7.jpg
		c8Img,                  // c-8.png
		c8_5Img,                // c-8.5.png
		c9Img,                  // c-9.png
		c10Img,                 // c-10.jpg
		c11Img,                 // c-11.png
		c12Img,                 // c-12.png
		c13Img,                 // c-13.png
		c14Img,                 // c-14.jpg
		c15Img,                 // c-15.jpg
		c16Img,                 // c-16.jpg
		c17Img,                 // c-17.jpg
		c18Img                  // c-18.jpg
	];

	// Auto-scroll effect
	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentIndex((prevIndex) => (prevIndex + 1) % locationImages.length);
		}, 4000); // Change image every 4 seconds

		return () => clearInterval(interval);
	}, [locationImages.length]);

	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5 }}
			className="flex-1 p-4 lg:p-8 overflow-y-auto"
		>
			<div className="max-w-7xl mx-auto">
				<div className="mb-8 pt-8 lg:pt-[80px]">
					<h1 className="text-4xl font-bold text-white mb-4 drop-shadow-lg">Locations & Safari Types</h1>
					<p className="text-gray-200 text-lg drop-shadow-md">
						Discover our diverse safari experiences and the locations we work with across Africa.
					</p>
				</div>

				{/* Auto-scrollable Location Gallery */}
				<div className="relative mb-12">
					<div className="overflow-hidden rounded-lg border border-gray-700">
						<motion.div
							className="flex"
							animate={{ x: -currentIndex * 100 + "%" }}
							transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
						>
							{locationImages.map((image, index) => (
								<div key={index} className="w-full flex-shrink-0">
									<div className="relative h-[400px] lg:h-[600px]">
										<img
											src={image}
											alt={`Location ${index + 1}`}
											className="w-full h-full object-cover"
											style={{ 
												imageRendering: '-webkit-optimize-contrast'
											}}
											onLoad={() => console.log('Location image loaded successfully:', index + 1)}
											onError={(e) => {
												console.log('Location image failed to load:', index + 1);
												e.target.src = '/Pictures/chimps.jpg';
											}}
										/>
										<div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
										{/* <div className="absolute bottom-6 left-6 text-white">
											<h3 className="text-2xl font-bold mb-2 drop-shadow-lg">African Destinations</h3>
											<p className="text-lg drop-shadow-md">Experience the beauty of Africa</p>
										</div> */}
									</div>
								</div>
							))}
						</motion.div>
					</div>

					{/* Navigation Dots */}
					<div className="flex justify-center mt-6 space-x-3">
						{locationImages.map((_, index) => (
							<button
								key={index}
								onClick={() => setCurrentIndex(index)}
								className={`w-4 h-4 rounded-full transition-colors ${
									index === currentIndex ? 'bg-orange-400' : 'bg-gray-600'
								}`}
							/>
						))}
					</div>

					{/* Navigation Arrows */}
					<button
						onClick={() => setCurrentIndex((prev) => (prev - 1 + locationImages.length) % locationImages.length)}
						className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-colors"
					>
						<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
						</svg>
					</button>
					<button
						onClick={() => setCurrentIndex((prev) => (prev + 1) % locationImages.length)}
						className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-colors"
					>
						<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
						</svg>
					</button>
				</div>

				{/* Safari Types Section */}
				<div className="mb-12">
					<h2 className="text-3xl font-bold text-white mb-8 text-center drop-shadow-lg">Safari Types</h2>
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
						<motion.div
							initial={{ opacity: 0, x: -20 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.5, delay: 0.2 }}
							className="bg-gray-800 bg-opacity-50 backdrop-blur-md rounded-lg p-6 border border-gray-700"
						>
							<div className="flex items-center mb-4">
								<Crown className="text-yellow-400 mr-3" size={24} />
								<h3 className="text-2xl font-semibold text-white drop-shadow-md">High Luxury Safaris</h3>
							</div>
							<p className="text-gray-200 leading-relaxed drop-shadow-sm">
								Experience the ultimate in luxury safari accommodations with world-class service, 
								exclusive locations, and personalized experiences. From private villas to ultra-luxury 
								tented camps, indulge in the finest African safari experience.
							</p>
						</motion.div>

						<motion.div
							initial={{ opacity: 0, x: 20 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.5, delay: 0.4 }}
							className="bg-gray-800 bg-opacity-50 backdrop-blur-md rounded-lg p-6 border border-gray-700"
						>
							<div className="flex items-center mb-4">
								<Home className="text-orange-400 mr-3" size={24} />
								<h3 className="text-2xl font-semibold text-white drop-shadow-md">Lodge Safaris</h3>
							</div>
							<p className="text-gray-200 leading-relaxed drop-shadow-sm">
								Stay in comfortable, well-appointed lodges with modern amenities while exploring the wilderness. 
								Perfect for those who prefer the comfort of a permanent base with daily game drives and 
								evening relaxation in luxury accommodations.
							</p>
						</motion.div>

						<motion.div
							initial={{ opacity: 0, x: -20 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.5, delay: 0.6 }}
							className="bg-gray-800 bg-opacity-50 backdrop-blur-md rounded-lg p-6 border border-gray-700"
						>
							<div className="flex items-center mb-4">
								<Tent className="text-green-400 mr-3" size={24} />
								<h3 className="text-2xl font-semibold text-white drop-shadow-md">Mobile Safaris</h3>
							</div>
							<p className="text-gray-200 leading-relaxed drop-shadow-sm">
								Choose between participatory or non-participatory options. Our experienced ground team 
								accompanies you throughout your journey, setting up camp at each new location with 
								full ablution facilities. Immerse yourself in the authentic safari experience.
							</p>
						</motion.div>

						<motion.div
							initial={{ opacity: 0, x: 20 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.5, delay: 0.8 }}
							className="bg-gray-800 bg-opacity-50 backdrop-blur-md rounded-lg p-6 border border-gray-700"
						>
							<div className="flex items-center mb-4">
								<Plane className="text-blue-400 mr-3" size={24} />
								<h3 className="text-2xl font-semibold text-white drop-shadow-md">Fly-In Safaris</h3>
							</div>
							<p className="text-gray-200 leading-relaxed drop-shadow-sm">
								Experience seamless travel between destinations and camps via light aircraft or helicopter. 
								Perfect for maximizing your time in the wilderness while enjoying breathtaking aerial views 
								of the African landscape.
							</p>
						</motion.div>
					</div>
				</div>

				{/* Beach Destinations Section - Featured */}
				<div className="mb-12">
					<div className="text-center mb-8">
						<div className="flex items-center justify-center mb-4">
							<Waves className="text-cyan-400 mr-3 drop-shadow-lg" size={32} />
							<Sun className="text-yellow-400 drop-shadow-lg" size={32} />
						</div>
											<h2 className="text-4xl font-bold text-white mb-4 drop-shadow-lg">Relaxing Beach Destinations</h2>
											<p className="text-gray-200 text-lg drop-shadow-md">Unwind in paradise after your safari adventure</p>
					</div>
					
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.6 }}
						className="bg-gradient-to-r from-cyan-900/30 to-blue-900/30 backdrop-blur-md rounded-xl p-8 border border-cyan-500/30 max-w-5xl mx-auto relative overflow-hidden"
					>
						{/* Decorative elements */}
						<div className="absolute top-4 right-4 text-cyan-400/20">
							<Waves size={48} />
						</div>
						<div className="absolute bottom-4 left-4 text-yellow-400/20">
							<Sun size={40} />
						</div>
						
						<div className="relative z-10">
							<div className="flex items-center justify-center mb-6">
								<MapPin className="text-cyan-400 mr-3" size={28} />
													<h3 className="text-3xl font-bold text-white drop-shadow-lg">African Beach Paradise</h3>
							</div>
							<div className="text-center space-y-4">
													<p className="text-white text-xl leading-relaxed font-medium drop-shadow-md">
														Experience the ultimate relaxation at our exclusive African beach destinations. 
														Pristine white sand beaches, crystal-clear turquoise waters, and world-class 
														accommodations await you.
													</p>
								<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
									<div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
																				<h4 className="text-cyan-200 font-semibold mb-2 drop-shadow-md">🏖️ Pristine Beaches</h4>
																				<p className="text-gray-100 text-sm drop-shadow-sm">Unspoiled coastline with powdery white sand</p>
									</div>
									<div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
																				<h4 className="text-cyan-200 font-semibold mb-2 drop-shadow-md">🌊 Crystal Waters</h4>
																				<p className="text-gray-100 text-sm drop-shadow-sm">Perfect for snorkeling and diving adventures</p>
									</div>
									<div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
																				<h4 className="text-cyan-200 font-semibold mb-2 drop-shadow-md">🏨 Luxury Resorts</h4>
																				<p className="text-gray-100 text-sm drop-shadow-sm">Exclusive beachfront accommodations</p>
									</div>
								</div>
													<p className="text-gray-200 text-lg mt-6 italic drop-shadow-md">
														"Perfect for unwinding after your safari adventure - the ideal blend of adventure and relaxation"
													</p>
							</div>
						</div>
					</motion.div>
				</div>

				{/* City Stopovers Section */}
				<div className="mb-12">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.8 }}
						className="bg-gray-800 bg-opacity-50 backdrop-blur-md rounded-lg p-8 border border-gray-700 max-w-4xl mx-auto"
					>
						<div className="flex items-center justify-center mb-6">
							<Building className="text-purple-400 mr-3" size={28} />
							<h3 className="text-2xl font-semibold text-white drop-shadow-lg">City Stop-overs</h3>
						</div>
						<p className="text-gray-200 text-lg leading-relaxed text-center drop-shadow-md">
							Recharge from jet lag while exploring local architecture, rich history, and authentic cuisine. 
							Our city stop-overs provide the perfect transition between your international journey and 
							your African safari adventure.
						</p>
					</motion.div>
				</div>

				{/* Our Locations Section */}
				<div className="mt-8 mb-12">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: 1.0 }}
							className="bg-gray-800 bg-opacity-50 backdrop-blur-md rounded-lg p-6 border border-gray-700"
						>
							<div className="flex items-center mb-4">
								<MapPin className="text-orange-400 mr-3" size={24} />
								<h3 className="text-xl font-semibold text-white drop-shadow-md">African Destinations</h3>
							</div>
							<p className="text-gray-200 drop-shadow-sm">
								We work with premier locations across Africa, from the Serengeti to the Okavango Delta, 
								ensuring unforgettable safari experiences in the most spectacular settings.
							</p>
						</motion.div>

						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: 1.2 }}
							className="bg-gray-800 bg-opacity-50 backdrop-blur-md rounded-lg p-6 border border-gray-700"
						>
							<div className="flex items-center mb-4">
								<Navigation className="text-green-400 mr-3" size={24} />
								<h3 className="text-xl font-semibold text-white drop-shadow-md">Expert Guidance</h3>
							</div>
							<p className="text-gray-200 drop-shadow-sm">
								Our local expertise and partnerships ensure you experience the best of each destination, 
								with seamless logistics and authentic cultural encounters.
							</p>
						</motion.div>
					</div>
				</div>

				{/* All Destinations List */}
				<div className="mb-12">
					<h2 className="text-3xl font-bold text-white mb-8 text-center drop-shadow-lg">All Destinations</h2>
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 1.4 }}
						className="relative rounded-lg p-8 border border-gray-700 overflow-hidden"
						style={{
							backgroundImage: `url(${rainbowImg})`,
							backgroundSize: 'cover',
							backgroundPosition: 'center',
							backgroundRepeat: 'no-repeat'
						}}
					>
						{/* Background overlay for better text readability */}
						<div className="absolute inset-0 bg-black/40"></div>
						<div className="relative z-10">
						{/* Safari Destinations */}
						<div className="mb-8">
							<div className="flex items-center justify-center mb-6">
								<MapPin className="text-orange-400 mr-3" size={28} />
														<h3 className="text-2xl font-semibold text-white drop-shadow-md">Safari Destinations</h3>
							</div>
							<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
								{[
									"Botswana", "South Africa", "Ethiopia", "Tanzania", 
									"Malawi", "Uganda", "Mozambique", "Zambia", 
									"Namibia", "Zimbabwe", "Kenya", "Angola"
								].map((country, index) => (
									<motion.div
										key={country}
										initial={{ opacity: 0, scale: 0.9 }}
										animate={{ opacity: 1, scale: 1 }}
										transition={{ duration: 0.3, delay: 1.6 + (index * 0.05) }}
										className="bg-gray-700/50 backdrop-blur-sm rounded-lg p-3 border border-gray-600 text-center hover:bg-gray-600/50 transition-colors"
									>
										<span className="text-white font-medium">{country}</span>
									</motion.div>
								))}
							</div>
						</div>

						{/* Beach Destinations */}
						<div>
							<div className="flex items-center justify-center mb-6">
								<Waves className="text-cyan-400 mr-3" size={28} />
														<h3 className="text-2xl font-semibold text-white drop-shadow-md">Beach Destinations</h3>
							</div>
							<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
								{[
									"Zanzibar", "Seychelles", "Mauritius", "South Africa", "Mozambique", "Mombasa", "Lamu", "São Tomé Islands", "Cape Verde Islands"
								].map((location, index) => (
									<motion.div
										key={location}
										initial={{ opacity: 0, scale: 0.9 }}
										animate={{ opacity: 1, scale: 1 }}
										transition={{ duration: 0.3, delay: 2.0 + (index * 0.1) }}
										className="bg-cyan-700/30 backdrop-blur-sm rounded-lg p-4 border border-cyan-500/30 text-center hover:bg-cyan-600/40 transition-colors"
									>
										<span className="text-white font-semibold text-lg">{location}</span>
									</motion.div>
								))}
							</div>
						</div>
						</div>
					</motion.div>
				</div>
			</div>
		</motion.div>
	);
};

export default LocationPage;
