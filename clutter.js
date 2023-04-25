const fashionProducts = [
    { name: "gucci",  stocks: 10 },
    { name: "fendi", stocks: 0 },
    { name: "dior",  stocks: 5 },
    {name: "botega", stocks: 8}
  ];
  
  let message;
  
  const checkAvailability = (productName) => {
    fashionProducts.forEach(element => {
      if (element.name.toLowerCase() === productName.toLowerCase() && element.stocks > 0) {
        message = `${productName} is available and ${element.stocks} stocks left`
        return message
      }
      else if(element.name.toLowerCase() === productName.toLowerCase()  && element.stocks <= 0){
        message = `${productName} is available and out of stock`
        return message
      }
      else{
        message = `product not available`
      }
    });
  }
  
  
  checkAvailability("dior");
  console.log(message);


  const date = new Date();
let year = date.getFullYear()

if (year === "2023") {
    return 2023
}
else if (year === "2024"){
    return 2024
}
else{
    return "year not found"
}

let a = 12;
for (let i = 1; i <= 12; i++) {
  let result = a * i;
  console.log(`${a} x ${i} = ${result}`);
}


let b = [2,3,4,5,6,7,8,9,10,11,12];
for (let join in b){
  console.log(join);
}

let c = ["gilmore", "saliu", "saka"]

for (let join in c){
  console.log(join);
}
for (let join of c){
  console.log(join);
}

let d = "ogunmeponsharafa"

for (let letter of d){
  console.log(letter);
}
function checkAvailability(productName) {
  const filteredProducts = fashionProducts.filter((p) => p.name === productName);

  if (filteredProducts.length === 0) {
    return "Product not found.";
  }

  const product = filteredProducts[0];

  if (product.available) {
    return `Product is available with ${product.stocks} stocks.`;
  } else {
    return "Product is unavailable.";
  }
}
console.log(checkAvailability("Product A"));
