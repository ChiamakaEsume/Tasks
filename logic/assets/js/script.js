alert( null || 2 || undefined )
ans = 2;

alert( alert(1) || 2 || alert(3) );
ans = 1 and 2;

alert( 1 && null && 2 );
ans = null;

alert( alert(1) && alert(2) );
ans = 1 and 2;

alert( null || 2 && 3 || 4 );
ans = 3; // because && is higher than ||

if (age >= 14 && age <= 90);

if (age < 14 || age > 90);

if (-1 || 0) alert( 'first' );
if (-1 && 0) alert( 'second' );
if (null || -1 && 1) alert( 'third' );
//only first and third will execute because the second one is falsy

