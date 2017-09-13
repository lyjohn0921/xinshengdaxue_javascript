function callback(){
  console.log("I finish Running");
}

function run(cb){
  console.log("I am Running");
  cb();
}

run(callback);