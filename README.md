## mognoose-improve

## install
```
yarn add mongoose-improve
```
## usage
```
import Mongoose from 'mongoose-improve';

class Test extends Mongoose {
  constructor(url, name, schema) {
    super(url, name, schema);
  }
  // ...methods
}

const model = new Test(url, name, schema);
// model.upsert();
// model.findAndRemove();
// model.findOrInsert();
```
