// 引用内置库
const fs = require("fs");
const path = require("path");

// 定义要查询的目标文件夹。
const scanPathString = path.join(__dirname, "../../../words-from-the-heart");

// 定义输出的目标文件及其路径。
const writePathString = path.join(__dirname, "./homework3.txt");

// 保存的文件Striing;
let saveScanFileString = "";
// 搜索的文件类型;
let findFileType = ".json";

//写入文件function;
function writeFile() {
  function callback(err) {
    if (err) {
      console.log("Failwriting");
    } else {
      console.log("Sucesswriting");
    }
  }
  fs.writeFile(writePathString, saveScanFileString, callback);
}

//扫描文件function;
//提供：扫描 total 文件个数，扫描目标类型文件个数，文件夹个数和非目标文件个数;
function scanFile() {
  function callback(err, files) {
    if (err) {
      console.log("Scan Fail");
      return;
    }

    if (files.length != 0) {
      console.log("Find some files and folders");
      var j = 0;
      var k = 0;
      var l = 0;
      var m = 0;

      for (var i = 0; i < files.length; i++) {
        var eachFilesPath = path.join(scanPathString, files[i]);
        var checkDirectry = fs.lstatSync(eachFilesPath).isDirectory();
        if (checkDirectry == true) {
          l = l + 1;
        }

        if (files[i].endsWith(findFileType)) {
          saveScanFileString = saveScanFileString + files[i] + "\n";
          j = j + 1;
        } else {
          k = k + 1;
        }
      }
      m = i - l;
      console.log("Total Find : " + i);
      console.log("There is/are " + l + " Directiory(ies)");
      console.log("Total files : " + m);
      console.log(findFileType + " type files : " + j);
      console.log(k - l + "file(s) is/are not " + findFileType + " files.");

      saveScanFileString = saveScanFileString.trim();
      writeFile();
    } else {
      console.log("There is not any files.");
    }
  }
  fs.readdir(scanPathString, callback);
}

//写入代码嵌套在扫描代码中，不知到怎么做call back 来调取；
scanFile();
