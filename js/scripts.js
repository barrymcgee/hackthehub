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
}

function execute(input) {
  let results = trainedNet(input);
  console.log(results);
}

train(trainingData);

execute([0.1, 0.1, 0.1]);
