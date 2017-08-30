//嵌套使用，第一个使用后告诉下一个;

function personA() {
  console.log("1");
  personB();
}

function personB() {
  console.log("2");
  personC();
}

function personC() {
  console.log("3");
  personD();
}

function personD() {
  console.log("4");
}

function startBaoShu() {
  personA();
}

startBaoShu();
