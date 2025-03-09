const passwordBox = document.getElementById("password");
const length = 16;
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "1234567890";
const symbol = "~!@#$%^&*()-_=+[]{}|;:,<.>/?";
const allChar = upperCase + lowerCase + symbol + number;

function createPassword() {
  let password = "";

  password += upperCase[Math.floor(Math.random() * upperCase.length)];
  password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  password += number[Math.floor(Math.random() * number.length)];
  password += symbol[Math.floor(Math.random() * symbol.length)];

  while (password.length < length) {
    password += allChar[Math.floor(Math.random() * allChar.length)];
  }

  password = password
    .split("")
    .sort(() => Math.random() - 0.5)
    .join("");

  passwordBox.value = password;
}

async function copyPassword() {
  passwordBox.select();

  try {
    await navigator.clipboard.writeText(passwordBox.value);
    alert(`Wrote text ${passwordBox.value} to clipboard`);
  } catch (e) {
    alert(`failed to write to clipboard`);
  }
}
