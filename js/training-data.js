// [{input: [SHARPNESS, BRIGHTNESS, CONTRAST], output: [RATING]},

const trainingData = [
  {
    Input: { s: 0.01, b: 0.1, c: 0.1 },
    Output: { rating: 1 }
  },
  {
    Input: { s: 0.012, b: 0.12, c: 0.12 },
    Output: { rating: 1 }
  },
  {
    Input: { s: 0.013, b: 0.13, c: 0.13 },
    Output: { rating: 1 }
  },
  //
  //
  // Etc.
  //
  //
  {
    Input: { s: 0.91, b: 0.92, c: 0.93 },
    Output: { rating: 5 }
  },
  {
    Input: { s: 0.91, b: 0.92, c: 0.93 },
    Output: { rating: 5 }
  },
  {
    Input: { s: 0.92, b: 0.96, c: 0.93 },
    Output: { rating: 5 }
  }
];
