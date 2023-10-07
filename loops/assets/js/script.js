let i = 3;

while (i) {
  alert( i-- );
}
ans = 3, 2 1;
// because it is decreasing.

{
    let i = 0;
while (++i < 5) alert( i );
ans = 1, 2, 3, 4;
// it shows from 1 to 4

let i = 0;
while (i++ < 5) alert( i );
ans = 1, 2, 3, 4, 5;
// it shows from 1 to 5;
}

{
    for (let i = 0; i < 5; ++i) alert( i );

for (let i = 0; i < 5; i++) alert( i );
// for both it shows from 0 to 4.
}

for (let i = 2; i <= 10; i++) {
    if (i % 2 == 0) {
      alert( i );
    }
  }

{
    let i = 0;
while (i < 3) {
  alert( `number ${i}!` );
  i++;

  // alert number 0 and 1.
}
}
