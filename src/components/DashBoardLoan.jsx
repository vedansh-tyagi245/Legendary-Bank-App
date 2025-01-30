import React from 'react';
import LoanItem from '../small-components/LoanItem';

const loans = [
    {
        id: 1,
        title: "Car Loan",
        description: "Quick cash for your needs with flexible repayment options.",
        image: "/images/personal-loan.jpg",
    },
    {
        id: 2,
        title: "Home Loan",
        description: "Finance your dream home with low-interest rates.",
        image: "/images/home-loan.jpg",
    },
    {
        id: 3,
        title: "Education Loan",
        description: "Get your dream car with an easy auto loan plan.",
        image: "/images/auto-loan.jpg",
    },
    {
        id: 4,
        title: "Car Loan",
        description: "Quick cash for your needs with flexible repayment options.",
        image: "/images/personal-loan.jpg",
    },
    {
        id: 5,
        title: "Home Loan",
        description: "Finance your dream home with low-interest rates.",
        image: "/images/home-loan.jpg",
    },
    {
        id: 6,
        title: "Education Loan",
        description: "Get your dream car with an easy auto loan plan.",
        image: "/images/auto-loan.jpg",
    },
    {
        id: 7,
        title: "Car Loan",
        description: "Quick cash for your needs with flexible repayment options.",
        image: "/images/personal-loan.jpg",
    },
    {
        id: 8,
        title: "Home Loan",
        description: "Finance your dream home with low-interest rates.",
        image: "/images/home-loan.jpg",
    },
    {
        id: 9,
        title: "Education Loan",
        description: "Get your dream car with an easy auto loan plan.",
        image: "/images/auto-loan.jpg",
    }
];

function DashBoardLoan() {
    return (
        <div className="p-4 sm:ml-64 h-screen overflow-y-auto">
            <div className="p-4 border-2 border-dashed rounded-lg border-gray-700 mt-14">
                <h2 className="text-3xl font-semibold text-white mb-6 text-center">Available Loan Options</h2>

                {/* Loan Cards Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {loans.map((loan) => (
                        <LoanItem key={loan.id} title={loan.title} description={loan.description} image={loan.image} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default DashBoardLoan;
