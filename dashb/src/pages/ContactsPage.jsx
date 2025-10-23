import { motion } from "framer-motion";
import leopardGroomingImg from "../assets/leopard-grooming.jpg";
import chimpsImg from "../assets/chimps.jpg";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Phone, Mail, MapPin, Clock, MessageCircle, Send } from "lucide-react";

const ContactsPage = () => {
	const formRef = useRef(null);
	const [isSending, setIsSending] = useState(false);
	const [statusMessage, setStatusMessage] = useState("");
	const [errors, setErrors] = useState({});

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (!formRef.current) return;
		setIsSending(true);
		setStatusMessage("");
		// Basic client-side validation with inline warnings
		const data = new FormData(formRef.current);
		const userName = (data.get("user_name") || "").toString().trim();
		const userEmail = (data.get("user_email") || "").toString().trim();
		const userPhone = (data.get("user_phone") || "").toString().trim();
		const message = (data.get("message") || "").toString().trim();
		const nextErrors = {};
		if (!userName) nextErrors.user_name = "Name is required";
		if (!userEmail || !/^\S+@\S+\.\S+$/.test(userEmail)) nextErrors.user_email = "Valid email is required";
		if (!userPhone || !/^[+]?[- 0-9()]{7,20}$/.test(userPhone)) nextErrors.user_phone = "Valid phone is required";
		if (!message) nextErrors.message = "Message is required";
		setErrors(nextErrors);
		if (Object.keys(nextErrors).length > 0) {
			setIsSending(false);
			setStatusMessage("Please correct the highlighted fields.");
			return;
		}
		try {
			// Replace these with your actual EmailJS credentials:
			// 1) serviceId: from EmailJS Service settings
			// 2) templateId: from EmailJS Template  
			// 3) publicKey: from EmailJS Account -> API Keys
			await emailjs.sendForm(
				"service_bmgo41m",        // Your EmailJS service ID
				"template_gwkqbqj",       // Your EmailJS template ID
				formRef.current,
				"UrNM3_8ANsoQ9Zyb6"      // Your EmailJS public key
			);
			setStatusMessage("Message sent successfully. We'll get back to you soon.");
			formRef.current.reset();
		} catch (err) {
			setStatusMessage("Failed to send message. Please try again later.");
		} finally {
			setIsSending(false);
		}
	};
	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5 }}
			className="flex-1 p-4 lg:p-8 overflow-y-auto"
		>
			<div className="relative z-10 max-w-7xl mx-auto">
				<div className="mb-0">
					<h1 className="text-4xl font-bold text-white mb-4">Contact Us</h1>
				</div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8 lg:mt-14">
					{/* Leopard grooming image card - height of both contact cards combined */}
					<motion.div
						initial={{ opacity: 0, x: -20 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.5, delay: 0.1 }}
						className="bg-gray-800 bg-opacity-50 backdrop-blur-md rounded-lg overflow-hidden border border-gray-700 lg:row-span-2"
					>
						<img src={leopardGroomingImg} alt="Leopard Grooming" className="block w-full h-full object-cover" />
					</motion.div>
					{/* Contact Information */}
					<motion.div
						initial={{ opacity: 0, x: -20 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.5, delay: 0.2 }}
						className="space-y-6 lg:col-start-2"
					>
						<div className="bg-gray-800 bg-opacity-50 backdrop-blur-md rounded-lg p-6 border border-gray-700">
							<div className="space-y-6">
								<div>
									<h2 className="text-2xl font-semibold text-white mb-2">Phone</h2>
									<div className="flex items-center">
                                    <Phone className="text-orange-400 mr-3" size={20} />
										<a href="tel:+27647310867" className="text-white text-lg hover:text-orange-400 transition-colors">+27 64 731 0867</a>
									</div>
								</div>
								<div>
									<h2 className="text-2xl font-semibold text-white mb-2">Email</h2>
									<div className="flex items-center">
                                    <Mail className="text-orange-400 mr-3" size={20} />
										<a href="mailto:info@nhocasway.com" className="text-white hover:text-orange-400 transition-colors">info@nhocasway.com</a>
									</div>
								</div>
							</div>
						</div>

						{/* Removed Address and Business Hours as requested */}
					</motion.div>

					{/* Contact Form */}
					<motion.div
						initial={{ opacity: 0, x: 20 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.5, delay: 0.4 }}
						className="bg-gray-800 bg-opacity-50 backdrop-blur-md rounded-lg p-6 border border-gray-700 lg:col-start-2"
					>
					<div className="flex items-center mb-6">
                            <MessageCircle className="text-orange-400 mr-3" size={24} />
							<h2 className="text-2xl font-semibold text-white">Send us a Message</h2>
						</div>

					<form ref={formRef} onSubmit={handleSubmit} className="space-y-4" netlify name="contact">
						<input type="hidden" name="form-name" value="contact" />
						<div>
								<label className="block text-gray-300 text-sm font-medium mb-2">
									Name
								</label>
								<input
								type="text"
								name="user_name"
								required
									className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
									placeholder="Your full name"
								/>
							{errors.user_name && (<p className="mt-1 text-sm text-red-400">{errors.user_name}</p>)}
							</div>

						<div>
								<label className="block text-gray-300 text-sm font-medium mb-2">
									Email
								</label>
								<input
								type="email"
								name="user_email"
								required
									className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
									placeholder="your.email@example.com"
								/>
							{errors.user_email && (<p className="mt-1 text-sm text-red-400">{errors.user_email}</p>)}
							</div>

						<div>
							<label className="block text-gray-300 text-sm font-medium mb-2">
								Phone number
							</label>
							<input
								type="tel"
								name="user_phone"
								required
								pattern="^[+]?[- 0-9()]{7,20}$"
								title="Please enter a valid phone number"
								className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
								placeholder="e.g. +44 7700 900123"
							/>
							{errors.user_phone && (<p className="mt-1 text-sm text-red-400">{errors.user_phone}</p>)}
						</div>

							<div>
								<label className="block text-gray-300 text-sm font-medium mb-2">
									Subject
								</label>
							<select name="subject" required className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-blue-500">
									<option>General Inquiry</option>
									<option>Reservation</option>
									<option>Support</option>
									<option>Feedback</option>
								</select>
							</div>

						<div>
								<label className="block text-gray-300 text-sm font-medium mb-2">
									Message
								</label>
								<textarea
									rows={4}
								name="message"
								required
									className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
									placeholder="Tell us how we can help you..."
								></textarea>
							{errors.message && (<p className="mt-1 text-sm text-red-400">{errors.message}</p>)}
							</div>

							<button
								type="submit"
							disabled={isSending}
							className="w-full bg-blue-600 hover:bg-blue-700 disabled:opacity-60 disabled:cursor-not-allowed text-white py-3 px-4 rounded-lg transition-colors flex items-center justify-center"
							>
								<Send className="mr-2" size={20} />
							{isSending ? "Sending..." : "Send Message"}
							</button>

						{statusMessage && (
							<p className="text-sm text-gray-300 mt-2">{statusMessage}</p>
						)}
						</form>
					</motion.div>
                
                {/* Chimps image card, outside right column, full width under both cards */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="bg-gray-800 bg-opacity-50 backdrop-blur-md rounded-lg overflow-hidden border border-gray-700 lg:col-span-2"
                >
                    <img src={chimpsImg} alt="Chimps" className="block w-full h-72 lg:h-[600px] object-cover object-top" />
                </motion.div>
				</div>
			</div>
		</motion.div>
	);
};

export default ContactsPage;
