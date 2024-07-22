import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import Header from '../../Component/Header';
import ReactDOM from 'react-dom';

// Modal component definition
const Modal = ({ show, onClose, children }) => {
  if (!show) {
    return null;
  }

  return ReactDOM.createPortal(
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-4 rounded shadow-lg">
        <button className="bg-red-500 text-white py-1 px-2 rounded hover:bg-red-700 mb-4" onClick={onClose}>Close</button>
        {children}
      </div>
    </div>,
    document.body
  );
};

const AdminDashboard = () => {
  const [viewPermissions, setViewPermissions] = useState(null);

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

  return (
    <div>
      <Header />
      <div className="min-h-screen bg-gray-100 p-6">
        <div className="bg-white shadow-xl rounded-xl p-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-4xl font-semibold m-4">Member List</h2>
            <button className="bg-sky-500 text-white py-2 px-4 rounded hover:bg-sky-700">Add User</button>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white">
              <thead>
                <tr className="w-full bg-sky-400 text-left shadow-lg rounded-s-2xl">
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
          <>
            <h2 className="text-3xl font-semibold mb-9">Permissions for {viewPermissions.name}</h2>
            <ul className="list-disc flex flex-col  gap-10 ml-6 mb-6">
              {viewPermissions.permissions.map((permission, i) => (
                <li key={i}>{permission}</li>
              ))}
            </ul>
          </>
        )}
      </Modal>
    </div>
  );
};

export default AdminDashboard;
