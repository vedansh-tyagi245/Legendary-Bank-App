import React from 'react'

function HomePageFeatures() {
    return (
        <div className='w-full text-white'>
            <div className='content' style={{ margin: '2vh' }}>
                <h1 className="text-5xl text-center font-bold font-mono" style={{ marginBottom: '20px' }}>Features</h1>

                <div className="cards flex flex-wrap justify-center items-center gap-10" >
                    <div className="card1 h-[200px] lg:w-[400px] w-[300px] border border-gray-600 flex justify-center items-center rounded-2xl" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}>
                        <div className="content h-[190px] lg:w-[390px] w-[290px] border border-gray-700 flex flex-col justify-center items-center rounded-2xl" style={{ backgroundColor: 'rgba(0, 0, 0, 9)' }}>
                            <h1 className='text-3xl' style={{ marginBottom: '15px' }}>Secure transactions</h1>
                            <div className="3rd-line h-[120px] lg:w-[380px] w-[280px] border border-gray-800 rounded-2xl text-center flex items-center" style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)' }}>
                                Our platform ensures every transaction is encrypted with the latest security protocols, keeping your financial data safe.</div>
                        </div>
                    </div>
                    <div className="card1 h-[200px] lg:w-[400px] w-[300px] border border-gray-600 flex justify-center items-center rounded-2xl" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}>
                        <div className="content h-[190px] lg:w-[390px] w-[290px] border border-gray-700 flex flex-col justify-center items-center rounded-2xl" style={{ backgroundColor: 'rgba(0, 0, 0, 9)' }}>
                            <h1 className='text-3xl' style={{ marginBottom: '15px' }}>Instant Money Transfers</h1>
                            <div className="3rd-line h-[120px] lg:w-[380px] w-[280px] border border-gray-800 rounded-2xl text-center flex items-center" style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)' }}>
                                Transfer funds in real-time with minimal processing time, making sure your money moves fast.</div>
                        </div>
                    </div>
                    <div className="card1 h-[200px] lg:w-[400px] w-[300px] border border-gray-600 flex justify-center items-center rounded-2xl" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}>
                        <div className="content h-[190px] lg:w-[390px] w-[290px] border border-gray-700 flex flex-col justify-center items-center rounded-2xl" style={{ backgroundColor: 'rgba(0, 0, 0, 9)' }}>
                            <h1 className='text-3xl' style={{ marginBottom: '15px' }}>24/7 Support</h1>
                            <div className="3rd-line h-[120px] lg:w-[380px] w-[280px] border border-gray-800 rounded-2xl text-center flex items-center" style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)' }}>
                                Our dedicated customer support team is available around the clock to assist you with any questions or concerns.</div>
                        </div>
                    </div>
                    <div className="card1 h-[200px] lg:w-[400px] w-[300px] border border-gray-600 flex justify-center items-center rounded-2xl" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}>
                        <div className="content h-[190px] lg:w-[390px] w-[290px] border border-gray-700 flex flex-col justify-center items-center rounded-2xl" style={{ backgroundColor: 'rgba(0, 0, 0, 9)' }}>
                            <h1 className='text-3xl' style={{ marginBottom: '15px' }}>Mobile Banking App</h1>
                            <div className="3rd-line h-[120px] lg:w-[380px] w-[280px] border border-gray-800 rounded-2xl text-center flex items-center" style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)' }}>
                                Manage your finances on the go with our mobile app, offering a seamless banking experience from your smartphone.</div>
                        </div>
                    </div>
                    <div className="card1 h-[200px] lg:w-[400px] w-[300px] border border-gray-600 flex justify-center items-center rounded-2xl" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}>
                        <div className="content h-[190px] lg:w-[390px] w-[290px] border border-gray-700 flex flex-col justify-center items-center rounded-2xl" style={{ backgroundColor: 'rgba(0, 0, 0, 9)' }}>
                            <h1 className='text-3xl' style={{ marginBottom: '15px' }}>Low-Cost Loans</h1>
                            <div className="3rd-line h-[120px] lg:w-[380px] w-[280px] border border-gray-800 rounded-2xl text-center flex items-center" style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)' }}>
                                Get affordable loan options with flexible terms that are tailored to your financial needs.</div>
                        </div>
                    </div>
                    <div className="card1 h-[200px] lg:w-[400px] w-[300px] border border-gray-600 flex justify-center items-center rounded-2xl" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}>
                        <div className="content h-[190px] lg:w-[390px] w-[290px] border border-gray-700 flex flex-col justify-center items-center rounded-2xl" style={{ backgroundColor: 'rgba(0, 0, 0, 9)' }}>
                            <h1 className='text-3xl' style={{ marginBottom: '15px' }}>Personalized Alerts</h1>
                            <div className="3rd-line h-[120px] lg:w-[380px] w-[280px] border border-gray-800 rounded-2xl text-center flex items-center" style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)' }}>
                                Set up personalized alerts to monitor account activity, track spending, and stay informed of all important events.</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePageFeatures