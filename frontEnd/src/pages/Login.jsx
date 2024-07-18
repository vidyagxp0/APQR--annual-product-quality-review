import React from "react";

export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center" style={{ backgroundImage: 'linear-gradient(to top, #c1dfc4 0%, #deecdd 100%)' }}>
          <div className="flex w-full max-w-4xl bg-white rounded-lg shadow-lg overflow-hidden">
    
    
            <div className="w-1/2 bg-green-100 p-8 flex items-center justify-center">
              <div className="text-center">
                <img src="/logo11.png" alt="Login Illustration" className="mb-4 mx-auto" />
                <h1 className="text-2xl font-bold text-gray-700 mb-4">Annual Product Quality Review</h1>
              </div>
            </div>
    
    
            <div className="w-1/2 p-8">
            <img src="./gxplogo.png" alt="gxp logo" className=' mx-24 w-1/2 '/>
              <h2 className="text-3xl font-bold text-gray-700 mb-8 text-center mt-12 ">Login to APQR</h2>
              <form>
                <div className="mb-8 mt-12">
                  <label className="block text-gray-900 text-left font-bold">Username or email</label>
                  <input placeholder="Username or email" type="text" className="w-full px-4 py-2 mt-2 border-2 border-gray-400 rounded-lg focus:outline-none focus:ring-1 focus:ring-green-600" />
                </div>
                <div className="mb-4 mt-10">
                  <label className="block text-gray-900 text-left font-bold">Password</label>
                  <input placeholder="Password" type="password" className="w-full px-4 py-2 mt-2 border-2 border-gray-400 rounded-lg focus:outline-none focus:ring-1 focus:ring-green-600" />
                </div>
                <button className="w-full bg-green-600 text-white font-bold py-2 px-4 rounded-lg mt-16 hover:bg-green-700">Login</button>
              </form>
            </div>
          </div>
        </div>
  );
}
