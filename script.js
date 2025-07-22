
function updateTable() {
    // Get the user input for 1RM
    const userInput = parseFloat(document.getElementById('inputField').value);
    
    // Get the user input for TM multiplier, default to 0.9 if empty
    let userMultiplier = document.getElementById('inputField2').value.trim();
    
    // If the input for TM multiplier is empty, use the default value (0.9)
    if (userMultiplier === "") {
        userMultiplier = 0.9;
    } else {
        // If there's a value, parse it as a float
        userMultiplier = parseFloat(userMultiplier);
    }

    // Check for invalid input (either 1RM or TM multiplier)
    if (isNaN(userInput) || isNaN(userMultiplier)) {
        alert("Please enter valid numbers for both 1RM and TM multiplier.");
        return;
    }

    // Calculate the Training Max (TM)
    const trainingMax = userInput * userMultiplier;

    // Calculate working sets based on percentages of TM
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

    // Update the table with the calculated values
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
    
    // Update the text field
    document.getElementById('outputField').value = `Training Max: ${trainingMax.toFixed(2)}`;
}

// Function to round to the nearest 2.5
function roundToNearestTwoPointFive(num) {
    return Math.round(num / 2.5) * 2.5;
}

// Plate values to use for breakdown
const plateValues = [1.25, 2.5, 5, 10, 15, 20, 25];

// Function to break down a value into plate combinations
function breakDownValue(targetValue, plateValues) {
    plateValues.sort((a, b) => b - a); // Sort plates in descending order
    let combination = [];

    for (let plate of plateValues) {
        while (targetValue >= plate) {
            combination.push(plate);
            targetValue -= plate;
        }
    }

    if (targetValue > 0) {
        combination.push(targetValue.toFixed(2)); // Handle small remainder
    }

    return combination;
}

