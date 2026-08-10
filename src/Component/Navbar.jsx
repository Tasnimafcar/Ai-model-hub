import "../App.css";

const Navbar = ({ page, setPage, models, subscribedIds }) => {

    const subscribedCount = subscribedIds.length;

    return (
        <div className="navbar sticky top-0 z-50 backdrop-blur-md bg-white/70 shadow-md">

            <div className="navbar-start">
                <div className="flex items-center gap-1 text-xl font-bold">
                    <img className="w-12" src="/logo.png" /> Ai hub
                </div>
            </div>

            <div className="navbar-center hidden md:flex">
                <ul className="menu menu-horizontal gap-10 px-1 text-lg font-semibold">
                    <li>
                        <a
                            onClick={() => setPage("Home")}
                            className={`relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-red-500 after:transition-all after:duration-300 cursor-pointer ${page === "Home" ? "text-red-500 after:w-full" : "after:w-0 hover:after:w-full"}`}
                        >
                            Home
                        </a>
                    </li>
                    <li>
                        <a
                            onClick={() => setPage("About")}
                            className={`relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-red-500 after:transition-all after:duration-300 cursor-pointer ${page === "About" ? "text-red-500 after:w-full" : "after:w-0 hover:after:w-full"}`}
                        >
                            About
                        </a>
                    </li>
                    <li>
                        <a
                            onClick={() => setPage("Services")}
                            className={`relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-red-500 after:transition-all after:duration-300 cursor-pointer ${page === "Services" ? "text-red-500 after:w-full" : "after:w-0 hover:after:w-full"}`}
                        >
                            Services
                        </a>
                    </li>
                    <li>
                        <a
                            onClick={() => setPage("Contact")}
                            className={`relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-red-500 after:transition-all after:duration-300 cursor-pointer ${page === "Contact" ? "text-red-500 after:w-full" : "after:w-0 hover:after:w-full"}`}
                        >
                            Contact
                        </a>
                    </li>
                </ul>
            </div>

            <div className="navbar-end gap-4">
                <button
                    onClick={() => setPage("Cart")}
                    className="btn btn-ghost btn-circle"
                >
                    <div className="indicator">
                        <i className="fa-solid fa-cart-shopping text-xl"></i>
                        {subscribedCount > 0 && (
                            <span className="badge badge-sm bg-red-500 text-white border-none indicator-item">
                                {subscribedCount}
                            </span>
                        )}
                    </div>
                </button>

                <button className="blob-btn">
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