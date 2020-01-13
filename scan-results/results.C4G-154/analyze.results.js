const data = require('./results.ticketnumber.sampleTest.js');

data.forEach((obj, err) => {
  data.analyze(obj, (err, data) => {
    if (err) { console.log('error saving pet owner to database', err); }
    else { console.log('saved pet owner to the database', data); }
  });
});