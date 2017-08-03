
module.exports = function (queueRedBottles, queueBlueBottles) {
  let redBottles = queueRedBottles;
  let blueBottles = queueBlueBottles;
  let bottlesInformation = [];

  if (redBottles.length <= 0 || blueBottles.length <= 0 ) {
    return "Bad params";
  }

  for (let i = 0; i < blueBottles.length; i++) {
    if (blueBottles[i] < 0) {
      return "Bad volume of " + i+1 + "blue bottle";
    } else if (blueBottles[i] > 0) {
      for (var k = 0; k < redBottles.length; k++) {
        if (redBottles[k] < 0) {
          return "Bad volume of " + k+1 + "red bottle";
        } else if (redBottles[k] > 0) {
          let currentBlueBottle = blueBottles[i];
          let currentRedBottle = redBottles[k];

          redResidualVolume = currentRedBottle - currentBlueBottle;

          if (redResidualVolume > 0) {
            bottlesInformation.push("Poured to " + (k+1) + " bottle " + currentBlueBottle + " liters");
            redBottles[k] = redResidualVolume;
            blueBottles[i] = 0;
            break;
          } else if (redResidualVolume < 0) {
            bottlesInformation.push("Poured to " + (k+1) + " bottle " + currentRedBottle + " liters");
            blueBottles[i] = currentBlueBottle - currentRedBottle;
            redBottles[k] = 0;
            continue;
          } else {
            bottlesInformation.push("Poured to " + (k+1) + " bottle " + currentRedBottle + " liters");
            redBottles[k] = 0;
            break;
          }
        }
      }
    }
  }
  return bottlesInformation;
}
