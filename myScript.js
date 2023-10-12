const avg_co2_factor = 0.11337;


// Function to update the result when the input changes
function updateResult() {
    const kilometersInput = parseFloat(document.getElementById("kilometers").value);
    const resultDiv = document.getElementById("result");

    if (isNaN(kilometersInput)){
        resultDiv.innerHTML  = `0 kg of CO2`;
    }
    else{
        const co2Emission = (kilometersInput * 0.113).toFixed(2);
        resultDiv.innerHTML  = `<span class="green-text">${co2Emission} kg</span> of CO2` ;
    }
}



