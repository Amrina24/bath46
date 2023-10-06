//Q44: Sandwiches: Write a function that accepts array of items a person wants on a sandwich.The function should have one parameter that collects as many item
//as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number
//of arguments each time.
// let mySandWich{

//     cheese: "extra",
//     Tomatoes: "normal",
//     Pickles: "no",
//     Lettuce: "slightly",
//     cacumber: "no",
//     mayonnese: "Light",
//     Ketchup: "yes"}
 function sandWich(Items:string, Qty:number){
    let myOrder =`i want to order ${Qty}! ${Items}  with "extra-cheese","mayonese","tomatoes" please`;
    
    return myOrder;
    }
    
    const confirmOrder1= sandWich("grill Chicken",1 );
    const confirmOrder2= sandWich("Zinger",2 );
    const confirmOrder3= sandWich("grilled Cheese",4 );

    console.log(confirmOrder1);
    console.log(confirmOrder2);
    console.log(confirmOrder3);



// let mySandWich= {

// cheese: "extra",
// Tomatoes: "normal",
// Pickles: "no",
// Lettuce: "slightly",
// cacumber: "no",
// mayonnese: "Light",
// Ketchup: "yes"}
// MyOrder:function mySandWich(myOrder:string){

//     return(`${mySandWich}`)}
// }
// console.log("mySadWich");

// //where I am not getting it?/i need help here




