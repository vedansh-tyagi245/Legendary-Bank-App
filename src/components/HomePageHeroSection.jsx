import React from "react";
import Robot from "../assets/robot.gif"

function HomePageHeroSection() {
    return (
        <div className="w-full lg:flex lg:justify-center lg:items-center">
            <section className="lg:w-[80vw] lg:h-[60vh] h-[80vh] flex justify-center lg:items-center">
                {/* Left */}
                <div className="lg:w-[50vw] w-[80vw] flex flex-col justify-center">
                    <h1 className="text-5xl font-bold text-white leading-tight lg:text-start text-center">Welcome to <span className="text-blue-500">Unity Bank</span></h1>
                    <br />
                    <p className="text-lg text-gray-100 font-mono lg:text-start text-center">Experience seamless banking solutions with personalized services and cutting-edge technology. Your trust, our commitment.</p>
                    <br />
                    <div className="flex lg:text-start lg:justify-start justify-center lg:gap-4 gap-4">
                        <button className="bg-blue-500 text-white rounded-lg shadow-lg hover:bg-blue-600 transition duration-300 h-10 w-36">Open an Account</button>
                        <button className="bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition duration-300 h-10 w-36">Learn More</button>
                    </div>
                </div>

                {/* Right */}
                <div className="hidden lg:block">
                    <img src={Robot} alt="" srcset="" className="h-[50vh]" />
                </div>
            </section>
        </div>
    );
}

export default HomePageHeroSection;
