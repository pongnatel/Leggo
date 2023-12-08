const avg_co2_factor = 0.11337;
const slide_form = document.getElementsByClassName("slides_form")[0];
const slide_result = document.getElementsByClassName("slides_result")[0];

function updateResult() {
  const inputElements = document.querySelectorAll("input");
  const totalDiv = document.getElementById("total");
  const resultDiv = document.getElementById("result");
  let totalKm = 0;
  let totalCo2Emission = 0;

  inputElements.forEach(function (inputElement) {
    const inputValue = inputElement.value.replace(",", ".");
    const processedValue = parseFloat(inputValue);

    if (!isNaN(processedValue)) {
      totalKm += processedValue;
      totalCo2Emission += processedValue * avg_co2_factor;
    }
  });

  totalKm = totalKm.toFixed(2);
  totalCo2Emission = totalCo2Emission.toFixed(2); // Round the total emissions to 2 decimal places

  if (totalCo2Emission > 0) {
    totalDiv.innerHTML = `Total: <span class="green-text">${totalKm} km</span>`;
    resultDiv.innerHTML = `<span class="green-text">${totalCo2Emission} kg</span> of CO2`;
  } else {
    totalDiv.innerHTML = "Total: 0  km";
    resultDiv.innerHTML = `0 kg of CO2`;
  }
}

function scrollToNextSection() {
  const nextSection = document.querySelector(".section_two"); // Change this selector based on your structure
  nextSection.scrollIntoView({ behavior: "smooth" });
}

function moveToResult() {
  slide_form.classList.add("inactive");
  slide_result.classList.remove("inactive");
}

function moveToForm() {
  slide_result.classList.add("inactive");
  slide_form.classList.remove("inactive");
}
