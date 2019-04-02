// // const a = cb => {
// //     var arr = [{"title":"book"},{"title":"CD"},{"title":"Pencil"},{"title":"Dress"},{"title":"Music"}];
// //     cb(arr);
// // }

// // a(p => {
// //     for(let x of p){
// //         console.log(x.title);
// //     }
// // });
// let cart = {product:[], totalPrice : 0}
// cart_product = {id : 1, qty : 1};

// cart.product = [cart_product, {id : 2, qty : 2}, {id : 3, qty : 3}];
// //cart.product = [];
// cart.product = [...cart.product, {id : 4, qty : 4}];
// console.log(cart.product);

// const index = cart.product.findIndex(prod => prod.id === 2);
// console.log(index)

// const update = cart.product[index];
// console.log(update);

// // update.qty = update.qty + 1;
// // console.log(update);

// // console.log(JSON.stringify(cart));

// let upProd;
// if(index){
//     console.log("true");
//     upProd = {...update};
//     console.log(upProd);
// }
// else{
//     console.log("false");
// }


// function formatedNum(num){
//     var n = Number(num);
//     var value = n.toLocaleString("en");
//     return value;
// };

// var result = formatedNum(78585858585362);

// function reverseNumber(num){
//     var n = Number(num.replace(/,/g,''));
//     console.log(n);
// };

// reverseNumber(result);

// var data = 9568698566;

// function backSpace(num){
//     var output = num.toString();
//     output = output.substr(0, output.length-1);
//     console.log(output);
// }

// backSpace(data);

// var sum = eval(7*7);
// console.log(sum);

var arr = {
    "plus" : "+",
    "minus" : "-"
}

var data = "minus";

for(prop in arr){
    //data = data.replace(prop, arr[prop]);
    console.log(arr[prop]);
}

console.log(data);

mongoose
  .connect(
    MONGODB_URI
  )
  .then(result => {
    User.findOne().then(user => {
      if (!user) {
        const user = new User({
          name: 'Ganesh Patra',
          email: 'gpatra1996@gmail.com',
          cart: {
            items: []
          }
        });
        user.save();
      }
    });
    app.listen(3000);
  })
  .catch(err => {
    console.log(err);
  });

  const MONGODB_URI =
'mongodb+srv://ganeshpatra:Ganesh96@cluster0-s4tuy.mongodb.net/shop?retryWrites=true';

  //5c8fa3e02cd8471d483c7d73