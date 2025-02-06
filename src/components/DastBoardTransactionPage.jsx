import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function DashBoardTransactionPage() {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const userPhone = localStorage.getItem("userPhone"); // Get logged-in user's phone
        const response = await axios.get(`http://localhost:4000/api/v1/fetchTransactions/fetch/${userPhone}`);
        
        if (response.data.success) {
          setTransactions(response.data.transactions);
        } else {
          setError("No transactions found.");
        }
      } catch (err) {
        setError("Failed to fetch transactions.");
        toast.error("Error fetching transactions!");
      } finally {
        setLoading(false);
      }
    };

    fetchTransactions();
  }, []);

  return (
    <div className="p-4 sm:ml-64 h-screen">
      <div className="p-4 mt-20">
        <h2 className="text-white text-center text-xl font-bold mb-4">Transaction History</h2>
        {loading ? (
          <p className="text-white text-center">Loading transactions...</p>
        ) : error ? (
          <p className="text-red-500 text-center">{error}</p>
        ) : transactions.length === 0 ? (
          <p className="text-white text-center">No transactions available.</p>
        ) : (
          <table className="w-full text-sm text-left text-gray-400 border border-gray-600">
            <thead className="text-xs uppercase bg-gray-700 text-gray-400">
              <tr>
                <th className="px-6 py-3">Date</th>
                <th className="px-6 py-3">sender</th>
                <th className="px-6 py-3">receiver</th>
                <th className="px-6 py-3">Final Balance</th>
              </tr>
            </thead>
            <tbody>
            {transactions.map((txn) => {
                const userPhone = localStorage.getItem("userPhone");
                const finalBalance =
                  userPhone === txn.from ? txn.senderNewBalance : txn.receiverNewBalance;

                return (
                  <tr key={txn._id} className="border-b bg-gray-800 border-gray-600">
                    <td className="px-6 py-4">{txn.date}{" :: "}{txn.transactionTime}</td>
                    <td className="px-6 py-4">{txn.from}</td>
                    <td className="px-6 py-4">{txn.to}</td>
                    <td className="px-6 py-4">${finalBalance}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

export default DashBoardTransactionPage;
