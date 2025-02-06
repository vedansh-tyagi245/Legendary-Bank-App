import React, { useState } from 'react'
import Annual_interest from '../small-components/Annual_interest';

function DashBoardProducts() {

    const [content, setContent] = useState('main');

    return (
        <div>
            <div className="p-4 sm:ml-64 h-screen">
                <div className="p-4 border-2 border-dashed rounded-lg border-gray-700 mt-14">
                    {content === "main" && <div>
                        <div className="grid grid-cols-3 gap-4 mb-4">
                            <div className="flex items-center justify-center h-24 rounded-sm bg-gray-800 hover:bg-gray-700 transition-all hover:cursor-pointer" onClick={()=>setContent("annual_interest_calculator")}>
                                <p className="text-2xl text-gray-500">
                                    Annual Interest Calculator
                                </p>
                            </div>
                            <div className="flex items-center justify-center h-24 rounded-sm bg-gray-800 hover:bg-gray-700 transition-all hover:cursor-pointer" onClick={()=>setContent("quarterly_interest_calculator")}>
                                <p className="text-2xl text-gray-500">
                                    Quaterly Interest Calculator
                                </p>
                            </div>
                            <div className="flex items-center justify-center h-24 rounded-sm bg-gray-800 hover:bg-gray-700 transition-all hover:cursor-pointer" onClick={()=>setContent("monthly_interest_calculator")}>
                                <p className="text-2xl text-gray-500">
                                    Monthly Interest Calculator
                                </p>
                            </div>
                        </div>
                        <div className="flex items-center justify-center h-48 mb-4 rounded-sm bg-gray-800 hover:bg-gray-700 transition-all hover:cursor-pointer">
                            <p className="text-2xl text-gray-500">
                                Premium: Limited time offer, invest in government gold scheme
                            </p>
                        </div>
                        <div className="grid grid-cols-2 gap-4 mb-4">
                            <div className="flex items-center justify-center rounded-sm h-28 bg-gray-800 hover:bg-gray-700 transition-all hover:cursor-pointer">
                                <p className="text-2xl text-gray-500">
                                    Open deposit account
                                </p>
                            </div>
                            <div className="flex items-center justify-center rounded-sm h-28 bg-gray-800 hover:bg-gray-700 transition-all hover:cursor-pointer">
                                <p className="text-2xl text-gray-500">
                                    Open FD
                                </p>
                            </div>
                            <div className="flex items-center justify-center rounded-sm h-28 bg-gray-800 hover:bg-gray-700 transition-all hover:cursor-pointer">
                                <p className="text-2xl text-gray-500">
                                    Life Insurance
                                </p>
                            </div>
                            <div className="flex items-center justify-center rounded-sm h-28 bg-gray-800 hover:bg-gray-700 transition-all hover:cursor-pointer">
                                <p className="text-2xl text-gray-500">
                                    Health Insurance
                                </p>
                            </div>
                        </div>
                        <div className="flex items-center justify-center h-48 mb-4 rounded-sm bg-gray-800 hover:bg-gray-700 transition-all hover:cursor-pointer">
                            <p className="text-2xl text-gray-500">
                                ETC
                            </p>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="flex items-center justify-center rounded-sm h-28 bg-gray-800 hover:bg-gray-700 transition-all hover:cursor-pointer">
                                <p className="text-2xl text-gray-500">
                                    ETC
                                </p>
                            </div>
                            <div className="flex items-center justify-center rounded-sm h-28 bg-gray-800 hover:bg-gray-700 transition-all hover:cursor-pointer">
                                <p className="text-2xl text-gray-500">
                                    ETC
                                </p>
                            </div>
                            <div className="flex items-center justify-center rounded-sm h-28 bg-gray-800 hover:bg-gray-700 transition-all hover:cursor-pointer">
                                <p className="text-2xl text-gray-500">
                                    ETC
                                </p>
                            </div>
                            <div className="flex items-center justify-center rounded-sm h-28 bg-gray-800 hover:bg-gray-700 transition-all hover:cursor-pointer">
                                <p className="text-2xl text-gray-500">
                                    ETC
                                </p>
                            </div>
                        </div>
                    </div>}
                    {content === "annual_interest_calculator" && <Annual_interest/>}
                    {content === "quarterly_interest_calculator" && <Annual_interest/>}
                    {content === "monthly_interest_calculator" && <Annual_interest/>}
                </div>
            </div>
        </div>
    )
}

export default DashBoardProducts