/*
    *****************
    DONE BY:-    NUPUR MISHRA
    
    *****************
*/

// Function to initiate Heap Sort visualization
function Heap() {
    // Setting Time complexities for Heap Sort
    document.getElementById("Time_Worst").innerText = "O(N log N)";
    document.getElementById("Time_Average").innerText = "Θ(N log N)";
    document.getElementById("Time_Best").innerText = "Ω(N log N)";

    // Setting Space complexity for Heap Sort
    document.getElementById("Space_Worst").innerText = "O(1)";

    c_delay = 0; // Initialize cumulative delay to 0

    // Perform Heap Sort
    heap_sort();

    // Enable buttons and input fields after the sorting is complete
    enable_buttons();
}

// Function to swap elements at indices i and j
function swap(i, j) {
    // Visualize the elements being swapped by changing their color to red
    div_update(divs[i], div_sizes[i], "red");
    div_update(divs[j], div_sizes[j], "red");

    // Swap the elements in the array
    var temp = div_sizes[i];
    div_sizes[i] = div_sizes[j];
    div_sizes[j] = temp;

    // Visualize the height change after the swap by changing the color to red
    div_update(divs[i], div_sizes[i], "red");
    div_update(divs[j], div_sizes[j], "red");

    // Reset the color of the swapped elements to blue
    div_update(divs[i], div_sizes[i], "blue");
    div_update(divs[j], div_sizes[j], "blue");
}

// Function to maintain the max-heap property
function max_heapify(n, i) {
    var largest = i; // Initialize largest as root
    var l = 2 * i + 1; // Left child
    var r = 2 * i + 2; // Right child

    // If left child is larger than root
    if (l < n && div_sizes[l] > div_sizes[largest]) {
        if (largest != i) {
            // Reset the color of the previous largest element to blue
            div_update(divs[largest], div_sizes[largest], "blue");
        }
        largest = l; // Update largest to left child
        // Visualize the new largest element by changing its color to red
        div_update(divs[largest], div_sizes[largest], "red");
    }

    // If right child is larger than largest so far
    if (r < n && div_sizes[r] > div_sizes[largest]) {
        if (largest != i) {
            // Reset the color of the previous largest element to blue
            div_update(divs[largest], div_sizes[largest], "blue");
        }
        largest = r; // Update largest to right child
        // Visualize the new largest element by changing its color to red
        div_update(divs[largest], div_sizes[largest], "red");
    }

    // If largest is not root
    if (largest != i) {
        swap(i, largest); // Swap root with largest
        max_heapify(n, largest); // Recursively heapify the affected sub-tree
    }
}

// Function to perform Heap Sort
function heap_sort() {
    // Build a maxheap
    for (var i = Math.floor(array_size / 2) - 1; i >= 0; i--) {
        max_heapify(array_size, i);
    }

    // Extract elements from heap one by one
    for (var i = array_size - 1; i > 0; i--) {
        swap(0, i); // Move current root to end

        // Visualize the sorted part by changing the color to green
        div_update(divs[i], div_sizes[i], "green");
        // Visualize the current root by changing the color to yellow
        div_update(divs[i], div_sizes[i], "yellow");

        max_heapify(i, 0); // Call max_heapify on the reduced heap

        // Reset the color of the current root to blue
        div_update(divs[i], div_sizes[i], "blue");
        // Visualize the sorted part by changing the color to green
        div_update(divs[i], div_sizes[i], "green");
    }
    // Visualize the first element as sorted by changing the color to green
    div_update(divs[i], div_sizes[i], "green");
}


/*
    *****************
    DONE BY:-    NUPUR MISHRA
    
    *****************
*/