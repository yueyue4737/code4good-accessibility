const data = require('./results.ticketnumber.sampleTest.js');

data.forEach((obj, err) => {
  data.analyze(obj, (err, data) => {
    if (err) { console.log('error in retrieving records', err); }
    else {
      console.log('retrieved records', data);
    }
  });
});