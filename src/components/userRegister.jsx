import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";

const steps = [
  { title: "Basic Details", description: "Provide your Basic Details.", fields: ["Tax Status", "PAN Number", "Name as per PAN", "Date of Birth", "Gender"] },
  { title: "Contact Details", description: "Provide your Contact Information.", fields: ["Mobile Number", "Email Address"] },
  { title: "Additional Details", description: "More personal details required.", fields: ["Occupation", "Annual Income", "Marital Status", "Father’s / Spouse’s Name"] },
  { title: "Declaration", description: "Confirm your declaration details.", fields: ["Nationality", "Country of Birth", "State of Birth", "City of Birth", "FATCA Declaration"] },
  { title: "Bank Details", description: "Enter your Banking Information.", fields: ["IFSC Code", "Bank Name & Address", "Account Number", "Re-enter Account Number", "Account Type", "Mode of Handling"] },
  { title: "Upload Signature", description: "Upload your official signature.", fields: ["Upload Signature"] },
  { title: "Nominee Details", description: "Enter nominee information.", fields: ["Nominee Name", "Nominee Date of Birth", "Nominee Relation", "Use Previous Address", "Nominee Address"] },
];

export function UserRegister() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({});

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setTimeout(() => {
        setCurrentStep((prevStep) => prevStep + 1);
      }, 500);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setTimeout(() => {
        setCurrentStep((prevStep) => prevStep - 1);
      }, 500);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="container-fluid d-flex" style={{ minHeight: "calc(100vh - 4.5rem)", marginTop: "4.5rem" }}>
      {/* Left Sidebar */}
      <div className="col-3 bg-dark text-white d-flex flex-column align-items-center p-4 position-relative">
        <h5 className="mb-3">Step {currentStep + 1} / {steps.length}</h5>

        {/* Progress Bar with Linear Gradient */}
        <div className="progress w-75 mb-3">
          <motion.div
            className="progress-bar"
            style={{
              width: `${((currentStep + 1) / steps.length) * 100}%`,
              background: "linear-gradient(45deg, var(--primary-green), var(--secondary-green), var(--primary-blue), var(--secondary-blue))"
            }}
            initial={{ width: "0%" }}
            animate={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>

        <AnimatePresence mode="wait">
          <motion.p
            key={currentStep}
            className="text-light text-center mt-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            {steps[currentStep].description}
          </motion.p>
        </AnimatePresence>

        {/* Stepper with Animated Lines & Checkmarks */}
        <div className="w-100 position-relative">
          {steps.map((step, index) => (
            <div key={index} className="position-relative d-flex align-items-center mb-3">
              <motion.div
                className={`rounded-circle border border-light d-flex align-items-center justify-content-center position-relative me-3 ${
                  index < currentStep
                    ? "bg-white text-dark border border-light"
                    : index === currentStep
                    ? "bg-light text-dark fw-bold border border-white"
                    : "text-white"
                }`}
                style={{ width: "30px", height: "30px", zIndex: 2 }}
                initial={{ opacity: 1 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.2 }}
              >
                {index < currentStep ? "✔️" : index + 1}
              </motion.div>
              <span
                className={`ms-2 px-2 py-1 rounded ${index <= currentStep ? "bg-light text-dark fw-bold" : "text-secondary"}`}
                style={{ transition: "background-color 0.3s ease-in-out" }}
              >
                {step.title}
              </span>
              {index < steps.length - 1 && (
                <motion.div
                  className="position-absolute bg-white"
                  style={{
                    width: "2px",
                    left: "14px",
                    top: "35px",
                    height: "40px",
                  }}
                  initial={{ height: "0px" }}
                  animate={{ height: index < currentStep ? "40px" : "0px" }}
                  transition={{ duration: 0.5 }}
                />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Right Form Section */}
      <div className="col-9 d-flex align-items-center justify-content-center p-5 bg-white text-dark-emphasis">
        <div className="w-75">
          <h2 className="fw-bold">{steps[currentStep].title}</h2>
          <p className="text-muted">Enter your {steps[currentStep].title.toLowerCase()} details.</p>
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
            >
              {steps[currentStep].fields.map((field, i) => (
                <div className="mb-3" key={i}>
                  <label className="form-label" htmlFor={field}>{field}</label>
                  <input
                    type="text"
                    id={field}
                    name={field.replace(/\s+/g, "").toLowerCase()}
                    className="form-control"
                    placeholder={`Enter ${field}`}
                    value={formData[field.replace(/\s+/g, "").toLowerCase()] || ""}
                    onChange={handleChange}
                  />
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
          <div className="d-flex justify-content-between mt-4">
            <button className="btn btn-outline-secondary" onClick={handleBack} disabled={currentStep === 0}>
              Back
            </button>
            <button className="btn btn-primary" onClick={handleNext} disabled={currentStep === steps.length - 1}>
              {currentStep === steps.length - 1 ? "Finish" : "Continue"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
