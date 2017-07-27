/*
    Program Name: Recipe Display Application
    
    Author: Breann Bricketto

    Date:   7/28/17

    Filename: script.js
    
*/

    /*global $*/

    //displays the next element after the current target
    
        function display(event) {
            
            $("h3").next().clone().appendTo("article");
            
            $(event.currentTarget).next().fadeIn("slow");

    }//end of display

    //attach event listener to h3 elements to invoke display function when clicked

        $("h3").click(display);
