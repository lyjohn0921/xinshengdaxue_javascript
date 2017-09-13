function checkFlightSchedule() {
  console.log("check Flight Schedule");

  var Schedule = {
    startDate: "2017/08/23 ",
    startTime: " 20:00:00",
    endDate: "2017/08/23 ",
    endDate: " 21:00:00",
    origin: "Beijing",
    destination: "Guangzhou"
  };

  return Schedule.startDate + Schedule.startTime;
}

// varable and run the function;
var startDateAndTime = checkFlightSchedule();
console.log(startDateAndTime);
