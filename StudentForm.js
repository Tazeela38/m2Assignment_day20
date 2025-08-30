import React, { useState } from "react";
import "./StudentForm.css"; // yaha styling file import ki hai

export default function StudentForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [course, setCourse] = useState("");
  const [errors, setErrors] = useState({});

  const validate = () => {
    const errs = {};
    if (!name.trim()) errs.name = "Name is required";
    if (!email.trim()) errs.email = "Email is required";
    else if (!/^\S+@\S+\.\S+$/.test(email)) errs.email = "Invalid email";
    if (!course.trim()) errs.course = "Course is required";
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);

    if (Object.keys(errs).length === 0) {
      console.log("Student Data:", { name, email, course });
      alert("Form submitted! Check console.");
      setName("");
      setEmail("");
      setCourse("");
    }
  };

  return (
    <div className="form-container">
      <h2>🎓 Student Registration</h2>
      <form onSubmit={handleSubmit} className="student-form">
        <div className="form-group">
          <label>Name</label>
          <input
            className="form-input"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {errors.name && <p className="error">{errors.name}</p>}
        </div>

        <div className="form-group">
          <label>Email</label>
          <input
            className="form-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>

        <div className="form-group">
          <label>Course</label>
          <input
            className="form-input"
            value={course}
            onChange={(e) => setCourse(e.target.value)}
          />
          {errors.course && <p className="error">{errors.course}</p>}
        </div>

        <button className="submit-btn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}
