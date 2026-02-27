let i = 1;

while (i <= 10) {
  console.log(i);
  i++;
}

for (let i = 2; i <= 20; i++) {
  if (i % 2 !== 0) {
    continue;
  }
  console.log(i);
}

for (let i = 1; i <= 10; i++) {
  console.log(`7 x ${i} = ${7 * i}`);
}

let n = 10;

for (let i = 1; ; i++) {
  if (i >= n) {
    break;
  }
  console.log(i);
}

let j = 0;

while (j < 20) {
  j++;

  if (j % 3 === 0) {
    continue;
  }

  console.log(j);
}