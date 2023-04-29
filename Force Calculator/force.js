// Get HTML elements
const q1Input = document.getElementById('q1');
const q2Input = document.getElementById('q2');
const q3Input = document.getElementById('q3');
const x1Input = document.getElementById('x1');
const x2Input = document.getElementById('x2');
const x3Input = document.getElementById('x3');
const outputDiv = document.getElementById('output');
const calcBtn = document.getElementById('calc-btn');

// Add event listener to calculate button
calcBtn.addEventListener('click', calculateForce);

function calculateForce() {
  // Get input values
  const q1 = Number(q1Input.value);
  const q2 = Number(q2Input.value);
  const q3 = Number(q3Input.value);
  const x1 = Number(x1Input.value);
  const x2 = Number(x2Input.value);
  const x3 = Number(x3Input.value);

  // Calculate force
  const k = 8.9875517923 * Math.pow(10, 9); // Coulomb's constant
  const r = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(x3 - x2, 2) + Math.pow(x3 - x1, 2)); // Distance between charges
  const f = k * (q1 * q2 * q3) / Math.pow(r, 2); // Force between charges

  // Display output
  outputDiv.innerHTML = `
    <h2>Result</h2>
    <p>The force between the charges is <strong>${f.toFixed(2)}</strong> Newtons.</p>
  `;
}
