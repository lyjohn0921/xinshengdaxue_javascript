// 引用内置库
const fs = require("fs");

// 定义要查询的目标文件夹。
const dirPathString = "../../../words-from-the-heart";
// 定义输出的目标文件及其路径。
const outputPathString = "./homework1.txt";

// ---------------------------------
// 同步方案

// 定义文件内容变量fileContent
const fileContent = fs.readdirSync(dirPathString);
console.log(typeof fileContent);

// ---------------------------------
// 同步方案

//调用fs的writeFileSync函数来写文件
fs.writeFileSync(outputPathString, fileContent);
