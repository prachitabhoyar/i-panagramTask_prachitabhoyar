import { useState } from "react";
import ProblemForm from "./components/ProblemForm";
import SummaryPage from "./components/SummaryPage";
import "./App.css"


const App = () => {
  const [formData, setFormData] = useState({
    description:"",
    diagnosed: "",
    physical_trauma:"",
    mental_trauma:"",
    experience_problem_often:"",
    notrelevant: false,
    lyingdown:false,
    sitting: false,
    standing:false,
    walking: false,
    scale: '',
    diagnosednew:"",
    experience_problem_oftennew:"",
  });

  const [currentPage, setCurrentPage] = useState("form");

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setCurrentPage("summary");
  };

  const handleBack = () => {
    setCurrentPage("form");
  };

  
  return (
    <div className="container mt-5">
      {currentPage === "form" && (
        <ProblemForm
          formData={formData}
          onChange={handleChange}
          onSubmit={handleSubmit}
          onBack={handleBack}
        />
      )}
      {currentPage === "summary" && (
        <SummaryPage
          formData={formData}
          onBack={handleBack}
          onChange={handleChange}
        />
      )}
    </div>
  );
};

export default App;
