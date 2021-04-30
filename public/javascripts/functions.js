

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
    document.getElementById("quantities").value = "1"; //select is set back to one
}
function orderCakeScript() {
    var veganInNotes = findVegan(); //Find vegan in the notes section 
    if (veganInNotes) {
        alert("This product contains dairy."); //send alert if that is true
    } else {
        var notes = $("textarea#noteSection").val();
        var topping = $("input[name='toppings']:checked").val();
        var quantity = $("#quantities").val();
        
        $.post("http://localhost:3000/newOrders",{
            topping: topping,
            quantity: quantity,
            notes: notes
        });
        
        clearSectionsAndSendConfimration();
    }
    //clear sections
}

//button clicking and chaning of the JSON data
$("#Jan").on("click", function () {
    console.log("Im here");
    $("#first").html("Jan");
    $.post('http://localhost:3000/orders', function(orderData){
                  
            var dataOrder = JSON.parse(orderData);
                
                $("#chocolateList").html(dataOrder.data[0].quantity.data[2].quantity+ " " + dataOrder.data[0].quantity.data[2].topping);
                $("#plainList").html(dataOrder.data[0].quantity.data[1].quantity + " " + dataOrder.data[0].quantity.data[1].topping);
                $("#cherryList").html(dataOrder.data[0].quantity.data[0].quantity + " " + dataOrder.data[0].quantity.data[0].topping);
    });
});

$("#Feb").on("click", function () {
    $("#first").html("Feb");
    $.post('http://localhost:3000/orders', function(orderData){
                  
            var dataOrder = JSON.parse(orderData);
            
            $("#chocolateList").html(dataOrder.data[1].quantity.data[2].quantity+ " " + dataOrder.data[0].quantity.data[2].topping);
            $("#plainList").html(dataOrder.data[1].quantity.data[1].quantity + " " + dataOrder.data[0].quantity.data[1].topping);
            $("#cherryList").html(dataOrder.data[1].quantity.data[0].quantity + " " + dataOrder.data[0].quantity.data[0].topping);
    });
});
$("#Mar").on("click", function () {
    $("#first").html("Mar");
    $.post('http://localhost:3000/orders', function(orderData){
                  
            var dataOrder = JSON.parse(orderData);

            $("#chocolateList").html(dataOrder.data[2].quantity.data[2].quantity+ " " + dataOrder.data[0].quantity.data[2].topping);
            $("#plainList").html(dataOrder.data[2].quantity.data[1].quantity + " " + dataOrder.data[0].quantity.data[1].topping);
            $("#cherryList").html(dataOrder.data[2].quantity.data[0].quantity + " " + dataOrder.data[0].quantity.data[0].topping);
    });
});
$("#Apr").on("click", function () {
    $("#first").html("Apr");
    $.post('http://localhost:3000/orders', function(orderData){
            
            var dataOrder = JSON.parse(orderData);

            $("#chocolateList").html(dataOrder.data[3].quantity.data[2].quantity+ " " + dataOrder.data[0].quantity.data[2].topping);
            $("#plainList").html(dataOrder.data[3].quantity.data[1].quantity + " " + dataOrder.data[0].quantity.data[1].topping);
            $("#cherryList").html(dataOrder.data[3].quantity.data[0].quantity + " " + dataOrder.data[0].quantity.data[0].topping);
    });
});

