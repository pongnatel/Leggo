const avg_co2_factor = 0.11337;

// Function to update the result when the input changes
// function updateResult() {
//   const inputElements = document.querySelectorAll("input"); // Get all input elements
//   const resultDiv = document.getElementById("result");
//   let co2Emission = 0;

//   inputElements.forEach(function (inputElement) {
//     var value = parseFloat(inputElement.value); // Parse the input value as a float

//     if (!isNaN(value)) {
//       co2Emission += (value * 0.113).toFixed(2); // Calculate CO2 emissions for each day
//     }
//   });

//   if (co2Emission > 0) {
//     resultDiv.innerHTML = `<span class="green-text">${co2Emission} kg</span> of CO2`;
//   } else {
//     resultDiv.innerHTML = `0 kg of CO2`;
//   }
// }

function updateResult() {
    const inputElements = document.querySelectorAll("input");
    const resultDiv = document.getElementById("result");
    let totalCo2Emission = 0;
  
    inputElements.forEach(function (inputElement) {
      const value = parseFloat(inputElement.value);
      
      if (!isNaN(value)) {
        totalCo2Emission += value * 0.113;
      }
    });
  
    totalCo2Emission = totalCo2Emission.toFixed(2); // Round the total emissions to 2 decimal places
  
    if (totalCo2Emission > 0) {
      resultDiv.innerHTML = `<span class="green-text">${totalCo2Emission} kg</span> of CO2`;
    } else {
      resultDiv.innerHTML = `0 kg of CO2`;
    }
  }
  
