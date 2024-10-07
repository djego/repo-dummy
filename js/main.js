function generateRandomNumber() {
  return Math.random();
}

function generateRandomNumberBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateHash() {
  return Math.random().toString(36).substring(2);
}
