import React from 'react'
import Header from '../../Component/Header'

const AdminDashboard = () => {
  const members = [
    { name: 'Sue Flay', email: 'sue.flay@email.com', lastLogin: 'Sep 5, 2019' },
    { name: 'Marsha Mellow', email: 'marsha.mallow@email.com', lastLogin: 'Sep 5, 2019' },
    { name: 'Freddie Jones', email: 'freddie@email.com', lastLogin: 'Sep 5, 2019' },
    { name: 'Jean Lorder', email: 'happydays@wix.com', lastLogin: 'Sep 5, 2019' },
  ];
  return (
    <div>
      <Header />
      <div className="min-h-screen bg-gray-100 p-6">
      <div className="bg-white shadow-md rounded-lg p-4">
        <h2 className="text-xl font-semibold mb-4">Member List</h2>        <div className="overflow-x-auto">
          <table className="min-w-full bg-white">
            <thead>
              <tr className="w-full bg-gray-200 text-left">
                <th className="py-3 px-4 uppercase font-semibold text-sm">Name</th>
                <th className="py-3 px-4 uppercase font-semibold text-sm">Login Email</th>
                <th className="py-3 px-4 uppercase font-semibold text-sm">Last Login</th>
                <th className="py-3 px-4 uppercase font-semibold text-sm">Actions</th>
              </tr>
            </thead>
            <tbody>
              {members.map((member, index) => (
                <tr key={index} className="text-gray-700">
                  <td className="py-3 px-4">{member.name}</td>
                  <td className="py-3 px-4">{member.email}</td>
                  <td className="py-3 px-4">{member.lastLogin}</td>
                  <td className="py-3 px-4">
                    <button className="text-blue-500 hover:underline">Edit</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
    </div>
  )
}

export default AdminDashboard
