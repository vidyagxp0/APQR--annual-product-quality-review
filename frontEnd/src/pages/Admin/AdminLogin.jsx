import React, { useState } from 'react';
import { SlArrowDown, SlArrowUp, SlArrowLeft ,SlArrowRight } from "react-icons/sl";
 //Navbar Component
//  const Navbar = () => (
//   <nav className='w-full bg-gray-800 p-4 flex justify-between items-center'>
//     <div className='text-white text-lg font-bold'>Admin Panel</div>
//     <ul className='flex space-x-4 text-white'>
//       <li className='hover:bg-gray-700 px-3 py-2 rounded'>
//         <a href='/'>Home</a>
//       </li>
//       <li className='hover:bg-gray-700 px-3 py-2 rounded'>
//         <a href='/about'>About</a>
//       </li>
//       <li className='hover:bg-gray-700 px-3 py-2 rounded'>
//         <a href='/contact'>Contact</a>
//       </li>
//     </ul>
//   </nav>
//  )
 function Header() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <header className="bg-gray-200 shadow-lg py-4">
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <img src="/gxplogo.png" alt="Logo" className="h-10 mr-2" />
        </div>

        {/* Name */}
        <div className="text-center flex gap-2">
          <img src="/alogo.jpg" alt="Centered Logo" className="mx-auto mb-2 h-10" />
          <h1 className="text-3xl font-cursive" style={{ fontWeight: "normal" }}>
            APQR
          </h1>
        </div>

        {/* Dropdown Menu */}
        <div className="relative">
          <button
            className="flex items-center focus:outline-none border border-gray-400 rounded-md px-4 py-2"
            onClick={toggleDropdown}
          >
            <span>Gaurav</span>
            <svg
              className="w-6 h-6 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 9l6 6 6-6"
              ></path>
            </svg>
          </button>
          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-40 bg-white border rounded-md shadow-lg py-1">
              <div className="flex items-center px-4 py-2">
                <img src="/avatar.png" alt="User Avatar" className="h-12 w-12 rounded-full mr-2" />
                <span className="text-gray-800">Gaurav Meena</span>
              </div>
              <a href="#" className="block px-4 py-2  hover:bg-gray-200 text-sky-700">
                Help
              </a>
              <a href="#" className="block px-4 py-2  hover:bg-gray-200 text-sky-700">
                Settings
              </a>
              <NavLink to={"/"} className="block px-4 py-2  hover:bg-gray-200 text-sky-700">
                Logout
              </NavLink>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
//AdminLogin Component
const AdminLogin = () => {
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  const [isHomeOpen, setIsHomeOpen] = useState(false);
  const [isBlogOpen, setIsBlogOpen] = useState(false);
  const [isInboxOpen, setIsInboxOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);


  const homeSubmenu = () => {
    setIsHomeOpen(!isHomeOpen);
  };
  const toggleSubmenu = () => {
    setIsSubmenuOpen(!isSubmenuOpen);
  };
  const blogSubmenu = () => {
    setIsBlogOpen(!isBlogOpen);
  };
  const inboxSubmenu = () => {
    setIsInboxOpen(!isInboxOpen);
  };
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className='flex'>
      <div className='w-full '> 
     <Header/>
     {/* <Navbar/> */}
     <div className={`transition-all duration-300 flex h-full fixed ${isSidebarOpen ? 'ml-60' : 'ml-0'}`}>
       <button
      className='text-black  py-2 px-4 ml-60'
      onClick={toggleSidebar}
    >
      {isSidebarOpen ? <SlArrowLeft /> : <SlArrowRight />}
    </button>
     <div className='w-60 bg-gray-400 text-black fixed h-full px-4 py-2 '>
        <div className='my-2 mb-4'>
          <h1 className='text-2x font-bold'>Admin Dashboard</h1>
        </div>
        <hr />
        <ul className='mt-3 font-bold'>
          <li className='mb-2 rounded hover:shadow hover:bg-blue-500 py-2 '>
            <div className='flex justify-between items-center px-3' onClick={homeSubmenu}>
              <span>Home</span>
              <span>{isHomeOpen ?  <SlArrowUp /> :  <SlArrowDown/>  }</span>
            </div>
            {isHomeOpen && (
              <ul className='mt-2 ml-4'>
                <li className='mb-2 rounded hover:shadow hover:bg-blue-500 py-2'>
                  <a href='' className='px-3'>
                    Home 1
                  </a>
                </li>
                <li className='mb-2 rounded hover:shadow hover:bg-blue-500 py-2'>
                  <a href='' className='px-3'>
                    Home 2
                  </a>
                </li>
              </ul>
            )}
          </li>
          <li className='mb-2 rounded hover:shadow hover:bg-blue-500 py-2 '>
            <div className='flex justify-between items-center px-3' onClick={blogSubmenu}>
              <span>Blog</span>
              <span>{isBlogOpen ?  <SlArrowUp /> :  <SlArrowDown/> }</span>
            </div>
            {isBlogOpen && (
              <ul className='mt-2 ml-4'>
                <li className='mb-2 rounded hover:shadow hover:bg-blue-500 py-2'>
                  <a href='' className='px-3'>
                    Blog 1
                  </a>
                </li>
                <li className='mb-2 rounded hover:shadow hover:bg-blue-500 py-2'>
                  <a href='' className='px-3'>
                    Blog 2
                  </a>
                </li>
              </ul>
            )}
          </li>
          <li className='mb-2 rounded hover:shadow hover:bg-blue-500 py-2'>
            <div className='flex justify-between items-center px-3' onClick={toggleSubmenu}>
              <span>Reports</span>
              <span>{isSubmenuOpen ?  <SlArrowUp /> :  <SlArrowDown/> }</span>
            </div>
            {isSubmenuOpen && (
              <ul className='mt-2 ml-4'>
                <li className='mb-2 rounded hover:shadow hover:bg-blue-500 py-2'>
                  <a href='' className='px-3'>
                    Sales Report
                  </a>
                </li>
                <li className='mb-2 rounded hover:shadow hover:bg-blue-500 py-2'>
                  <a href='' className='px-3'>
                    Expense Report
                  </a>
                </li>
              </ul>
            )}
          </li>
          <li className='mb-2 rounded hover:shadow hover:bg-blue-500 py-2 '>
            <div className='flex justify-between items-center px-3' onClick={inboxSubmenu}>
              <span>Inbox</span>
              <span>{isInboxOpen ?  <SlArrowUp />:  <SlArrowDown/> }</span>
            </div>
            {isInboxOpen && (
              <ul className='mt-2 ml-4'>
                <li className='mb-2 rounded hover:shadow hover:bg-blue-500 py-2'>
                  <a href='' className='px-3'>
                    Inbox 1
                  </a>
                </li>
                <li className='mb-2 rounded hover:shadow hover:bg-blue-500 py-2'>
                  <a href='' className='px-3'>
                    Inbox 2
                  </a>
                </li>
              </ul>
            )}
          </li>
        </ul>
      </div>
    </div>
    </div>

    </div>

  );
};
export default AdminLogin;

