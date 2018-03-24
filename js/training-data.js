// [{input: [SHARPNESS, BRIGHTNESS, CONTRAST], output: [RATING]},

const trainingData = [
  { input: [0.1, 0.13, 0.5], output: [1] },
  { input: [0.25, 0.21, 0.23], output: [2] },
  { input: [0.3, 0.41, 0.41], output: [3] },
  { input: [0.55, 0.6, 0.71], output: [4] },
  { input: [0.85, 0.91, 0.83], output: [5] },
  { input: [0.14, 0.23, 0.15], output: [1] },
  { input: [0.65, 0.51, 0.43], output: [2] },
  { input: [0.64, 0.67, 0.76], output: [3] },
  { input: [0.75, 0.8, 0.71], output: [4] },
  { input: [0.95, 0.71, 0.93], output: [5] }
];
