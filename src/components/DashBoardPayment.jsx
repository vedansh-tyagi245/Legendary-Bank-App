import React from 'react'

function DashBoardPayment() {
    return (
        <div>
            <div className="p-4 sm:ml-64 h-screen">
                <div className="p-4 mt-20">
                    <form class="max-w-sm mx-auto border-2 rounded-lg border-dashed border-gray-700  m-10 p-10">
                        <div class="mb-5">
                            <label for="phone" class="block mb-2 text-sm font-medium text-white">Your email</label>
                            <input type="text" id="phone" class="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" placeholder="name@flowbite.com" required />
                        </div>
                        <div class="mb-5">
                            <label for="password" class="block mb-2 text-sm font-medium text-white">Your password</label>
                            <input type="password" id="password" class="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" required />
                        </div>
                        <button type="submit" class="text-white focus:ring-4 focus:outline-none font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center bg-blue-600 hover:bg-blue-700 focus:ring-blue-800">Pay</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default DashBoardPayment