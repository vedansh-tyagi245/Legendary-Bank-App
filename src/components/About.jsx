import React from 'react'

function About() {
    return (
        <div className=''>
            <section className="heading border border-b-2" style={{borderColor: 'rgba(255, 255, 255, 0.1)'}}>
                <h1 className='text-blue-500 text-center text-5xl font-bold h-20' style={{marginTop:'30px'}}>About Us</h1>
                <p className="text-lg text-white text-center" style={{ marginBottom: '20px' }}> Empowering financial growth and providing innovative banking solutions since 2025.</p>
            </section>

            {/* Section to display mission cards */}
            <h1 className='text-blue-500 text-center text-5xl font-bold' style={{marginTop:"50px", marginBottom:"50px"}}>Our mission and values</h1>
            <section className="cards flex flex-wrap justify-center items-center gap-10 text-white" >
                <div className="card1 h-[200px] lg:w-[400px] w-[300px] border border-gray-600 flex justify-center items-center rounded-2xl" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}>
                    <div className="content h-[190px] lg:w-[390px] w-[290px] border border-gray-700 flex flex-col justify-center items-center rounded-2xl" style={{ backgroundColor: 'rgba(0, 0, 0, 9)' }}>
                        <h1 className='text-4xl' style={{ marginBottom: '15px' }}>Mission</h1>
                        <div className="3rd-line h-[120px] lg:w-[380px] w-[280px] border border-gray-800 rounded-2xl text-center flex items-center" style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)' }}>
                            To deliver accessible and secure financial services for everyone.</div>
                    </div>
                </div>
                <div className="card1 h-[200px] lg:w-[400px] w-[300px] border border-gray-600 flex justify-center items-center rounded-2xl" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}>
                    <div className="content h-[190px] lg:w-[390px] w-[290px] border border-gray-700 flex flex-col justify-center items-center rounded-2xl" style={{ backgroundColor: 'rgba(0, 0, 0, 9)' }}>
                        <h1 className='text-4xl' style={{ marginBottom: '15px' }}>Vision</h1>
                        <div className="3rd-line h-[120px] lg:w-[380px] w-[280px] border border-gray-800 rounded-2xl text-center flex items-center" style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)' }}>
                            To be the most trusted and innovative bank in the industry.</div>
                    </div>
                </div>
                <div className="card1 h-[200px] lg:w-[400px] w-[300px] border border-gray-600 flex justify-center items-center rounded-2xl" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}>
                    <div className="content h-[190px] lg:w-[390px] w-[290px] border border-gray-700 flex flex-col justify-center items-center rounded-2xl" style={{ backgroundColor: 'rgba(0, 0, 0, 9)' }}>
                        <h1 className='text-4xl' style={{ marginBottom: '15px' }}>Values</h1>
                        <div className="3rd-line h-[120px] lg:w-[380px] w-[280px] border border-gray-800 rounded-2xl text-center flex items-center" style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)' }}>
                            Integrity, Innovation, Customer-Centricity, and Community Engagement.</div>
                    </div>
                </div>
            </section>


            {/* Leadership team */}
            <h1 className='text-blue-500 text-center text-3xl font-bold h-20 border-t-2' style={{marginTop:"30px", borderColor: 'rgba(255, 255, 255, 0.1)', paddingTop:"30px"}}>Our Team</h1>
            <section className="cards flex flex-wrap justify-center items-center gap-10 text-white border-b-2" style={{marginTop:"50px", paddingBottom:"50px", borderColor: 'rgba(255, 255, 255, 0.1)'}} >
                <div className="card1 h-[200px] lg:w-[400px] w-[300px] border border-gray-600 flex justify-center items-center rounded-2xl" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}>
                    <div className="content h-[190px] lg:w-[390px] w-[290px] border border-gray-700 flex flex-col justify-center items-center rounded-2xl" style={{ backgroundColor: 'rgba(0, 0, 0, 9)' }}>
                        <div className="3rd-line h-[110px] w-[110px] border border-gray-800 rounded-full text-center flex justify-center items-center" style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)' }}>IMG</div>
                        <h1 className='text-lg' style={{ marginBottom: '0px' }}>Vedansh Tyagi</h1>
                        <h1 className='text-lg' style={{ marginBottom: '5px' }}>(CEO)</h1>
                    </div>
                </div>
                <div className="card1 h-[200px] lg:w-[400px] w-[300px] border border-gray-600 flex justify-center items-center rounded-2xl" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}>
                    <div className="content h-[190px] lg:w-[390px] w-[290px] border border-gray-700 flex flex-col justify-center items-center rounded-2xl" style={{ backgroundColor: 'rgba(0, 0, 0, 9)' }}>
                        <div className="3rd-line h-[110px] w-[110px] border border-gray-800 rounded-full text-center flex justify-center items-center" style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)' }}>IMG</div>
                        <h1 className='text-lg' style={{ marginBottom: '0px' }}>Vedansh Tyagi</h1>
                        <h1 className='text-lg' style={{ marginBottom: '5px' }}>(CEO)</h1>
                    </div>
                </div>
                <div className="card1 h-[200px] lg:w-[400px] w-[300px] border border-gray-600 flex justify-center items-center rounded-2xl" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}>
                    <div className="content h-[190px] lg:w-[390px] w-[290px] border border-gray-700 flex flex-col justify-center items-center rounded-2xl" style={{ backgroundColor: 'rgba(0, 0, 0, 9)' }}>
                        <div className="3rd-line h-[110px] w-[110px] border border-gray-800 rounded-full text-center flex justify-center items-center" style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)' }}>IMG</div>
                        <h1 className='text-lg' style={{ marginBottom: '0px' }}>Vedansh Tyagi</h1>
                        <h1 className='text-lg' style={{ marginBottom: '5px' }}>(CEO)</h1>
                    </div>
                </div>
            </section>

            <h1 className='text-blue-500 h-20 text-3xl font-bold text-center'style={{marginTop:"50px"}}>Milestones and achievements</h1>
            <section className='flex flex-wrap gap-10 justify-center'>
                <div className="bg-gray-800 shadow-lg rounded-lg w-[300px]" style={{ "padding": "1.5rem" }}>
                    <h3 className="text-2xl font-bold text-blue-400 text-center">10M+</h3>
                    <p className="text-gray-400 text-center">Customers Served</p>
                </div>
                <div className="bg-gray-800 shadow-lg rounded-lg w-[300px]" style={{ "padding": "1.5rem" }}>
                    <h3 className="text-2xl font-bold text-blue-400 text-center">50+</h3>
                    <p className="text-gray-400 text-center">Branches Nationwide</p>
                </div>
                <div className="bg-gray-800 shadow-lg rounded-lg w-[300px]" style={{ "padding": "1.5rem" }}>
                    <h3 className="text-2xl font-bold text-blue-400 text-center">20+</h3>
                    <p className="text-gray-400 text-center">Years in Service</p>
                </div>
                <div className="bg-gray-800 shadow-lg rounded-lg w-[300px]" style={{ "padding": "1.5rem" }}>
                    <h3 className="text-2xl font-bold text-blue-400 text-center">100+</h3>
                    <p className="text-gray-400 text-center">Awards Won</p>
                </div>
            </section>

        </div>
    )
}

export default About