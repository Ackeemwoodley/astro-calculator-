 // Write your JavaScript code here! 
 // Populate the dropdown element with the data found in the planets array. 
var planets = [ 
    ['Pluto', 0.06,], 
    ['Neptune', 1.148], 
    ['Uranus', 0.917], 
    ['Saturn', 1.139], 
    ['Jupiter', 2.640], 
    ['Mars', 0.3895], 
    ['Moon', 0.1655], 
    ['Earth', 1], 
    ['Venus', 0.9032],  
    ['Mercury', 0.377], 
    ['Sun', 27.9] 
];
    //reverse order so sun is first 
planets.reverse();

    // Use the following built-in methods: 
    // `.forEach` `document.createElement` `document.getElementById` `.appendChild` 
    planets.forEach(planet => {
        let option = document.createElement('option');
        option.text = planet[0];
        option.value = planet[0];
        document.getElementById('planets').appendChild(option);
    })
// fuction that removes pluto from the dropdown
    const removePlutoCheckbox = document.getElementById('remove-pluto-checkbox');
    const planetsDropdown = document.getElementById('planets');

    // Store Pluto's option so we can re-add it if needed
    let plutoOption = planetsDropdown.querySelector('option[value="Pluto"]');

    removePlutoCheckbox.addEventListener('change', function() {
        if (this.checked) {
            if (plutoOption) {
                plutoOption.remove(); // Remove Pluto from dropdown
            }
        } else {
            planetsDropdown.appendChild(plutoOption); // Re-add Pluto if unchecked
        }
    });


function calculateWeight(weight, planetName) { 
    // 2. Write the code to return the correct weight
    let planetData = planets.find(planet => planet[0] === planetName);
      //  weight=planet[1];
      if (planetData) {
        let gravity = planetData[1]; // Extract the gravity multiplier
        return weight * gravity; // Calculate new weight
    }
}

function handleClickEvent(e) {
    // 3. Declare a variable called userWeight and assign the value of the user's weight. 
    const userWeight = parseFloat(document.getElementById('user-weight').value);
    // 4. Delcare a variable called planetName and assign the name of the selected planet from the drop down. 
const planetName = document.getElementById('planets').value;
    // 5. Declare a variable called result and assign the value of the new calculated weight. 
const result = calculateWeight(userWeight, planetName);

if (isNaN(userWeight) || userWeight <= 0) {
    console.error("Please enter a valid weight.");
    document.getElementById('output').textContent = "Please enter a valid weight.";
    return; // Stop if input is not valid
}
    // 6. Write code to display the message shown in the screenshot. 
console.log(`If you were on ${planetName}, you would weigh ${result}lbs!`);
document.getElementById('output').textContent = `If you were on ${planetName}, you would weigh ${result}lbs!`;
} 

    // 7. Set the #calculate-button element's onclick method to use the handleClickEvent function.
     document.getElementById("calculate-button").addEventListener("click", handleClickEvent);