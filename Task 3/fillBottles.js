
module.exports = function (queueRedBottles, queueBlueBottles) {
  let blueBottles = queueBlueBottles;
  let redBottles = queueRedBottles;
  let info = [];

  let lastNotFilledBottle = 0;
  for (let i = 0; i < redBottles.length; i++) {
    if (redBottles[i] < 0)
      throw new Error("Bad volume of " + i + "red bottle");

    for (let j = lastNotFilledBottle; j < blueBottles.length; j++) {
      if (blueBottles[j] < 0)
        throw new Error("Bad volume of " + j + "blue bottle");

      if (typeof info[lastNotFilledBottle] != 'object') {
        info[lastNotFilledBottle] = {};
      }

      let result = redBottles[i] - blueBottles[j];
      if (result > 0) {
        redBottles[i] = result;
        info[j][i] = blueBottles[j];
        lastNotFilledBottle++;
        continue;
      } else if (result < 0) {
        blueBottles[j] = blueBottles[j] - redBottles[i];
        info[j][i] =  redBottles[i];
        break;
      } else {
        info[j][i]= redBottles[i];
        lastNotFilledBottle++;
        break;
      }
    }
  }

  return info;
}
