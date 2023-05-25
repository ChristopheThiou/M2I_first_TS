/* let age:number[] = [10, 25, 50, 36, 15, 66, 8, 18];

for (const item of age) {
  if (item <= 17) {
    console.log(`${item} is too young`);
  } else {
    console.log('Welcome');
  }
} */

let list: string[] = [];

while (true) {
  let p = prompt("Rentre un texte");
  list.push(p);
  if (p === "exit") {
    break;
  }
  for (const item of list) {
    console.log(item, item.length);
  }
}
