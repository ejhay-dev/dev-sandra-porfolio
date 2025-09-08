"use client";

import { useState } from "react";
import { motion, AnimatePresence, type Variants } from "motion/react";
import { Button } from "./components/ui/button";
import { Menu, X } from "lucide-react";
import { TypingAnimation } from "./components/TypingAnimation";
import { MatrixRain } from "./components/MatrixRain";
import { LoadingScreen } from "./components/LoadingScreen";
import { Navbar } from "./components/Navbar";
// Import actual certificate images
import projectManagementCert from "figma:asset/7d9bbfeb9de1ae011894f480c179069a9bdc1799.png";
import digitalMarketingCert from "figma:asset/67e0dd7334e726855a1f351b88b3eeb1cbdedae9.png";
import uxDesignCert from "figma:asset/12f84160432ebed79e16fbd723395b36fd86ed53.png";

const projects = [
	{
		id: 1,
		title: "Brand Documentary",
		category: "Video Editing",
		description: "A comprehensive brand documentary showcasing cutting-edge product innovation through dynamic visual effects and cinematic storytelling.",
		tech: ["After Effects", "Premiere Pro", "Color Grading", "Motion Graphics"],
		status: "Featured",
		image: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=400&h=300&fit=crop&crop=entropy&auto=format",
	},
	{
		id: 2,
		title: "E-commerce Platform",
		category: "Web Design",
		description: "Next-generation e-commerce platform with immersive 3D interactions, AI product previews, and seamless user experience design.",
		tech: ["React", "3D Design", "UX/UI", "Responsive"],
		status: "Live",
		image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=300&fit=crop&crop=entropy&auto=format",
	},
	{
		id: 3,
		title: "Viral Campaign",
		category: "Social Media",
		description: "Revolutionary social media campaign that broke engagement records and redefined innovative storytelling techniques.",
		tech: ["Content Strategy", "Analytics", "Creative Direction", "Campaign Management"],
		status: "Trending",
		image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop&crop=entropy&auto=format",
	},
	{
		id: 4,
		title: "Corporate Identity",
		category: "Visual Design",
		description: "Complete corporate identity redesign with modern branding elements and comprehensive visual guideline development.",
		tech: ["Brand Design", "Logo Design", "Style Guide", "Print Design"],
		status: "Completed",
		image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop&crop=entropy&auto=format",
	},
];

const services = [
	{
		title: "video_editing",
		description: "Professional video content creation and post-production",
		color: "teal",
		icon: "🎬",
	},
	{
		title: "social_media",
		description: "Strategic social media management and content strategy",
		color: "cyan",
		icon: "📱",
	},
	{
		title: "web_design",
		description: "Modern web design and user experience optimization",
		color: "blue",
		icon: "💻",
	},
	{
		title: "visual_scripts",
		description: "Creative visual storytelling and script development",
		color: "emerald",
		icon: "📝",
	},
];

// PRODUCTION READY Google Professional Certificates! 🎓✨
const certificates = [
	{
		id: 1,
		title: "Foundations of Digital Marketing and E-commerce",
		provider: "Google",
		platform: "Coursera",
		date: "Jun 8, 2020",
		image: digitalMarketingCert,
		category: "Digital Marketing",
		color: "teal",
		verificationUrl: "https://coursera.org/verify/professional-cert/KCJVXTNKUAKL",
		description: "Comprehensive program covering e-commerce fundamentals, digital advertising, analytics, and marketing strategy.",
		skills: ["Google Ads", "Social Media Marketing", "E-commerce Analytics", "Marketing Strategy"],
	},
	{
		id: 2,
		title: "Foundations of User Experience (UX) Design",
		provider: "Google",
		platform: "Coursera",
		date: "Jul 13, 2020",
		image: uxDesignCert,
		category: "UX Design",
		color: "cyan",
		verificationUrl: "https://coursera.org/verify/professional-cert/B3QZLT9FAWKE",
		description: "In-depth training in user research, design thinking, wireframing, prototyping, and usability testing.",
		skills: ["User Research", "Wireframing", "Prototyping", "Design Thinking"],
	},
	{
		id: 3,
		title: "Foundations of Project Management",
		provider: "Google",
		platform: "Coursera",
		date: "Jun 10, 2020",
		image: projectManagementCert,
		category: "Project Management",
		color: "blue",
		verificationUrl: "https://coursera.org/verify/professional-cert/KJFHC9NDKVLE",
		description: "Professional training in project lifecycle, stakeholder management, Agile methodology, and team leadership.",
		skills: ["Agile Methodology", "Stakeholder Management", "Risk Assessment", "Team Leadership"],
	},
];

