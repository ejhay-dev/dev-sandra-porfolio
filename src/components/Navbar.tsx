import * as React from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { Menu, X } from "lucide-react";

type Tab = { id: string; label: string; icon?: React.ReactNode };

interface NavbarProps {
	tabs: Tab[];
	activeTab: string;
	setActiveTab: (id: string) => void;
}

export function Navbar({ tabs, activeTab, setActiveTab }: NavbarProps) {
	const [open, setOpen] = React.useState(false);

	// Close on route/tab change (optional)
	React.useEffect(() => {
		if (open) setOpen(false);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [activeTab]);

	// Escape to close
	React.useEffect(() => {
		const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, []);

	const panelVariants: Variants = {
		closed: { opacity: 0, y: -8, transition: { duration: 0.15 } },
		open: { opacity: 1, y: 0, transition: { duration: 0.2 } },
		exit: { opacity: 0, y: -8, transition: { duration: 0.15 } },
	};

	return (
		<header className="bg-[#1e2832]/60 backdrop-blur-md px-3 sm:px-6 py-3 sm:py-4 relative z-50">
			<div className="flex items-center justify-between gap-3">
				{/* Brand */}
				<div className="flex items-center gap-2 sm:gap-3 shrink-0">
					<div className="w-8 h-8 rounded-lg bg-cyan-600 flex items-center justify-center">
						<span className="text-white font-bold text-sm">SD</span>
					</div>
					<div className="hidden sm:flex items-center gap-2">
						<span className="code text-xs text-cyan-400">~/sandra-demition</span>
					</div>
				</div>

				{/* Desktop tabs */}
				<nav className="hidden md:block flex-1 mx-4">
					<div className="flex items-center gap-2 overflow-x-auto scrollbar-hide pb-1 px-1" style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
						{tabs.map((tab) => (
							<motion.button
								key={tab.id}
								onClick={() => setActiveTab(tab.id)}
								className={`shrink-0 px-4 py-2 text-sm rounded-lg transition-all whitespace-nowrap ${
									activeTab === tab.id ? "bg-cyan-600/20 text-cyan-300" : "text-cyan-400 hover:text-white hover:bg-cyan-900/20"
								}`}
								whileHover={{ y: -1 }}
								whileTap={{ scale: 0.98 }}
							>
								{tab.icon && <span className="mr-2">{tab.icon}</span>}
								<span>{tab.label}</span>
							</motion.button>
						))}
					</div>
				</nav>

				{/* Status + Burger */}
				<div className="flex items-center gap-2">
					<div className="status-indicator status-online shrink-0 hidden sm:inline-flex">
						<div className="status-dot" />
						<span className="hidden sm:inline">Available</span>
					</div>

					{/* Mobile burger (md:hidden) */}
					<button
						className="md:hidden inline-flex items-center justify-center p-2 rounded-lg text-cyan-300 hover:bg-cyan-900/30 hover:text-white transition"
						aria-label={open ? "Close menu" : "Open menu"}
						aria-expanded={open}
						aria-controls="mobile-nav"
						onClick={() => setOpen((v) => !v)}
					>
						{open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
					</button>
				</div>
			</div>

			{/* Mobile slide-down panel */}
			<AnimatePresence>
				{open && (
					<motion.nav
						id="mobile-nav"
						key="mobile"
						role="dialog"
						aria-modal="true"
						initial="closed"
						animate="open"
						exit="exit"
						variants={panelVariants}
						className="md:hidden mt-3 rounded-lg border border-cyan-500/20 bg-[#1e2832] backdrop-blur-md p-2"
					>
						<div className="flex flex-col bg-black">
							{tabs.map((tab) => (
								<button
									key={tab.id}
									onClick={() => setActiveTab(tab.id)}
									className={`w-full text-left px-3 py-2 rounded-md transition ${activeTab === tab.id ? "bg-cyan-600/20 text-cyan-300" : "text-cyan-300/90 hover:text-white hover:bg-cyan-900/20"}`}
								>
									<div className="flex items-center gap-2">
										{tab.icon && <span>{tab.icon}</span>}
										<span>{tab.label}</span>
									</div>
								</button>
							))}
							<div className="mt-2 px-3 py-2">
								<div className="status-indicator status-online">
									<div className="status-dot" />
									<span>Available</span>
								</div>
							</div>
						</div>
					</motion.nav>
				)}
			</AnimatePresence>
		</header>
	);
}
