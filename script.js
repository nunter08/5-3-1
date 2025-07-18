// Function to round to the nearest 2.5
function roundToNearestTwoPointFive(num) {
    return Math.round(num / 2.5) * 2.5;
}

// Function to update the table with regular values
function updateTable() {
    const userInput = parseFloat(document.getElementById('inputField').value);
    let userMultiplier = document.getElementById('inputField2').value.trim();

    if (userMultiplier === "") {
        userMultiplier = 0.9;
    } else {
        userMultiplier = parseFloat(userMultiplier);
    }

    if (isNaN(userInput) || isNaN(userMultiplier)) {
        alert("Please enter valid numbers for both 1RM and TM multiplier.");
        return;
    }

    const trainingMax = userInput * userMultiplier;

    const workingSet1 = trainingMax * 0.65;
    const workingSet2 = trainingMax * 0.75; 
    const workingSet3 = trainingMax * 0.85; 
    const workingSet4 = trainingMax * 0.70; 
    const workingSet5 = trainingMax * 0.80; 
    const workingSet6 = trainingMax * 0.90;
    const workingSet7 = trainingMax * 0.75; 
    const workingSet8 = trainingMax * 0.85; 
    const workingSet9 = trainingMax * 0.95; 
    const workingSet10 = trainingMax * 0.40; 
    const workingSet11 = trainingMax * 0.50; 
    const workingSet12 = trainingMax * 0.60;     

    document.getElementById('cell-2-2').innerHTML = `<span class="left">${workingSet1.toFixed(2)}</span>`;
    document.getElementById('cell-2-3').innerHTML = `<span class="left">${workingSet2.toFixed(2)}</span>`;
    document.getElementById('cell-2-4').innerHTML = `<span class="left">${workingSet3.toFixed(2)}</span>`;
    document.getElementById('cell-3-2').innerHTML = `<span class="left">${workingSet4.toFixed(2)}</span>`;
    document.getElementById('cell-3-3').innerHTML = `<span class="left">${workingSet5.toFixed(2)}</span>`;
    document.getElementById('cell-3-4').innerHTML = `<span class="left">${workingSet6.toFixed(2)}</span>`;
    document.getElementById('cell-4-2').innerHTML = `<span class="left">${workingSet7.toFixed(2)}</span>`;
    document.getElementById('cell-4-3').innerHTML = `<span class="left">${workingSet8.toFixed(2)}</span>`;
    document.getElementById('cell-4-4').innerHTML = `<span class="left">${workingSet9.toFixed(2)}</span>`;
    document.getElementById('cell-5-2').innerHTML = `<span class="left">${workingSet10.toFixed(2)}</span>`;
    document.getElementById('cell-5-3').innerHTML = `<span class="left">${workingSet11.toFixed(2)}</span>`;
    document.getElementById('cell-5-4').innerHTML = `<span class="left">${workingSet12.toFixed(2)}</span>`;

    // Update the text field with Training Max
    document.getElementById('outputField').value = `Training Max: ${trainingMax.toFixed(2)}`;
}

// New function to update the table with values rounded to nearest 2.5
function roundToTwoPointFive() {
    const userInput = parseFloat(document.getElementById('inputField').value);
    let userMultiplier = document.getElementById('inputField2').value.trim();

    if (userMultiplier === "") {
        userMultiplier = 0.9;
    } else {
        userMultiplier = parseFloat(userMultiplier);
    }

    if (isNaN(userInput) || isNaN(userMultiplier)) {
        alert("Please enter valid numbers for both 1RM and TM multiplier.");
        return;
    }

    const trainingMax = userInput * userMultiplier;

    const workingSet1 = roundToNearestTwoPointFive(trainingMax * 0.65);
    const workingSet2 = roundToNearestTwoPointFive(trainingMax * 0.75);
    const workingSet3 = roundToNearestTwoPointFive(trainingMax * 0.85);
    const workingSet4 = roundToNearestTwoPointFive(trainingMax * 0.70);
    const workingSet5 = roundToNearestTwoPointFive(trainingMax * 0.80);
    const workingSet6 = roundToNearestTwoPointFive(trainingMax * 0.90);
    const workingSet7 = roundToNearestTwoPointFive(trainingMax * 0.75);
    const workingSet8 = roundToNearestTwoPointFive(trainingMax * 0.85);
    const workingSet9 = roundToNearestTwoPointFive(trainingMax * 0.95);
    const workingSet10 = roundToNearestTwoPointFive(trainingMax * 0.40);
    const workingSet11 = roundToNearestTwoPointFive(trainingMax * 0.50);
    const workingSet12 = roundToNearestTwoPointFive(trainingMax * 0.60);

    document.getElementById('cell-2-2').innerHTML = `<span class="left">${workingSet1.toFixed(2)}</span>`;
    document.getElementById('cell-2-3').innerHTML = `<span class="left">${workingSet2.toFixed(2)}</span>`;
    document.getElementById('cell-2-4').innerHTML = `<span class="left">${workingSet3.toFixed(2)}</span>`;
    document.getElementById('cell-3-2').innerHTML = `<span class="left">${workingSet4.toFixed(2)}</span>`;
    document.getElementById('cell-3-3').innerHTML = `<span class="left">${workingSet5.toFixed(2)}</span>`;
    document.getElementById('cell-3-4').innerHTML = `<span class="left">${workingSet6.toFixed(2)}</span>`;
    document.getElementById('cell-4-2').innerHTML = `<span class="left">${workingSet7.toFixed(2)}</span>`;
    document.getElementById('cell-4-3').innerHTML = `<span class="left">${workingSet8.toFixed(2)}</span>`;
    document.getElementById('cell-4-4').innerHTML = `<span class="left">${workingSet9.toFixed(2)}</span>`;
    document.getElementById('cell-5-2').innerHTML = `<span class="left">${workingSet10.toFixed(2)}</span>`;
    document.getElementById('cell-5-3').innerHTML = `<span class="left">${workingSet11.toFixed(2)}</span>`;
    document.getElementById('cell-5-4').innerHTML = `<span class="left">${workingSet12.toFixed(2)}</span>`;

    // Update the text field with Training Max
    document.getElementById('outputField').value = `Training Max: ${trainingMax.toFixed(2)}`;
}
