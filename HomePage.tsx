import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import './HomePage.css';  // Import your CSS file for styling
import ProfileImage from '../assets/images/profile.png';
import UniversityImage from '../assets/images/UniList.png';
import ApplicationImage from '../assets/images/Status.png'; // Import your images

export default function Homepage() {
  const [image, setImage] = useState<string | null>(null);

  return (
    <div className="home-container">
      <div className="home-content">
        <h1>Welcome! Studify is here to help</h1>
        
        <div className="sections-container">
          <div className="section">
            <div className="icon">
              {/* Add your icons here */}
              <i className="fas fa-user-circle"></i> {/* Example icon */}
            </div>
            <h2>Setup Profile</h2>
            <img src={ProfileImage} alt="Studify Illustration" style={{ 
                display: 'block', 
                margin: '0 auto',  // Centers the image horizontally
                width: '70%', 
                maxWidth: '150px', 
                height: 'auto' 
              }}   />
            <p>Create your profile to get started</p>
            <Link to="/profile">
              <button>Create Profile</button>
            </Link>
          </div>
          
          <div className="section">
            <div className="icon">
              <i className="fas fa-university"></i> {/* Example icon */}
            </div>
            <h2>Universities List</h2>
            <img src={UniversityImage} alt="Studify Illustration" style={{ 
                display: 'block', 
                margin: '0 auto',  // Centers the image horizontally
                width: '70%', 
                maxWidth: '150px', 
                height: 'auto' 
              }}   />
            <p>Browse through available universities</p>
            <Link to="/universities">
              <button>View Universities</button>
            </Link>
          </div>
          
          <div className="section">
            <div className="icon">
              <i className="fas fa-check-circle"></i> {/* Example icon */}
            </div>
            <h2>Application Status</h2>
            <img src={ApplicationImage} alt="Studify Illustration" style={{ 
                display: 'block', 
                margin: '0 auto',  // Centers the image horizontally
                width: '70%', 
                maxWidth: '150px', 
                height: 'auto' 
              }}  />
            <p>Check the status of your application</p>
            <Link to="/application-status">
              <button>Check Status</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}