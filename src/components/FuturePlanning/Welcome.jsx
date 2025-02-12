import React from "react";
import POG from "../../assets/POG.gif";

function Welcome({ setStep }) {
    return (
        <div className="flex flex-col items-center justify-center text-white mt-20">
            {/* Speech Bubble */}
            <div className="relative px-20 py-4 rounded-2xl shadow-xl mb-4 bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-600 text-white">
                <p className="font-semibold">Hi, I am POG! I will help you plan your future wisely. 🚀</p>
            </div>

            {/* POG GIF */}
            <img
                src={POG}
                alt="POG"
                className="h-64 w-auto rounded-lg shadow-xl"
            />

            {/* Call-to-Action */}
            <button className="mt-6 px-6 py-3 bg-green-500 hover:bg-green-600 text-white text-lg font-semibold rounded-lg shadow-md transition-all"
                onClick={() => { setStep(1) }}>
                Let's Get Started!
            </button>
        </div>
    );
}

export default Welcome;
