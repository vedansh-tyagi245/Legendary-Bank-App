import React from 'react';

function Registration() {
    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md p-8 bg-white shadow-lg rounded-lg">
                <div className="form-container">
                    <h2 className="text-center text-2xl font-semibold text-gray-800 mb-4">Bank Management System</h2>
                    <p className="text-center text-gray-600 mb-8">Create your account</p>
                    <form action="/register" method="POST">
                        <div className="mb-4">
                            <label htmlFor="username" className="block text-gray-700 text-sm mb-2">Username</label>
                            <input 
                                type="text" 
                                id="username" 
                                name="username" 
                                required
                                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-gray-700 text-sm mb-2">Email</label>
                            <input 
                                type="email" 
                                id="email" 
                                name="email" 
                                required
                                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="password" className="block text-gray-700 text-sm mb-2">Password</label>
                            <input 
                                type="password" 
                                id="password" 
                                name="password" 
                                required
                                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="confirm-password" className="block text-gray-700 text-sm mb-2">Confirm Password</label>
                            <input 
                                type="password" 
                                id="confirm-password" 
                                name="confirm_password" 
                                required
                                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            />
                        </div>
                        <button 
                            type="submit" 
                            className="w-full py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            Register
                        </button>
                        <p className="text-center text-gray-600 mt-4">Already have an account? <a href="/login" className="text-blue-500">Login here</a></p>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Registration;
