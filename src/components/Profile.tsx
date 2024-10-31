import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify'; // Import toast and ToastContainer
import 'react-toastify/dist/ReactToastify.css'; // Import CSS for toast notifications
import styles from '../styles/Profile.module.css';
import GoBack from './Goback';
const Profile: React.FC = () => {
    const [profilePic, setProfilePic] = useState<string | null>(null);
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [location, setLocation] = useState('');
    const [postalCode, setPostalCode] = useState('');
    const [goals, setGoals] = useState(''); // Mental health goals
    const [topics, setTopics] = useState(''); // Preferred topics

    // Handle profile picture upload
    const handleProfilePicChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            setProfilePic(URL.createObjectURL(file));
        }
    };

    // Handle form submission (to save changes)
    const handleSaveChanges = () => {
        toast.success('Profile updated successfully!'); // Show success toast
    };

    return (
        <div className={styles.profilePage}>
            <div className={styles.container}>
                <div className={styles.profileHeader}>
                    <GoBack/>
                    <input
                        type="file"
                        accept="image/*"
                        id="profilePic"
                        onChange={handleProfilePicChange}
                        className={styles.hiddenInput}
                    />
                    <label htmlFor="profilePic" className={styles.profilePicLabel}>
                        <img
                            src={profilePic || 'default-profile.png'}
                            alt="Profile"
                            className={styles.profilePic}
                        />
                        <span className={styles.editIcon}>🖉</span>
                    </label>
                </div>
                <div className={styles.form}>
                    <div className={styles.formGroup}>
                        <label>Full Name</label>
                        <input
                            type="text"
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                            className={styles.input}
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <label>Email Address</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className={styles.input}
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <label>Phone Number</label>
                        <input
                            type="tel"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            className={styles.input}
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <label>Location</label>
                        <input
                            type="text"
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                            className={styles.input}
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <label>Postal Code</label>
                        <input
                            type="text"
                            value={postalCode}
                            onChange={(e) => setPostalCode(e.target.value)}
                            className={styles.input}
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <label>Mental Health Goals</label>
                        <input
                            type="text"
                            value={goals}
                            onChange={(e) => setGoals(e.target.value)}
                            className={styles.input}
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <label>Preferred Topics</label>
                        <input
                            type="text"
                            value={topics}
                            onChange={(e) => setTopics(e.target.value)}
                            className={styles.input}
                        />
                    </div>
                    <button onClick={handleSaveChanges} className={styles.saveButton}>
                        Save Changes
                    </button>
                </div>
            </div>
            <ToastContainer /> {/* Add ToastContainer here */}
        </div>
    );
};

export default Profile;
