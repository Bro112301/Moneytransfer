// script.js
function checkNumber() {
  const numberInput = document.getElementById("numberInput");
  const resultDiv = document.querySelector(".result");

  if (numberInput.value.length === 12) {
    // Replace this with your actual validation logic
    if (numberInput.value === "123456789012") {
      resultDiv.hidden = false; // Show the success message
    } else {
      alert("Invalid number. Please try again.");
    }
  } else {
    alert("Please enter your debit number.");
  }
}
