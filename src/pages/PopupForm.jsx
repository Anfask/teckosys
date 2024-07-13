import { useState } from 'react';
import './PopupForm.css';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, push } from 'firebase/database';
import Swal from 'sweetalert2';

const firebaseConfig = {
  apiKey: "AIzaSyAeqXIQyc4t29D0YwWMvo6bxP_ZqaKbZ64",
  authDomain: "shell-e8be5.firebaseapp.com",
  databaseURL: "https://shell-e8be5-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "shell-e8be5",
  storageBucket: "shell-e8be5.appspot.com",
  messagingSenderId: "1012526252582",
  appId: "1:1012526252582:web:0239cb7582ed5e276bdce7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

const PopupForm = ({ onClose }) => {
  const [formState, setFormState] = useState({
    role: '',
    studentName: '',
    email: '',
    mobileNumber: '',
    class: '',
    degreeCourse: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormState({
      ...formState,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      const formData = {
        role: formState.role,
        studentName: formState.studentName,
        email: formState.email,
        mobileNumber: formState.mobileNumber,
        class: formState.class === '12th' ? 'Plus Two' : formState.class === '11th' ? 'Plus One' : formState.class,
        degreeCourse: formState.class === 'Degree' ? formState.degreeCourse.replace('Course', '') : ''
      };

      const dbRef = ref(database, 'DemoClass');
      push(dbRef, formData)
        .then(() => {
          Swal.fire({
            icon: 'success',
            title: 'Demo Class Request Submitted!',
            text: 'We will get in touch with you soon.',
            onClose: onClose
          });

          setFormState({
            role: '',
            studentName: '',
            email: '',
            mobileNumber: '',
            class: '',
            degreeCourse: ''
          });
        })
        .catch((error) => {
          console.error('Error submitting form:', error);
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong! Please try again later.'
          });
        });
    }
  };

  const validateForm = () => {
    if (
      formState.role &&
      formState.studentName &&
      formState.email &&
      formState.mobileNumber &&
      formState.class
    ) {
      if (!validateEmail(formState.email)) {
        Swal.fire({
          icon: 'error',
          title: 'Invalid Email',
          text: 'Please enter a valid email address.'
        });
        return false;
      }
      if (!validateMobileNumber(formState.mobileNumber)) {
        Swal.fire({
          icon: 'error',
          title: 'Invalid Mobile Number',
          text: 'Please enter a valid mobile number.'
        });
        return false;
      }
      return true;
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Incomplete Form',
        text: 'Please fill in all required fields.'
      });
      return false;
    }
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const validateMobileNumber = (mobileNumber) => {
    const re = /^\d{10}$/;
    return re.test(mobileNumber);
  };

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <button className="close-btn" onClick={onClose}>X</button>
        <h2>Book a Free Demo</h2>
        <form onSubmit={handleSubmit}>
          <label>
            I am a:
            <select name="role" value={formState.role} onChange={handleInputChange} required>
              <option value="">Select</option>
              <option value="Student">Student</option>
              <option value="Parent">Parent</option>
              <option value="Guardian">Guardian</option>
            </select>
          </label>
          <label>
            Student Name:
            <input type="text" name="studentName" value={formState.studentName} onChange={handleInputChange} required />
          </label>
          <label>
            Email ID:
            <input type="email" name="email" value={formState.email} onChange={handleInputChange} required />
          </label>
          <label>
            Mobile Number:
            <input type="tel" name="mobileNumber" pattern="[0-9]{10}" value={formState.mobileNumber} onChange={handleInputChange} required />
          </label>
          <label>
            Choose Class:
            <select name="class" value={formState.class} onChange={handleInputChange} required>
              <option value="">Select</option>
              <option value="8th">8th</option>
              <option value="9th">9th</option>
              <option value="10th">10th</option>
              <option value="11th">11th</option>
              <option value="12th">12th</option>
              <option value="Degree">Degree</option>
            </select>
          </label>
          {formState.class === 'Degree' && (
            <label>
              Degree Course:
              <select name="degreeCourse" value={formState.degreeCourse} onChange={handleInputChange} required>
                <option value="">Select</option>
                <option value="BA">BA</option>
                <option value="B.Com">B.Com</option>
                <option value="Bsc">Bsc</option>
              </select>
            </label>
          )}
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default PopupForm;

// import { useState } from 'react';
// import './PopupForm.css';
// import firebase from 'firebase/app';
// import 'firebase/database';
// import Swal from 'sweetalert2';

// const firebaseConfig = {
//   apiKey: "AIzaSyAeqXIQyc4t29D0YwWMvo6bxP_ZqaKbZ64",
//   authDomain: "shell-e8be5.firebaseapp.com",
//   databaseURL: "https://shell-e8be5-default-rtdb.europe-west1.firebasedatabase.app",
//   projectId: "shell-e8be5",
//   storageBucket: "shell-e8be5.appspot.com",
//   messagingSenderId: "1012526252582",
//   appId: "1:1012526252582:web:0239cb7582ed5e276bdce7"
// };

// // Initialize Firebase
// if (!firebase.apps.length) {
//   firebase.initializeApp(firebaseConfig);
// } else {
//   firebase.app(); 
// }

// const PopupForm = ({ onClose }) => {
//   const [formState, setFormState] = useState({
//     role: '',
//     studentName: '',
//     email: '',
//     mobileNumber: '',
//     class: '',
//     degreeCourse: ''
//   });

  

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormState({
//       ...formState,
//       [name]: value
//     });

//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (validateForm()) {
//       const formData = {
//         role: formState.role,
//         studentName: formState.studentName,
//         email: formState.email,
//         mobileNumber: formState.mobileNumber,
//         class: formState.class === '12th' ? 'Plus Two' : formState.class === '11th' ? 'Plus One' : formState.class,
//         degreeCourse: formState.class === 'Degree' ? formState.degreeCourse.replace('Course', '') : ''
//       };

//       const dbRef = firebase.database().ref('DemoClass');
//       dbRef.push(formData)
//         .then(() => {
//           Swal.fire({
//             icon: 'success',
//             title: 'Demo Class Request Submitted!',
//             text: 'We will get in touch with you soon.',
//             onClose: onClose
//           });

//           setFormState({
//             role: '',
//             studentName: '',
//             email: '',
//             mobileNumber: '',
//             class: '',
//             degreeCourse: ''
//           });
//         })
//         .catch((error) => {
//           console.error('Error submitting form:', error);
//           Swal.fire({
//             icon: 'error',
//             title: 'Oops...',
//             text: 'Something went wrong! Please try again later.'
//           });
//         });
//     }
//   };

//   const validateForm = () => {
//     if (
//       formState.role &&
//       formState.studentName &&
//       formState.email &&
//       formState.mobileNumber &&
//       formState.class
//     ) {
//       if (!validateEmail(formState.email)) {
//         Swal.fire({
//           icon: 'error',
//           title: 'Invalid Email',
//           text: 'Please enter a valid email address.'
//         });
//         return false;
//       }
//       if (!validateMobileNumber(formState.mobileNumber)) {
//         Swal.fire({
//           icon: 'error',
//           title: 'Invalid Mobile Number',
//           text: 'Please enter a valid mobile number.'
//         });
//         return false;
//       }
//       return true;
//     } else {
//       Swal.fire({
//         icon: 'error',
//         title: 'Incomplete Form',
//         text: 'Please fill in all required fields.'
//       });
//       return false;
//     }
//   };

//   const validateEmail = (email) => {
//     const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return re.test(String(email).toLowerCase());
//   };

//   const validateMobileNumber = (mobileNumber) => {
//     const re = /^\d{10}$/;
//     return re.test(mobileNumber);
//   };

//   return (
//     <div className="popup-overlay">
//       <div className="popup-content">
//         <button className="close-btn" onClick={onClose}>X</button>
//         <h2>Book a Free Demo</h2>
//         <form onSubmit={handleSubmit}>
//           <label>
//             I am a:
//             <select name="role" value={formState.role} onChange={handleInputChange} required>
//               <option value="">Select</option>
//               <option value="Student">Student</option>
//               <option value="Parent">Parent</option>
//               <option value="Guardian">Guardian</option>
//             </select>
//           </label>
//           <label>
//             Student Name:
//             <input type="text" name="studentName" value={formState.studentName} onChange={handleInputChange} required />
//           </label>
//           <label>
//             Email ID:
//             <input type="email" name="email" value={formState.email} onChange={handleInputChange} required />
//           </label>
//           <label>
//             Mobile Number:
//             <input type="tel" name="mobileNumber" pattern="[0-9]{10}" value={formState.mobileNumber} onChange={handleInputChange} required />
//           </label>
//           <label>
//             Choose Class:
//             <select name="class" value={formState.class} onChange={handleInputChange} required>
//               <option value="">Select</option>
//               <option value="8th">8th</option>
//               <option value="9th">9th</option>
//               <option value="10th">10th</option>
//               <option value="11th">11th</option>
//               <option value="12th">12th</option>
//               <option value="Degree">Degree</option>
//             </select>
//           </label>
//           {formState.class === 'Degree' && (
//             <label>
//               Degree Course:
//               <select name="degreeCourse" value={formState.degreeCourse} onChange={handleInputChange} required>
//                 <option value="">Select</option>
//                 <option value="BA">BA</option>
//                 <option value="B.Com">B.Com</option>
//                 <option value="Bsc">Bsc</option>
//               </select>
//             </label>
//           )}
//           <button type="submit">Submit</button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default PopupForm;