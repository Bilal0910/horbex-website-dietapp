import React, { useState } from 'react';
import './DietPlanner.css'; // Import the CSS file

const DietPlanGenerator = () => {
  const [formData, setFormData] = useState({
    gender: 'male',
    age: '',
    height: '',
    weight: '',
  });

  const [dietPlan, setDietPlan] = useState('');

  const handleGenerateDietPlan = () => {
    // Basic validation
    if (formData.age <= 0 || formData.height <= 0 || formData.weight <= 0) {
      alert('Please enter valid values for age, height, and weight.');
      return;
    }

    // Diet plan generation logic based on gender, age, height, and weight
    let generatedDietPlan = 'Your Diet Plan:\n';

    // Example: Diet plan for a male
    if (formData.gender === 'male') {
      if (formData.age >= 18 && formData.age <= 50) {
        generatedDietPlan += '- Include protein-rich foods.\n';
        generatedDietPlan += '- Consume a balanced amount of carbohydrates.\n';
        generatedDietPlan += '- Include healthy fats in your diet.\n';
      } else {
        generatedDietPlan += '- Consult with a nutritionist for a personalized plan.\n';
      }
    }

    // Example: Diet plan for a female
    else if (formData.gender === 'female') {
      if (formData.age >= 18 && formData.age <= 50) {
        generatedDietPlan += '- Consume lean proteins.\n';
        generatedDietPlan += '- Include whole grains in your diet.\n';
        generatedDietPlan += '- Ensure a balance of healthy fats.\n';
      } else {
        generatedDietPlan += '- Consult with a nutritionist for a personalized plan.\n';
      }
    }

    setDietPlan(generatedDietPlan);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="diet-plan-generator">
      <h2>Diet Plan Generator</h2>

      <label>
        Gender:
        <select name="gender" value={formData.gender} onChange={handleChange}>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </label>

      <label>
        Age:
        <input
          type="number"
          name="age"
          value={formData.age}
          onChange={handleChange}
        />
      </label>

      <label>
        Height (in cm):
        <input
          type="number"
          name="height"
          value={formData.height}
          onChange={handleChange}
        />
      </label>

      <label>
        Weight (in kg):
        <input
          type="number"
          name="weight"
          value={formData.weight}
          onChange={handleChange}
        />
      </label>

      <button onClick={handleGenerateDietPlan}>Generate Diet Plan</button>

      {dietPlan && (
        <div className="diet-plan-result">
          <h3>Your Diet Plan:</h3>
          <pre>{dietPlan}</pre>
        </div>
      )}
    </div>
  );
};

export default DietPlanGenerator;

// import React, { useState } from 'react';
// import './DietPlanGenerator.css'; // Import the CSS file

// const DietPlanGenerator = () => {
//   const [formData, setFormData] = useState({
//     gender: 'male',
//     age: '',
//     height: '',
//     weight: '',
//   });

//   const [dietPlan, setDietPlan] = useState('');
//   const [loading, setLoading] = useState(false);

//   const handleGenerateDietPlan = async () => {
//     setLoading(true);

//     // Basic validation
//     if (formData.age <= 0 || formData.height <= 0 || formData.weight <= 0) {
//       alert('Please enter valid values for age, height, and weight.');
//       setLoading(false);
//       return;
//     }

//     // Prepare the request payload
//     const payload = {
//       gender: formData.gender,
//       age: formData.age,
//       height: formData.height,
//       weight: formData.weight,
//     };

//     try {
//       // Fetch diet plan data from the API (replace 'YOUR_API_ENDPOINT' with the actual endpoint)
//       const response = await fetch('YOUR_API_ENDPOINT', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(payload),
//       });

//       if (!response.ok) {
//         throw new Error('Failed to fetch diet plan data');
//       }

//       // Parse the JSON response
//       const data = await response.json();
//       setDietPlan(data.dietPlan);
//     } catch (error) {
//       console.error('Error fetching diet plan data:', error.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   return (
//     <div className="diet-plan-generator">
//       <h2>Diet Plan Generator</h2>

//       <label>
//         Gender:
//         <select name="gender" value={formData.gender} onChange={handleChange}>
//           <option value="male">Male</option>
//           <option value="female">Female</option>
//         </select>
//       </label>

//       <label>
//         Age:
//         <input
//           type="number"
//           name="age"
//           value={formData.age}
//           onChange={handleChange}
//         />
//       </label>

//       <label>
//         Height (in cm):
//         <input
//           type="number"
//           name="height"
//           value={formData.height}
//           onChange={handleChange}
//         />
//       </label>

//       <label>
//         Weight (in kg):
//         <input
//           type="number"
//           name="weight"
//           value={formData.weight}
//           onChange={handleChange}
//         />
//       </label>

//       <button onClick={handleGenerateDietPlan} disabled={loading}>
//         {loading ? 'Generating...' : 'Generate Diet Plan'}
//       </button>

//       {dietPlan && (
//         <div className="diet-plan-result">
//           <h3>Your Diet Plan:</h3>
//           <pre>{dietPlan}</pre>
//         </div>
//       )}
//     </div>
//   );
// };

// export default DietPlanGenerator;
