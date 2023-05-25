let v = 5;

for (let i = 1; i <= 9; i+=2) {
    let t = '*';
    let r = t.repeat(i);
    v -- ;
    let s = ' ';
    let x = s.repeat(v);
    console.log(x, r);
}
