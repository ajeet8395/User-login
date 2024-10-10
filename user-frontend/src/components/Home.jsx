import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../features/userSlice";
import axios from "axios";

const Home = () => {
    const dispatch = useDispatch();
    const { users, loading, error } = useSelector((state) => state.user);
    const [isEditing, setIsEditing] = useState(false);
    const [currentUser, setCurrentUser] = useState({});

    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch]);

    const handleEditClick = (user) => {
        setCurrentUser(user);
        setIsEditing(true);
    };

    const handleDeleteClick = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/api/users/${id}`);
            dispatch(fetchUsers());
        } catch (error) {
            console.error("Error deleting user", error);
        }
    };

    const handleUpdateUser = async () => {
        try {
            await axios.put(`http://localhost:5000/api/users/${currentUser._id}`, currentUser);
            setIsEditing(false);
            dispatch(fetchUsers());
        } catch (error) {
            console.error("Error updating user", error);
        }
    };

    if (loading) {
        return <div className="p-10">Loading users...</div>;
    }

    if (error) {
        return <div className="p-10 text-red-500">{error}</div>;
    }

    return (
        <div className="p-10">
            <h1 className="text-3xl font-bold mb-5">Users</h1>
            <table className="min-w-full bg-white border border-gray-300">
                <thead>
                    <tr>
                        <th className="border border-gray-300 p-2">Name</th>
                        <th className="border border-gray-300 p-2">Email</th>
                        <th className="border border-gray-300 p-2">Age</th>
                        <th className="border border-gray-300 p-2">Phone Number</th>
                        <th className="border border-gray-300 p-2">Address</th>
                        <th className="border border-gray-300 p-2">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user._id} className="border-b border-gray-300">
                            <td className="border border-gray-300 p-2">{user.name}</td>
                            <td className="border border-gray-300 p-2">{user.email}</td>
                            <td className="border border-gray-300 p-2">{user.age}</td>
                            <td className="border border-gray-300 p-2">{user.phoneNumber}</td>
                            <td className="border border-gray-300 p-2">{user.address}</td>
                            <td className="border border-gray-300 p-2 flex justify-center space-x-4">
                                <button className="bg-green-500 text-white px-4 py-1 rounded-md hover:bg-green-600" onClick={() => handleEditClick(user)}>Edit</button>
                                <button className="bg-red-500 text-white px-4 py-1 rounded-md hover:bg-red-600 " onClick={() => handleDeleteClick(user._id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {isEditing && (
                <div className="modal mt-8">
                    <h2 className="text-2xl font-bold">Edit User</h2>
                    <div className="mt-2 p-4 border">
                        <table className="w-full">
                            <tbody>
                                <tr>
                                    <td>
                                        <input
                                            type="text"
                                            value={currentUser.name}
                                            onChange={(e) => setCurrentUser({ ...currentUser, name: e.target.value })}
                                            placeholder="Name"
                                            className="border p-2 w-full"
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <input
                                            type="email"
                                            value={currentUser.email}
                                            onChange={(e) => setCurrentUser({ ...currentUser, email: e.target.value })}
                                            placeholder="Email"
                                            className="border p-2 w-full"
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <input
                                            type="number"
                                            value={currentUser.age}
                                            onChange={(e) => setCurrentUser({ ...currentUser, age: e.target.value })}
                                            placeholder="Age"
                                            className="border p-2 w-full"
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <input
                                            type="text"
                                            value={currentUser.phoneNumber}
                                            onChange={(e) => setCurrentUser({ ...currentUser, phoneNumber: e.target.value })}
                                            placeholder="Phone Number"
                                            className="border p-2 w-full"
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <input
                                            type="text"
                                            value={currentUser.address}
                                            onChange={(e) => setCurrentUser({ ...currentUser, address: e.target.value })}
                                            placeholder="Address"
                                            className="border p-2 w-full"
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="flex justify-center space-x-4 mt-4">
                                            <button onClick={handleUpdateUser} className="bg-blue-500 text-white p-2 rounded">
                                                Save
                                            </button>
                                            <button onClick={() => setIsEditing(false)} className="bg-red-500 text-white p-2 rounded">
                                                Cancel
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

            )}
        </div>
    );
};

export default Home;
