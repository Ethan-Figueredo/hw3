var express = require('express');
const { data, Callbacks, error } = require('jquery');
var router = express.Router();
var dbms = require("../routes/dbms");


var ordersData = {
  data: [
    { topping: "Cherry", quantity: 0 },
    { topping: "Plain", quantity: 0 },
    { topping: "Chocolate", quantity: 0 },
  ]
};
function findIndex(monthString){
  
  
  if("JAN" == monthString){
    return 0;
  }
  if("FEB" == monthString){
    return 1;
  }
  if("MAR" == monthString){
    return 2;
  }
  if("APR" == monthString){
    return 3;
  }
  if("MAY" == monthString){
    return 4;
  }
  if("JUN" == monthString){
    return 5;
  }

  if("JUL" == monthString){
    return 6;
  }
  if("AUG" == monthString){
    return 7;
  }
  if("SEP" == monthString){
    return 8;
  }
  if("OCT" == monthString){
    return 9;
  }
  if("NOV" == monthString){
    return 10;
  }
  if("DEC" == monthString){
    return 11;
  }
  
}
/* GET orders listing. */
router.get('/', async(req,res,next) => {
  
  
  var results1 = await dbms.dbquery( "SELECT QUANTITY, TOPPING, MONTH FROM ORDERS;");
  
  
  var sortedArray = sortData(results1);
  
  
  
  var postJson = JSON.stringify(sortedArray);
  
  return res.send(postJson);
});

function sortData(results1){
  var monthData = {
    data: [
      { months: "JAN", quantity: {
        data: [
          { topping: "Cherry", quantity: 0 },
          { topping: "Plain", quantity: 0 },
          { topping: "Chocolate", quantity: 0 },
        ]
      } },
      { months: "FEB", quantity: {
        data: [
          { topping: "Cherry", quantity: 0 },
          { topping: "Plain", quantity: 0 },
          { topping: "Chocolate", quantity: 0 },
        ]
      } },
      { months: "MAR", quantity: {
        data: [
          { topping: "Cherry", quantity: 0 },
          { topping: "Plain", quantity: 0 },
          { topping: "Chocolate", quantity: 0 },
        ]
      } },
      { months: "APR", quantity: {
        data: [
          { topping: "Cherry", quantity: 0 },
          { topping: "Plain", quantity: 0 },
          { topping: "Chocolate", quantity: 0 },
        ]
      } },
      { months: "MAY", quantity: {
        data: [
          { topping: "Cherry", quantity: 0 },
          { topping: "Plain", quantity: 0 },
          { topping: "Chocolate", quantity: 0 },
        ]
      } },
      { months: "JUN", quantity: {
        data: [
          { topping: "Cherry", quantity: 0 },
          { topping: "Plain", quantity: 0 },
          { topping: "Chocolate", quantity: 0 },
        ]
      } },
      { months: "JUL", quantity: {
        data: [
          { topping: "Cherry", quantity: 0 },
          { topping: "Plain", quantity: 0 },
          { topping: "Chocolate", quantity: 0 },
        ]
      } },
      { months: "AUG", quantity: {
        data: [
          { topping: "Cherry", quantity: 0 },
          { topping: "Plain", quantity: 0 },
          { topping: "Chocolate", quantity: 0 },
        ]
      } },
      { months: "SEP", quantity: {
        data: [
          { topping: "Cherry", quantity: 0 },
          { topping: "Plain", quantity: 0 },
          { topping: "Chocolate", quantity: 0 },
        ]
      } },
      { months: "OCT", quantity: {
        data: [
          { topping: "Cherry", quantity: 0 },
          { topping: "Plain", quantity: 0 },
          { topping: "Chocolate", quantity: 0 },
        ]
      } },
      { months: "NOV", quantity: {
        data: [
          { topping: "Cherry", quantity: 0 },
          { topping: "Plain", quantity: 0 },
          { topping: "Chocolate", quantity: 0 },
        ]
      } },
      { months: "DEC", quantity: {
        data: [
          { topping: "Cherry", quantity: 0 },
          { topping: "Plain", quantity: 0 },
          { topping: "Chocolate", quantity: 0 },
        ]
      } }
    ]
  };
  for(var row in results1){
    
    var monthIndex = findIndex(results1[row].MONTH);
    
    
    if(results1[row].TOPPING == "Plain"){
      
      monthData.data[monthIndex].quantity.data[1].quantity += results1[row].QUANTITY;
      
  
    } else if(results1[row].TOPPING == "Cherry"  ){
      monthData.data[monthIndex].quantity.data[0].quantity += results1[row].QUANTITY;
     
    }else if(results1[row].TOPPING == "Chocolate"){
      monthData.data[monthIndex].quantity.data[2].quantity += results1[row].QUANTITY;
    }
  }
  

  return monthData;
}

//send post
router.post('/', async(req,res,next) => {
  //get info from db the send 
  //var postJSON = JSON.stringify(ordersData);
  
  var results1 = await dbms.dbquery( "SELECT QUANTITY, TOPPING, MONTH FROM ORDERS;");
  var sortedArray = sortData(results1);
  
  
  
  var postJson = JSON.stringify(sortedArray);
  res.send(postJson);
});

module.exports = {router,ordersData};
