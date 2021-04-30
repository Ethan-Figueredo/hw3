
const router = require('../routes/orders');
test('create Order Table', () => {
    var actual = router.ordersData;
    var myData = {
        data: [
          { topping: "Cherry", quantity: 2 },
          { topping: "Plain", quantity: 6 },
          { topping: "Chocolate", quantity: 3 }
        ]
      };
      
    expect(actual).toStrictEqual(myData);
   
});

