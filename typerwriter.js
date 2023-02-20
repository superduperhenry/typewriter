const sentence = "hello there from lighthouse labs \n";

// for (const char of sentence) {
//   process.stdout.write(char);
// }

for (let i = 0; i < sentence.length; i++) {
  setTimeout(() => {
    process.stdout.write(sentence[i]);
  }, 50 * i);
}
