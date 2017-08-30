// 报数，由左到右，说开始就开始;
// 轮流调用，顺序；

function personA() {
  console.log("1");
}

function personB() {
  console.log("2");
}

function personC() {
  console.log("3");
}

function personD() {
  console.log("4");
}

function startBaoShu() {
  personA();
  personB();
  personC();
  personD();
}

// 为什么，这行代码直接被调用;
startBaoShu();
