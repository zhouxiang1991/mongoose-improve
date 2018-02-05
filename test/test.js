import Mongoose, { Schema, Aggregate } from '../src/index.js';

class Test extends Mongoose {
  constructor(url, name, schema) {
    super(url, name, schema);
  }
  // ...methods
}
console.log(Aggregate);
/* const model = new Test(url, name, schema); */
// model.upsert();
// model.findAndRemove();
// model.findOrInsert();

