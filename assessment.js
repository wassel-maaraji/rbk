var menu = [
  { name: "Berry Blast", size: "medium", price: 6.5, fruit: "strawberry", calories: 210 },
  { name: "Mango Sunrise", size: "large", price: 7.25, fruit: "mango", calories: 280 },
  { name: "Green Glow", size: "small", price: 5.75, fruit: "spinach", calories: 160 }
];
function makeSmoothie(name, size, price, fruit, calories) {
  return {
    name : name ,
    size : size ,
    price : price ,
    fruit : fruit ,
    calories : calories
  }
}
let smothie = makeSmoothie("Mango Sunrise", "large", 7.25, "mango", 280)
//2
function displaySmoothie(smoothie) {
  return "name:"+smoothie.name +" "+"size:"+smoothie.size+" "+"fruit:"+smoothie.fruit+" "+"price:$"+smoothie.price+" "+"calories:"+smoothie.calories 
}

//3
function findMostExpensiveSmoothie(menu) {
   let mostExpensive = menu[0]
   for (let i = 0; i < menu.length; i++) {
    if (menu[i].price > mostExpensive.price){
        mostExpensive = menu[i]
    }
        
   }
   return mostExpensive
}
console.log(findMostExpensiveSmoothie(menu))