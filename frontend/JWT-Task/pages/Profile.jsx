import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';


const Profile = () => {
    const [profileData, setProfileData] = useState(null);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/profile', {
                    withCredentials: true
                });

                setProfileData(response.data);
            } catch (err) {
                if (err.response && err.response.status === 401) {
                    navigate('/login');
                } else {
                    setError('Failed to fetch profile data');
                }
            }
        };

        fetchProfile();
    }, [navigate]);

    if (error) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                {error}
            </div>
        );
    }

    if (!profileData) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                Loading...
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 flex justify-center items-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-3xl">
                <div className="flex items-center mb-8">
                    <img
                        src="https://img.freepik.com/premium-vector/default-avatar-profile-icon-social-media-user-image-gray-avatar-icon-blank-profile-silhouette-vector-illustration_561158-3383.jpg"
                        alt="Profile Avatar"
                        className="w-32 h-32 rounded-full border-4 border-indigo-500 shadow-md mr-6"
                    />
                    <div>
                        <h1 className="text-4xl font-semibold text-gray-800">{profileData.name}</h1>
                        <p className="text-lg text-gray-600 mt-1">{profileData.email}</p>
                    </div>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg shadow-md mb-6">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-3">About Me</h2>
                    <p className="text-gray-700 text-lg leading-relaxed">
                        {profileData.about || 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vehicula justo quis quam fermentum, vitae convallis risus condimentum.'}
                    </p>
                </div>

                <div className="flex justify-between items-center mt-8">
                    <Link to="/" className="text-blue-600 hover:text-blue-700 font-semibold text-lg">
                        Home
                    </Link>
                    <Link to="/login" className="text-red-600 hover:text-red-700 font-semibold text-lg">
                        Logout
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Profile;