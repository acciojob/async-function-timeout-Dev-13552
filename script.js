// Get elements
const textInput = document.getElementById("text");
const delayInput = document.getElementById("delay");
const btn = document.getElementById("btn");
const output = document.getElementById("output");

// Utility: wait for given ms
function wait(ms) {
  return new Promise((resolve, reject) =>{
	  setTimeout(()=>{resolve("done")}, ms*1000);
  } )
}

// Main async function
async function showMessage() {
  const message = textInput.value;
  const delay = Number(delayInput.value);

  if (!message || !delay) {
    output.innerText = "Please enter valid text and delay.";
    return;
  }

  // Show feedback while waiting
  // output.innerText = "Processing...";

  // Await delay
  await wait(delay);

  // Show message
  output.innerText = message;
}

// Event listener
btn.addEventListener("click", showMessage);
