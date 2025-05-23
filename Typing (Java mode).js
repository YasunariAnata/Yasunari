const readline = require("readline-sync");
const stringSimilarity = require("string-similarity");

const sentences = [
  "Hi! What do you like.",
  "Hello World.",
  "Python is my life.",
];

function calculateWPM(startTime, endTime, text) {
  const words = text.trim().split(/\s+/).length;
  const timeMinutes = (endTime - startTime) / 60000;
  return Math.round(words / timeMinutes);
}

function calculateAccuracy(reference, typed) {
  const similarity = stringSimilarity.compareTwoStrings(reference, typed);
  return Math.round(similarity * 10000) / 100; // round to 2 decimal
}

function main() {
  console.log("=== Ải 1 ===");
  readline.question("Nhấn Enter để bắt đầu...");

  const sentence = sentences[Math.floor(Math.random() * sentences.length)];
  console.log("\nGõ câu sau:\n");
  console.log(sentence);
  console.log("\n--- Gõ ở đây nè mấy ní ---");

  const start = Date.now();
  const typedText = readline.question("\n> ");
  const end = Date.now();

  const wpm = calculateWPM(start, end, typedText);
  const accuracy = calculateAccuracy(sentence, typedText);

  console.log("\n--- Kết quả ---");
  console.log(`Tốc độ gõ: ${wpm} từ/phút`);
  console.log(`Độ chính xác: ${accuracy}%`);
}

main();
