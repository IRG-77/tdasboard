import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import barkImage from "/Pictures/BARK.jpg";
import monkeyRasKutaniImage from "/Pictures/Monkey ras kutani.jpg";
import a1Img from "/accommodations/a-1.jpg";
import a2Img from "/accommodations/a-2.png";
import a3Img from "/accommodations/a-3.png";
import a20Img from "/accommodations/a-20.png";
import a4Img from "/accommodations/a-4.png";
import a5Img from "/accommodations/a-5.png";
import a6Img from "/accommodations/a-6.png";
import a7Img from "/accommodations/a-7.jpg";
import a8Img from "/accommodations/a-8.jpg";
import a9Img from "/accommodations/a-9.jpg";
import a10Img from "/accommodations/a-10.jpg";
import a11Img from "/accommodations/a-11.png";
import a12Img from "/accommodations/a-12.png";
import a13Img from "/accommodations/a-13.png";
import a14Img from "/accommodations/a-14.png";
import a15Img from "/accommodations/a-15.jpg";
import a16Img from "/accommodations/a-16.png";
import a17Img from "/accommodations/a-17.jpg";
import a18Img from "/accommodations/a-18.jpg";
import a19Img from "/accommodations/a-19.jpg";

const AccommodationsPage = () => {
	const [currentIndex, setCurrentIndex] = useState(0);

	// All 20 accommodation images imported as modules for high quality
	const images = [
		a1Img,
		a2Img,
		a3Img,
		a20Img,
		a4Img,
		a5Img,
		a6Img,
		a7Img,
		a8Img,
		a9Img,
		a10Img,
		a11Img,
		a12Img,
		a13Img,
		a14Img,
		a15Img,
		a16Img,
		a17Img,
		a18Img,
		a19Img
	];

	// Auto-scroll effect
	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
		}, 3000); // Change image every 3 seconds

		return () => clearInterval(interval);
	}, [images.length]);

	const accommodationTypes = [
		{
			title: "Fixed Tented Camps",
			description: "Don't let the word 'tent' fool you - these are luxurious permanent structures with all modern amenities."
		},
		{
			title: "Lodges",
			description: "Traditional African lodges offering comfort and authenticity in stunning locations."
		},
		{
			title: "Mobile Tents",
			description: "From Hemingway-style classic tents to modern dome tents, perfect for the adventurous spirit."
		},
		{
			title: "Sky Beds",
			description: "Sleep under the African sky on raised platforms with full amenities and breathtaking views."
		},
		{
			title: "Gourmet Meals",
			description: "Experience exceptional cuisine prepared with fresh, local ingredients and international flair."
		},
		{
			title: "Spa Treatments",
			description: "Relax and rejuvenate with professional spa treatments in the heart of the African wilderness."
		}
	];

	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5 }}
			className="flex-1 p-4 lg:p-8 overflow-y-auto lg:pt-24"
		>
			<div className="max-w-7xl mx-auto">
				<div className="mb-8 mt-6 lg:mt-6">
					<h1 className="text-4xl font-bold text-white mb-4 drop-shadow-lg">Accommodations</h1>
					<p className="text-white text-lg font-medium drop-shadow-lg">
						Discover our carefully selected accommodations in the heart of Africa.
					</p>
				</div>

				{/* Auto-scrollable Image Gallery */}
				<div className="relative mb-8">
					<div className="overflow-hidden rounded-lg border border-gray-700">
						<motion.div
							className="flex"
							animate={{ x: -currentIndex * 100 + "%" }}
							transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
						>
							{images.map((image, index) => (
								<div key={index} className="w-full flex-shrink-0">
									<div className="relative h-[450px] lg:h-[700px]">
										<img
											src={image}
											alt={`Accommodation ${index + 1}`}
											className="w-full h-full object-cover"
											style={{ imageRendering: 'high-quality' }}
											onLoad={() => console.log('Image loaded successfully:', image)}
											onError={(e) => {
												console.log('Image failed to load:', image);
												// Fallback to a known working image
												e.target.src = '/Pictures/chimps.jpg';
											}}
										/>
										<div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
										{/* <div className="absolute bottom-4 left-4 text-white">
											<h3 className="text-xl font-semibold">Accommodation {index + 1}</h3>
											<p className="text-sm opacity-90">Luxury African Experience</p>
										</div> */}
									</div>
								</div>
							))}
						</motion.div>
					</div>

					{/* Navigation Dots */}
					<div className="flex justify-center mt-4 space-x-2">
						{images.map((_, index) => (
							<button
								key={index}
								onClick={() => setCurrentIndex(index)}
								className={`w-3 h-3 rounded-full transition-colors ${
									index === currentIndex ? 'bg-orange-400' : 'bg-gray-600'
								}`}
							/>
						))}
					</div>

					{/* Navigation Arrows */}
					<button
						onClick={() => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)}
						className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
					>
						<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
						</svg>
					</button>
					<button
						onClick={() => setCurrentIndex((prev) => (prev + 1) % images.length)}
						className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
					>
						<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
						</svg>
					</button>
				</div>

				{/* Accommodation Types Grid */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
					{accommodationTypes.map((type, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: index * 0.1 }}
							whileHover={{ scale: 1.02 }}
							className="bg-gray-800 bg-opacity-50 backdrop-blur-md rounded-lg p-6 border border-gray-700 relative overflow-hidden"
							style={{
								backgroundImage: `url(${barkImage})`,
								backgroundSize: 'cover',
								backgroundPosition: 'center',
								backgroundRepeat: 'no-repeat'
							}}
						>
							<div className="absolute inset-0 bg-gray-900/60 rounded-lg"></div>
							<div className="relative z-10">
								<h3 className="text-xl font-semibold text-white mb-3">{type.title}</h3>
								<p className="text-gray-300 leading-relaxed">{type.description}</p>
							</div>
						</motion.div>
					))}
				</div>

				{/* Monkey Ras Kutani Image */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.8 }}
					className="space-y-4"
				>
					{/* Funny text - outside on small screens, inside on large screens */}
					<div className="lg:hidden">
						<div className="bg-black/70 backdrop-blur-sm rounded-lg p-4 border border-orange-400/30">
							<h3 className="text-orange-400 font-bold text-lg mb-2">Fun Fact</h3>
							<p className="text-white text-sm leading-relaxed">
								Our resident monkeys are known to "borrow" items from your accommodation. 
								They have excellent taste in sunglasses! 😎
							</p>
						</div>
					</div>

					<div className="bg-gray-800 bg-opacity-50 backdrop-blur-md rounded-lg overflow-hidden border border-gray-700 relative">
						<img
							src={monkeyRasKutaniImage}
							alt="Monkey Ras Kutani"
							className="w-full h-64 lg:h-[500px] object-cover"
							onLoad={() => console.log('Monkey Ras Kutani image loaded successfully')}
							onError={(e) => {
								console.log('Monkey Ras Kutani image failed to load');
								e.target.src = '/Pictures/chimps.jpg';
							}}
						/>
						{/* Funny text overlay - only visible on large screens */}
						<div className="hidden lg:block absolute top-4 left-4 right-4 z-10">
							<div className="bg-black/70 backdrop-blur-sm rounded-lg p-4 border border-orange-400/30">
								<h3 className="text-orange-400 font-bold text-lg mb-2">Fun Fact</h3>
								<p className="text-white text-sm leading-relaxed">
									Our resident monkeys are known to "borrow" items from your accommodation. 
									They have excellent taste in sunglasses! 😎
								</p>
							</div>
						</div>
					</div>
				</motion.div>
			</div>
		</motion.div>
	);
};

export default AccommodationsPage;