// Function to update the table with plates required for each side
function updateTable2() {
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

    // Calculate the training max
    const trainingMax = userInput * userMultiplier;
    document.getElementById('outputField').value = `Training Max: ${trainingMax.toFixed(2)}`;

    // Calculate weight with rounding
    const roundedweight1 = roundToNearestTwoPointFive(trainingMax * 0.65);
    const roundedweight2 = roundToNearestTwoPointFive(trainingMax * 0.75); 
    const roundedweight3 = roundToNearestTwoPointFive(trainingMax * 0.85); 
    const roundedweight4 = roundToNearestTwoPointFive(trainingMax * 0.70); 
    const roundedweight5 = roundToNearestTwoPointFive(trainingMax * 0.80); 
    const roundedweight6 = roundToNearestTwoPointFive(trainingMax * 0.90);
    const roundedweight7 = roundToNearestTwoPointFive(trainingMax * 0.75); 
    const roundedweight8 = roundToNearestTwoPointFive(trainingMax * 0.85); 
    const roundedweight9 = roundToNearestTwoPointFive(trainingMax * 0.95); 
    const roundedweight10 = roundToNearestTwoPointFive(trainingMax * 0.40); 
    const roundedweight11 = roundToNearestTwoPointFive(trainingMax * 0.50); 
    const roundedweight12 = roundToNearestTwoPointFive(trainingMax * 0.60); 
    
    // Calculate weight per side values with rounding
    const weightperside1 = (roundToNearestTwoPointFive(trainingMax * 0.65)-20)/2;
    const weightperside2 = (roundToNearestTwoPointFive(trainingMax * 0.75)-20)/2; 
    const weightperside3 = (roundToNearestTwoPointFive(trainingMax * 0.85)-20)/2; 
    const weightperside4 = (roundToNearestTwoPointFive(trainingMax * 0.70)-20)/2; 
    const weightperside5 = (roundToNearestTwoPointFive(trainingMax * 0.80)-20)/2; 
    const weightperside6 = (roundToNearestTwoPointFive(trainingMax * 0.90)-20)/2;
    const weightperside7 = (roundToNearestTwoPointFive(trainingMax * 0.75)-20)/2; 
    const weightperside8 = (roundToNearestTwoPointFive(trainingMax * 0.85)-20)/2; 
    const weightperside9 = (roundToNearestTwoPointFive(trainingMax * 0.95)-20)/2; 
    const weightperside10 = (roundToNearestTwoPointFive(trainingMax * 0.40)-20)/2; 
    const weightperside11 = (roundToNearestTwoPointFive(trainingMax * 0.50)-20)/2; 
    const weightperside12 = (roundToNearestTwoPointFive(trainingMax * 0.60)-20)/2;     

    // Break down each working set value into plates
    const plateCombinations = [
        breakDownValue(weightperside1, plateValues),
        breakDownValue(weightperside2, plateValues),
        breakDownValue(weightperside3, plateValues),
        breakDownValue(weightperside4, plateValues),
        breakDownValue(weightperside5, plateValues),
        breakDownValue(weightperside6, plateValues),
        breakDownValue(weightperside7, plateValues),
        breakDownValue(weightperside8, plateValues),
        breakDownValue(weightperside9, plateValues),
        breakDownValue(weightperside10, plateValues),
        breakDownValue(weightperside11, plateValues),
        breakDownValue(weightperside12, plateValues)
    ];

    // Insert the values and their plate combinations into the HTML table
    document.getElementById('cell-2-2').innerHTML = `<span class="left">${roundedweight1}<br>(${plateCombinations[0].join(', ')})</span>`;
    document.getElementById('cell-2-3').innerHTML = `<span class="left">${roundedweight2}<br>(${plateCombinations[1].join(', ')})</span>`;
    document.getElementById('cell-2-4').innerHTML = `<span class="left">${roundedweight3}<br>(${plateCombinations[2].join(', ')})</span>`;
    document.getElementById('cell-3-2').innerHTML = `<span class="left">${roundedweight4}<br>(${plateCombinations[3].join(', ')})</span>`;
    document.getElementById('cell-3-3').innerHTML = `<span class="left">${roundedweight5}<br>(${plateCombinations[4].join(', ')})</span>`;
    document.getElementById('cell-3-4').innerHTML = `<span class="left">${roundedweight6}<br>(${plateCombinations[5].join(', ')})</span>`;
    document.getElementById('cell-4-2').innerHTML = `<span class="left">${roundedweight7}<br>(${plateCombinations[6].join(', ')})</span>`;
    document.getElementById('cell-4-3').innerHTML = `<span class="left">${roundedweight8}<br>(${plateCombinations[7].join(', ')})</span>`;
    document.getElementById('cell-4-4').innerHTML = `<span class="left">${roundedweight9}<br>(${plateCombinations[8].join(', ')})</span>`;
    document.getElementById('cell-5-2').innerHTML = `<span class="left">${roundedweight10}<br>(${plateCombinations[9].join(', ')})</span>`;
    document.getElementById('cell-5-3').innerHTML = `<span class="left">${roundedweight11}<br>(${plateCombinations[10].join(', ')})</span>`;
    document.getElementById('cell-5-4').innerHTML = `<span class="left">${roundedweight12}<br>(${plateCombinations[11].join(', ')})</span>`;
}

// Reset all table cells to their default values
function resetTable() {
    document.getElementById('cell-2-2').innerHTML = "65%";
    document.getElementById('cell-2-3').innerHTML = "75%";
    document.getElementById('cell-2-4').innerHTML = "85%";
    document.getElementById('cell-3-2').innerHTML = "70%";
    document.getElementById('cell-3-3').innerHTML = "80%";
    document.getElementById('cell-3-4').innerHTML = "90%";
    document.getElementById('cell-4-2').innerHTML = "75%";
    document.getElementById('cell-4-3').innerHTML = "85%";
    document.getElementById('cell-4-4').innerHTML = "95%";
    document.getElementById('cell-5-2').innerHTML = "40%";
    document.getElementById('cell-5-3').innerHTML = "50%";
    document.getElementById('cell-5-4').innerHTML = "60%";
}
