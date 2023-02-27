// Passcode Checker

// Button Event Listener
document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  // Inputs
  let code1 = +document.getElementById("code1-in").value;
  let code2 = +document.getElementById("code2-in").value;
  let code3 = +document.getElementById("code3-in").value;

  // Check Passcode
  if (code1 === code2 && code1 === code3) {
    document.getElementById("status").style.backgroundColor = "green";
  } else {
    document.getElementById("status").style.backgroundColor = "red";
  }
}

// PASSCODE CRITERIA
// Code 1 equals 10 and Code 2 equals 20 or Code 3 equals 30.
// Code 1 equals 10 and (Code 2 equals 20 or Code 3 equals 30).
// Code 1, Code 2 and Code 3 are all positive.
// At least one of the codes is negative.
// Code 1, Code 2 and Code 3 all equal 7.
// None of the codes equal zero.
// Code 1, Code 2 and Code 3 are all the same number.
// Code 3 is greater than either Code 1 or Code 2.
// Code 3 is greater than both Code 1 and Code 2.
// Code 2 is between Code 1 and Code 3.
