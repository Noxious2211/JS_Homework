
function Animal(name) {
   var foodAmount = 50;

   function formatFoodAmount() {
      return foodAmount + ' гр.';
   }

   this.dalyNorm = function (amount) {
      if (!arguments.length) return formatFoodAmount();
      if (amount < 50 || amount > 500) {
         return 'not';
      }
      foodAmount = amount;
   };
   this.name = name;

   this.feed = function () {
      console.log('Насыпаем в миску ' + formatFoodAmount() + ' корма');
      // console.log('кот доволен ^_^');
   };
}

var barsik = new Animal('Барсик');
console.log(barsik.name);

console.log(barsik.dalyNorm(250));
console.log(barsik.feed());


function Cat(name) {
   Animal.call(this);

   this.name = name;

   var self = this;

   self.animalFeed = this.feed;
   self.animalFeed = function () {
      this.feed();
      console.log('кот доволен ^_^');
   }
}
var cats = new Cat('tom');
console.log(cats.name);
console.log(cats.animalFeed());