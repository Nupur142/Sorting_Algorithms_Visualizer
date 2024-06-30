/*
    *****************
    DONE BY:-   NUPUR MISHRA
    
    *****************
*/

//We only have to change background-color and height of the sorting element.

var speed=1000;

inp_aspeed.addEventListener("input",vis_speed);

function vis_speed()
{
    var array_speed=inp_aspeed.value;
    switch(parseInt(array_speed))
    {
        case 1: speed=1;
                break;
        case 2: speed=10;
                break;
        case 3: speed=100;
                break;
        case 4: speed=1000;
                break;
        case 5: speed=10000;
                break;
    }
    //This is done to adjust the delay based on the size of the array.
    delay_time=10000/(Math.floor(array_size/10)*speed);        
    //Decrease numerator to increase speed.
}

var delay_time=10000/(Math.floor(array_size/10)*speed);        //Decrease numerator to increase speed.
var c_delay=0;//This is updated ov every div change so that visualization is visible.

function div_update(cont,height,color)
{
    window.setTimeout(function(){
        cont.style=" margin:0% " + margin_size + "%; width:" + (100/array_size-(2*margin_size)) + "%; height:" + height + "%; background-color:" + color + ";";
    },c_delay+=delay_time);
}

// Function to enable buttons and input fields after the visualization is complete
function enable_buttons() {
    // Introduce a delay before enabling buttons, determined by delay_time
    window.setTimeout(function () {
        // Loop through each button in the butts_algos array
        for (var i = 0; i < butts_algos.length; i++) {
            // Clear existing CSS classes associated with the button
            butts_algos[i].classList = [];
            
            // Add the CSS class "butt_unselected" to represent an unselected button
            butts_algos[i].classList.add("butt_unselected");

            // Enable the button by setting its disabled property to false
            butts_algos[i].disabled = false;
        }

        // Enable the following input fields
        inp_as.disabled = false;        
        inp_gen.disabled = false;       
        inp_aspeed.disabled = false;    
    }, c_delay += delay_time); // Increment cumulative delay for proper timing
}


/*
    *****************
    DONE BY:-   NUPUR MISHRA
    
    *****************
*/