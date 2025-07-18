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

function resetTable() {
    // Reset all table cells to their default values
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
