const zooAnimation = {
  basic:
    "background-position-y: bottom; transition: background-position-y 18s linear;",
  style: "background-position-y: top",
  0: [
    {
      style: "background-position-y: top; transition: background-position-y 6s",
      time: 18000,
    },
  ],
  1: [
    {
      time: 24000,
    },
    {
      style:
        "background-position-y: bottom; transition: background-position-y 2s",
      time: 24500,
    },
    {
      style: "background-position-y: top; transition: background-position-y 2s",
      time: 26500,
    },
  ],
  2: [
    {
      time: 28500,
    },
    {
      style:
        "background-position-y: bottom; transition: background-position-y 9s linear",
      time: 29000,
    },
    {
      style: "background-position-y: top; transition: background-position-y 3s",
      time: 30000,
    },
  ],
  3: [
    {
      time: 41000,
    },
    {
      style:
        "background-position-y: bottom; transition: background-position-y 3s linear",
      time: 41500,
    },
    {
      style: "background-position-y: top; transition: background-position-y 3s",
      time: 43500,
    },
  ],
};

const diplomAnimation = {
  basic: "background-position-y: bottom; transition: background-position-y 1s",
  style: "background-position-y: top",
  0: [
    {
      style: "background-position-y: top; transition: background-position-y 1s",
      time: 1000,
    },
  ],
  1: [
    {
      time: 1300,
    },
  ],
  2: [
    {
      time: 1600,
    },
  ],
  3: [
    {
      time: 1900,
    },
  ],
  4: [
    {
      time: 2200,
    },
  ],
  5: [
    {
      time: 2500,
    },
  ],
  6: [
    {
      time: 2800,
    },
  ],
  7: [
    {
      time: 3100,
    },
  ],
  8: [
    {
      time: 3400,
    },
  ],
  9: [
    {
      time: 3700,
    },
    {
      style:
        "background-position-y: bottom; transition: background-position-y 1.3s",
      time: 4000,
    },
    {
      style:
        "background-position-y: top; transition: background-position-y 1.3s",
      time: 5300,
    },
  ],
  10: [
    {
      time: 6600,
    },
  ],
  11: [
    {
      time: 6900,
    },
  ],
  12: [
    {
      time: 7200,
    },
  ],
  13: [
    {
      time: 7500,
    },
  ],
  14: [
    {
      time: 7800,
    },
  ],
  15: [
    {
      time: 8100,
    },
  ],
  16: [
    {
      time: 8400,
    },
  ],
  17: [
    {
      time: 8700,
    },
    {
      style:
        "background-position-y: bottom; transition: background-position-y 3.5s",
      time: 9200,
    },
    {
      style:
        "background-position-y: top; transition: background-position-y 3.5s",
      time: 12700,
    },
  ],
};

const shpargalikiAnimation = {
  basic:
    "background-position-y: bottom; transition: background-position-y 2s linear;",
  style: "background-position-y: 25%; transition: background-position-y 1.7s",
  0: [
    {
      time: 2000,
    },
  ],
  1: [
    {
      time: 3700,
    },
  ],
  2: [
    {
      time: 4200,
    },
    {
      style:
        "background-position-y: top; transition: background-position-y .3s",
      time: 4800,
    },
  ],
  3: [
    {
      style: "background-position-y: top; background-size: contain",
      time: 5800,
    },
  ],
  4: [
    {
      style: "background-position-y: top; background-size: contain",
      time: 6800,
    },
  ],
  5: [
    {
      style: "background-position-y: top; background-size: contain",
      time: 7800,
    },
  ],
  6: [
    {
      style: "background-position-y: top; background-size: contain",
      time: 8800,
    },
  ],
  7: [
    {
      style: "background-position-y: top; background-size: contain",
      time: 9800,
    },
  ],
  8: [
    {
      style: "background-position-y: top; background-size: contain",
      time: 10800,
    },
  ],
  9: [
    {
      style: "background-position-y: top; background-size: contain",
      time: 11800,
    },
  ],
  10: [
    {
      style: "background-position-y: top; background-size: contain",
      time: 12800,
    },
  ],
  11: [
    {
      style: "background-position-y: top; background-size: contain",
      time: 13200,
    },
  ],
  12: [
    {
      style: "background-position-y: top; background-size: contain",
      time: 14200,
    },
  ],
  13: [
    {
      style: "background-position-y: top; background-size: contain",
      time: 14600,
    },
  ],
  14: [
    {
      style: "background-position-y: top; background-size: contain",
      time: 15600,
    },
  ],
};

const mediumAnimations = {
  diplom: diplomAnimation,
  zoo: zooAnimation,
  shpargaliki: shpargalikiAnimation,
};

export default mediumAnimations;
