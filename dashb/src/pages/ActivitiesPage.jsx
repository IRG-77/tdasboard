import { motion } from "framer-motion";
import dolphinVideo from "/Pictures/dolphin video.mp4";
import vehicleImage from "/Pictures/Vhicle3 (1).jpg";
import turtleImage from "/Pictures/turtle.jpg";
import boatImage from "/Pictures/barco.jpg";
import divingImage from "/Pictures/diving.jpg";
import snorkelingImage from "/Pictures/snorkling.jpg";
import flightImage from "/Pictures/flight.jpg";
import dolphinsImage from "/Pictures/dolphins1.jpg";
import spaImage from "/Pictures/spa.jpg";
import trailImage from "/Pictures/trail.jpg";
import { Car, Footprints, Anchor, Fish, LifeBuoy, Heart, Egg, Plane, Sparkles } from "lucide-react";

const ActivitiesPage = () => {
    const activities = [
        {
            id: 1,
            name: "Game Drives 4x4",
            icon: Car,
            color: "text-orange-400",
            bgColor: "bg-orange-400",
            description: "Explore wildlife-rich areas on expertly guided 4x4 game drives.",
            duration: "Half / Full Day",
            difficulty: "Easy"
        },
        {
            id: 2,
            name: "Walks",
            icon: Footprints,
            color: "text-orange-400",
            bgColor: "bg-orange-400",
            description: "Guided bush walks focusing on tracking, ecology and safety.",
            duration: "2–4 Hours",
            difficulty: "Moderate"
        },
        {
            id: 3,
            name: "Water Activities",
            icon: Anchor,
            color: "text-orange-400",
            bgColor: "bg-orange-400",
            description: "Mokoro, motor boat and pontoon outings across serene waterways.",
            duration: "2–3 Hours",
            difficulty: "Easy"
        },
        {
            id: 4,
            name: "Diving",
            icon: Fish,
            color: "text-orange-400",
            bgColor: "bg-orange-400",
            description: "Crystal-clear dives with diverse reefs and exceptional visibility.",
            duration: "Half Day",
            difficulty: "Moderate"
        },
        {
            id: 5,
            name: "Snorkeling",
            icon: LifeBuoy,
            color: "text-orange-400",
            bgColor: "bg-orange-400",
            description: "Gentle snorkels over shallow reefs teeming with marine life.",
            duration: "1–2 Hours",
            difficulty: "Easy"
        },
        {
            id: 6,
            name: "Swim with Wild Dolphins",
            icon: Heart,
            color: "text-orange-400",
            bgColor: "bg-orange-400",
            description: "Ethical encounters with dolphins led by experienced marine guides.",
            duration: "1–2 Hours",
            difficulty: "Easy"
        },
        {
            id: 7,
            name: "Turtle Hatchings",
            icon: Egg,
            color: "text-orange-400",
            bgColor: "bg-orange-400",
            description: "Observe turtles nesting and hatchlings making their first ocean journey.",
            duration: "Seasonal",
            difficulty: "Easy"
        },
        {
            id: 8,
            name: "Scenic Flights",
            icon: Plane,
            color: "text-orange-400",
            bgColor: "bg-orange-400",
            description: "Helicopter and small aircraft tours offering breathtaking aerial views of the landscape.",
            duration: "30-60 Minutes",
            difficulty: "Easy"
        },
        {
            id: 9,
            name: "Spa & Wellness",
            icon: Sparkles,
            color: "text-orange-400",
            bgColor: "bg-orange-400",
            description: "Relaxing massages and spa treatments to rejuvenate after your adventures.",
            duration: "1-2 Hours",
            difficulty: "Easy"
        }
    ];

	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5 }}
			className="flex-1 p-4 lg:p-8 overflow-y-auto"
		>
			<div className="max-w-7xl mx-auto">
			<div className="mb-8 mt-6 lg:mt-[82px] relative z-10">
				<h1 className="text-4xl font-bold text-white mb-4 drop-shadow-lg">Activities & Experiences</h1>
			</div>

			{/* Client intro section with video background */}
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5 }}
				className="mb-8 relative rounded-lg overflow-hidden border border-gray-700"
			>
				<video
					className="absolute inset-0 w-full h-full object-cover"
					autoPlay
					muted
					loop
					playsInline
					src={dolphinVideo}
				/>
				{/* Dark overlay for readability (stronger on small screens) */}
				<div className="absolute inset-0 bg-gray-900/70 lg:bg-gray-900/50" />
				<div className="relative z-10 p-6">
					<h2 className="text-2xl font-semibold text-white mb-3">Where We Take the Most Pride</h2>
					<p className="text-white md:text-gray-300 mb-4">
						Excellent, ethical guides and professionals will accompany you at all times, be it in:
					</p>
					<ul className="list-disc list-inside space-y-2 text-white md:text-gray-300 mb-6">
						<li>Game Drives 4x4</li>
						<li>Walks</li>
						<li>Water activities (mokoro; motor boat; pontoon)</li>
						<li>Diving</li>
						<li>Snorkeling</li>
						<li>Swimming with wild dolphins</li>
						<li>Observing turtles hatching their eggs on a beach</li>
						<li>Scenic flights (helicopter and small aircraft)</li>
						<li>Spa and wellness treatments</li>
					</ul>
					<p className="text-white md:text-gray-300">
						Africa is one of the best destinations for beach where you will find pristine and secluded beaches. An array of rare species of marine wildlife. The perfect combination to your safari.
					</p>
				</div>
			</motion.div>

				{/* Activities grid */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
					{activities.map((activity, index) => (
						<motion.div
							key={activity.id}
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: index * 0.1 }}
							whileHover={{ scale: 1.05 }}
							className={`rounded-lg p-6 border border-gray-700 relative overflow-hidden min-h-[180px] lg:min-h-[225px] flex flex-col ${
								activity.id === 1 || activity.id === 2 || activity.id === 3 || activity.id === 4 || activity.id === 5 || activity.id === 6 || activity.id === 7 || activity.id === 8 || activity.id === 9
									? 'bg-gray-800 bg-opacity-30 backdrop-blur-md' 
									: 'bg-gray-800 bg-opacity-50 backdrop-blur-md'
							}`}
						>
                            {(activity.id === 1 || activity.id === 2 || activity.id === 3 || activity.id === 4 || activity.id === 5 || activity.id === 6 || activity.id === 7 || activity.id === 8 || activity.id === 9) && (
								<>
                                    <img 
                                        src={
                                            activity.id === 1 
                                                ? vehicleImage 
                                                : activity.id === 2
                                                    ? trailImage
                                                : activity.id === 3 
                                                    ? boatImage 
                                                : activity.id === 4 
                                                    ? divingImage 
                                                : activity.id === 5
                                                    ? snorkelingImage
                                                : activity.id === 6
                                                    ? dolphinsImage
                                                : activity.id === 8
                                                    ? flightImage
                                                : activity.id === 9
                                                    ? spaImage
                                                    : turtleImage
                                        }
                                        alt={activity.id === 1 ? "Game Drive Vehicle" : activity.id === 2 ? "Walks" : activity.id === 3 ? "Water Activities" : activity.id === 4 ? "Diving" : activity.id === 5 ? "Snorkeling" : activity.id === 6 ? "Swim with Dolphins" : activity.id === 8 ? "Scenic Flights" : activity.id === 9 ? "Spa & Wellness" : "Turtle Hatching"} 
										className="absolute inset-0 w-full h-full object-cover z-0"
									/>
									<div className="absolute inset-0 bg-gray-900/60 z-10"></div>
								</>
							)}
							<div className={`flex items-center mb-4 ${(activity.id === 1 || activity.id === 2 || activity.id === 3 || activity.id === 4 || activity.id === 5 || activity.id === 6 || activity.id === 7 || activity.id === 8 || activity.id === 9) ? 'relative z-20' : ''}`}>
								<activity.icon className={`${activity.color} mr-4`} size={24} />
								<h3 className="text-xl font-semibold text-white">{activity.name}</h3>
							</div>

							<div className="flex-1"></div>

							<p className={`text-gray-300 ${(activity.id === 1 || activity.id === 2 || activity.id === 3 || activity.id === 4 || activity.id === 5 || activity.id === 6 || activity.id === 7 || activity.id === 8 || activity.id === 9) ? 'relative z-20' : ''}`}>{activity.description}</p>
						</motion.div>
					))}
				</div>

                {/* Packages section removed per request */}
			</div>
		</motion.div>
	);
};

export default ActivitiesPage;
