/*
    *****************
    DONE BY:-   NUPUR MISHRA
    
    *****************
*/

// Function to initiate Selection Sort visualization
function Selection_sort() {
    // Setting Time complexities for Selection Sort
    document.getElementById("Time_Worst").innerText = "O(N^2)";
    document.getElementById("Time_Average").innerText = "Θ(N^2)";
    document.getElementById("Time_Best").innerText = "Ω(N^2)";

    // Setting Space complexity for Selection Sort
    document.getElementById("Space_Worst").innerText = "O(1)";

    c_delay = 0; // Initialize cumulative delay to 0

    // Outer loop to iterate over the array
    for (var i = 0; i < array_size - 1; i++) {
        // Visualize the current element being considered by changing its color to red
        div_update(divs[i], div_sizes[i], "red");

        var index_min = i; // Initialize the minimum index to the current index

        // Inner loop to find the minimum element in the unsorted part of the array
        for (var j = i + 1; j < array_size; j++) {
            // Visualize the current element being compared by changing its color to yellow
            div_update(divs[j], div_sizes[j], "yellow");

            // If a smaller element is found, update the minimum index
            if (div_sizes[j] < div_sizes[index_min]) {
                if (index_min != i) {
                    // Reset the color of the previous minimum element to blue
                    div_update(divs[index_min], div_sizes[index_min], "blue");
                }
                index_min = j; // Update the minimum index
                // Visualize the new minimum element by changing its color to red
                div_update(divs[index_min], div_sizes[index_min], "red");
            } else {
                // Reset the color of the compared element to blue if it's not the new minimum
                div_update(divs[j], div_sizes[j], "blue");
            }
        }
        
        // Swap the found minimum element with the current element
        if (index_min != i) {
            var temp = div_sizes[index_min];
            div_sizes[index_min] = div_sizes[i];
            div_sizes[i] = temp;

            // Visualize the height change by changing the color to red
            div_update(divs[index_min], div_sizes[index_min], "red");
            div_update(divs[i], div_sizes[i], "red");
            // Reset the color of the swapped elements
            div_update(divs[index_min], div_sizes[index_min], "blue");
        }
        // Visualize the sorted part of the array by changing the color to green
        div_update(divs[i], div_sizes[i], "green");
    }
    // Visualize the last element as sorted by changing the color to green
    div_update(divs[i], div_sizes[i], "green");

    // Enable buttons and input fields after the sorting is complete
    enable_buttons();
}

/*
    *****************
    DONE BY:-   NUPUR MISHRA
    
    *****************
*/