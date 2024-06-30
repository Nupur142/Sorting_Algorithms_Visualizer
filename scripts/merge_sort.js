/*
    *****************
    DONE BY:-    NUPUR MISHRA
    
    *****************
*/

// Function to initiate Merge Sort visualization
function Merge() {
    // Setting Time complexities for Merge Sort
    document.getElementById("Time_Worst").innerText = "O(N log N)";
    document.getElementById("Time_Average").innerText = "Θ(N log N)";
    document.getElementById("Time_Best").innerText = "Ω(N log N)";

    // Setting Space complexity for Merge Sort
    document.getElementById("Space_Worst").innerText = "O(N)";

    c_delay = 0; // Initialize cumulative delay to 0

    // Start the merge sort process by partitioning the array
    merge_partition(0, array_size - 1);

    // Enable buttons and input fields after the sorting is complete
    enable_buttons();
}

// Function to merge and sort the divided arrays
function merge_sort(start, mid, end) {
    var p = start, q = mid + 1; // Initialize pointers for the two halves
    var Arr = [], k = 0; // Temporary array to hold sorted elements

    // Merge the two halves into the temporary array
    for (var i = start; i <= end; i++) {
        if (p > mid) { // If left half is exhausted
            Arr[k++] = div_sizes[q++];
            div_update(divs[q - 1], div_sizes[q - 1], "red"); // Color update
        } else if (q > end) { // If right half is exhausted
            Arr[k++] = div_sizes[p++];
            div_update(divs[p - 1], div_sizes[p - 1], "red"); // Color update
        } else if (div_sizes[p] < div_sizes[q]) { // If element in left half is smaller
            Arr[k++] = div_sizes[p++];
            div_update(divs[p - 1], div_sizes[p - 1], "red"); // Color update
        } else { // If element in right half is smaller
            Arr[k++] = div_sizes[q++];
            div_update(divs[q - 1], div_sizes[q - 1], "red"); // Color update
        }
    }

    // Copy the sorted elements back to the original array
    for (var t = 0; t < k; t++) {
        div_sizes[start++] = Arr[t];
        div_update(divs[start - 1], div_sizes[start - 1], "green"); // Color update
    }
}

// Function to partition the array for merge sort
function merge_partition(start, end) {
    if (start < end) { // Base condition for recursion
        var mid = Math.floor((start + end) / 2); // Find the mid point
        div_update(divs[mid], div_sizes[mid], "yellow"); // Color update

        // Recursively partition the left half
        merge_partition(start, mid);
        // Recursively partition the right half
        merge_partition(mid + 1, end);

        // Merge the two halves
        merge_sort(start, mid, end);
    }
}


/*
    *****************
    DONE BY:-    NUPUR MISHRA
    
    *****************
*/