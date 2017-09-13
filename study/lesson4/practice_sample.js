console.log("顺序调用");

function person1A() {
  console.log("1");
}

function person1B() {
  console.log("2");
}

function person1C() {
  console.log("3");
}

function person1D() {
  console.log("4");
}

function soundOff1() {
  person1A();
  person1B();
  person1C();
  person1D();
}

soundOff1();

console.log("依次调用");

function person2A() {
  console.log("1");
  person2B();
}

function person2B() {
  console.log("2");
  person2C();
}

function person2C() {
  console.log("3");
  person2D();
}

function person2D() {
  console.log("4");
}

function soundOff2() {
  person2A();
}

soundOff2();

console.log("object 引用");

var person3A = {
  soundoff: function() {
    console.log("1");
  }
};

var person3B = {
  soundoff: function() {
    console.log("2");
  }
};

var person3C = {
  soundoff: function() {
    console.log("3");
  }
};

var person3D = {
  soundoff: function() {
    console.log("4");
  }
};

function soundoff3() {
  person3A.soundoff();
  person3B.soundoff();
  person3C.soundoff();
  person3D.soundoff();
}

soundoff3();
