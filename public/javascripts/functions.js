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

$("#Jan").on("click", function () {
    $("#first").html("Jan");
});

$("#Feb").on("click", function () {
    $("#first").html("Feb");
});
$("#Mar").on("click", function () {
    $("#first").html("Mar");
});
$("#Apr").on("click", function () {
    $("#first").html("Apr");
});

$("#May").on("click", function () {
    $("#first").html("May");
});
$("#Jun").on("click", function () {
    $("#first").html("Jun");
});
$("#MJuly").on("click", function () {
    $("#first").html("July");
});

$("#Aug").on("click", function () {
    $("#first").html("Aug");
});
$("#Sep").on("click", function () {
    $("#first").html("Sep");
});
$("#Oct").on("click", function () {
    $("#first").html("Oct");
});

$("#Nov").on("click", function () {
    $("#first").html("Nov");
});
$("#Dec").on("click", function () {
    $("#first").html("Dec");
});

