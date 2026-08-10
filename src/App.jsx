import TypewriterText from "./component/TypewriterText";
import { useState, use, useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "./component/Navbar";
import Banner from "./component/Banner";
import Footer from "./component/Footer";
import Models from "./component/Models";
import Cart from "./component/Cart";

const getModels = async () => {
  const res = await fetch("/models.json")
  return res.json()
}

const modelPromise = getModels()

function App() {
  const [page, setPage] = useState("Home");
  const models = use(modelPromise);
  const [subscribedIds, setSubscribedIds] = useState([]);

  const handleSubscribe = (id) => {
    setSubscribedIds(prev => [...prev, id]);
  }

  const handleRemove = (id) => {
    setSubscribedIds(prev => prev.filter(subId => subId !== id));
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [page]);

  return (
    <>
      <Navbar page={page} setPage={setPage} models={models} subscribedIds={subscribedIds} />

      {page === "Home" && (
        <>
          <Banner />
          <Models models={models} subscribedIds={subscribedIds} handleSubscribe={handleSubscribe}
            setPage={setPage} />
        </>
      )}

      {page === "Cart" && (
        <Cart models={models} subscribedIds={subscribedIds} handleRemove={handleRemove} setPage={setPage} />
      )}

      {(page === "About" || page === "Services" || page === "Contact") && (
        <div className="min-h-150 flex flex-col items-center justify-center text-center px-6 bg-linear-to-b from-white to-red-50">
          <div className="text-7xl mb-6">🚧</div>
          <div className="inline-flex items-center gap-2 bg-red-500/10 border border-red-500/30 text-red-500 text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
            {page} Page
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-zinc-900 mb-4 tracking-tight">
            Coming Soon
          </h2>
          <TypewriterText key={page} text={`This page is still under construction. This is a practice project, so this section hasn't been built out yet — but Home is ready to explore!`} />
          <button
            onClick={() => setPage("Home")}
            className="mt-8 bg-red-600 hover:bg-red-500 transition-all px-8 py-3.5 rounded-xl font-semibold text-white shadow-lg shadow-red-500/30 flex items-center gap-2 group"
          >
            Back to Home
            <span className="group-hover:-translate-x-1 transition-transform duration-300">←</span>
          </button>
        </div>
      )}

      <Footer />
    </>
  );
}

export default App;