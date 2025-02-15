import React, { useState } from 'react'
import Logo from "../assets/logo.svg"
import { Link } from 'react-router-dom'
import DashBoardLoan from '../components/DashBoardLoan';
import DecorativeElements from '../components/DecorativeElements';
import DashBoardPayment from '../components/DashBoardPayment';
import DashBoardTransactionPage from '../components/DastBoardTransactionPage';
import DashBoardProducts from "../components/DashBoardProducts"
import { useNavigate } from 'react-router-dom';
import DashBoardAccountOverview from '../components/DashBoardAccountOverview';

function DashBoard() {

   const navigate = useNavigate();
   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
   const [content, setContent] = useState('account_overview');
   const [isProfileOpen, setIsProfileOpen] = useState(false);

   const handleLogout = () => {
      localStorage.clear();
      navigate("/login"); // Redirect to login page
   };

   return (
      <div className='h-full'>
         <DecorativeElements />
         <nav className="fixed top-0 z-50 w-full border-b bg-gray-800 border-gray-700">
            <div className="px-3 py-3 lg:px-5 lg:pl-3">
               <div className="flex items-center justify-between">
                  <div className="flex items-center justify-start rtl:justify-end">
                     <button data-drawer-target="logo-sidebar" data-drawer-toggle="logo-sidebar" aria-controls="logo-sidebar" type="button" className="inline-flex items-center p-2 text-sm rounded-lg sm:hidden focus:outline-none focus:ring-2 text-gray-400 hover:bg-gray-700 focus:ring-gray-600" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
                        <span className="sr-only">Open sidebar</span>
                        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                           <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                        </svg>
                     </button>
                     <Link to={'/'} className="flex ms-2 md:me-24">
                        <img src={Logo} className="h-8 me-3" alt="FlowBite Logo" />
                        <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap text-white">Unity Bank</span>
                     </Link>
                  </div>
                  <div className="flex items-center">
                     <div className="flex items-center ms-3">
                        <div>
                           <button type="button" className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-600" aria-expanded="false" data-dropdown-toggle="dropdown-user">
                              <span className="sr-only">Open user menu</span>
                              <img className="w-8 h-8 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="user photo" />
                           </button>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </nav>

         <aside id="logo-sidebar" className={`${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform border-r sm:translate-x-0 bg-gray-800 border-gray-700`}>
            <div class="h-full px-3 py-4 overflow-y-auto bg-gray-800">
               <ul class="space-y-2 font-medium">
                  <li>
                     <a href="#" class="flex items-center p-2 rounded-lg text-white hover:bg-gray-700 group" onClick={() => setContent('account_overview')}>
                        <svg class="w-5 h-5 transition duration-75 text-gray-400 group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
                           <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                           <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                        </svg>
                        <span class="ms-3">Account overview</span>
                     </a>
                  </li>
                  <li>
                     <a href="#" class="flex items-center p-2 rounded-lg text-white hover:bg-gray-700 group" onClick={() => setContent('transactions')}>
                        <svg class="shrink-0 w-5 h-5 transition duration-75 text-gray-400 group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
                           <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z" />
                        </svg>
                        <span class="flex-1 ms-3 whitespace-nowrap">Transactions</span>
                        <span class="inline-flex items-center justify-center px-2 ms-3 text-sm font-medium rounded-full bg-gray-700 text-gray-300">Pro</span>
                     </a>
                  </li>
                  <li>
                     <a href="#" class="flex items-center p-2 rounded-lg text-white hover:bg-gray-700 group" onClick={() => setContent('payment')}>
                        <svg class="shrink-0 w-5 h-5 transition duration-75 text-gray-400 group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                           <path d="m17.418 3.623-.018-.008a6.713 6.713 0 0 0-2.4-.569V2h1a1 1 0 1 0 0-2h-2a1 1 0 0 0-1 1v2H9.89A6.977 6.977 0 0 1 12 8v5h-2V8A5 5 0 1 0 0 8v6a1 1 0 0 0 1 1h8v4a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-4h6a1 1 0 0 0 1-1V8a5 5 0 0 0-2.582-4.377ZM6 12H4a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Z" />
                        </svg>
                        <span class="flex-1 ms-3 whitespace-nowrap">Payment Gateway</span>
                        <span class="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium rounded-full bg-blue-900 text-blue-300">3</span>
                     </a>
                  </li>
                  <li>
                     <a href="#" class="flex items-center p-2 rounded-lg text-white hover:bg-gray-700 group" onClick={() => setContent('loan')}>
                        <svg class="shrink-0 w-5 h-5 transition duration-75 text-gray-400 group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                           <path d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z" />
                        </svg>
                        <span class="flex-1 ms-3 whitespace-nowrap">Loan</span>
                     </a>
                  </li>
                  <li>
                     <a href="#" class="flex items-center p-2 rounded-lg text-white hover:bg-gray-700 group" onClick={() => setContent('products')}>
                        <svg class="shrink-0 w-5 h-5 transition duration-75 text-gray-400 group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                           <path d="M17 5.923A1 1 0 0 0 16 5h-3V4a4 4 0 1 0-8 0v1H2a1 1 0 0 0-1 .923L.086 17.846A2 2 0 0 0 2.08 20h13.84a2 2 0 0 0 1.994-2.153L17 5.923ZM7 9a1 1 0 0 1-2 0V7h2v2Zm0-5a2 2 0 1 1 4 0v1H7V4Zm6 5a1 1 0 1 1-2 0V7h2v2Z" />
                        </svg>
                        <span class="flex-1 ms-3 whitespace-nowrap">Products</span>
                     </a>
                  </li>
                  <li>
                     <a href="#" class="flex items-center p-2 rounded-lg text-white hover:bg-gray-700 group">
                        <svg class="shrink-0 w-5 h-5 transition duration-75 text-gray-400 group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 16">
                           <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3" />
                        </svg>
                        <span class="flex-1 ms-3 whitespace-nowrap">Sign In</span>
                     </a>
                  </li>
                  <li>
                     <a href="#" class="flex items-center p-2 rounded-lg text-white hover:bg-gray-700 group" onClick={handleLogout}>
                        <svg class="shrink-0 w-5 h-5 transition duration-75 text-gray-400 group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                           <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.96 2.96 0 0 0 .13 5H5Z" />
                           <path d="M6.737 11.061a2.961 2.961 0 0 1 .81-1.515l6.117-6.116A4.839 4.839 0 0 1 16 2.141V2a1.97 1.97 0 0 0-1.933-2H7v5a2 2 0 0 1-2 2H0v11a1.969 1.969 0 0 0 1.933 2h12.134A1.97 1.97 0 0 0 16 18v-3.093l-1.546 1.546c-.413.413-.94.695-1.513.81l-3.4.679a2.947 2.947 0 0 1-1.85-.227 2.96 2.96 0 0 1-1.635-3.257l.681-3.397Z" />
                           <path d="M8.961 16a.93.93 0 0 0 .189-.019l3.4-.679a.961.961 0 0 0 .49-.263l6.118-6.117a2.884 2.884 0 0 0-4.079-4.078l-6.117 6.117a.96.96 0 0 0-.263.491l-.679 3.4A.961.961 0 0 0 8.961 16Zm7.477-9.8a.958.958 0 0 1 .68-.281.961.961 0 0 1 .682 1.644l-.315.315-1.36-1.36.313-.318Zm-5.911 5.911 4.236-4.236 1.359 1.359-4.236 4.237-1.7.339.341-1.699Z" />
                        </svg>
                        <span class="flex-1 ms-3 whitespace-nowrap">Log Out</span>
                     </a>
                  </li>
               </ul>
               <ul class="pt-4 mt-4 space-y-2 font-medium border-t border-gray-700">

                  <li>
                     <a href="#" class="flex items-center p-2 transition duration-75 rounded-lg hover:bg-gray-700 text-white group">
                        <svg class="shrink-0 w-5 h-5 transition duration-75 text-gray-400 group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 17 20">
                           <path d="M7.958 19.393a7.7 7.7 0 0 1-6.715-3.439c-2.868-4.832 0-9.376.944-10.654l.091-.122a3.286 3.286 0 0 0 .765-3.288A1 1 0 0 1 4.6.8c.133.1.313.212.525.347A10.451 10.451 0 0 1 10.6 9.3c.5-1.06.772-2.213.8-3.385a1 1 0 0 1 1.592-.758c1.636 1.205 4.638 6.081 2.019 10.441a8.177 8.177 0 0 1-7.053 3.795Z" />
                        </svg>
                        <span class="ms-3">Customer review</span>
                     </a>
                  </li>
                  <li>
                     <a href="#" class="flex items-center p-2 transition duration-75 rounded-lg hover:bg-gray-700 text-white group" onClick={() => setContent('settings')}>
                        <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                           <path fill-rule="evenodd" d="M17 10v1.126c.367.095.714.24 1.032.428l.796-.797 1.415 1.415-.797.796c.188.318.333.665.428 1.032H21v2h-1.126c-.095.367-.24.714-.428 1.032l.797.796-1.415 1.415-.796-.797a3.979 3.979 0 0 1-1.032.428V20h-2v-1.126a3.977 3.977 0 0 1-1.032-.428l-.796.797-1.415-1.415.797-.796A3.975 3.975 0 0 1 12.126 16H11v-2h1.126c.095-.367.24-.714.428-1.032l-.797-.796 1.415-1.415.796.797A3.977 3.977 0 0 1 15 11.126V10h2Zm.406 3.578.016.016c.354.358.574.85.578 1.392v.028a2 2 0 0 1-3.409 1.406l-.01-.012a2 2 0 0 1 2.826-2.83ZM5 8a4 4 0 1 1 7.938.703 7.029 7.029 0 0 0-3.235 3.235A4 4 0 0 1 5 8Zm4.29 5H7a4 4 0 0 0-4 4v1a2 2 0 0 0 2 2h6.101A6.979 6.979 0 0 1 9 15c0-.695.101-1.366.29-2Z" clip-rule="evenodd" />
                        </svg>

                        <span class="ms-3">Settings</span>
                     </a>
                  </li>
               </ul>
               <div id="dropdown-cta" class="p-4 mt-6 rounded-lg bg-blue-900" role="alert">
                  <div class="flex items-center mb-3">
                     <span class="text-sm font-semibold me-2 px-2.5 py-0.5 rounded-sm bg-orange-200 text-orange-900">Beta - Ads section</span>
                     <button type="button" class="ms-auto -mx-1.5 -my-1.5 inline-flex justify-center items-center w-6 h-6 rounded-lg focus:ring-2 focus:ring-blue-400 p-1 bg-blue-900 text-blue-400 hover:bg-blue-800" data-dismiss-target="#dropdown-cta" aria-label="Close">
                        <span class="sr-only">Close</span>
                        <svg class="w-2.5 h-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                           <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                        </svg>
                     </button>
                  </div>
                  <p class="mb-3 text-sm text-blue-400">
                     Preview the new Flowbite dashboard navigation! You can turn the new navigation off for a limited time in your profile.
                  </p>
                  <a class="text-sm underline font-medium text-blue-400 hover:text-blue-300" href="#">Turn new navigation off</a>
               </div>
            </div>
         </aside>

         {content === "loan" && <DashBoardLoan />}
         {content === "payment" && <DashBoardPayment />}
         {content === "transactions" && <DashBoardTransactionPage />}
         {content === "products" && <DashBoardProducts />}
         {content === "account_overview" && <DashBoardAccountOverview/>}

      </div>
   )
}

export default DashBoard