function prepare() {
  console.log("zhunbei");
  return true;
}

function buyFood() {
  console.log("go buy food ");
  console.log("Food list");
  var buyFoodList = ["茄子", "土豆", "白菜"];
  console.log(buyFoodList);
  return buyFoodList;
}

function cookingFood(buyFoodList) {
  console.log("get food list");
  console.log("cooking");
  console.log("finish cooking");
  var cookingFoodList = ["茄子煲", "土豆茄子", "白菜土豆"];
  console.log("cookingFoodList" + cookingFoodList);
  return cookingFoodList;
}

function cooking() {
  var sucsess = prepare();

  if (sucsess) {
    var buyFoodList = buyFood();
    var cookingFoodList = cookingFood(buyFoodList);
    console.log(buyFoodList);

    for (i = 0; i < cookingFoodList.length; i++) {
      console.log(cookingFoodList[i]);
    }
  } else {
    console.log("Not Finish Yet");
  }
}

cooking();
