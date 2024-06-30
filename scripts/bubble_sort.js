/*
    *****************
    DONE BY:-   NUPUR MISHRA
    
    *****************
*/

function Bubble()
{
    //Setting Time complexities
    document.getElementById("Time_Worst").innerText="O(N^2)";
    document.getElementById("Time_Average").innerText="Θ(N^2)";
    document.getElementById("Time_Best").innerText="Ω(N)";

    //Setting Space complexity
    document.getElementById("Space_Worst").innerText="O(1)";

    c_delay=0;

// Outer loop for each pass in the Bubble Sort
for (var i = 0; i < array_size - 1; i++) {
    // Inner loop for comparing and swapping elements
    for (var j = 0; j < array_size - i - 1; j++) {
        // Visualize the current comparison by changing the color of the elements to yellow
        div_update(divs[j], div_sizes[j], "#FFD23F");

        // Check if the current element is greater than the next element
        if (div_sizes[j] > div_sizes[j + 1]) {
            // Change the color of the elements being compared to red
            div_update(divs[j], div_sizes[j], "#EE4266");
            div_update(divs[j + 1], div_sizes[j + 1], "#EE4266");

            // Swap the elements
            var temp = div_sizes[j];
            div_sizes[j] = div_sizes[j + 1];
            div_sizes[j + 1] = temp;

            // Visualize the height change after the swap by changing the color to red
            div_update(divs[j], div_sizes[j], "#EE4266");
            div_update(divs[j + 1], div_sizes[j + 1], "#EE4266");
        }

        // Reset the color of the compared elements to blue
        div_update(divs[j], div_sizes[j], "#5E1675");
    }

    // Visualize that the last element is in its sorted position by changing the color to green
    div_update(divs[j], div_sizes[j], "#337357");
}

// Visualize that the first element is in its sorted position by changing the color to green
div_update(divs[0], div_sizes[0], "#337357");

// Enable buttons and input fields after the sorting is complete
enable_buttons();

}

/*
    *****************
    DONE BY:-   NUPUR MISHRA
    
    *****************
*/