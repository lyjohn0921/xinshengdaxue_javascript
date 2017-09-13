function callback() {
  console.log("模拟异步");
}

function testSecondFunction() {
  console.log("test");
}

var run = function() {
  callback();
  testSecondFunction();
};

console.log("Running");
setTimeout(run, 1000 * 10);
