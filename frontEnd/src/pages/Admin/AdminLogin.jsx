import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Toaster from '../../Component/Toaster';  
import { toast } from 'react-toastify'; // Import toast to trigger notifications

export default function Login() {
  const [data, setData] = useState({
    email: '',
    password: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const adminLogin = async () => {
    try {
      setLoading(true);
      const response = await axios.post('http://localhost:4000/admin/admin-login', data);
      toast.success('Login Successful!'); 
      localStorage.setItem('token', response.data.token);
      navigate('/admin-dashboard');
    } catch (err) {
      toast.error('Login Failed!'); // Trigger error notification
      setError(err.response ? err.response.data.message : 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  const handleSave = (e) => {
    e.preventDefault();
    adminLogin();
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      
      <div className="flex w-full max-w-4xl bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="w-1/2 bg-green-100 p-8 flex items-center justify-center">
          <div className="text-center">
            <img src="/logo11.png" alt="Login Illustration" className="mb-4 mx-auto" />
            <h1 className="text-2xl font-bold text-gray-700 mb-4">Annual Product Quality Review</h1>
          </div>
        </div>
        <div className="w-1/2 p-8">
          <img src="./gxplogo.png" alt="gxp logo" className="mx-24 w-1/2" />
          <h2 className="text-3xl font-bold text-gray-700 mb-8 text-center mt-12">
            Login to Admin-login Panel
          </h2>
          <form onSubmit={handleSave}>
            <div className="mb-8 mt-12">
              <label className="block text-gray-900 text-left font-bold">Username or email</label>
              <input
                placeholder="Username or email"
                type="text"
                className="w-full px-4 py-2 mt-2 border-2 border-gray-400 rounded-lg"
                value={data.email || ''}
                onChange={(e) => setData({ ...data, email: e.target.value })}
              />
            </div>
            <div className="mb-4 mt-10">
              <label className="block text-gray-900 text-left font-bold">Password</label>
              <input
                placeholder="Password"
                type="password"
                className="w-full px-4 py-2 mt-2 border-2 border-gray-400 rounded-lg"
                value={data.password || ''}
                onChange={(e) => setData({ ...data, password: e.target.value })}
              />
            </div>
            <button
              type="submit"
              className="w-full bg-green-600 text-white font-bold py-2 px-4 rounded-lg mt-16 hover:bg-green-700"
              disabled={loading}
            >
              {loading ? 'Logging in...' : 'Login'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
