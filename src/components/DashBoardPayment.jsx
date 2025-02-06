import React, { useState } from 'react';
import axios from 'axios'; // Import axios for API calls
import { toast, ToastContainer } from 'react-toastify';  // Import the toast function
import 'react-toastify/dist/ReactToastify.css';

function DashBoardPayment() {
    const [to, setTo] = useState(''); // State for recipient's phone
    const [password, setPassword] = useState(''); // State for password
    const [amount, setAmount] = useState(''); // State for the amount
    const [error, setError] = useState(''); // State for error message
    const [success, setSuccess] = useState(''); // State for success message

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Get the sender's phone from local storage
        const from = localStorage.getItem('userPhone'); // Assuming the phone is stored in localStorage during login

        // Validate form fields
        if (!from || !to || !password || !amount) {
            setError('Please fill all the fields.');
            toast.error('Please fill all the fields.'); // Show error toast
            return;
        }

        try {
            // Send payment request to the API
            const response = await axios.post('http://localhost:4000/api/v1/payment/send', {
                from,
                to,
                password,
                amount,
            });

            if (response.data.success) {
                // After successful payment, post transaction details
                const { senderNewBalance, receiverNewBalance } = response.data;  // Assuming these are returned in the payment response
                const date = new Date().toLocaleDateString('en-GB'); // DD/MM/YYYY
                const transactionTime = new Date().toLocaleString('en-US', {  // HH:MM:SS AM/PM
                    hour: '2-digit',
                    minute: '2-digit',
                    second: '2-digit',
                    hour12: true,  // This will display AM/PM
                });
                // Post the transaction to the server
                await axios.post('http://localhost:4000/api/v1/postTransactions/send', {
                    from,
                    to,
                    amount,
                    senderNewBalance,
                    receiverNewBalance,
                    date,  // Current date/time
                    transactionTime,  // You can format this as per your needs
                });

                // Display success message
                toast.success('Payment transfer successful!'); // Show success toast
                setSuccess('Payment transfer successful!');
                setError('');
            }
        } catch (err) {
            setError(err.response?.data?.message || 'An error occurred.');
            toast.error(err.response?.data?.message || 'An error occurred.'); // Show error toast
            setSuccess('');
        }
    };

    return (
        <div>
            <ToastContainer position="top-right" autoClose={3000} hideProgressBar />
            <div className="p-4 sm:ml-64 h-screen">
                <div className="p-4 mt-20">
                    <form onSubmit={handleSubmit} className="max-w-sm mx-auto border-2 rounded-lg border-dashed border-gray-700 m-10 p-10">
                        <div className="mb-5">
                            <label htmlFor="phone" className="block mb-2 text-sm font-medium text-white">Receipient's Phone</label>
                            <input
                                type="text"
                                id="phone"
                                className="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                                placeholder="8888888888"
                                value={to}
                                onChange={(e) => setTo(e.target.value)}
                                required
                            />
                        </div>

                        <div className="mb-5">
                            <label htmlFor="password" className="block mb-2 text-sm font-medium text-white">Your password</label>
                            <input
                                type="password"
                                id="password"
                                className="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                                placeholder="Ab@12345"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>

                        <div className="mb-5">
                            <label htmlFor="amount" className="block mb-2 text-sm font-medium text-white">Amount</label>
                            <input
                                type="number"
                                id="amount"
                                className="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                                placeholder="100"
                                value={amount}
                                onChange={(e) => setAmount(e.target.value)}
                                required
                            />
                        </div>

                        {error && <div className="text-red-500 text-center mb-2">{error}</div>}
                        {success && <div className="text-green-500 text-center mb-2">{success}</div>}

                        <p className="text-center">
                            <button
                                type="submit"
                                className="text-white focus:ring-4 focus:outline-none font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center bg-blue-600 hover:bg-blue-700 focus:ring-blue-800"
                            >
                                Pay
                            </button>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default DashBoardPayment;
