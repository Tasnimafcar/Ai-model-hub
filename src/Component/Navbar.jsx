import "../App.css";
import { useState } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = ({ page, setPage, models, subscribedIds }) => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const subscribedCount = subscribedIds.length;

    const navLinks = ["Home", "About", "Services", "Contact"];

    const handleNavClick = (link) => {
        setPage(link);
        setIsMenuOpen(false);
    };

    return (
        <div className="navbar sticky top-0 z-50 backdrop-blur-md bg-white/70 shadow-md">

            <div className="navbar-start">
                <button
                    onClick={() => setIsMenuOpen(true)}
                    className="btn btn-ghost btn-circle md:hidden mr-1"
                >
                    <i className="fa-solid fa-bars text-xl"></i>
                </button>

                <div className="flex items-center gap-1 text-xl font-bold">
                    <img className="w-12" src="/logo.png" /> Ai hub
                </div>
            </div>

            <div className="navbar-center hidden md:flex">
                <ul className="menu menu-horizontal gap-10 px-1 text-lg font-semibold">
                    {navLinks.map((link) => (
                        <li key={link}>
                            <a
                                onClick={() => setPage(link)}
                                className={`relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-red-500 after:transition-all after:duration-300 cursor-pointer ${page === link ? "text-red-500 after:w-full" : "after:w-0 hover:after:w-full"}`}
                            >
                                {link}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="navbar-end gap-4 mr-3 md:mr-0">

                <button
                    onClick={() => setPage("Cart")}
                    className={`btn btn-ghost btn-circle relative after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:bg-red-500 after:transition-all after:duration-300 ${page === "Cart" ? "after:w-full" : "after:w-0 hover:after:w-full"
                        }`}
                >
                    <div className="indicator">
                        <i
                            className={`fa-solid fa-cart-shopping text-xl transition-colors duration-300 ${page === "Cart" ? "text-red-500" : "text-black"
                                }`}
                        ></i>
                        {subscribedCount > 0 && (
                            <span className="badge badge-sm bg-red-500 text-white border-none indicator-item">
                                {subscribedCount}
                            </span>
                        )}
                    </div>

                </button>

                <button className="blob-btn hidden md:inline-flex">
                    Get Started

                    <span className="blob-btn__inner">
                        <span className="blob-btn__blobs">
                            <span className="blob-btn__blob"></span>
                            <span className="blob-btn__blob"></span>
                            <span className="blob-btn__blob"></span>
                            <span className="blob-btn__blob"></span>
                        </span>
                    </span>
                </button>
            </div>

            {/* MOBILE SIDE PANEL — rendered via Portal into document.body */}
            {createPortal(
                <AnimatePresence>
                    {isMenuOpen && (
                        <>
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                onClick={() => setIsMenuOpen(false)}
                                className="fixed inset-0 bg-black/50 z-9998 md:hidden"
                            />

                            <motion.div
                                initial={{ x: "-100%" }}
                                animate={{ x: 0 }}
                                exit={{ x: "-100%" }}
                                transition={{ type: "tween", duration: 0.3, ease: "easeInOut" }}
                                style={{
                                    backgroundColor: "#ffffff",
                                    position: "fixed",
                                    top: 0,
                                    left: 0,
                                    height: "100vh",
                                    width: "16rem",
                                    zIndex: 9999,
                                    boxShadow: "0 25px 50px -12px rgba(0,0,0,0.5)"
                                }}
                                className="md:hidden flex flex-col"
                            >
                                <div className="flex items-center justify-between p-4 border-b border-zinc-200">
                                    <div className="flex items-center gap-1 text-lg font-bold">
                                        <img className="w-10" src="/logo.png" /> Ai hub
                                    </div>
                                    <button
                                        onClick={() => setIsMenuOpen(false)}
                                        className="btn btn-ghost btn-circle btn-sm"
                                    >
                                        <i className="fa-solid fa-xmark text-xl"></i>
                                    </button>
                                </div>

                                <ul className="menu p-4 text-lg font-semibold gap-2 flex flex-col">
                                    {navLinks.map((link) => (
                                        <li key={link}>
                                            <a
                                                onClick={() => handleNavClick(link)}
                                                className={`cursor-pointer rounded-lg block px-3 py-2 ${page === link ? "text-red-500 bg-red-50" : ""}`}
                                            >
                                                {link}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        </>
                    )}
                </AnimatePresence>,
                document.body
            )}

            {/* SVG FILTER */}
            <svg xmlns="http://www.w3.org/2000/svg" style={{ position: "absolute", width: 0, height: 0 }}>
                <defs>
                    <filter id="goo">
                        <feGaussianBlur
                            in="SourceGraphic"
                            result="blur"
                            stdDeviation="10"
                        />

                        <feColorMatrix
                            in="blur"
                            mode="matrix"
                            values="
              1 0 0 0 0
              0 1 0 0 0
              0 0 1 0 0
              0 0 0 21 -7"
                            result="goo"
                        />

                        <feBlend
                            in="SourceGraphic"
                            in2="goo"
                            result="mix"
                        />
                    </filter>
                </defs>
            </svg>


        </div>
    )
};
export default Navbar;