import React, { useContext, useState } from 'react';
import { ToggleComponent } from '../context/ToggleComponent';
import AdminNavbar from './AdminNavbar'; // Import AdminNavbar component

export const LoginForm = ({ setIsAdmin }) => {
    const { showRegister, setShowRegister, showLogin, setShowLogin } = useContext(ToggleComponent);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        // Check if the email and password match the admin credentials
        if (email === 'admin@example.com' && password === 'adminpassword') {
            setIsAdmin(true);
            setShowLogin(false); // Close the login form
        } else {
            alert('Invalid credentials');
        }
    };

    if (!showLogin) {
        return null;
    }

    return (
        <div className='fixed flex flex-col items-center z-50 bg-[#ffffff] bg-opacity-75 backdrop-blur-md border border-[#202020] rounded-2xl my-52 mx-[37.5%] px-4'>
            <h1 className='p-5 text-5xl text-[#202020] unna-bold'>
                Login
            </h1>
            <div className='flex flex-col'>
                <input
                    type="text"
                    placeholder='Email'
                    className='my-2 py-2 bg-[#ffffff] border border-[#202020] rounded-lg px-4 w-96'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder='Password'
                    className='my-2 py-2 bg-[#ffffff] border border-[#202020] rounded-lg px-4 w-96'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <div className='mt-4'>
                <button
                    className='border-[#202020] bg-[#202020] text-white px-20 py-2 rounded-md font-semibold'
                    onClick={handleLogin}
                >
                    LOGIN
                </button>
            </div>
            <div>
                <sub>
                    don't have account? 
                    <button className='underline pl-1 pb-6' onClick={() => { setShowRegister(!showRegister); setShowLogin(!showLogin); }}>Register here</button>
                </sub>
            </div>
            <button className="absolute top-4 right-4 text-gray-800" onClick={() => { setShowLogin(false); }}>
                &times;
            </button>
        </div>
    );
};

// Conditionally render AdminNavbar if the user is admin
const App = () => {
    const [isAdmin, setIsAdmin] = useState(false);

    return (
        <div>
            {isAdmin ? <AdminNavbar /> : <LoginForm setIsAdmin={setIsAdmin} />}
        </div>
    );
};

export default App;
