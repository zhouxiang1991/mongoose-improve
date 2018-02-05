import
  Mongoose, {
  Schema,
  Aggregate,
  random,
} from '../src/index.js';

class Test extends Mongoose {
  constructor(url, name, schema) {
    super(url, name, schema);
  }
  // ...methods
}
console.log(Random);
/* const model = new Test(url, name, schema); */
// model.upsert();
// model.findAndRemove();
// model.findOrInsert();