export default function App() {
	const [isLoading, setIsLoading] = useState(true);
	const [activeTab, setActiveTab] = useState("home");

	const tabs = [
		{ id: "home", label: "Home", icon: "🏠" },
		{ id: "about", label: "About", icon: "👤" },
		{ id: "services", label: "Services", icon: "⚙️" },
		{ id: "portfolio", label: "Portfolio", icon: "💼" },
		{ id: "certificates", label: "Certificates", icon: "🏆" },
		{ id: "contact", label: "Contact", icon: "📧" },
	];

	const pageVariants = {
		initial: {
			opacity: 0,
			x: 300,
			scale: 0.9,
		},
		enter: {
			opacity: 1,
			x: 0,
			scale: 1,
			transition: {
				duration: 0.6,
				ease: [0.25, 0.46, 0.45, 0.94],
			},
		},
		exit: {
			opacity: 0,
			x: -300,
			scale: 1.1,
			transition: {
				duration: 0.4,
				ease: [0.25, 0.46, 0.45, 0.94],
			},
		},
	};

	const handleLoadingComplete = () => {
		setIsLoading(false);
	};

	return (
		<>
			<AnimatePresence mode="wait">
				{isLoading ? (
					<LoadingScreen key="loading" onComplete={handleLoadingComplete} />
				) : (
					<motion.div
						key="main"
						initial={{ opacity: 0, scale: 0.95 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ duration: 0.8, ease: "easeOut" }}
						className="h-screen w-screen bg-[#0a0f0f] overflow-hidden flex flex-col"
					>
						{/* Sharp Matrix Code Rain Background */}
						<MatrixRain />

						{/* Top Navigation Bar - MOBILE SCROLLABLE! */}
						{/* <div className="bg-[#1e2832]/60 backdrop-blur-md flex items-center justify-between px-3 sm:px-6 py-4 relative z-50 shrink-0"> */}
						{/* Logo/Brand */}
						{/* <div className="flex items-center gap-2 sm:gap-3 shrink-0">
                <div className="w-8 h-8 rounded-lg bg-cyan-600 flex items-center justify-center">
                  <span className="text-white font-bold text-sm">SD</span>
                </div>
                <div className="hidden sm:flex items-center gap-2">
                  <span className="code text-xs text-cyan-400">~/sandra-demition</span>
                </div>
              </div> */}

						{/* Navigation Tabs - MOBILE SCROLLABLE! */}
						{/* <div className="flex-1 mx-3 sm:mx-4">
                <div className="flex items-center gap-2 overflow-x-auto scrollbar-hide pb-1 px-1" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                  {tabs.map((tab) => (
                    <motion.button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`shrink-0 px-3 sm:px-4 py-2 text-sm rounded-lg transition-all whitespace-nowrap ${
                        activeTab === tab.id
                          ? "bg-cyan-600/20 text-cyan-300"
                          : "text-cyan-400 hover:text-white hover:bg-cyan-900/20"
                      }`}
                      whileHover={{ y: -1 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span className="mr-1 sm:mr-2">{tab.icon}</span>
                      <span className="hidden sm:inline">{tab.label}</span>
                      <span className="sm:hidden text-xs">{tab.label}</span>
                    </motion.button>
                  ))}
                </div>
              </div> */}

						{/* Status */}
						{/* <div className="status-indicator status-online shrink-0">
                <div className="status-dot"></div>
                <span className="hidden sm:inline">Available</span>
                <span className="sm:hidden text-xs">●</span>
              </div>
            </div> */}
						<Navbar tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />
						{/* Main Content Area */}
						<div className="flex-1 overflow-y-auto bg-[#0a0f0f]/85 backdrop-blur-[2px] relative">
							{/* Background Name - Very Subtle */}
							<div className="fixed inset-0 pointer-events-none overflow-hidden z-5">
								<div
									className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[18vw] font-bold opacity-[0.012] select-none"
									style={{
										fontFamily: "Space Grotesk, sans-serif",
										color: "rgba(6, 182, 212, 0.08)",
										letterSpacing: "-0.05em",
									}}
								>
									SD
								</div>

								{/* Additional subtle background text */}
								<div
									className="absolute top-1/4 right-1/4 transform rotate-12 text-4xl font-bold opacity-[0.006] select-none"
									style={{
										fontFamily: "Space Grotesk, sans-serif",
										color: "rgba(6, 182, 212, 0.04)",
									}}
								>
									SANDRA DEMITION
								</div>

								<div
									className="absolute bottom-1/4 left-1/4 transform -rotate-12 text-4xl font-bold opacity-[0.006] select-none"
									style={{
										fontFamily: "Space Grotesk, sans-serif",
										color: "rgba(6, 182, 212, 0.04)",
									}}
								>
									CREATIVE DEVELOPER
								</div>
							</div>

							<AnimatePresence mode="wait">
								{activeTab === "home" && (
									<motion.div key="home" variants={pageVariants} initial="initial" animate="enter" exit="exit" className="min-h-full flex flex-col relative z-10">
										{/* Hero Section */}
										<div className="flex-1 flex items-center justify-center relative overflow-hidden min-h-screen">
											{/* Animated Background Effects */}
											<div className="absolute inset-0">
												<motion.div
													animate={{
														scale: [1, 1.1, 1],
														opacity: [0.02, 0.05, 0.02],
														rotate: [0, 5, 0],
													}}
													transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
													className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl"
													style={{
														background: "radial-gradient(circle, rgba(6, 182, 212, 0.08), rgba(34, 211, 238, 0.03))",
													}}
												/>

												<motion.div
													animate={{
														scale: [1.1, 1, 1.1],
														opacity: [0.015, 0.04, 0.015],
														rotate: [0, -5, 0],
													}}
													transition={{ duration: 25, repeat: Infinity, ease: "easeInOut", delay: 3 }}
													className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full blur-3xl"
													style={{
														background: "radial-gradient(circle, rgba(16, 185, 129, 0.06), rgba(251, 113, 133, 0.03))",
													}}
												/>

												{/* Floating geometric shapes */}
												<motion.div
													animate={{
														x: [0, 100, 0],
														y: [0, -50, 0],
														rotate: [0, 180, 360],
													}}
													transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
													className="absolute top-16 right-16 w-4 h-4 bg-cyan-500/5 rounded-full"
												/>

												<motion.div
													animate={{
														x: [0, -80, 0],
														y: [0, 60, 0],
														rotate: [0, -180, -360],
													}}
													transition={{ duration: 35, repeat: Infinity, ease: "linear", delay: 5 }}
													className="absolute bottom-16 left-16 w-6 h-6 border border-emerald-500/10 rounded"
												/>
											</div>

											<div className="container mx-auto px-6 text-center relative z-10 max-w-6xl">
												<div className="space-y-12">
													{/* Terminal Header */}
													<motion.div
														initial={{ opacity: 0, scale: 0.95 }}
														animate={{ opacity: 1, scale: 1 }}
														transition={{ duration: 0.6 }}
														className="max-w-2xl mx-auto bg-[#0f1419]/95 rounded-xl overflow-hidden"
														style={{
															boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06), inset 0 1px 0 rgba(6, 182, 212, 0.1)",
															backdropFilter: "blur(8px)",
														}}
													>
														<div className="flex items-center justify-between px-4 py-3 bg-[#1e2832]/90">
															<div className="flex items-center gap-2">
																<div className="w-3 h-3 bg-red-500 rounded-full"></div>
																<div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
																<div className="w-3 h-3 bg-green-500 rounded-full"></div>
															</div>
															<div className="flex-1 text-center">
																<span className="code text-xs text-cyan-400">~/sandra-demition</span>
															</div>
															<div className="w-16"></div>
														</div>
														<div className="p-6">
															<div className="code text-sm text-left space-y-2">
																<div className="flex items-center gap-2">
																	<span className="text-cyan-400">$</span>
																	<span className="text-white">whoami</span>
																</div>
																<div className="text-cyan-300 ml-4">
																	<TypingAnimation text="Sandra Demition" delay={500} speed={80} />
																</div>
																<div className="flex items-center gap-2 mt-4">
																	<span className="text-cyan-400">$</span>
																	<span className="text-white">introduction</span>
																</div>
															</div>
														</div>
													</motion.div>

													{/* Main Content */}
													<motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="space-y-8">
														<div className="space-y-6">
															<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }} className="text-sm uppercase tracking-wider text-cyan-400 code">
																HOME
															</motion.div>

															<motion.div className="space-y-4" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.0 }}>
																<div className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight tracking-tight">
																	<TypingAnimation text="Hi, I'm Sandra Demition" delay={2000} speed={60} className="teal-text-primary font-bold" />
																</div>
																<motion.div className="text-2xl md:text-3xl lg:text-4xl text-muted mt-4" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 4.5 }}>
																	a <span className="teal-text-accent">creative developer</span>
																</motion.div>
															</motion.div>
														</div>

														<motion.p
															initial={{ opacity: 0, y: 20 }}
															animate={{ opacity: 1, y: 0 }}
															transition={{ delay: 5.0 }}
															className="text-base md:text-lg text-muted max-w-2xl mx-auto leading-relaxed"
														>
															I bring value to web development projects by merging technical expertise with creativity and aesthetics. Specializing in video editing, social media strategy, and modern
															web experiences.
														</motion.p>

														<motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 5.2 }} className="flex justify-center">
															<div className="status-indicator status-online">
																<div className="status-dot"></div>
																Available for projects
															</div>
														</motion.div>

														{/* Skills Grid */}
														<motion.div
															initial={{ opacity: 0, y: 20 }}
															animate={{ opacity: 1, y: 0 }}
															transition={{ duration: 0.8, delay: 5.4 }}
															className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto pt-8"
														>
															{services.map((service, index) => (
																<motion.div
																	key={service.title}
																	initial={{ opacity: 0, y: 20 }}
																	animate={{ opacity: 1, y: 0 }}
																	transition={{ delay: 5.6 + index * 0.1 }}
																	whileHover={{ y: -2 }}
																	className="bg-[#1e2832]/70 rounded-xl p-4 transition-all duration-200 hover:bg-[#1e2832]/85 backdrop-filter backdrop-blur-md"
																>
																	<div className="flex items-center gap-3 mb-2">
																		<div
																			className={`w-2 h-2 rounded-full ${
																				service.color === "teal" ? "bg-teal-400" : service.color === "cyan" ? "bg-cyan-400" : service.color === "blue" ? "bg-blue-400" : "bg-emerald-400"
																			}`}
																		></div>
																		<span
																			className={`code text-sm ${
																				service.color === "teal" ? "text-teal-400" : service.color === "cyan" ? "text-cyan-400" : service.color === "blue" ? "text-blue-400" : "text-emerald-400"
																			}`}
																		>
																			{service.title}
																		</span>
																	</div>
																	<p className="text-xs text-muted text-left">{service.description}</p>
																</motion.div>
															))}
														</motion.div>
													</motion.div>
												</div>
											</div>
										</div>
									</motion.div>
								)}

								{activeTab === "about" && (
									<motion.div
										key="about"
										variants={pageVariants}
										initial="initial"
										animate="enter"
										exit="exit"
										className="p-4 sm:p-8 max-w-5xl mx-auto flex items-center justify-center min-h-screen relative z-10"
									>
										<div className="bg-[#1e2832]/70 rounded-xl p-6 sm:p-8 w-full backdrop-filter backdrop-blur-md">
											<div className="flex items-center justify-between px-4 py-3 mb-6 bg-[#0f1419]/90 rounded-t-lg">
												<div className="flex items-center gap-2">
													<div className="w-3 h-3 bg-red-500 rounded-full"></div>
													<div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
													<div className="w-3 h-3 bg-green-500 rounded-full"></div>
												</div>
												<div className="flex-1 text-center">
													<span className="code text-xs text-muted">About.md</span>
												</div>
												<div className="w-16"></div>
											</div>

											<div className="space-y-6 text-left">
												<div className="code text-sm">
													<span className="syntax-comment">// Personal Story</span>
												</div>

												<div className="space-y-6">
													<motion.h2 className="text-3xl teal-text-primary" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
														About Sandra
													</motion.h2>

													<motion.div className="space-y-4 text-base leading-relaxed text-muted" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }}>
														<p>
															<span className="teal-text-primary">Hi, I'm Sandra!</span> I'm a creative professional with a background in
															<span className="teal-text-accent"> video editing</span>, <span className="teal-text-accent">social media management</span>, and{" "}
															<span className="teal-text-accent">web content design</span>. Over the past few years, I've worked with different brands and agencies across{" "}
															<span className="text-cyan-300">Canada, the US, and Australia</span>, helping them grow their presence online through engaging visuals, campaigns, and storytelling.
														</p>

														<p>
															I'm the type of person who enjoys both the <span className="teal-text-accent">creative and technical sides</span> of digital work. Whether it's editing podcasts and
															videos, designing a Shopify page, or running social media campaigns, I like bringing ideas to life and making content that people connect with.
														</p>

														<p>
															I'd say my strengths are being <span className="text-cyan-300">resourceful</span>, <span className="text-cyan-300">adaptable</span>, and{" "}
															<span className="text-cyan-300">always curious</span>. I love learning new tools and trends that make content stand out. At the end of the day, I just enjoy creating
															things that make an impact, whether it's for a brand, a business, or a community.
														</p>
													</motion.div>

													<motion.div className="space-y-3" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.6 }}>
														<h3 className="text-white">What I Do Best</h3>
														<ul className="space-y-2 text-muted">
															<li className="flex items-center gap-2">
																<span className="w-1 h-1 bg-teal-400 rounded-full"></span>
																Video and podcast editing
															</li>
															<li className="flex items-center gap-2">
																<span className="w-1 h-1 bg-cyan-400 rounded-full"></span>
																Social media campaigns and management
															</li>
															<li className="flex items-center gap-2">
																<span className="w-1 h-1 bg-blue-400 rounded-full"></span>
																Web content design (Shopify, landing pages)
															</li>
															<li className="flex items-center gap-2">
																<span className="w-1 h-1 bg-emerald-400 rounded-full"></span>
																Visual storytelling and brand campaigns
															</li>
														</ul>
													</motion.div>

													<motion.div className="flex flex-wrap gap-2 mt-6" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.8 }}>
														<span className="dev-badge badge-primary">Resourceful</span>
														<span className="dev-badge badge-cyan">Adaptable</span>
														<span className="dev-badge badge-orange">Curious</span>
														<span className="dev-badge badge-emerald">Impact-Driven</span>
													</motion.div>
												</div>
											</div>
										</div>
									</motion.div>
								)}

								{activeTab === "services" && (
									<motion.div
										key="services"
										variants={pageVariants}
										initial="initial"
										animate="enter"
										exit="exit"
										className="p-4 sm:p-8 max-w-6xl mx-auto min-h-screen flex flex-col justify-center relative z-10"
									>
										<motion.div className="text-center mb-8 sm:mb-12" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
											<h2 className="text-3xl sm:text-4xl teal-text-primary mb-4">Services</h2>
											<p className="text-muted max-w-2xl mx-auto">Professional creative services that drive results and exceed expectations.</p>
										</motion.div>

										<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
											{services.map((service, index) => (
												<motion.div
													key={service.title}
													initial={{ opacity: 0, y: 20, scale: 0.9 }}
													animate={{ opacity: 1, y: 0, scale: 1 }}
													transition={{ delay: 0.4 + index * 0.1 }}
													whileHover={{ scale: 1.02, y: -4 }}
													className={`bg-[#1e2832]/70 rounded-xl p-6 text-center transition-all duration-300 backdrop-filter backdrop-blur-md ${
														service.color === "teal" ? "teal-glow" : service.color === "cyan" ? "cyan-glow" : service.color === "blue" ? "blue-glow" : "emerald-glow"
													} hover:shadow-lg`}
												>
													<div
														className={`w-16 h-16 mx-auto mb-4 rounded-lg ${
															service.color === "teal" ? "bg-teal-500/10" : service.color === "cyan" ? "bg-cyan-500/10" : service.color === "blue" ? "bg-blue-500/10" : "bg-emerald-500/10"
														} flex items-center justify-center`}
													>
														<span className="text-3xl">{service.icon}</span>
													</div>
													<h4 className="text-xl mb-3 capitalize">{service.title.replace("_", " ")}</h4>
													<p className="text-sm text-muted">{service.description}</p>
												</motion.div>
											))}
										</div>
									</motion.div>
								)}

								{activeTab === "portfolio" && (
									<motion.div key="portfolio" variants={pageVariants} initial="initial" animate="enter" exit="exit" className="p-4 sm:p-8 max-w-7xl mx-auto relative z-10">
										<motion.div className="text-center mb-8 sm:mb-12" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
											<h2 className="text-3xl sm:text-4xl teal-text-primary mb-4">Featured Work</h2>
											<p className="text-muted max-w-2xl mx-auto">A collection of projects showcasing expertise across multiple creative disciplines.</p>
										</motion.div>

										<div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-16">
											{projects.map((project, index) => (
												<motion.div
													key={project.id}
													initial={{ opacity: 0, y: 30, scale: 0.9 }}
													animate={{ opacity: 1, y: 0, scale: 1 }}
													transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
													className="bg-[#1e2832]/70 rounded-xl overflow-hidden group transition-all duration-300 backdrop-filter backdrop-blur-md hover:shadow-lg"
												>
													<div className="relative overflow-hidden">
														<motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }} className="aspect-[4/3] relative">
															<img src={project.image} alt={project.title} className="w-full h-full object-cover" loading="lazy" />
															<div className="absolute inset-0 bg-gradient-to-t from-teal-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

															<div className="absolute top-4 left-4">
																<span
																	className={`dev-badge ${
																		project.status === "Featured" ? "badge-primary" : project.status === "Live" ? "badge-cyan" : project.status === "Trending" ? "badge-orange" : "badge-blue"
																	}`}
																>
																	{project.status}
																</span>
															</div>

															<div className="absolute top-4 right-4">
																<span className="code text-xs bg-black/50 backdrop-blur-sm text-white px-2 py-1 rounded">{project.category}</span>
															</div>
														</motion.div>
													</div>

													<div className="p-6">
														<h3 className="text-xl mb-2 group-hover:teal-text-primary transition-colors duration-300">{project.title}</h3>

														<p className="text-sm text-muted leading-relaxed mb-4">{project.description}</p>

														<div className="flex flex-wrap gap-2 mb-4">
															{project.tech.slice(0, 3).map((tech, techIndex) => (
																<span key={techIndex} className="code text-xs bg-teal-900/20 text-teal-300 px-2 py-1 rounded">
																	{tech}
																</span>
															))}
														</div>

														<div className="flex gap-2">
															<Button size="sm" className="dev-button text-teal-400 hover:bg-teal-500/5 flex-1">
																View Project
															</Button>
														</div>
													</div>
												</motion.div>
											))}
										</div>
									</motion.div>
								)}

								{/* CERTIFICATES SECTION - PRODUCTION READY! 🏆✨ */}
								{activeTab === "certificates" && (
									<motion.div key="certificates" variants={pageVariants} initial="initial" animate="enter" exit="exit" className="py-8 px-4 sm:p-8 max-w-7xl mx-auto relative z-10 min-h-screen">
										{/* Header Section */}
										<motion.div className="text-center mb-8 sm:mb-12" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
											<h2 className="text-3xl sm:text-4xl teal-text-primary mb-4">🏆 Professional Certificates</h2>
											<p className="text-muted max-w-2xl mx-auto">Google Professional Certificates demonstrating expertise in digital marketing, UX design, and project management.</p>
										</motion.div>

										{/* Individual Certificate Gallery - PRODUCTION READY! */}
										<div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
											{certificates.map((certificate, index) => (
												<motion.div
													key={certificate.id}
													initial={{ opacity: 0, y: 40, scale: 0.9 }}
													animate={{ opacity: 1, y: 0, scale: 1 }}
													transition={{ duration: 0.8, delay: 0.4 + index * 0.3 }}
													whileHover={{ scale: 1.02, y: -8 }}
													className="bg-[#1e2832]/70 rounded-xl overflow-hidden backdrop-filter backdrop-blur-md hover:shadow-lg transition-all duration-300"
												>
													{/* Certificate Browser Window */}
													<div className="flex items-center justify-between px-4 py-3 bg-[#0f1419]/90">
														<div className="flex items-center gap-2">
															<div className="w-3 h-3 bg-red-500 rounded-full"></div>
															<div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
															<div className="w-3 h-3 bg-green-500 rounded-full"></div>
														</div>
														<div className="flex-1 text-center">
															<span className="code text-xs text-cyan-400">{certificate.category.toLowerCase().replace(" ", "_")}_certificate.pdf</span>
														</div>
														<div className="w-16"></div>
													</div>

													{/* Certificate Image - WORKS ON ALL PLATFORMS! 🏆 */}
													<div className="relative group overflow-hidden">
														<motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }} className="aspect-[4/3] relative">
															<img src={certificate.image} alt={`${certificate.title} - Sandra Demition`} className="w-full h-full object-cover" loading="lazy" />
															<div className="absolute inset-0 bg-gradient-to-t from-teal-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

															{/* Overlay Badges */}
															<div className="absolute top-4 left-4">
																<span className={`dev-badge ${certificate.color === "teal" ? "badge-primary" : certificate.color === "cyan" ? "badge-cyan" : "badge-blue"}`}>✅ Google Verified</span>
															</div>

															<div className="absolute top-4 right-4">
																<span className="code text-xs bg-black/60 backdrop-blur-sm text-white px-3 py-2 rounded">
																	{certificate.platform} • {certificate.date.split(" ")[2]}
																</span>
															</div>

															<div className="absolute bottom-4 right-4">
																<span className="code text-xs bg-teal-900/30 text-teal-300 px-3 py-2 rounded backdrop-blur-sm">🎓 {certificate.category}</span>
															</div>
														</motion.div>
													</div>

													{/* Certificate Details */}
													<div className="p-6">
														<div className="mb-4">
															<span className={`dev-badge ${certificate.color === "teal" ? "badge-primary" : certificate.color === "cyan" ? "badge-cyan" : "badge-blue"}`}>
																🏆 {certificate.category}
															</span>
														</div>

														<h3 className="text-lg mb-3 teal-text-primary leading-tight">{certificate.title}</h3>

														<p className="text-sm text-muted leading-relaxed mb-4">{certificate.description}</p>

														{/* Skills Tags */}
														<div className="flex flex-wrap gap-2 mb-4">
															{certificate.skills.slice(0, 2).map((skill, skillIndex) => (
																<span key={skillIndex} className="code text-xs bg-teal-900/20 text-teal-300 px-2 py-1 rounded">
																	{skill}
																</span>
															))}
															{certificate.skills.length > 2 && <span className="code text-xs bg-cyan-900/20 text-cyan-400 px-2 py-1 rounded">+{certificate.skills.length - 2} more</span>}
														</div>

														{/* Certificate Details */}
														<div className="space-y-2 mb-6">
															<div className="flex items-center gap-2 text-sm text-muted">
																<span className="w-1 h-1 bg-cyan-400 rounded-full"></span>
																Issued by {certificate.provider}
															</div>
															<div className="flex items-center gap-2 text-sm text-muted">
																<span className="w-1 h-1 bg-teal-400 rounded-full"></span>
																Completed on {certificate.platform}
															</div>
															<div className="flex items-center gap-2 text-sm text-muted">
																<span className="w-1 h-1 bg-emerald-400 rounded-full"></span>
																Certified {certificate.date}
															</div>
															<div className="flex items-center gap-2 text-sm text-muted">
																<span className="w-1 h-1 bg-blue-400 rounded-full"></span>
																Professional Development
															</div>
														</div>

														<Button size="sm" className="dev-button text-teal-400 hover:bg-teal-500/5 w-full" onClick={() => window.open(certificate.verificationUrl, "_blank")}>
															🔗 View Certificate
														</Button>
													</div>
												</motion.div>
											))}
										</div>

										{/* Professional Summary */}
										<motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.8 }} className="text-center">
											<div className="bg-[#1e2832]/70 rounded-xl p-6 sm:p-8 backdrop-filter backdrop-blur-md max-w-6xl mx-auto">
												<div className="flex items-center justify-between px-4 py-3 mb-6 bg-[#0f1419]/90 rounded-t-lg">
													<div className="flex items-center gap-2">
														<div className="w-3 h-3 bg-red-500 rounded-full"></div>
														<div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
														<div className="w-3 h-3 bg-green-500 rounded-full"></div>
													</div>
													<div className="flex-1 text-center">
														<span className="code text-xs text-muted">professional-credentials.json</span>
													</div>
													<div className="w-16"></div>
												</div>

												<div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
													<div className="code text-xs sm:text-sm text-left bg-[#0f1419]/90 p-4 sm:p-6 rounded-lg">
														<div className="syntax-comment">// Professional Certifications</div>
														<div className="mt-3 space-y-1 sm:space-y-2">
															<div>
																<span className="syntax-keyword">total_certificates</span>: <span className="syntax-number">3</span>
															</div>
															<div>
																<span className="syntax-keyword">certification_provider</span>: <span className="syntax-string">"Google Career Certificates"</span>
															</div>
															<div>
																<span className="syntax-keyword">platform</span>: <span className="syntax-string">"Coursera"</span>
															</div>
															<div>
																<span className="syntax-keyword">completion_year</span>: <span className="syntax-number">2020</span>
															</div>
															<div>
																<span className="syntax-keyword">status</span>: <span className="syntax-string">"verified"</span>
															</div>
															<div>
																<span className="syntax-keyword">professional_development</span>: <span className="syntax-string">"ongoing"</span>
															</div>
														</div>
													</div>

													<div className="code text-xs sm:text-sm text-left bg-[#0f1419]/90 p-4 sm:p-6 rounded-lg">
														<div className="syntax-comment">// Core Competencies</div>
														<div className="mt-3 space-y-1 sm:space-y-2">
															<div>
																<span className="syntax-keyword">digital_marketing</span>: <span className="syntax-string">"E-commerce & Analytics"</span>
															</div>
															<div>
																<span className="syntax-keyword">user_experience</span>: <span className="syntax-string">"Design & Research"</span>
															</div>
															<div>
																<span className="syntax-keyword">project_management</span>: <span className="syntax-string">"Agile & Scrum"</span>
															</div>
															<div>
																<span className="syntax-keyword">industry_ready</span>: <span className="syntax-string">true</span>
															</div>
															<div>
																<span className="syntax-keyword">career_advancement</span>: <span className="syntax-string">"enterprise_level"</span>
															</div>
														</div>
													</div>
												</div>

												<div className="mt-6 sm:mt-8 flex flex-wrap justify-center gap-2 sm:gap-4">
													<span className="dev-badge badge-primary text-xs">📊 Digital Marketing Expert</span>
													<span className="dev-badge badge-cyan text-xs">🎨 UX Design Professional</span>
													<span className="dev-badge badge-blue text-xs">📋 Project Management Certified</span>
													<span className="dev-badge badge-emerald text-xs">⭐ Google Career Qualified</span>
												</div>

												<div className="mt-4 sm:mt-6">
													<p className="text-xs sm:text-sm text-muted max-w-4xl mx-auto">
														All certificates are verified through Google Career Certificates program and demonstrate industry-ready skills for professional roles in digital marketing, UX design, and
														project management. Each certificate represents comprehensive training and hands-on project experience.
													</p>
												</div>
											</div>
										</motion.div>
									</motion.div>
								)}

								{activeTab === "contact" && (
									<motion.div
										key="contact"
										variants={pageVariants}
										initial="initial"
										animate="enter"
										exit="exit"
										className="p-4 sm:p-8 max-w-4xl mx-auto flex items-center justify-center min-h-screen relative z-10"
									>
										<div className="bg-[#1e2832]/70 rounded-xl p-6 sm:p-8 w-full backdrop-filter backdrop-blur-md">
											<div className="flex items-center justify-between px-4 py-3 mb-6 bg-[#0f1419]/90 rounded-t-lg">
												<div className="flex items-center gap-2">
													<div className="w-3 h-3 bg-red-500 rounded-full"></div>
													<div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
													<div className="w-3 h-3 bg-green-500 rounded-full"></div>
												</div>
												<div className="flex-1 text-center">
													<span className="code text-xs text-muted">Contact.json</span>
												</div>
												<div className="w-16"></div>
											</div>

											<div className="text-center space-y-8">
												<motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
													<h2 className="text-2xl sm:text-3xl teal-text-primary mb-4">Let's Connect</h2>
													<p className="text-muted max-w-lg mx-auto">Got an idea in mind? Let's chat about your project and turn it into something amazing together.</p>
												</motion.div>

												<motion.div className="space-y-4" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
													<div className="code text-sm text-left bg-[#0f1419]/90 p-4 rounded-lg">
														<div className="syntax-comment">// Contact Information</div>
														<div className="mt-2 space-y-1">
															<div>
																<span className="syntax-keyword">email</span>: <span className="syntax-string">"sandrademition@gmail.com"</span>
															</div>
															<div>
																<span className="syntax-keyword">linkedin</span>: <span className="syntax-string">"/in/sandra-demition"</span>
															</div>
															<div>
																<span className="syntax-keyword">status</span>: <span className="syntax-string">"available"</span>
															</div>
															<div>
																<span className="syntax-keyword">response_time</span>: <span className="syntax-string">"24h"</span>
															</div>
														</div>
													</div>
												</motion.div>

												<motion.div className="flex flex-col sm:flex-row gap-4 justify-center" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}>
													<Button className="dev-button text-teal-400 hover:bg-teal-500/5 px-8 py-3" onClick={() => window.open("mailto:sandrademition@gmail.com", "_blank")}>
														📧 Send Email
													</Button>
													<Button className="dev-button text-cyan-400 hover:bg-teal-500/5 px-8 py-3" onClick={() => window.open("https://www.linkedin.com/in/sandra-demition-8a455b114", "_blank")}>
														💼 LinkedIn
													</Button>
												</motion.div>
											</div>
										</div>
									</motion.div>
								)}
							</AnimatePresence>
						</div>
					</motion.div>
				)}
			</AnimatePresence>

			{/* CSS for hiding scrollbar */}
			<style jsx>{`
				.scrollbar-hide {
					-ms-overflow-style: none;
					scrollbar-width: none;
				}
				.scrollbar-hide::-webkit-scrollbar {
					display: none;
				}
			`}</style>
		</>
	);
}
