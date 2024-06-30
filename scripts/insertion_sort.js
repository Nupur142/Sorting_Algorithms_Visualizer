/*
    *****************
    DONE BY:-   NUPUR MISHRA
    
    *****************
*/

// Function to initiate Insertion Sort visualization
function Insertion() {
    // Setting Time complexities for Insertion Sort
    document.getElementById("Time_Worst").innerText = "O(N^2)";
    document.getElementById("Time_Average").innerText = "Θ(N^2)";
    document.getElementById("Time_Best").innerText = "Ω(N)";

    // Setting Space complexity for Insertion Sort
    document.getElementById("Space_Worst").innerText = "O(1)";

    c_delay = 0; // Initialize cumulative delay to 0

    // Loop through each element in the array
    for (var j = 0; j < array_size; j++) {
        // Visualize the current element being considered by changing its color to yellow
        div_update(divs[j], div_sizes[j], "yellow");

        var key = div_sizes[j]; // Store the current element
        var i = j - 1; // Initialize i to the element before the current element

        // Move elements of div_sizes[0..i], that are greater than key, to one position ahead of their current position
        while (i >= 0 && div_sizes[i] > key) {
            // Visualize the comparison by changing the color of the elements to red
            div_update(divs[i], div_sizes[i], "red");
            div_update(divs[i + 1], div_sizes[i + 1], "red");

            // Move the element to the right
            div_sizes[i + 1] = div_sizes[i];

            // Visualize the height change by changing the color to red
            div_update(divs[i], div_sizes[i], "red");
            div_update(divs[i + 1], div_sizes[i + 1], "red");

            // Reset the color of the moved element to blue
            div_update(divs[i], div_sizes[i], "blue");
            if (i == (j - 1)) {
                // If this is the element just before the current element, keep it yellow
                div_update(divs[i + 1], div_sizes[i + 1], "yellow");
            } else {
                // Otherwise, reset the color to blue
                div_update(divs[i + 1], div_sizes[i + 1], "blue");
            }
            i -= 1; // Move to the previous element
        }
        div_sizes[i + 1] = key; // Place the key in its correct position

        // Visualize the sorted part of the array by changing the color to green
        for (var t = 0; t < j; t++) {
            div_update(divs[t], div_sizes[t], "green");
        }
    }
    // Visualize the last element as sorted by changing the color to green
    div_update(divs[j - 1], div_sizes[j - 1], "green");

    // Enable buttons and input fields after the sorting is complete
    enable_buttons();
}


/*
    *****************
    DONE BY:-   NUPUR MISHRA
    
    *****************
*/