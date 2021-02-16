function findVegan() {
    var noteSection = document.getElementById("noteSection").value;
    var keyword = "vegan";
    if (noteSection.indexOf(keyword) != -1) {
        return true;
    }
    return false;
}
function clearSectionsAndSendConfimration() {
    document.getElementById("noteSection").value = ""; //Notes section cleared
    document.getElementById("toppingList").reset(); //radio buttons cleared
    document.getElementById("quantities").value = "one"; //select is set back to one
}
function orderCakeScript() {
    var veganInNotes = findVegan(); //Find vegan in the notes section 
    if (veganInNotes) {
        alert("This product contains dairy."); //send alert if that is true
    } else {
        clearSectionsAndSendConfimration();
    }
    //clear sections
}
//script that handles the displaying of the different months
$("#months").mouseenter(function () {
    $(this)[0].size = $(this).find("option").length;
});

//script that clicks the individual month
$("#months").click(function () {
    $(this)[0].size =0;
});