var makeCounter = function() {
  var privateCounter = 0;
  function changeBy(val) {
    privateCounter += val;
  }
  return {
    increment: function() {
      changeBy(1);
    },
    decrement: function() {
      changeBy(-1);
    },
    value: function() {
      return privateCounter;
    }
  }  
};

var Counter1 = makeCounter();
var Counter2 = makeCounter();
console.log(Counter1===Counter2);
console.log(Counter1.value()); /* logs 0 */
Counter1.increment();
Counter1.increment();
console.log(Counter1.value()); /* logs 2 */
Counter1.decrement();
console.log(Counter1.value()); /* logs 1 */
console.log(Counter2.value()); /* logs 0 */

function createCounter() {
  let counter = 0
   const myFunction = function() {
       counter = counter + 1
      return counter
     }
     return myFunction
   }
   const increment = createCounter()
  const c1 = increment()
  const c2 = increment()
  const c3 = increment()
  console.log(c1===c2)
  console.log('example increment', c1, c2, c3)
  function f1(){
    　　　　var n=999;
    
    　　　　function f2(){
    　　　　　　console.log(n++);
    　　　　}
    　　　　return f2;
    　　}
    　　var result=f1();
    　　result(); // 999
    　　
    　　result(); // 1000