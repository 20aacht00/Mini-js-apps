let userInput = document.getElementById("date");

userInput.max = new Date().toISOString().split("T")[0];

function ageCalculator() {
  if (!userInput.value) {
    alert("Please select a valid date.");
    return;
  }

  let birthDate = new Date(userInput.value);
  let birthDay = birthDate.getDate();
  let birthMonth = birthDate.getMonth() + 1;
  let birthYear = birthDate.getFullYear();

  let today = new Date();
  let currentDay = today.getDate();
  let currentMonth = today.getMonth() + 1;
  let currentYear = today.getFullYear();

  let secondModelBirthDate = birthDate.getTime();
  let currentTime = Date.now();

  if (secondModelBirthDate > currentTime) {
    alert("hello body! You are from the future");
    return;
  }

  let differenceDay, differenceMonth, differenceYear;
  differenceYear = currentYear - birthYear;

  if (currentMonth >= birthMonth) {
    differenceMonth = currentMonth - birthMonth;
  } else {
    differenceYear--;
    differenceMonth = currentMonth + 12 - birthMonth;
  }

  if (currentDay >= birthDay) {
    differenceDay = currentDay - birthDay;
  } else {
    differenceMonth--;
    differenceDay =
      getDaysInMonth(currentYear, currentMonth - 1) + currentDay - birthDay;
    if (differenceMonth < 0) {
      differenceMonth = 11;
      differenceYear--;
    }
  }

  alert(
    `You are ${differenceYear} year,${differenceMonth} month and ${differenceDay} days old`
  );
}

function getDaysInMonth(year, month) {
  return new Date(year, month + 1, 0).getDate();
}
