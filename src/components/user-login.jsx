import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";

const steps = [
  { title: "Basic Details", description: "Provide your Basic Details.", fields: ["First Name", "Last Name", "DOB"] },
  { title: "Contact Details", description: "Lets Stay in Touch.", fields: ["Phone Number", "Email", "Address"] },
  { title: "Bank Details", description: "Link your Bank Details", fields: ["Account Number", "IFSC Code", "Bank Name"] },
  { title: "Declaration", description: "Accept the Declaration.", fields: ["Agree to Terms", "Signature"] },
];

export function UserLogin() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({});
  const [lineAnimated, setLineAnimated] = useState(false);

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setLineAnimated(false);
      setTimeout(() => {
        setCurrentStep((prevStep) => prevStep + 1);
        setLineAnimated(true);
      }, 500);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setLineAnimated(false);
      setTimeout(() => {
        setCurrentStep((prevStep) => prevStep - 1);
        setLineAnimated(true);
      }, 500);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="container-fluid vh-100 d-flex">
      {/* Left Pane - Step Indicator */}
      <div className="col-3 bg-dark text-white d-flex flex-column align-items-center p-4 position-relative">
        <h5 className="mb-3">Step {currentStep + 1} / {steps.length}</h5>
        {/* General description of the current step with fading animation */}
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
        <div className="w-100 position-relative">
          {steps.map((step, index) => (
            <div key={index} className="position-relative d-flex align-items-center mb-3">
              <div
                className={`rounded-circle border border-light d-flex align-items-center justify-content-center position-relative me-3 ${index < currentStep || (index === currentStep && lineAnimated) ? 'bg-white text-dark' : 'text-white'}`}
                style={{ width: "30px", height: "30px", zIndex: 2 }}
              >
                {index + 1}
              </div>
              <span className={index <= currentStep ? "text-light fw-bold ms-2" : "text-secondary ms-2"}>{step.title}</span>
              {index < steps.length - 1 && (
                <motion.div
                  className="position-absolute bg-secondary"
                  style={{ width: "2px", left: "14px", top: "35px" }}
                  initial={{ height: "0px" }}
                  animate={{ height: index < currentStep ? "40px" : "0px" }}
                  transition={{ duration: 0.2, delay: 0.0 }}
                />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Right Pane - Form */}
      <div className="col-9 d-flex align-items-center justify-content-center p-5">
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

          {/* Navigation Buttons */}
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
