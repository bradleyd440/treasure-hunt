const map = document.getElementById('map');
const message = document.getElementById('message');
const clueText = document.getElementById('clue-text');
const gridSize = 5;

// Define clue steps and their correct indexes
const clueSteps = [
  { clue: "Click the square where the sun would rise first.", correctIndex: 0 },  // Top-left
  { clue: "Now, go to the square at the heart of the map.", correctIndex: 12 },   // Center
  { clue: "Next, find the tile that would be the last to see sunset.", correctIndex: 24 }, // Bottom-right
  { clue: "Finally, go to the square guarded by ancient magic.", correctIndex: 7 } // Arbitrary choice for final
];

let currentStep = 0;

function showClue(step) {
  clueText.textContent = clueSteps[step].clue;
}

showClue(currentStep);

for (let i = 0; i < gridSize * gridSize; i++) {
  const tile = document.createElement('div');
  tile.classList.add('tile');
  tile.addEventListener('click', () => {
    if (i === clueSteps[currentStep].correctIndex) {
      tile.classList.add(currentStep === clueSteps.length - 1 ? 'found' : 'clue');
      currentStep++;
      if (currentStep < clueSteps.length) {
        showClue(currentStep);
        message.textContent = '✅ Correct! Follow the next clue.';
      } else {
        message.textContent = '🎉 You uncovered the secret code: 394 (Snape would be proud).';
      }
    } else {
      message.textContent = '❌ That square feels... wrong. Try again.';
    }
  });
  map.appendChild(tile);
}