// 对象调用 报数;

var personA = {
  soundOff: function() {
    console.log("1");
  }
};

var personB = {
  soundOff: function() {
    console.log("2");
  }
};

var personC = {
  soundOff: function() {
    console.log("3");
  }
};

var personD = {
  soundOff: function() {
    console.log("4");
  }
};

function startBaoShu() {
  personA.soundOff();
  personB.soundOff();
  personC.soundOff();
  personD.soundOff();
}

startBaoShu();
