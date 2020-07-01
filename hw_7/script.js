
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

   var self = this;
   this.feed = function () {
      console.log('Насыпаем в миску ' + self.dalyNorm() + ' корма');
   };
}

function Cat(name) {
   Animal.apply(this, arguments);

   var animalFeed = this.feed;
   this.feed = function () {
      animalFeed();
      console.log('кот доволен ^_^');
      return this;
   }

   this.stroke = function () {
      console.log('гладим кота');
      return this;
   }
}

var barsik = new Cat('Барсик');
console.log(barsik.feed().stroke().stroke().feed());
barsik = null;