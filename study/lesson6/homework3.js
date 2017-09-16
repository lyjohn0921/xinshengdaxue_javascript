// 引用内置库
const fs = require('fs');

// 定义要查询的目标文件夹。
const dirPathString = '../../../words-from-the-heart';
// 定义输出的目标文件及其路径。
const outputPathString = './write_file_sync.txt';

// ---------------------------------
// 定义一个callback函数，用于接收读取文件夹内容后的结果
function callback1(err, files) {
    if (err) {
      console.log('读取文件失败');
      return;
    }
  
    if (files.length > 0) {
      console.log(files);
    } else {
      console.log('没有找到任何文件');
    }
  }


// 定义文件内容变量fileContent
const fileContent = fs.readdir(dirPathString, callback1);
console.log(typeof fileContent);

// ---------------------------------
// 异步方案

// 定义一个callback函数，用于接收写文件的返回结果
function callback2(err) {
    if (err) {
      console.log('写文件失败');
    } else {
      console.log('写文件成功');
    }
  }

//调用fs的writeFileSync函数来写文件
fs.writeFile(outputPathString, fileContent, callback2);
