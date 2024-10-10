import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [age, setAge] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [address, setAddress] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();
        setErrorMessage("");
        try {
            const response = await axios.post("http://localhost:5000/api/register", { name, email, password, age, phoneNumber, address });
            console.log("User registered:", response.data);
            if (response.status === 201) {
                navigate("/");
            }
        } catch (error) {
            if (error.response && error.response.status === 400) {
                setErrorMessage("Email ID already used");
            } else {
                console.error("Registration failed", error);
            }
        }
    };

    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
            <form className="bg-white p-8 rounded-lg shadow-lg w-96" onSubmit={handleRegister}>
                <h2 className="text-2xl font-bold mb-4">Register</h2>
                {errorMessage && (
                    <div className="bg-red-500 text-white p-2 rounded mb-4 text-center">
                        {errorMessage}
                    </div>
                )}
                <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full p-2 mb-4 border border-gray-300 rounded-md"
                />
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full p-2 mb-4 border border-gray-300 rounded-md"
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full p-2 mb-4 border border-gray-300 rounded-md"
                />
                <input
                    type="number"
                    placeholder="Age"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    className="w-full p-2 mb-4 border border-gray-300 rounded-md"
                />
                <input
                    type="text"
                    placeholder="Phone Number"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    className="w-full p-2 mb-4 border border-gray-300 rounded-md"
                />
                <input
                    type="text"
                    placeholder="Address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="w-full p-2 mb-4 border border-gray-300 rounded-md"
                />
                <button type="submit" className="bg-blue-500 text-white p-2 rounded-lg w-full hover:bg-blue-600">
                    Register
                </button>
            </form>
        </div>
    );
};

export default Register;
