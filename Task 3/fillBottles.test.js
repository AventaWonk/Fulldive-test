const fillBottles = require('./fillBottles');

describe("fillBottles test", () => {

  it("1 blue bottle bigger", () => {
    let redBottles = [1, 11, 1, 1];
    let blueBottles = [3];
    let result = [
      {'0': 1, '1': 2},
    ];

    expect(fillBottles(redBottles, blueBottles)).toEqual(result);
  });

  it("1 red bottle bigger", () => {
    let redBottles = [5, 3];
    let blueBottles = [2];
    let result = [
      {'0': 2},
    ];

    expect(fillBottles(redBottles, blueBottles)).toEqual(result);
  });

  it("similar 2 bottles", () => {
    let redBottles = [5];
    let blueBottles = [5];
    let result = [
      {'0': 5},
    ];

    expect(fillBottles(redBottles, blueBottles)).toEqual(result);
  });

  it("the total volume of blue bottles is bigger than that of red bottles", () => {
    let redBottles = [2, 3, 6, 1, 1];
    let blueBottles = [1, 5, 2 , 11, 4];
    let result = [
      {'0': 1},
      {
        '0': 1,
        '1': 3,
        '2': 1,
      },
      {'2': 2},
      {
        '2': 3,
        '3': 1,
        '4': 1,
      },
    ];

    expect(fillBottles(redBottles, blueBottles)).toEqual(result);
  });

  it("the total volume of red bottles is bigger than that of blue bottles", () => {
    let redBottles = [1, 3, 6, 15];
    let blueBottles = [6, 5, 2, 1];
    let result = [
      {
        '0': 1,
        '1': 3,
        '2': 2,
      },
      {
        '2': 4,
        '3': 1,
      },
      {'3': 2},
      {
        '3': 1,
      },
    ];

    expect(fillBottles(redBottles, blueBottles)).toEqual(result);
  });

});
