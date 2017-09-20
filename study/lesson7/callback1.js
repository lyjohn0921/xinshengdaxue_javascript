function checkinfor(giveInor) {
  console.log("start");
  var infor = {
    startYear: "2017 ",
    startMonth: "September "
  };

  giveInor(infor.startYear + infor.startMonth);
}

function callback(infor) {
  console.log(infor);
}

checkinfor(callback);
