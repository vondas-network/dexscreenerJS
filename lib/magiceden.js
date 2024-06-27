const sdk = require('api')('@tallal-test/v1.0#rg9xha3szll6s8pom');

sdk.getCollection({symbol: 'symbol'})
  .then(({ data }) => console.log(data))
  .catch(err => console.error(err));