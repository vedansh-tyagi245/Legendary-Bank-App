import React from "react";
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Tooltip, XAxis, YAxis, CartesianGrid, Legend, Cell } from "recharts";

const balanceData = [
    { month: "Jan", balance: 5000 },
    { month: "Feb", balance: 7000 },
    { month: "Mar", balance: 6500 },
    { month: "Apr", balance: 8500 },
    { month: "May", balance: 9000 },
];

const incomeExpenseData = [
    { month: "Jan", income: 4000, expense: 2000 },
    { month: "Feb", income: 5000, expense: 2500 },
    { month: "Mar", income: 4500, expense: 3000 },
    { month: "Apr", income: 7000, expense: 3500 },
    { month: "May", income: 7500, expense: 4000 },
];

const spendingCategories = [
    { name: "Rent", value: 500 },
    { name: "Food", value: 300 },
    { name: "Transport", value: 150 },
    { name: "Entertainment", value: 200 },
    { name: "Shopping", value: 350 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#A28BE9"];

function DashBoardAccountOverview() {
    return (
        <div>
            <div className="p-4 sm:ml-64 h-screen">
                <div className="p-4 border-2 border-dashed rounded-lg border-gray-700 mt-14"></div>
                <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Balance Overview */}
                    <div className="bg-white p-4 rounded-lg shadow-lg">
                        <h2 className="text-xl font-semibold mb-4">Balance Overview</h2>
                        <LineChart width={300} height={200} data={balanceData}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="month" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Line type="monotone" dataKey="balance" stroke="#8884d8" strokeWidth={2} />
                        </LineChart>
                    </div>

                    {/* Income & Expenses */}
                    <div className="bg-white p-4 rounded-lg shadow-lg">
                        <h2 className="text-xl font-semibold mb-4">Income vs Expenses</h2>
                        <BarChart width={300} height={200} data={incomeExpenseData}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="month" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="income" fill="#82ca9d" />
                            <Bar dataKey="expense" fill="#ff4d4d" />
                        </BarChart>
                    </div>

                    {/* Spending Categories */}
                    <div className="bg-white p-4 rounded-lg shadow-lg">
                        <h2 className="text-xl font-semibold mb-4">Spending Categories</h2>
                        <PieChart width={300} height={200}>
                            <Pie data={spendingCategories} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80} label>
                                {spendingCategories.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                            </Pie>
                            <Tooltip />
                        </PieChart>
                    </div>
                </div>
            </div>
        </div>
  );
}

export default DashBoardAccountOverview;
