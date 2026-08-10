import TypewriterText from "./TypewriterText";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Models = ({ models, subscribedIds, handleSubscribe, setPage }) => {

    const [shakeId, setShakeId] = useState(null);
    const [alertModel, setAlertModel] = useState(null);

    const handleNewSubscribe = (id) => {
        handleSubscribe(id);
        setPage("Cart");
    }

    const handleSubscribedClick = (model) => {
        setShakeId(model.id);
        setTimeout(() => {
            setShakeId(null);
            setAlertModel(model);
        }, 400);
    }

    return (
        <div className="py-20 max-w-7xl mx-auto px-4 md:px-6">
            <div className="text-center space-y-2">
                <h2 className="font-bold text-5xl text-black tracking-tighter">Choose Your AI Model</h2>
                <p className="text-gray-400 text-lg">One subscription gives you access to all frontier AI models</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
                {models.map(model => {
                    const isSubscribed = subscribedIds.includes(model.id)
                    return (
                        <div key={model.id} className="shadow-lg rounded-xl border overflow-hidden border-zinc-300">
                            <div className="flex justify-center items-center h-56 bg-zinc-200">
                                <img className="h-40 w-40 object-contain" src={model.image} />
                            </div>
                            <div className="p-4 flex flex-col justify-between min-h-55">
                                <div className="space-y-4">
                                    <h2 className="font-semibold text-2xl">{model.title}</h2>
                                    <p className="line-clamp-3 min-h-18">{model.description}</p>
                                    <div className="text-2xl font-bold">${model.price}/Month</div>
                                </div>

                                <motion.button
                                    onClick={() => isSubscribed ? handleSubscribedClick(model) : handleNewSubscribe(model.id)}
                                    animate={shakeId === model.id ? { x: [0, -8, 8, -8, 8, -4, 4, 0] } : { x: 0 }}
                                    transition={{ duration: 0.4 }}
                                    className={`btn w-full py-6 mt-4 font-bold text-white rounded-xl transition-colors ${isSubscribed ? "bg-linear-to-b from-[#7A2038] to-[#4B1528]" : "bg-red-500"}`}
                                >
                                    {isSubscribed ? "Subscribed ✓" : "Subscribe Now"}
                                </motion.button>
                            </div>
                        </div>
                    )
                })}
            </div>

            <AnimatePresence>
                {alertModel && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setAlertModel(null)}
                        className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-6"
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.7, y: 30 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.8, y: 20 }}
                            transition={{ type: "spring", stiffness: 300, damping: 18 }}

                            onClick={(e) => e.stopPropagation()}
                            className="bg-white rounded-2xl shadow-2xl max-w-sm w-full p-8 text-center"
                        >
                            <h3 className="text-xl font-bold text-zinc-900 mb-2">Already Subscribed</h3>
                            <div className="mb-6 flex items-center justify-center min-h-16">
                                <p className="text-zinc-800 font-medium leading-relaxed">
                                    <TypewriterText key={alertModel.id} text={`${alertModel.title} is already in your subscription list. Head to your cart to manage it or explore other models.`} />
                                </p>
                            </div>

                            <button
                                onClick={() => setAlertModel(null)}
                                className="bg-linear-to-b from-[#7A2038] to-[#4B1528] hover:from-[#8A2545] hover:to-[#5B1930] transition-all px-8 py-3 rounded-xl font-semibold text-white w-full shadow-lg ring-2 ring-red-200/50 ring-offset-2 tracking-widest"
                            >
                                CLOSE
                            </button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};
export default Models;