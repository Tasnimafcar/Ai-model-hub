import { use, useState } from "react"

const Models = ({ modelPromise }) => {

    const models = use(modelPromise)
    const [subscribedIds, setSubscribedIds] = useState([])

    const handleSubscribe = (id) => {
        setSubscribedIds(prev => [...prev, id])
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
                                    <p>{model.description}</p>
                                    <div className="text-2xl font-bold">${model.price}/Month</div>
                                </div>
                                <button
                                    onClick={() => handleSubscribe(model.id)}
                                    disabled={isSubscribed}
                                    className="btn w-full py-6 mt-4 bg-red-500 font-bold text-white rounded-xl"
                                >
                                    {isSubscribed ? "Subscribed" : "Subscribe Now"}
                                </button>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
};
export default Models;
