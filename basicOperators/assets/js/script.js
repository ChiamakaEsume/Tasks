{
    let a = 1, b = 1;

let c = ++a; 
let d = b++;

alert( ++a ); 
alert( b++ ); 

alert( a ); // 2 as incremented once
alert( b ); // 2 a incremented once

}
//
let a = 2;

let x = 1 + (a *= 2);
alert(x);
a = 4;
x = 5;
//
"" + 1 + 0 = 10; //because the first number is a string so addition brings them together
"" - 1 + 0 = -1;
true + false = 1;
6 / "3" = 2;
"2" * "3" = 6;
4 + 5 + "px" = 9px;
"$" + 4 + 5 = $45;
"4" - 2 = 2;
"4px" - 2 = NaN;
"  -9  " + 5 =;
"  -9  " - 5 = -14;
null + 1 = 1;
undefined + 1 = undefined;
" \t \n" - 2 = null;
//
{
    let a = +prompt("First number?", 1);
let b = +prompt("Second number?", 2);

alert(a + b); 
}
