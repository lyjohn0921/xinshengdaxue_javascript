function preCook() {
  console.log("---清理环境---");
  return true;
}

function buyFood() {
  console.log("萝卜，青菜，，各有所爱");
  var buyFoodList = ["萝卜", "青菜", "各有所爱"];
  return buyFoodList;
}

function cooking(buyFood) {
  //console.log ("大白菜,卷心菜,胡萝卜");
  var cookingList = ["大白菜", "卷心菜", "胡萝卜"];
  return cookingList;
}

function doItCook() {
  var preCookFinish = preCook();

  if (preCookFinish) {
    var buyFoodList = buyFood();
    var cookingList = cooking(buyFoodList);

    for (i = 0; i < cookingList.length; i++) {
      console.log(cookingList[i]);
    }
  } else {
    console.log("Not Finish Yet ");
  }
}

doItCook();
