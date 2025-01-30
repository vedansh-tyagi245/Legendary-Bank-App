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
                            <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                            <input type="password" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                        </div>
                        <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Pay</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default DashBoardPayment