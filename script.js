let i = 1;

while (i <= 10) {
  console.log(i);
  i++;
}

for (let r = 2; r <= 20; r++) {
  if (r % 2 !== 0) {
    continue;
  }
  console.log(r);
}

for (let x = 1; x <= 10; x++) {
  console.log(`7 x ${x} = ${7 * x}`);
}

let n = 10;

for (let r = 1; ; r++) {
  if (r >= n) {
    break;
  }
  console.log(r);
}


let j = 0;

while (j < 20) {
  j++;

  if (j % 3 === 0) {
    continue;
  }

  console.log(j);
}
