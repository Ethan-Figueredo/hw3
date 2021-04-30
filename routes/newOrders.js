var dbms = require("../routes/dbms");
var express = require('express');

var router = express.Router();



router.post('/',function(req,res) {
 
   console.log(req.body);
    //get quantity
    var quantity = req.body.quantity;
    
    //get Topping 

    var topping = req.body.topping;
    
    //get Notes
    var notes = req.body.notes;
    
    //add to db
    return dbms.dbquery("INSERT INTO ORDERS (ORDERID, MONTH, DAY, QUANTITY, TOPPING, NOTES) VALUES (69, \"MAY\", 1, " + quantity + ", \"" + topping + "\", \" " + notes + "\");");
  
});

  
  module.exports = router;