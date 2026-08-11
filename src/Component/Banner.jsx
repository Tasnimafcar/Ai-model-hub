import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = [
    "/chatgpt.jpg",
    "/claude.jpg",
    "/copilot.jpg",
    "/deepsek.jpg",
    "/gemini.jpg",
    "/grok.jpg",
    "/Meta IA (logo).jpg",
    "/mistral.jpg",
    "/perplexity.jpg",
    "/Qwen.jpg",
];

const Banner = () => {
    const [current, setCurrent] = useState(0);

    useEffect(() => {

        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % images.length);
        }, 2000);
        return () => clearInterval(interval);
    },);

    return (
        <div className="relative min-h-162.5 flex items-center overflow-hidden px-6 lg:px-16 pt-20 lg:pt-0">
            <div className="mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center relative z-10">

                {/* left content */}
                <div className="space-y-4">

                    <div className="hidden lg:inline-flex items-center gap-2 bg-red-500/10 border border-red-500/30 text-red-400 text-sm font-medium px-5 py-2 rounded-full">
                        ✨ Frontier AI Models
                    </div>

                    <h1 className="text-3xl lg:text-5xl font-bold leading-tight tracking-tight text-red-600">
                        One Subscription.
                        <br />
                        <span className="bg-linear-to-r from-red-400 via-orange-400 to-amber-400 bg-clip-text text-transparent">All the AIs You Need</span>
                    </h1>

                    <p className="text-lg text-zinc-700 max-w-lg font-semibold">
                        Experience the full spectrum of frontier intelligence — all the most advanced AI models, unified under a single, powerful subscription.
                    </p>

                    <div className="flex flex-wrap gap-4 pt-4">
                        <button className="bg-red-600 hover:bg-red-500 transition-all px-4 py-2.5 lg:px-8 lg:py-4 rounded-xl lg:rounded-2xl font-semibold text-sm lg:text-lg text-white shadow-xl shadow-red-500/30 flex items-center gap-2 lg:gap-3 group">Get Unlimited Access
                            <span className="group-hover:translate-x-2 transition-transform duration-300 text-xl">→</span>
                        </button>
                    </div>

                    <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-zinc-600 pt-6">
                        <div className="whitespace-nowrap">✓ 50+ Frontier Models</div>
                        <div className="whitespace-nowrap">✓ No Usage Limits</div>
                        <div className="whitespace-nowrap">✓ Cancel Anytime</div>
                    </div>

                </div>

                {/* right image */}
                <div className="relative w-full h-56 lg:h-122.5 overflow-hidden flex items-center justify-center" style={{ clipPath: "inset(0)" }}>
                    <AnimatePresence mode="wait">
                        <motion.img
                            key={current}
                            src={images[current]}
                            alt="AI model"
                            className="h-48 lg:h-96 w-auto object-contain"
                            initial={{ x: 80, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            exit={{ x: -80, opacity: 0 }}
                            transition={{ duration: 0.5, ease: "easeInOut" }}
                        />
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
}
export default Banner;