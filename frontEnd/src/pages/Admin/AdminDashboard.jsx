import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import Header from "../../Component/Header";
import Select from "react-select";
import axios from "axios";
import { toast } from "react-toastify";

const ConfirmationModal = ({ show, onClose, onConfirm, member }) => {
  if (!show) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-60">
      <div className="bg-white p-10 rounded-lg shadow-xl">
        <h2 className="text-xl font-bold">Confirm Deletion</h2>
        <p className="mt-3 mb-5 font-medium">
          Are you sure you want to delete {member.name}?
        </p>
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
    <div className="fixed inset-0 bg-gray-800 bg-opacity-90 flex justify-center items-center">
      <div className="bg-white p-10 rounded-lg shadow-xl relative max-w-lg w-full">
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
  const [showConfirm, setShowConfirm] = useState(false);
  const [memberToDelete, setMemberToDelete] = useState(null);
  const [showAddUserModal, setShowAddUserModal] = useState(false);
  const [tableDataLoading, setTableDataLoading] = useState(false);
  const [roles, setRoles] = useState([]);
  const [data, setData] = useState([]);
  const [newUser, setNewUser] = useState({
    name: "",
    email: "",
    age: "",
    gender: "",
    password: "",
    profilePicture: null,
    rolesArray: [],
  });
  console.log(viewPermissions, "table");
  const togglePermissions = (index) => {
    setViewPermissions(index !== null ? data[index] : null);
  };

  const handleEditClick = (index) => {
    setEditMember({ ...data[index], index });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewUser((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleDeleteClick = (member) => {
    setMemberToDelete(member);
    setShowConfirm(true);
  };

  const handleConfirmDelete = async () => {
    try {
      const response = await axios.delete(
        `http://localhost:4000/admin/delete-user/${memberToDelete.user_id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      toast.success('User deleted successfully');
      setShowConfirm(false);
  
      // Refresh the table data after deletion
      setData((prevData) => prevData.filter((user) => user.user_id !== memberToDelete.user_id));
    } catch (error) {
      toast.error("Failed to delete user. Please try again.");
    }
  };
  
  const token = localStorage.getItem("token");

  const handleAddUser = async () => {
    try {
      const response = await axios.post(
        "http://localhost:4000/admin/add-user",
        newUser,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      toast.success("User Add Successfully");
      setShowAddUserModal(false);
    } catch (error) {
      toast.error(
        error.response ? error.response.data.message : "Something went wrong"
      );
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      setTableDataLoading(true);
      try {
        const response = await axios.get(
          "http://localhost:4000/admin/get-all-users",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setData(response.data.response);
      } catch (error) {
        console.error("There was a problem with the API call:", error);
      } finally {
        setTableDataLoading(false);
      }
    };
    setTimeout(fetchData, 500);
  }, []);

  const handleSave = async () => {
    try {
      const response = await axios.put(
        `http://localhost:4000/admin/edit-user/${editMember.user_id}`,
        editMember,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 200) {
        const updatedMembers = [...data];
        updatedMembers[editMember.index] = { ...editMember };
        delete updatedMembers[editMember.index].index;

        setData(updatedMembers);
        setEditMember(null);
        toast.success("User Updated Successfully");
      } else {
        toast.error("Failed to update member");
      }
    } catch (error) {
      console.error("Error updating member:", error);
    }
  };

  useEffect(() => {
    const roles = async () => {
      try {
        const allRoles = await axios.get(
          "http://localhost:4000/admin/get-all-roles",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setRoles(allRoles.data.response);
      } catch (error) {
        console.error("There was a problem with the API call:", error);
      }
    };
    const timer = setTimeout(roles, 500);
    return () => clearTimeout(timer);
  }, []);

  const role = roles.map((item) => {
    return {
      value: item.role_id,
      label: item.role,
    };
  });

  return (
    <div>
      <Header />
      <div className="min-h-screen bg-gray-100 p-6">
        <div className="bg-white shadow-xl rounded-xl p-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-4xl font-semibold m-4">Member List</h2>
            <button
              className="bg-sky-500 text-white py-2 px-4 rounded hover:bg-sky-700"
              onClick={() => setShowAddUserModal(true)}
              style={{
                backgroundImage:
                  "linear-gradient(135deg, #8bc6ec 0%, #9599e2 100%)",
              }}
            >
              Add User
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white">
              <thead>
                <tr
                  className="w-full bg-sky-400 text-left shadow-lg rounded-s-2xl"
                  style={{
                    backgroundImage:
                      "linear-gradient(135deg, #8bc6ec 0%, #9599e2 100%)",
                  }}
                >
                  <th className="py-4 px-4 uppercase font-semibold text-sm">
                    Name
                  </th>
                  <th className="py-3 px-4 uppercase font-semibold text-sm">
                    Login Email
                  </th>
                  <th className="py-3 px-4 uppercase font-semibold text-sm">
                    Permissions
                  </th>
                  <th className="py-3 px-4 uppercase font-semibold text-sm">
                    Last Login
                  </th>
                  <th className="py-3 px-4 uppercase font-semibold text-sm">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {data?.map((member, index) => (
                  <tr key={index} className="text-gray-700">
                    <td className="py-3 px-4 flex items-center">
                      {/* <img
                        className="w-10 h-10 rounded-full mr-4"
                        src={member.photo}
                        alt={`${member.name}'s profile`}
                      /> */}
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
                      <button
                        className="text-blue-500 hover:underline mx-2"
                        onClick={() => handleEditClick(index)}
                      >
                        <FontAwesomeIcon icon={faEdit} />
                      </button>
                      <button
                        className="text-blue-500 hover:underline mx-2"
                        onClick={() => handleDeleteClick(member)}
                      >
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
              className="absolute top-4 right-4 text-black py-1 px-2 rounded"
              onClick={() => togglePermissions(null)}
            >
              X
            </button>
            <h2 className="text-2xl font-semibold text-blue-400 mb-4 text-center mt-4">
              Permissions for {viewPermissions.name}
            </h2>
            <div className="text-center flex flex-col gap-4 mx-6 mb-6 max-h-60 overflow-y-auto">
              {viewPermissions.UserRoles.map((permission, i) => (
                <li
                  key={i}
                  className="text-lg text-white rounded p-3 hover:bg-gray-200 transition duration-200"
                  style={{
                    backgroundImage:
                      "linear-gradient(135deg, #8bc6ec 0%, #9599e2 100%)",
                  }}
                >
                  {permission.role}
                </li>
              ))}
            </div>
          </div>
        </div>
      )}

      {editMember && (
        <Modal show={!!editMember} onClose={() => setEditMember(null)}>
          <h2 className="text-2xl mb-4 text-center">Edit Member</h2>
          <div className="mb-4">
            <label className="block mb-2">Name:</label>
            <input
              className="w-full border border-gray-300 p-2 rounded"
              type="text"
              value={editMember.name} // Show selected member's name
              onChange={(e) =>
                setEditMember({ ...editMember, name: e.target.value })
              }
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Email</label>
            <input
              className="w-full border border-gray-300 p-2 rounded"
              type="email"
              value={editMember.email} // Show selected member's email
              onChange={(e) =>
                setEditMember({ ...editMember, email: e.target.value })
              }
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Roles</label>
            <Select
              isMulti
              value={editMember.UserRoles.map((permission) => ({
                value: permission.role_id,
                label: permission.role,
              }))}
              options={role}
              onChange={(selectedOptions) =>
                setEditMember({
                  ...editMember,
                  UserRoles: selectedOptions.map((option) => ({
                    role_id: option.value,
                    role: option.label,
                  })),
                })
              }
            />
          </div>

          <div className="flex justify-end">
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
              onClick={handleSave}
            >
              Save
            </button>
            <button
              className="bg-gray-500 text-white px-4 py-2 rounded"
              onClick={() => setEditMember(null)}
            >
              Cancel
            </button>
          </div>
        </Modal>
      )}

      {showAddUserModal && (
        <Modal
          show={showAddUserModal}
          onClose={() => setShowAddUserModal(false)}
        >
          <h2 className="text-2xl mb-4 text-center">Add New User</h2>
          <div className="mb-4">
            <label className="block mb-2">Name:</label>
            <input
              className="w-full border border-gray-300 p-2 rounded"
              type="text"
              name="name"
              value={newUser.name}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Email:</label>
            <input
              className="w-full border border-gray-300 p-2 rounded"
              type="email"
              name="email"
              value={newUser.email}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Age:</label>
            <input
              className="w-full border border-gray-300 p-2 rounded"
              type="number"
              name="age"
              value={newUser.age}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Gender:</label>
            <select
              className="w-full border border-gray-300 p-2 rounded"
              name="gender"
              value={newUser.gender}
              onChange={handleInputChange}
            >
              <option value="" disabled>
                Select Gender
              </option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div className="mb-4">
            <label className="block mb-2">Password:</label>
            <input
              className="w-full border border-gray-300 p-2 rounded focus:border-blue-500 "
              type="password"
              name="password"
              value={newUser.password}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Roles</label>
            <Select
              isMulti
              value={isSelected}
              options={role}
              onChange={(selectedOptions) => {
                setIsSelected(selectedOptions);
                setNewUser({
                  ...newUser,
                  rolesArray: selectedOptions.map((option) => option.value),
                });
              }}
            />
          </div>
          <div className="flex justify-end">
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
              onClick={handleAddUser}
            >
              Add User
            </button>
            <button
              className="bg-gray-500 text-white px-4 py-2 rounded"
              onClick={() => setShowAddUserModal(false)}
            >
              Cancel
            </button>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default AdminDashboard;
