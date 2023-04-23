import React from "react";
const SummaryPage = ({ formData, onChange, onBack }) => {
  const handleEdit = () => {
    onBack();
  };

  return (
    <div >
      <h2>Summary Page</h2>
      <table >
      <thead>
          <tr>
            <th>Problems</th>
            <th>answers</th>
          </tr>
        </thead>
        <tbody>
        <tr>
            <td>Description</td>
            <td>{formData.description}</td>
          </tr>
          <tr>
            <td>Have you been diagnosed with this problem?</td>
            <td>{formData.diagnosed}</td>
          </tr>
          <tr>
            <td>Did the problem start after a physical trauma?</td>
            <td>{formData.physical_trauma}</td>
          </tr>
          <tr>
            <td>Did the problem start after a mental_trauma trauma?</td>
            <td>{formData.mental_trauma}</td>
          </tr>
          <tr>
            <td>How often do you experience the problem?</td>
            <td>{formData.experience_problem_often}</td>
          </tr>
          <tr>
            <td>When do you experience the problem?</td>
            <td>
              {formData.notrelevant && "Not relevant, "}
              {formData.lyingdown && " When lying down, "}
              {formData.sitting && " When sitting, "}
              {formData.standing && "Under standing, "}
              {formData.walking && "In walking"}
            </td>
          </tr>
          <tr>
            <td>How severe is the problem on average?</td>
            <td>{formData.scale}</td>
          </tr>
          <tr>
            <td>Diagnosed New:</td>
            <td>{formData.diagnosednew}</td>
          </tr>
          <tr>
            <td>experience_problem_often:</td>
            <td>{formData.experience_problem_oftennew}</td>
          </tr>
        </tbody>
      </table>
      <button type="button" onClick={handleEdit} className="mt-5 btn-sm btn-primary ">
        Back
      </button>
    </div>
  );
};

export default SummaryPage;
