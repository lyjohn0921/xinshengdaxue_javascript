function allCount() {
  var allCount = 6;
  var number = 0;

  var result = A(number, allCount);
  if (result == true) {
    console.log("true");
  }
}

function A(number, allCount) {
  console.log(number);
  return B(number + 1, allCount);
  console.log(number);
}

function B(number, allCount) {
  console.log(number);
  return true;
  console.log(number);
}

allCount();
