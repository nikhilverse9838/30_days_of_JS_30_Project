const passwordBox = document.getElementById("password");
const generateButton = document.getElementById("generateButton");
const copyButton = document.getElementById("copyButton");
const status = document.getElementById("status");
const length = 12;
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "@#$%^&*()_+~|}{[]></-=";

function getRandomCharacter(characters) {
  return characters[crypto.getRandomValues(new Uint32Array(1))[0] % characters.length];
}

function shuffle(characters) {
  for (let index = characters.length - 1; index > 0; index--) {
    const swapIndex = crypto.getRandomValues(new Uint32Array(1))[0] % (index + 1);
    [characters[index], characters[swapIndex]] = [characters[swapIndex], characters[index]];
  }

  return characters;
}

function createPassword() {
  const requiredCharacters = [
    getRandomCharacter(upperCase),
    getRandomCharacter(lowerCase),
    getRandomCharacter(number),
    getRandomCharacter(symbol),
  ];
  const allCharacters = upperCase + lowerCase + number + symbol;

  while (requiredCharacters.length < length) {
    requiredCharacters.push(getRandomCharacter(allCharacters));
  }

  passwordBox.value = shuffle(requiredCharacters).join("");
  status.textContent = "New 12-character password generated.";
}

async function copyPassword() {
  if (!passwordBox.value) {
    status.textContent = "Generate a password before copying it.";
    return;
  }

  try {
    await navigator.clipboard.writeText(passwordBox.value);
    status.textContent = "Password copied to clipboard.";
  } catch {
    passwordBox.select();
    document.execCommand("copy");
    status.textContent = "Password copied to clipboard.";
  }
}

generateButton.addEventListener("click", createPassword);
copyButton.addEventListener("click", copyPassword);

