// 引用内置库
const fs = require("fs");

// 定义要查询的目标文件夹。
const dirPathString = "../../../words-from-the-heart";
// 定义输出的目标文件及其路径。
const outputPathString = "./homework2.txt";

// ---------------------------------
// 定义一个callback函数，用于接收读取文件夹内容后的结果
function callback(err, files) {
  if (err) {
    console.log("读取文件失败");
    return;
  }

  if (files.length > 0) {
    console.log(files);
    const fileContent = files;
    fs.writeFileSync(outputPathString, fileContent);
  } else {
    console.log("没有找到任何文件");
  }
}

// 定义文件内容变量fileContent
fs.readdir(dirPathString, callback);
console.log(typeof fileContent);

// ---------------------------------
// 同步方案

//调用fs的writeFileSync函数来写文件
