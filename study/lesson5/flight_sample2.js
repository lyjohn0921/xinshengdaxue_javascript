function checkFlightSchedule(callback) {
  console.log("Start Check Flight Schedule");

  var Schedule = {
    startDate: "2017/08/23 ",
    startTime: " 20:00:00",
    endDate: "2017/08/23 ",
    endDate: " 21:00:00",
    origin: "Beijing",
    destination: "Guangzhou"
  };

  callback(Schedule.startDate + Schedule.startTime);
}

function callback(flightStartTime) {
  console.log(flightStartTime);
}

checkFlightSchedule(callback);
