document.addEventListener("DOMContentLoaded", function () {
    // Get references to all the select elements by their unique ids
    const city1 = document.getElementById('city1');
    const city2 = document.getElementById('city2');
    const city3 = document.getElementById('city3');

    const allCities = ["kokrajhar", "guwahati", "dibrugarh", "tezpur"];

    // Update options for city2 and city3 when city1 changes
    city1.addEventListener("change", function () {
        updateCityOptions(city2, [city1.value]); // Update city2 based on city1
        updateCityOptions(city3, [city1.value, city2.value]); // Update city3 based on city1 and city2
    });

    // Update options for city3 when city2 changes
    city2.addEventListener("change", function () {
        updateCityOptions(city3, [city1.value, city2.value]); // Update city3 based on both city1 and city2
    });

    // Function to update the available options in a select element
    function updateCityOptions(selectElement, excludeValues) {
        const currentValue = selectElement.value; // Store the current selection

        // Clear all options but keep the "Select City" option
        selectElement.innerHTML = '<option value="">Select City</option>';

        // Add the available options that are not in excludeValues
        allCities.forEach(city => {
            if (!excludeValues.includes(city)) {
                const option = document.createElement('option');
                option.value = city;
                option.text = city.charAt(0).toUpperCase() + city.slice(1);
                selectElement.appendChild(option);
            }
        });

        // Preserve the selected value if it is still valid
        if (currentValue && !excludeValues.includes(currentValue)) {
            selectElement.value = currentValue;
        } else {
            selectElement.selectedIndex = 0; // Reset selection if the previous value is not valid
        }
    }

    // Initialize city2 and city3 when the page loads
    updateCityOptions(city2, [city1.value]);
    updateCityOptions(city3, [city1.value, city2.value]);

    // Get the save and next buttons
    const saveBtn = document.querySelector('.btn:nth-child(1)'); // First button is "Save"
    const nextBtn = document.querySelector('.btn:nth-child(2)'); // Second button is "Next"

    // Function to get the selected module
    function getSelectedModule() {
        const moduleInputs = document.querySelectorAll('input[name="module"]');
        for (let input of moduleInputs) {
            if (input.checked) {
                return input.value;
            }
        }
        return null;
    }

    // Function to get the selected city from the dropdown
    function getSelectedCity(selectId) {
        const selectElement = document.getElementById(selectId);
        return selectElement.value;
    }

    // Save button functionality
    saveBtn.addEventListener('click', function() {
        const selectedModule = getSelectedModule();
        const city1Value = getSelectedCity('city1');
        const city2Value = getSelectedCity('city2');
        const city3Value = getSelectedCity('city3');

        if (!selectedModule || city1Value === '' || city2Value === '' || city3Value === '') {
            alert('Please fill all the fields.');
            return;
        }

        // Save to localStorage
        localStorage.setItem('selectedModule', selectedModule);
        localStorage.setItem('city1', city1Value);
        localStorage.setItem('city2', city2Value);
        localStorage.setItem('city3', city3Value);

        alert('Details saved successfully!');
    });

    // Next button functionality
    nextBtn.addEventListener('click', function() {
        window.location.href = 'personal.html'; // Redirect to personal.html
    });
});
