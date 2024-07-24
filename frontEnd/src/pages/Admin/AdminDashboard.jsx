import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import Header from '../../Component/Header';
import ReactDOM from 'react-dom';
import Select from 'react-select'

// Modal component definition
const Modal = ({ show, onClose, children }) => {
  if (!show) {
    return null;
  }

  return ReactDOM.createPortal(
    <div className="fixed inset-0 bg-gray-800 bg-opacity-90 flex justify-center items-center">
      <div className="bg-white p-10 rounded-lg shadow-xl relative max-w-lg w-full">
        <button className="absolute top-4 right-4 font-semibold text-gray-900 hover:text-gray-900" onClick={onClose}>
          X
        </button>
        {children}
      </div>
    </div>,
    document.body
  );
};

const AdminDashboard = () => {
  const [viewPermissions, setViewPermissions] = useState(null);
  const [showAddUserModal, setShowAddUserModal] = useState(false);
  const [isSelected,setIsSelected]=useState([])
  const [newUser, setNewUser] = useState({
    name: '',
    email: '',
    age: '',
    gender: '',
    password: '',
    profilePicture: '',
    role: []
  });

  const members = [
    {
      name: 'Gaurav Meena',
      email: 'Gaurav10@email.com',
      permissions: ['Admin', 'Editor', 'Viewer'],
      lastLogin: 'Sep 5, 2019',
      photo: '/gg.png'
    },
    {
      name: 'Pankaj Jat',
      email: 'Pankaj.Jat@email.com',
      permissions: ['Editor', 'Viewer'],
      lastLogin: 'Sep 5, 2019',
      photo: '/p.png'
    },
    {
      name: 'Harshita Sahu',
      email: 'Harshita@email.com',
      permissions: ['Viewer'],
      lastLogin: 'Sep 5, 2019',
      photo: '/hh.jpg'
    },
    {
      name: 'Roshani Sahu',
      email: 'Roshani03@wix.com',
      permissions: ['Member'],
      lastLogin: 'Sep 5, 2019',
      photo: '/r.png'
    },
    {
      name: 'Anshul Thakur',
      email: 'Anshul.thakur@wix.com',
      permissions: ['Member'],
      lastLogin: 'Sep 5, 2019',
      photo: '/a.png'
    },
  ];

  const togglePermissions = (index) => {
    setViewPermissions(index !== null ? members[index] : null);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewUser((prevUser) => ({
      ...prevUser,
      [name]: value
    }));
  };

 
const options = [
  { value: 'Admin', label: 'Admin' },
  { value: 'user', label: 'user' },
  { value: 'manager', label: 'manager' },
  { value: 'Pankaj', label: 'Pankaj' }


]
console.log(isSelected,"select")
  const handleAddUser = () => {
    // Logic for adding a new user can be implemented here
    console.log(newUser);
    setShowAddUserModal(false);
  };

  return (
    <div>
      <Header />
      <div className="min-h-screen bg-gray-100 p-6">
        <div className="bg-white shadow-xl rounded-xl p-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-4xl font-semibold m-4">Member List</h2>
            <button
              style={{ backgroundImage: 'linear-gradient(135deg, #8bc6ec 0%, #9599e2 100%)' }}
              className="bg-sky-500 text-white py-2 px-4 rounded hover:bg-sky-700"
              onClick={() => setShowAddUserModal(true)}
            >
              Add User
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white">
              <thead>
                <tr className="w-full bg-sky-400 text-left shadow-lg rounded-s-2xl" style={{ backgroundImage: 'linear-gradient(135deg, #8bc6ec 0%, #9599e2 100%)' }}>
                  <th className="py-4 px-6 uppercase font-semibold text-sm">Name</th>
                  <th className="py-3 px-4 uppercase font-semibold text-sm">Login Email</th>
                  <th className="py-3 px-4 uppercase font-semibold text-sm">Permissions</th>
                  <th className="py-3 px-4 uppercase font-semibold text-sm">Last Login</th>
                  <th className="py-3 px-4 uppercase font-semibold text-sm">Actions</th>
                </tr>
              </thead>
              <tbody>
                {members.map((member, index) => (
                  <tr key={index} className="text-gray-700">
                    <td className="py-3 px-4 flex items-center">
                      <img
                        className="w-10 h-10 rounded-full mr-4"
                        src={member.photo}
                        alt={`${member.name}'s profile`}
                      />
                      {member.name}
                    </td>
                    <td className="py-3 px-4">{member.email}</td>
                    <td className="py-3 px-4">
                      <button
                        className="text-blue-500 hover:underline"
                        onClick={() => togglePermissions(index)}
                      >
                        View Permissions
                      </button>
                    </td>
                    <td className="py-3 px-4">{member.lastLogin}</td>
                    <td className="py-3 px-4">
                      <button className="text-blue-500 hover:underline mx-2">
                        <FontAwesomeIcon icon={faEdit} />
                      </button>
                      <button className="text-blue-500 hover:underline mx-2">
                        <FontAwesomeIcon icon={faTrash} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Modal show={viewPermissions !== null} onClose={() => togglePermissions(null)}>
  {viewPermissions && (
    <div className="bg-white rounded-lg shadow-lg p-6 max-w-md mx-auto">
      <h2 className="text-2xl font-semibold text-blue-400 text-sl mb-4 text-center">{`Permissions for ${viewPermissions.name}`}</h2>
      <div className="text-center flex flex-col gap-4 ml-6 mb-6 max-h-60 overflow-y-auto">
        {viewPermissions.permissions.map((permission, i) => (
          <li
            key={i}
            className="text-lg text-white bg-slate-800 rounded p-3 hover:bg-gray-200 transition duration-200"
            style={{ backgroundImage: 'linear-gradient(135deg, #8bc6ec 0%, #9599e2 100%)' }}
          >
            {permission}
          </li>
        ))}
      </div>
    </div>
  )}
</Modal>


      <Modal show={showAddUserModal} onClose={() => setShowAddUserModal(false)}>
        <h2 className="text-3xl text-center text-sky-600 font-semibold mb-8">Add User</h2>
        <form className="flex flex-col gap-6">
          <div className="flex flex-col">
            <label htmlFor="name" className='mb-1' >Name:</label>
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-500 transition duration-300"
            value={newUser.name}
            onChange={handleInputChange}
          /></div>
          <div className="flex flex-col">
          <label htmlFor="name" className='mb-1' >Email:</label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-500 transition duration-300"
            value={newUser.email}
            onChange={handleInputChange}
          /></div>
          <div className="flex flex-col">
          <label htmlFor="name" className='mb-1' >Age:</label>
          <input
            type="number"
            name="age"
            placeholder="Age"
            className="p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-500 transition duration-300"
            value={newUser.age}
            onChange={handleInputChange}
          /></div>
          <select
            name="gender"
            className="p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-500 transition duration-300"
            value={newUser.gender}
            onChange={handleInputChange}
          >
            <option value="Select gender" placeholder="Select gender" disabled >Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
          <div className="flex flex-col">
          <label htmlFor="name" className='mb-1' >Password:</label>
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-500 transition duration-300"
            value={newUser.password}
            onChange={handleInputChange}
          /></div>
          
          <input
            type="file"
            name="profilePicture"
            className="p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-500 transition duration-300"
            onChange={(e) => setNewUser((prevUser) => ({
              ...prevUser,
              profilePicture: e.target.files[0]
            }))}
          />
         <div className="flex flex-col">
         <label htmlFor="name" className='mb-1' >Permissions:</label>
          <Select 
             isMulti
            options={options}
         value={isSelected}
         onChange={(data)=>setIsSelected(data)}
          
      
          /></div>
          
          <button
            type="button"
            className="bg-gradient-to-r from-blue-500 to-blue-600 text-white py-2 px-4 rounded-lg shadow-md hover:from-blue-600 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300 mt-4"
            onClick={handleAddUser}
          >
            Add User
          </button>
        </form>
      </Modal>
    </div>
  );
};

export default AdminDashboard;
