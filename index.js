// Code your solutions in this file
// index.js

function writeCards(names, event) {
  const messages = []; // Create a new, empty array to hold the messages

  // Iterate through the input array using a for loop
  for (let i = 0; i < names.length; i++) {
    const name = names[i]; // Get the current name
    // Build the 'thank you' message using string interpolation
    const message = `Thank you, ${name}, for the wonderful ${event} gift!`;
    messages.push(message); // Add the message to the new array
  }

  return messages; // Return the new array after the loop finishes
}

// 2. countDown(number)
// Takes in any positive integer and, starting from that number, counts down to zero
// using console.log() with a while loop.
function countDown(number) {
  let counter = number; // Initialize the counter outside the while loop

  // The while loop continues as long as 'counter' is greater than or equal to 0
  while (counter >= 0) {
    console.log(counter); 
    counter--; 
  }
}



module.exports = {
  writeCards,
  countDown
};