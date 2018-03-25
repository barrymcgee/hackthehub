let trainedNet;

function processTrainingData(data) {
  return data.map(d => {
    return {
      input: d.input,
      output: d.output
    };
  });
}

function train(data) {
  let net = new brain.NeuralNetwork();
  net.train(processTrainingData(data));
  trainedNet = net.toFunction();
  console.log("Finished training...");
}

function execute(input) {
  console.log(input[0]);
  let results = trainedNet(input[0]);
  console.log("ML result: " + results);
}

train(trainingData);
