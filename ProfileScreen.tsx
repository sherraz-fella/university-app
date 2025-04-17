import React, { useState , useEffect} from 'react';
//import Route,{useHistory}   from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import adminUser from '../adminUser.json'; // Import the predefined admin user JSON

const AdmissionFormPage: React.FC = () => {
 // const history = useHistory();
  const [profileImage, setProfileImage] = useState<File | null>(null);
  const [profilePreview, setProfilePreview] = useState<string | null>(null);
  const [zipFile, setZipFile] = useState<File | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

const [formData, setFormData] = useState({
    // Personal Info
    firstName: '',
    lastName: '',
    cnic: '',
    dateOfBirth: '',
    gender: '',
    // Academic Info
    recentEducation: '',
    grade: '',
    instituteName: '',
    graduationYear: '',
    instituteAddress: '',
    // Further Info
    personalNumber: '',
    guardianNumber: '',
    address: '',
    city: '',
    district: '',
    province: '',
    language: '',
    email: '',
    permanentAddress: '',
  });
// Simulating user login check from JSON
const checkUserLogin = () => {
  const storedUser = JSON.parse(localStorage.getItem('user') || '{}');
  if (storedUser.email === adminUser.email) {
    setIsLoggedIn(true); // Check if logged in as predefined admin
  } else {
    setIsLoggedIn(false);
    history.push('/login'); // Redirect to login if not logged in as admin
  }
};

useEffect(() => {
  checkUserLogin(); // Run the check when component mounts
}, [history]);




  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleProfileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setProfileImage(file);
      const reader = new FileReader();
      reader.onloadend = () => setProfilePreview(reader.result as string);
      reader.readAsDataURL(file);
    }
  };

  const handleZipUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) setZipFile(file);
  };

  const handleSave = () => {
    toast.success("Data Saved Successfully!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
    });
    // Optionally save to localStorage or backend
  };

  const handleSubmit = () => {
    alert("🎉 Profile Successfully Submitted!");
    history.push('/home'); // Redirect to homepage after form submission
  };

  if (!isLoggedIn) {
    return <div>Loading...</div>; // Show a loading screen if the user is not logged in
  }

  return (
    <div style={styles.page}>
      <div style={styles.header}>
        <h2>Student Admission Form</h2>
        <div>
          {profilePreview ? (
            <img src={profilePreview} alt="Profile" style={styles.profileImage} />
          ) : (
            <div style={styles.profilePlaceholder}>Upload Profile</div>
          )}
          <input type="file" accept="image/*" onChange={handleProfileUpload} />
        </div>
      </div>

      <form style={styles.form}>
        <section style={styles.section}>
          <h3>Personal Information</h3>
          <div style={styles.row}>
            <input style={styles.input} name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} />
            <input style={styles.input} name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} />
          </div>
          <div style={styles.row}>
            <input style={styles.input} name="cnic" placeholder="CNIC" value={formData.cnic} onChange={handleChange} />
            <input style={styles.input} name="dateOfBirth" type="date" value={formData.dateOfBirth} onChange={handleChange} />
          </div>
          <div style={styles.row}>
            <select style={styles.input} name="gender" value={formData.gender} onChange={handleChange}>
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>
        </section>

        <section style={styles.section}>
          <h3>Academic Information</h3>
          <div style={styles.row}>
            <input style={styles.input} name="recentEducation" placeholder="Recent Education" value={formData.recentEducation} onChange={handleChange} />
            <input style={styles.input} name="grade" placeholder="Grade" value={formData.grade} onChange={handleChange} />
          </div>
          <div style={styles.row}>
            <input style={styles.input} name="instituteName" placeholder="Institute Name" value={formData.instituteName} onChange={handleChange} />
            <input style={styles.input} name="graduationYear" placeholder="Graduation Year" value={formData.graduationYear} onChange={handleChange} />
          </div>
          <div style={styles.row}>
            <input style={styles.fullInput} name="instituteAddress" placeholder="Institute Address" value={formData.instituteAddress} onChange={handleChange} />
          </div>
        </section>

        <section style={styles.section}>
          <h3>Further Information</h3>
          <div style={styles.row}>
            <input style={styles.input} name="personalNumber" placeholder="Personal Number" value={formData.personalNumber} onChange={handleChange} />
            <input style={styles.input} name="guardianNumber" placeholder="Guardian Number" value={formData.guardianNumber} onChange={handleChange} />
          </div>
          <div style={styles.row}>
            <input style={styles.input} name="address" placeholder="Current Address" value={formData.address} onChange={handleChange} />
            <input style={styles.input} name="permanentAddress" placeholder="Permanent Address" value={formData.permanentAddress} onChange={handleChange} />
          </div>
          <div style={styles.row}>
            <input style={styles.input} name="city" placeholder="City" value={formData.city} onChange={handleChange} />
            <input style={styles.input} name="district" placeholder="District" value={formData.district} onChange={handleChange} />
          </div>
          <div style={styles.row}>
            <input style={styles.input} name="province" placeholder="Province" value={formData.province} onChange={handleChange} />
            <input style={styles.input} name="language" placeholder="Language" value={formData.language} onChange={handleChange} />
          </div>
          <div style={styles.row}>
            <input style={styles.fullInput} name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
          </div>
        </section>

        <section style={styles.section}>
          <h3>Upload Documents (ZIP)</h3>
          <input type="file" accept=".zip" onChange={handleZipUpload} />
          {zipFile && <p>Selected: {zipFile.name}</p>}
        </section>

        <div style={styles.buttonGroup}>
          <button type="button" style={styles.saveButton} onClick={handleSave}>Save</button>
          <button type="button" style={styles.submitButton} onClick={handleSubmit}>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default AdmissionFormPage;

const styles: { [key: string]: React.CSSProperties } = {
  page: {
    padding: '40px',
    background: '#f8f9fa',
    overflowY: 'auto',
    minHeight: '100vh',
    boxSizing: 'border-box',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 30,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: '50%',
    objectFit: 'cover',
    border: '2px solid #ccc',
  },
  profilePlaceholder: {
    width: 100,
    height: 100,
    borderRadius: '50%',
    backgroundColor: '#ddd',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 12,
    color: '#555',
    marginBottom: 10,
  },
  form: {
    background: '#ffffff',
    padding: 30,
    borderRadius: 10,
    boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
    width: '100%',
    maxWidth: 1200,
    margin: 'auto',
  },
  section: {
    marginBottom: 30,
  },
  row: {
    display: 'flex',
    gap: 20,
    marginBottom: 15,
    flexWrap: 'wrap',
  },
  input: {
    flex: 1,
    padding: 10,
    fontSize: 14,
    borderRadius: 6,
    border: '1px solid #ccc',
  },
  fullInput: {
    width: '100%',
    padding: 10,
    fontSize: 14,
    borderRadius: 6,
    border: '1px solid #ccc',
  },
  buttonGroup: {
    display: 'flex',
    justifyContent: 'flex-end',
    gap: 15,
  },
  saveButton: {
    backgroundColor: '#6c757d',
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    borderRadius: 6,
    cursor: 'pointer',
  },
  submitButton: {
    backgroundColor: '#28a745',
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    borderRadius: 6,
    cursor: 'pointer',
  },
};