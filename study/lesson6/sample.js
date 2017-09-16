//调用数据库;
const fs = require("fs");

const readDirPathString = "../../../words-from-the-heart";

function callbackReaddir(err, file) {
  if (err) {
    console.log("err, something is wrong");
  }

  if (file.length != 0) {
    console.log(file);
    console.log(typeof file);
    return file.toString();
  } else {
    console.log("Nothing find");
  }
}

var fileContent = fs.readdir(readDirPathString, callbackReaddir);


const writeFilePathString = './write_file_async.txt';

function callbackWriteFile(err) {
    if (err) {
      console.log('写文件失败');
    } else {
      console.log('写文件成功');
    }
  }

fs.writeFile(writeFilePathString, fileContent, callbackWriteFile);
