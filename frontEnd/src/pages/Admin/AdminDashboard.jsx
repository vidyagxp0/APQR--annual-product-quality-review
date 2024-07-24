import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import Header from '../../Component/Header';
import Select from 'react-select';

const ConfirmationModal = ({ show, onClose, onConfirm, member }) => {
  if (!show) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50">
      <div className="bg-white p-6 rounded shadow-lg">
        <h2 className="text-lg font-bold">Confirm Deletion</h2>
        <p>Are you sure you want to delete {member.name}?</p>
        <div className="mt-4 flex justify-end">
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
            onClick={() => {
              onConfirm(member.email);
              onClose();
            }}
          >
            Confirm
          </button>
          <button
            className="bg-gray-500 text-white px-4 py-2 rounded"
            onClick={onClose}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

const Modal = ({ show, onClose, children }) => {
  if (!show) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-60">
    <div className="relative bg-white p-4 rounded shadow-lg max-w-md w-full">
      <button
        className="absolute top-4 right-4 text-black py-1 px-2 rounded"
        onClick={onClose}
      >
        X
      </button>
      {children}

    </div>
  </div>
  );
};

const AdminDashboard = () => {
  const [viewPermissions, setViewPermissions] = useState(null);
  const [editMember, setEditMember] = useState(null);
  const [isSelected, setIsSelected] = useState([]);
  const [members, setMembers] = useState([
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
  ]);
  const [showConfirm, setShowConfirm] = useState(false);
  const [memberToDelete, setMemberToDelete] = useState(null);
  const [showAddUserModal, setShowAddUserModal] = useState(false);
  const [newUser, setNewUser] = useState({
    name: '',
    email: '',
    age: '',
    gender: '',
    password: '',
    profilePicture: null,
    permissions: []
  });

  const togglePermissions = (index) => {
    setViewPermissions(index !== null ? members[index] : null);
  };

  const handleEditClick = (index) => {
    setEditMember(index !== null ? { ...members[index], index } : null);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewUser((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSave = () => {
    const updatedMembers = [...members];
    updatedMembers[editMember.index] = { ...editMember };
    delete updatedMembers[editMember.index].index;
    setMembers(updatedMembers);
    setEditMember(null);
  };

  const handleDeleteClick = (member) => {
    setMemberToDelete(member);
    setShowConfirm(true);
  };

  const handleConfirmDelete = (email) => {
    setMembers(members.filter(member => member.email !== email));
    setShowConfirm(false);
  };

  const handleAddUser = () => {
    setMembers([...members, newUser]);
    setShowAddUserModal(false);
    setNewUser({
      name: '',
      email: '',
      age: '',
      gender: '',
      password: '',
      profilePicture: null,
      permissions: []
    });
    setIsSelected([]);
  };

  const options = [
    { value: 'Admin', label: 'Admin' },
    { value: 'Editor', label: 'Editor' },
    { value: 'Viewer', label: 'Viewer' },
    { value: 'Member', label: 'Member' }
  ];

  return (
    <div>
      <Header />
      <div className="min-h-screen bg-gray-100 p-6">
        <div className="bg-white shadow-xl rounded-xl p-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-4xl font-semibold m-4">Member List</h2>
            <button
              className=" text-white py-2 px-4 rounded hover:bg-sky-700"
              onClick={() => setShowAddUserModal(true)} style={{ backgroundImage: 'linear-gradient(135deg, #8bc6ec 0%, #9599e2 100%)' }}
            >
              Add User
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white">
              <thead>
                <tr className="w-full text-left shadow-lg rounded-s-2xl"style={{ backgroundImage: 'linear-gradient(135deg, #8bc6ec 0%, #9599e2 100%)' }}>
                  <th className="py-4 px-4 uppercase font-semibold text-sm">Name</th>
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
                      <img className="w-10 h-10 rounded-full mr-4" src={member.photo} alt={`${member.name}'s profile`} />
                      {member.name}
                    </td>
                    <td className="py-3 px-4">{member.email}</td>
                    <td className="py-3 px-4">
                      <button className="text-blue-500 hover:underline" onClick={() => togglePermissions(index)}>
                        View Permissions
                      </button>
                    </td>
                    <td className="py-3 px-4">{member.lastLogin}</td>
                    <td className="py-3 px-4">
                      <button className="text-blue-500 hover:underline mx-2" onClick={() => handleEditClick(index)}>
                        <FontAwesomeIcon icon={faEdit} />
                      </button>
                      <button className="text-blue-500 hover:underline mx-2" onClick={() => handleDeleteClick(member)}>
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
      {showConfirm && (
        <ConfirmationModal
          show={showConfirm}
          onClose={() => setShowConfirm(false)}
          onConfirm={handleConfirmDelete}
          member={memberToDelete}
        />
      )}
      {viewPermissions && (
  <div className="fixed inset-0 bg-gray-600 bg-opacity-90 flex justify-center items-center">
    <div className="bg-white rounded-lg shadow-lg p-6 max-w-md mx-auto relative">
      <button
        className="absolute top-4 right-4 text-black py-1 px-2 rounded mb-4"
        onClick={() => togglePermissions(null)}
      >
        X
      </button>
      <h2 className="text-2xl font-semibold text-blue-400 mb-4 text-center">
        Permissions for {viewPermissions.name}
      </h2>
      <div className="text-center flex flex-col gap-4 mx-6 mb-6 max-h-60 overflow-y-auto">
        {viewPermissions.permissions.map((permission, i) => (
          <li
            key={i}
            className="text-lg text-white rounded p-3 hover:bg-gray-200 transition duration-200"
            style={{ backgroundImage: 'linear-gradient(135deg, #8bc6ec 0%, #9599e2 100%)' }}
          >
            {permission}
          </li>
        ))}
      </div>
    </div>
  </div>
)}


      {editMember && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-90 flex justify-center items-center">
          <div className="bg-white p-6 rounded shadow-lg relative max-w-lg w-full">
            <button className="absolute top-4 right-4 text-black py-1 px-2 rounded mb-4" onClick={() => setEditMember(null)}>X</button>
            <h2 className="text-3xl font-semibold mb-6 flex justify-center">Edit User</h2>
            <form className='p-3'>
              <div className="mb-4">
                <label className="block text-gray-700 p-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={editMember.name}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border rounded"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 p-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={editMember.email}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border rounded p-3"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 p-2">Permissions</label>
                <Select
                  isMulti
                  options={options}
                  value={isSelected}
                  onChange={(data) => setIsSelected(data)}
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 p-2">Last Login</label>
                <input
                  type="text"
                  name="lastLogin"
                  value={editMember.lastLogin}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border rounded"
                />
              </div>
              <button
                type="button"
                onClick={handleSave}
                className="bg-blue-700 text-white py-2 px-4 w-full rounded flex justify-center items-center"
              >
                Save
              </button>
            </form>
          </div>
        </div>
      )}
    <Modal show={showAddUserModal} onClose={() => setShowAddUserModal(false)}>
  <h2 className="text-2xl text-center text-sky-600 font-semibold mb-6">Add User</h2>
  <form className="flex flex-col gap-4 max-h-96 overflow-y-auto scrollbar-custom">
    <div className="flex flex-col">
      <label htmlFor="name" className='mb-1'>Name:</label>
      <input
        type="text"
        name="name"
        placeholder="Name"
        className="p-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-500 transition duration-300"
        value={newUser.name}
        onChange={handleInputChange}
      />
    </div>
    <div className="flex flex-col">
      <label htmlFor="email" className='mb-1'>Email:</label>
      <input
        type="email"
        name="email"
        placeholder="Email"
        className="p-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-500 transition duration-300"
        value={newUser.email}
        onChange={handleInputChange}
      />
    </div>
    <div className="flex flex-col">
      <label htmlFor="age" className='mb-1'>Age:</label>
      <input
        type="number"
        name="age"
        placeholder="Age"
        className="p-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-500 transition duration-300"
        value={newUser.age}
        onChange={handleInputChange}
      />
    </div>
    <div className="flex flex-col">
      <label htmlFor="gender" className='mb-1'>Gender:</label>
      <select
        name="gender"
        className="p-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-500 transition duration-300"
        value={newUser.gender}
        onChange={handleInputChange}
      >
        <option value="" disabled>Select Gender</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Other">Other</option>
      </select>
    </div>
    <div className="flex flex-col">
      <label htmlFor="password" className='mb-1'>Password:</label>
      <input
        type="password"
        name="password"
        placeholder="Password"
        className="p-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-500 transition duration-300"
        value={newUser.password}
        onChange={handleInputChange}
      />
    </div>
    <div className="flex flex-col">
      <label htmlFor="profilePicture" className='mb-1'>Profile Picture:</label>
      <input
        type="file"
        name="profilePicture"
        className="p-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-500 transition duration-300"
        onChange={(e) => setNewUser((prevUser) => ({
          ...prevUser,
          profilePicture: e.target.files[0]
        }))}
      />
    </div>
    <div className="flex flex-col">
      <label htmlFor="permissions" className='mb-1'>Permissions:</label>
      <Select
        isMulti
        options={options}
        value={isSelected}
        onChange={(data) => {
          setIsSelected(data);
          setNewUser((prevUser) => ({
            ...prevUser,
            permissions: data.map(d => d.value)
          }));
        }}
      />
    </div>
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
