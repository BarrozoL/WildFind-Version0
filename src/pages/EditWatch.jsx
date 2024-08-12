import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate, Navigate } from "react-router-dom";

// const API_URL = "https://wildfind-backendserver.adaptable.app/watch";

function EditWatchPage({ editWatch, watches }) {
  const { watchId } = useParams();

  const foundWatch = watches.find((watch) => watch.id === watchId);

  if (!foundWatch) return <Navigate to="/watch-list" />;

  const navigate = useNavigate();
  const [name, setName] = useState(foundWatch.name);
  const [description, setDescription] = useState(foundWatch.description);
  const [location, setLocation] = useState(foundWatch.location);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const updatedWatch = {
      ...foundWatch,
      name,
      description,
      location,
    };
    editWatch(updatedWatch);

    navigate("/watch-list");
  };

  return (
    <div>
      <h3>Edit Watch Item</h3>

      <form onSubmit={handleFormSubmit}>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleNameChange}
        />
        <label>Description:</label>
        <textarea
          name="description"
          value={description}
          onChange={handleDescriptionChange}
        />
        <label>Location:</label>
        <textarea
          name="location"
          value={location}
          onChange={handleLocationChange}
        />
        <button type="submit">Update Watch Item</button>
      </form>
    </div>
  );
}

export default EditWatchPage;

// import { useState } from "react";
// import { useParams, Navigate, useNavigate } from "react-router-dom";

// const DEFAULT_PROFILE_PICTURE =
//   "https://i.pinimg.com/736x/00/70/16/00701602b0eac0390b3107b9e2a665e0.jpg";

// export default function UpdateStudent({ students, updateStudent }) {
//   const { studentId } = useParams();

//   // find student using .find()
//   const foundStudent = students.find((student) => student._id === studentId);
//   // if student is not found, redirect to students list
//   if (!foundStudent) return <Navigate to="/students" />;

//   const navigate = useNavigate();
//   const [name, setName] = useState(foundStudent.name);
//   const [imgURL, setImgURL] = useState(foundStudent.img);
//   const [age, setAge] = useState(foundStudent.age);
//   const [bootcamp, setBootcamp] = useState(foundStudent.bootcamp);

//   const handleNameChange = (e) => {
//     setName(e.target.value);
//   };

//   const handleImgChange = (e) => {
//     setImgURL(e.target.value);
//   };

//   const handleAgeChange = (e) => {
//     const value = Number(e.target.value) || "";
//     if (value < 0) return;
//     setAge(value);
//   };

//   const handleBootcampChange = (e) => {
//     setBootcamp(e.target.value);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Check if all fields are filled
//     if (!name || !age || !bootcamp) {
//       alert("Please fill in all fields");
//       return;
//     }

//     // Create a new student object
//     const updatedStudent = {
//       // _id: studentId,
//       ...foundStudent,
//       name,
//       img: imgURL ? imgURL : DEFAULT_PROFILE_PICTURE,
//       age,
//       bootcamp,
//     };

//     // Update student
//     updateStudent(updatedStudent);

//     // redirect to students list
//     navigate("/students");
//   };

//   return (
//     <div>
//       <h1>Update Student</h1>
//       <form>
//         <div className="input-wrapper">
//           <label>Name:</label>
//           <input
//             type="text"
//             name="name"
//             value={name}
//             onChange={handleNameChange}
//           />
//         </div>
//         <div className="input-wrapper">
//           <label>Image URL:</label>
//           <input
//             type="text"
//             name="imgURL"
//             value={imgURL}
//             onChange={handleImgChange}
//           />
//         </div>
//         <div className="input-wrapper">
//           <label>Age:</label>
//           <input
//             type="number"
//             name="age"
//             value={age}
//             onChange={handleAgeChange}
//           />
//         </div>
//         <div className="input-wrapper">
//           <label>Bootcamp:</label>
//           <div className="select-wrapper">
//             <select
//               name="bootcamp"
//               value={bootcamp}
//               onChange={handleBootcampChange}
//             >
//               <option value="">Select a bootcamp</option>
//               <option value="Web Development">Web Development</option>
//               <option value="UX/UI Design">UX/UI Design</option>
//               <option value="Data Analytics">Data Analytics</option>
//             </select>
//           </div>
//         </div>
//         <button type="submit" onClick={handleSubmit}>
//           Save
//         </button>
//       </form>
//     </div>
//   );
// }
