const fillBottles = require('./fillBottles');

describe("fillBottles test", () => {

  it("1 blue bottle bigger", () => {
    let redBottles = [1,11,1,1];
    let blueBottles = [3];
    let result = [
      "Poured to 1 bottle 1 liters",
      "Poured to 2 bottle 2 liters"
    ];

    expect(fillBottles(redBottles, blueBottles)).toEqual(result);
  });

  it("1 red bottle bigger", () => {
    let redBottles = [5,3];
    let blueBottles = [2];
    let result = ["Poured to 1 bottle 2 liters"];

    expect(fillBottles(redBottles, blueBottles)).toEqual(result);
  });

  it("similar 2 bottles", () => {
    let redBottles = [5];
    let blueBottles = [5];
    let result = ["Poured to 1 bottle 5 liters"];

    expect(fillBottles(redBottles, blueBottles)).toEqual(result);
  });

});
