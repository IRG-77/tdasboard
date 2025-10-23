import { motion } from "framer-motion";
import jeepBuffalosImg from "/homep/jeep buffalos.png";
import redWaterSunsetImg from "/homep/red water sunset.png";
import zebrasImg from "/homep/zebras.jpg";
import birdImg from "/homep/bird.jpg";
import jeepPovImg from "/homep/jeep pov.png";
import cheetahSunriseImg from "/homep/cheetah sunrise.jpg";
import lionessImg from "/homep/lioness.jpg";
import rhinoeyeImg from "/homep/rhinoeye.jpg";

const HomePage = () => {
	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5 }}
			className="flex-1 overflow-y-auto w-full"
		>
			<div className="w-full">
				{/* Hero Section */}
				<div className="mb-4 text-center py-2 pt-8 lg:pt-2">
					<h1 className="text-4xl font-bold text-white mb-2 drop-shadow-lg lg:hidden">Africa. Crafted by Heart.</h1>
				</div>

				{/* Mobile: Stacked Cards | Desktop: Chess Board Style */}
				<div className="flex flex-col lg:grid lg:grid-cols-2 gap-0 w-full">
					{/* Section 1: Our Story - Picture First */}
					<motion.div
						initial={{ opacity: 0, x: -20 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.6, delay: 0.1 }}
						className="relative h-[300px] lg:h-[700px] overflow-hidden order-1 lg:order-none"
					>
						<img 
							src={zebrasImg} 
							alt="Zebras in the Wild" 
							className="w-full h-full object-cover"
						/>
					</motion.div>
					<motion.div
						initial={{ opacity: 0, x: 20 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.6, delay: 0.2 }}
						className="p-8 backdrop-blur-md lg:bg-gray-800 lg:bg-opacity-60 lg:backdrop-blur-md lg:p-8 flex items-center order-2 lg:order-none lg:border lg:border-gray-600 lg:rounded-none lg:shadow-none lg:mx-0"
					>
						<div>
							<h2 className="text-3xl font-bold text-white mb-6">Our Story</h2>
							<p className="text-white text-lg leading-relaxed mb-6">
								Founded by Irene Grilo in 1998 and rebranded as NHOCAS WAY, we are a boutique travel operator specialized in Africa.
							</p>
							<p className="text-white text-lg leading-relaxed mb-6">
								A fourth-generation African, Irene is an ecologist, conservationist, and environmentalist.
							</p>
							<p className="text-white text-lg leading-relaxed">
								Though her travels have taken her around the world, Africa — with its wild spirit, unique wildlife, and untamed beauty — remains her home and her lifelong passion.
							</p>
						</div>
					</motion.div>

					{/* Section 2: Travel with Purpose - Text First */}
					<motion.div
						initial={{ opacity: 0, x: -20 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.6, delay: 0.3 }}
						className="p-8 backdrop-blur-md lg:bg-gray-800 lg:bg-opacity-60 lg:backdrop-blur-md lg:p-8 flex items-center order-4 lg:order-none lg:border lg:border-gray-600 lg:rounded-none lg:shadow-none lg:mx-0"
					>
						<div>
							<h2 className="text-3xl font-bold text-white mb-6">Travel with Purpose and Depth</h2>
							<p className="text-white text-lg leading-relaxed mb-6">
								A journey to Africa deserves more than an off-the-shelf package.
							</p>
							<p className="text-white text-lg leading-relaxed mb-6">
								Each NHOCAS WAY experience is personally designed from the ground up, around you — your interests, your pace, your rhythm.
							</p>
							<p className="text-white text-lg leading-relaxed">
								Whether your passion lies in wildlife, photography, walking safaris, or cultural encounters, every detail is curated to immerse you in the heart and soul of the continent.
							</p>
						</div>
					</motion.div>
					<motion.div
						initial={{ opacity: 0, x: 20 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.6, delay: 0.4 }}
						className="relative h-[300px] lg:h-[700px] overflow-hidden order-3 lg:order-none"
					>
						<img 
							src={jeepBuffalosImg} 
							alt="Safari Jeep with Buffalo Herd" 
							className="w-full h-full object-cover"
						/>
					</motion.div>

					{/* Section 3: Guided by Knowledge - Picture First */}
					<motion.div
						initial={{ opacity: 0, x: -20 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.6, delay: 0.5 }}
						className="relative h-[300px] lg:h-[700px] overflow-hidden order-5 lg:order-none"
					>
						<img 
							src={lionessImg} 
							alt="Lioness in the Wild" 
							className="w-full h-full object-cover"
						/>
					</motion.div>
					<motion.div
						initial={{ opacity: 0, x: 20 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.6, delay: 0.6 }}
						className="p-8 backdrop-blur-md lg:bg-gray-800 lg:bg-opacity-60 lg:backdrop-blur-md lg:p-8 flex items-center order-6 lg:order-none lg:border lg:border-gray-600 lg:rounded-none lg:shadow-none lg:mx-0"
					>
						<div>
							<h2 className="text-3xl font-bold text-white mb-6">Guided by Knowledge, Grounded in Respect</h2>
							<p className="text-white text-lg leading-relaxed mb-6">
								Our guides are far more than drivers — they are naturalists, storytellers, and gracious hosts who know the land like few others.
							</p>
							<p className="text-white text-lg leading-relaxed mb-6">
								We uphold the highest ethical standards: maintaining safe distances, following a strict no-contact policy, never chasing wildlife, and always respecting their comfort zones.
							</p>
							<p className="text-white text-lg leading-relaxed">
								We go beyond the "Big Five" and box-ticking safaris. Africa's wilderness holds infinite secrets — its landscapes, its people, its rhythm — waiting to be discovered with authenticity and respect.
							</p>
						</div>
					</motion.div>

					{/* Section 4: Sustainable Journeys - Text First */}
					<motion.div
						initial={{ opacity: 0, x: -20 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.6, delay: 0.7 }}
						className="p-8 backdrop-blur-md lg:bg-gray-800 lg:bg-opacity-60 lg:backdrop-blur-md lg:p-8 flex items-center order-8 lg:order-none lg:border lg:border-gray-600 lg:rounded-none lg:shadow-none lg:mx-0"
					>
						<div>
							<h2 className="text-3xl font-bold text-white mb-6">Sustainable Journeys. Positive Impact.</h2>
							<p className="text-white text-lg leading-relaxed mb-6">
								We take exceptional care in choosing truly eco-friendly lodges, low-impact travel options, and experiences that directly benefit local communities.
							</p>
							<p className="text-white text-lg leading-relaxed">
								Every journey we design supports and respects the land, its wildlife, and its people — leaving nothing behind but footprints.
							</p>
						</div>
					</motion.div>
					<motion.div
						initial={{ opacity: 0, x: 20 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.6, delay: 0.8 }}
						className="relative h-[300px] lg:h-[700px] overflow-hidden order-7 lg:order-none"
					>
						<img 
							src={birdImg} 
							alt="African Bird" 
							className="w-full h-full object-cover"
						/>
					</motion.div>

					{/* Section 5: Nature Sets the Pace - Picture First */}
					<motion.div
						initial={{ opacity: 0, x: -20 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.6, delay: 0.9 }}
						className="relative h-[300px] lg:h-[700px] overflow-hidden order-9 lg:order-none"
					>
						<img 
							src={redWaterSunsetImg} 
							alt="Red Water Sunset" 
							className="w-full h-full object-cover"
						/>
					</motion.div>
					<motion.div
						initial={{ opacity: 0, x: 20 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.6, delay: 1.0 }}
						className="p-8 backdrop-blur-md lg:bg-gray-800 lg:bg-opacity-60 lg:backdrop-blur-md lg:p-8 flex items-center order-10 lg:order-none lg:border lg:border-gray-600 lg:rounded-none lg:shadow-none lg:mx-0"
					>
						<div>
							<h2 className="text-3xl font-bold text-white mb-6">Nature Sets the Pace</h2>
							<p className="text-white text-lg leading-relaxed mb-6">
								We understand that comfort matters.
							</p>
							<p className="text-white text-lg leading-relaxed mb-6">
								That's why we favor lodges and camps where nature sets the rhythm — places that breathe with the wilderness, not against it.
							</p>
							<p className="text-white text-lg leading-relaxed">
								Our itineraries are carefully crafted off the beaten path, leaving a positive mark on the landscapes and communities we visit.
							</p>
						</div>
					</motion.div>

				</div>

				{/* Section 6: Call to Action - Text First */}
				<div className="flex flex-col lg:grid lg:grid-cols-2 gap-0 w-full">
					<motion.div
						initial={{ opacity: 0, x: -20 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.6, delay: 1.1 }}
						className="p-8 backdrop-blur-md lg:bg-gray-800 lg:bg-opacity-60 lg:backdrop-blur-md lg:p-8 flex items-center order-2 lg:order-none lg:border lg:border-gray-600 lg:rounded-none lg:shadow-none lg:mx-0"
					>
						<div>
							<h2 className="text-3xl font-bold text-white mb-6">Ready for Your Next Journey?</h2>
							<p className="text-white text-lg leading-relaxed mb-6">
								Discover Africa with NHOCAS WAY — deeply, ethically, and from the heart.
							</p>
							<p className="text-white text-lg leading-relaxed">
								Let us craft your perfect African adventure, tailored to your dreams and designed with the expertise that comes from a lifetime of passion for this extraordinary continent.
							</p>
						</div>
					</motion.div>
					<motion.div
						initial={{ opacity: 0, x: 20 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.6, delay: 1.2 }}
						className="relative h-[300px] lg:h-[700px] overflow-hidden order-1 lg:order-none"
					>
						<img 
							src={rhinoeyeImg} 
							alt="Rhino Eye" 
							className="w-full h-full object-cover"
						/>
					</motion.div>
				</div>
			</div>
		</motion.div>
	);
};

export default HomePage;
