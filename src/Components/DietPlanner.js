import React, { useState, useRef } from 'react';
import html2pdf from 'html2pdf.js';
import './DietPlanner.css';

const DietPlanner = () => {
  const [formData, setFormData] = useState({
    gender: 'male',
    age: '',
    height: '',
    weight: '',
  });

  const [dietPlan, setDietPlan] = useState('');
  const [loading, setLoading] = useState(false);

  const dietPlanRef = useRef(null);

  const handleGenerateDietPlan = async () => {
    setLoading(true);
  
    // Basic validation
    if (formData.age <= 0 || formData.height <= 0 || formData.weight <= 0) {
      alert('Please enter valid values for age, height, and weight.');
      setLoading(false);
      return;
    }
  
    try {
      // Use USDA FoodData Central API to fetch food information based on user input
      const response = await fetch(
        `https://api.nal.usda.gov/fdc/v1/foods/search?query=${formData.gender}&api_key=7ROfkxFfKKdqvHB5gwfgi44Lodionz9IpgAiJFgL`
      );
  
      if (!response.ok) {
        throw new Error(`Failed to fetch food data. Status: ${response.status}`);
      }
  
      const data = await response.json();
  
      // Check if there are foods in the response
      if (!data.foods || data.foods.length === 0) {
        setDietPlan('No diet plan available for the given criteria.');
        setLoading(false);
        return;
      }
  
      // Process data to generate a diet plan (select random foods)
      let generatedDietPlan = 'Your Diet Plan:\n';
  
      // Randomly select up to 5 foods from the API response
      const randomFoodCount = Math.min(5, data.foods.length);
      const selectedFoods = [];
  
      for (let i = 0; i < randomFoodCount; i++) {
        const randomIndex = Math.floor(Math.random() * data.foods.length);
        const randomFood = data.foods[randomIndex];
        selectedFoods.push(randomFood);
      }
  
      selectedFoods.forEach((food) => {
        generatedDietPlan += `- ${food.description}\n`;
      });
  
      setDietPlan(generatedDietPlan);
    } catch (error) {
      console.error('Error fetching food data:', error.message);
      setDietPlan('Error generating diet plan. Please try again.');
    }
  
    setLoading(false);
  };
  
  

  const handleDownloadPDF = () => {
    if (dietPlanRef.current) {
      const pdfOptions = {
        margin: 10,
        filename: 'diet_plan.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
      };

      html2pdf().from(dietPlanRef.current).set(pdfOptions).save();
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="diet-planner">
      <h2>Diet Planner</h2>

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

      <button onClick={handleGenerateDietPlan} disabled={loading}>
        {loading ? 'Generating...' : 'Generate Diet Plan'}
      </button>

      <button onClick={handleDownloadPDF} disabled={!dietPlan}>
        Download PDF
      </button>

      {dietPlan && (
        <div className="diet-plan-result" ref={dietPlanRef}>
          <h3>Your Diet Plan:</h3>
          <pre>{dietPlan}</pre>
        </div>
      )}
    </div>
  );
};

export default DietPlanner;








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