$("#May").on("click", function () {
    $("#first").html("May");
    $.post('http://localhost:3000/orders', function(orderData){
                  
            var dataOrder = JSON.parse(orderData);

            $("#chocolateList").html(dataOrder.data[4].quantity.data[2].quantity+ " " + dataOrder.data[0].quantity.data[2].topping);
            $("#plainList").html(dataOrder.data[4].quantity.data[1].quantity + " " + dataOrder.data[0].quantity.data[1].topping);
            $("#cherryList").html(dataOrder.data[4].quantity.data[0].quantity + " " + dataOrder.data[0].quantity.data[0].topping);
    });
});
$("#Jun").on("click", function () {
    $("#first").html("Jun");
    $.post('http://localhost:3000/orders', function(orderData){
                  
            var dataOrder = JSON.parse(orderData);
            $("#chocolateList").html(dataOrder.data[5].quantity.data[2].quantity+ " " + dataOrder.data[0].quantity.data[2].topping);
            $("#plainList").html(dataOrder.data[5].quantity.data[1].quantity + " " + dataOrder.data[0].quantity.data[1].topping);
            $("#cherryList").html(dataOrder.data[5].quantity.data[0].quantity + " " + dataOrder.data[0].quantity.data[0].topping);
    });
});
$("#July").on("click", function () {
    $("#first").html("July");
    $.post('http://localhost:3000/orders', function(orderData){
                  
            var dataOrder = JSON.parse(orderData);
            $("#chocolateList").html(dataOrder.data[6].quantity.data[2].quantity+ " " + dataOrder.data[0].quantity.data[2].topping);
            $("#plainList").html(dataOrder.data[6].quantity.data[1].quantity + " " + dataOrder.data[0].quantity.data[1].topping);
            $("#cherryList").html(dataOrder.data[6].quantity.data[0].quantity + " " + dataOrder.data[0].quantity.data[0].topping);
    });
});

$("#Aug").on("click", function () {
    $("#first").html("Aug");
    $.post('http://localhost:3000/orders', function(orderData){
                  
            var dataOrder = JSON.parse(orderData);

            $("#chocolateList").html(dataOrder.data[7].quantity.data[2].quantity+ " " + dataOrder.data[0].quantity.data[2].topping);
            $("#plainList").html(dataOrder.data[7].quantity.data[1].quantity + " " + dataOrder.data[0].quantity.data[1].topping);
            $("#cherryList").html(dataOrder.data[7].quantity.data[0].quantity + " " + dataOrder.data[0].quantity.data[0].topping);
    });
});
$("#Sep").on("click", function () {
    $("#first").html("Sep");
    $.post('http://localhost:3000/orders', function(orderData){
                  
            var dataOrder = JSON.parse(orderData);
            $("#chocolateList").html(dataOrder.data[8].quantity.data[2].quantity+ " " + dataOrder.data[0].quantity.data[2].topping);
            $("#plainList").html(dataOrder.data[8].quantity.data[1].quantity + " " + dataOrder.data[0].quantity.data[1].topping);
            $("#cherryList").html(dataOrder.data[8].quantity.data[0].quantity + " " + dataOrder.data[0].quantity.data[0].topping);
    });
});
$("#Oct").on("click", function () {
    $("#first").html("Oct");
    $.post('http://localhost:3000/orders', function(orderData){
                  
            var dataOrder = JSON.parse(orderData);
            $("#chocolateList").html(dataOrder.data[9].quantity.data[2].quantity+ " " + dataOrder.data[0].quantity.data[2].topping);
            $("#plainList").html(dataOrder.data[9].quantity.data[1].quantity + " " + dataOrder.data[0].quantity.data[1].topping);
            $("#cherryList").html(dataOrder.data[9].quantity.data[0].quantity + " " + dataOrder.data[0].quantity.data[0].topping);
    });
});
$("#Nov").on("click", function () {
    $("#first").html("Nov");
    $.post('http://localhost:3000/orders', function(orderData){
                  
            var dataOrder = JSON.parse(orderData);

            $("#chocolateList").html(dataOrder.data[10].quantity.data[2].quantity+ " " + dataOrder.data[0].quantity.data[2].topping);
            $("#plainList").html(dataOrder.data[10].quantity.data[1].quantity + " " + dataOrder.data[0].quantity.data[1].topping);
            $("#cherryList").html(dataOrder.data[10].quantity.data[0].quantity + " " + dataOrder.data[0].quantity.data[0].topping);
    });
});
$("#Dec").on("click", function () {
    $("#first").html("Dec");
    
    $.post('http://localhost:3000/orders', function(orderData){
                  
            var dataOrder = JSON.parse(orderData);
                
            $("#chocolateList").html(dataOrder.data[11].quantity.data[2].quantity+ " " + dataOrder.data[0].quantity.data[2].topping);
            $("#plainList").html(dataOrder.data[11].quantity.data[1].quantity + " " + dataOrder.data[0].quantity.data[1].topping);
            $("#cherryList").html(dataOrder.data[11].quantity.data[0].quantity + " " + dataOrder.data[0].quantity.data[0].topping);
    });
});
