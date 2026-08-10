import { motion, AnimatePresence } from "framer-motion";

const Cart = ({ models, subscribedIds, handleRemove, setPage }) => {

    const subscribedModels = models.filter(model => subscribedIds.includes(model.id));
    const total = subscribedModels.reduce((sum, model) => sum + model.price, 0);

    return (
        <div className="max-w-3xl mx-auto px-6 py-16 min-h-125">
            <h2 className="text-4xl font-bold text-zinc-900 mb-4">Your Cart</h2>

            <button
                onClick={() => setPage("Home")}
                className="bg-red-600 hover:bg-red-500 transition-all px-6 py-3 rounded-xl font-semibold text-white flex items-center gap-2 group mb-8"
            >
                <span className="group-hover:-translate-x-1 transition-transform duration-300">←</span>
                Continue Shopping
            </button>

            {subscribedModels.length === 0 ? (
                <div className="text-center py-20">
                    <div className="text-6xl mb-4">🛒</div>
                    <p className="text-zinc-400 text-lg">Your cart is empty</p>
                </div>
            ) : (
                <>
                    <div className="space-y-4">
                        <AnimatePresence>
                            {subscribedModels.map(model => (
                                <motion.div
                                    key={model.id}
                                    layout
                                    initial={{ opacity: 0, x: -30 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: 30, height: 0, marginBottom: 0, paddingTop: 0, paddingBottom: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="flex items-center gap-4 bg-white shadow-md border border-zinc-200 rounded-xl p-4"
                                >
                                    <img src={model.image} className="w-16 h-16 object-contain" />
                                    <div className="flex-1">
                                        <div className="font-semibold text-lg">{model.title}</div>
                                        <div className="text-zinc-500 text-sm">{model.description}</div>
                                    </div>
                                    <div className="text-xl font-bold text-red-500">${model.price}/mo</div>
                                    <button
                                        onClick={() => handleRemove(model.id)}
                                        className="ml-2 w-9 h-9 flex items-center justify-center rounded-full bg-red-50 hover:bg-red-100 text-red-500 transition-colors"
                                        title="Remove"
                                    >
                                        ✕
                                    </button>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>

                    <div className="mt-8 border-t border-zinc-200 pt-6 flex items-center justify-between">
                        <span className="text-xl font-semibold text-zinc-700">Total per month</span>
                        <span className="text-3xl font-bold text-red-600">${total}</span>
                    </div>
                </>
            )}
        </div>
    );
};

export default Cart;