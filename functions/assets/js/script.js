// No difference

//ques
{
  function checkAge(age) {
    if (age > 18) {
      return true;
    } else {
      return confirm("Did parents allow you?");
    }
  }
}
//ans using ?
{
  function checkAge(age) {
    return age > 18 ? true : confirm("Did parents allow you?");
  }
}
//ans using ||
function checkAge(age) {
  return age > 18 ? true : confirm("Did parents allow you?");
}
//ques
{
  min(2, 5) == 2;
  min(3, -1) == -1;
  min(1, 1) == 1;
}
//ans
{
  function min(a, b) {
    if (a < b) {
      return a;
    } else {
      return b;
    }
  }
}
