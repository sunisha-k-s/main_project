import React, { useState } from "react";
import "./ResumeBuilder.css";

export default function ResumeBuilder() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    education: "",
    skills: "",
    experience: "",
    template: "template1",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Resume Created with ${formData.template}`);
  };

  return (
    <div className="resume-container">
      <div className="resume-box">
        <h1>Resume Builder</h1>

        <form onSubmit={handleSubmit} className="resume-form">
          <div>
            <label>Full Name</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange} required />
          </div>

          <div>
            <label>Email</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} required />
          </div>

          <div>
            <label>Phone</label>
            <input type="text" name="phone" value={formData.phone} onChange={handleChange} required />
          </div>

          <div>
            <label>Education</label>
            <textarea name="education" value={formData.education} onChange={handleChange}></textarea>
          </div>

          <div>
            <label>Skills</label>
            <textarea name="skills" value={formData.skills} onChange={handleChange}></textarea>
          </div>

          <div>
            <label>Experience</label>
            <textarea name="experience" value={formData.experience} onChange={handleChange}></textarea>
          </div>

          {/* Template Selection */}
          <div className="template-options">
            <label>Choose Template</label>
            <div className="template-list">
              <label>
                <input type="radio" name="template" value="template1" checked={formData.template === "template1"} onChange={handleChange} />
                <p>Template 1</p>
              </label>

              <label>
                <input type="radio" name="template" value="template2" checked={formData.template === "template2"} onChange={handleChange} />
                <p>Template 2</p>
              </label>
            </div>
          </div>

          <div className="resume-submit">
            <button type="submit">Create Resume</button>
          </div>
        </form>
      </div>
    </div>
  );
}
