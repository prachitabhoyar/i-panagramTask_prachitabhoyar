import React, { useState } from "react";
import RadioGroup from "./RadioGroup";

const ProblemForm = ({ formData, onChange, onSubmit, onBack }) => {
  const[isAppende, setIsAppende]=useState(false)
  return (
    <div className="problemform" >
      <div className="text-center">
      <h3>Pain & Functional Description</h3>
      <p>The description of the current situation gives your Optimum <br/>Trainer a picture of and clues to the underlying causes of your problems</p>
      </div>
      <form onSubmit={onSubmit}>
        <div>
      <label>If you have problems with pain/aches, stiffness, weakness or functional problems, describe this/these below.(List the symptoms in descending order with the most troublesome first)</label>
        <textarea
        name="description"
        value={formData.description}
        onChange={onChange}
        maxLength={300}
        className="form-control"
      />
      </div>

      <RadioGroup
  label="Have you been diagnosed with this problem?"
  name="diagnosed"
  options={[
    { value: 'Note relevant', label: 'Note relevant' },
    { value: 'Yes', label: 'Yes' },
    { value: 'No', label: 'No' },
  ]}
  value={formData.diagnosed}
  onChange={onChange}
/>

{/* physical */}
<RadioGroup
  label="Did the problem start after a physical trauma?"
  name="physical_trauma"
  options={[
    { value: 'Note relevant', label: 'Note relevant' },
    { value: 'Yes', label: 'Yes' },
    { value: 'No', label: 'No' },
  ]}
  value={formData.physical_trauma}
  onChange={onChange}
/>
{/* Mental Trauma */}

<RadioGroup
  label="Did the problem start after a mental trauma?"
  name="mental_trauma"
  options={[
    { value: 'Note relevant', label: 'Note relevant' },
    { value: 'Yes', label: 'Yes' },
    { value: 'No', label: 'No' },
  ]}
  value={formData.mental_trauma}
  onChange={onChange}
/>

        {/*Experience the problem often  */}
      
        <RadioGroup
  label="How often do you experience the problem?"
  name="experience_problem_often"
  options={[
    { value: 'Note relevant', label: 'Note relevant' },
    { value: 'Daily', label: 'Daily' },
    { value: 'Several times/week', label: 'Several times/week' },
    { value: 'A few times/month', label: 'A few times/month' },
    { value: 'A few times/year', label: 'A few times/year' }
  ]}
  value={formData.experience_problem_often}
  onChange={onChange}
  colvalue="col-12"
/>


        {/* Experience Problem */}
        <div className="row my-2 CheckLabel">
          <label>When do you experience the problem?</label>
          
            <label>
              <input
                type="checkbox"
                name="notrelevant"
                checked={formData.notrelevant}
                onChange={onChange}
              />
              Not relevant
            </label> 
            <label>
              <input
                type="checkbox"
                name="lyingdown"
                checked={formData.lyingdown}
                onChange={onChange}
              />
              When lying down
            </label>
            <label>
              <input
                type="checkbox"
                name="sitting"
                checked={formData.sitting}
                onChange={onChange}
              />
              When sitting
            </label>
            <label>
              <input
                type="checkbox"
                name="standing"
                checked={formData.standing}
                onChange={onChange}
              />
              Under standing
            </label>
            <label>
              <input
                type="checkbox"
                name="walking"
                checked={formData.walking}
                onChange={onChange}
              />
              In walking
            </label>
          
        </div>

        {/* problem scale */}
        <div className="row my-3">
        
          <label htmlFor="scale">How severe is the problem on average?</label>
          <div>
            {[...Array(10)].map((_, index) => (
              <label key={index} >
                <div className="ms-3"> {index + 1}</div>
                <input
                  type="radio"
                  name="scale"
                  value={index + 1}
                  checked={formData.scale === index + 1}
                  onChange={onChange}
                />
              </label>
            ))}
          </div>
        </div>
{
  isAppende && (
    <>
   
   <RadioGroup
  label="Have you been diagnosed with this problem?"
  name="diagnosednew"
  options={[
    { value: 'Note relevant', label: 'Note relevant' },
    { value: 'Yes', label: 'Yes' },
    { value: 'No', label: 'No' },
  ]}
  value={formData.diagnosednew}
  onChange={onChange}
/>
<RadioGroup
  label="How often do you experience the problem"
  name="experience_problem_oftennew"
  options={[
    { value: 'Note relevant', label: 'Note relevant' },
    { value: 'Daily', label: 'Daily' },
    { value: 'Several times/week', label: 'Several times/week' },
    { value: 'A few times/month', label: 'A few times/month' },
    { value: 'A few times/year', label: 'A few times/year' }
  ]}
  value={formData.experience_problem_oftennew}
  onChange={onChange}
  colvalue="col-12"
/>

    </>
  )
}

      <div className="position-relative py-5">
        <hr/>
      <span role="button" onClick={()=>{setIsAppende(true)}} className="rounded-circle position-absolute bottom-50 start-50 bg-primary h">+</span>
  </div>
  
        <div className="text-center ">
          <button type="button" onClick={onBack} className="btn btn-primary mx-2">Back</button>
          <button type="submit" className="btn btn-primary mx-2">Next</button>
        </div>
      </form>

    </div>

  );
};

export default ProblemForm;
