const DoublyLinkedList = require("./DoublyLinkedList");

let dbl1 = new DoublyLinkedList();
dbl1.push(1);
dbl1.push(2);
dbl1.push(3);
dbl1.push(4);
dbl1.push(5);
dbl1.push(6);
for (let i = 0; i < dbl1.length; i++) {
  console.log(dbl1.get(i));
}
console.log("first impression");

dbl1.set(1, 70);

for (let i = 0; i < dbl1.length; i++) {
  console.log(dbl1.get(i));
}
console.log("after using set");

dbl1.insert(2, 50);

for (let i = 0; i < dbl1.length; i++) {
  console.log(dbl1.get(i));
}
console.log("after using insert");

dbl1.shift();

for (let i = 0; i < dbl1.length; i++) {
  console.log(dbl1.get(i));
}
console.log("after using shift");

dbl1.unshift(20);

for (let i = 0; i < dbl1.length; i++) {
  console.log(dbl1.get(i));
}
console.log("after using unshift");

dbl1.remove(3);
for (let i = 0; i < dbl1.length; i++) {
  console.log(dbl1.get(i));
}
console.log("after using remove");
