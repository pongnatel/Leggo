const avg_co2_factor = 0.11337;

function updateResult() {
    const inputElements = document.querySelectorAll("input");
    const totalDiv = document.getElementById("total");
    const resultDiv = document.getElementById("result");
    let totalKm = 0;
    let totalCo2Emission = 0;
  
    inputElements.forEach(function (inputElement) {
      const value = parseFloat(inputElement.value);
      
      if (!isNaN(value)) {
        totalKm += value;
        totalCo2Emission += value * avg_co2_factor;
      }
    });
  
    totalCo2Emission = totalCo2Emission.toFixed(2); // Round the total emissions to 2 decimal places
  
    if (totalCo2Emission > 0) {
      totalDiv.innerHTML = `Total: <span class="green-text">${totalKm} km</span>`;
      resultDiv.innerHTML = `<span class="green-text">${totalCo2Emission} kg</span> of CO2`;
    } else {
      totalDiv.innerHTML = 'Total: 0 km';
      resultDiv.innerHTML = `0 kg of CO2`;
    }
  }
  
