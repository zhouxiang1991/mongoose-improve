import _ from 'lodash';
import random from 'mongo-random-id';
import mongoose from 'mongoose';

mongoose.Promise = global.Promise;
const dbs = {};
class Mongoose {
  constructor(url, name, schema) {
    const realUrl = process.env[url];
    let db = null;
    if (!dbs[realUrl]) {
      dbs[realUrl] = mongoose.createConnection(realUrl);
      db = dbs[realUrl];
    } else {
      db = dbs[realUrl];
    }
    this.model = db.model(name, schema, name);
  }
  async findOne(...args) {
    return this.model.findOne(...args);
  }
  async find(...args) {
    return this.model.find(...args);
  }
  async update(conditions, doc, options) {
    return this.model.update(conditions, {
      ...doc,
      _updatedAt: new Date(),
    }, {
      ...options,
      runValidators: true,
    });
  }
  async remove(...args) {
    return this.model.remove(...args);
  }
  async create(doc) {
    return this.model.create({
      ...doc,
      _id: random.id(),
      ts: new Date(),
      _updatedAt: new Date(),
    });
  }
  aggregate(...args) {
    return this.model.aggregate(...args);
  }
  async count(...args) {
    return this.model.count(...args);
  }
  async distinct(...args) {
    return this.model.distinct(...args);
  }
  async findAndRemove(conditions, options = {}) {
    let ids = await this.find(conditions, {
      _id: 1,
    }, {
      ...options,
    });
    ids = _.map(ids, 'id');
    // console.log(ids); process.exit();
    await this.remove({
      _id: {
        $in: ids,
      },
    });
  }
  async upsert(conditions, update) {
    const $setOnInsert = {};
    if (!update.ts) {
      $setOnInsert.ts = new Date();
    }

    if (!update._id) {
      $setOnInsert._id = random.id();
    }

    const result = await this.model.update(conditions, {
      ...update,
      _updatedAt: new Date(),
      $setOnInsert,
    }, {
      upsert: true,
      runValidators: true,
    });
    return result?.upserted ? $setOnInsert._id : 'update';
  }
  async findOrInsert(conditions, insert = {}) {
    const _id = random.id();
    const result = await this.model.update(conditions, {
      $setOnInsert: {
        ...insert,
        _id,
        ts: new Date(),
        _updatedAt: new Date(),
      },
    }, {
      upsert: true,
      runValidators: true,
    });
    return result?.upserted ? _id : '';
  }
  async findAndCreate(conditions, insert = {}) {
    const _id = random.id();
    const result = await this.model.update(conditions, {
      $setOnInsert: {
        ...insert,
        _id,
        ts: new Date(),
        _updatedAt: new Date(),
      },
    }, {
      upsert: true,
      runValidators: true,
    });
    return result?.upserted ? _id : '';
  }
  async findOrCreate(selector, create = {}) {
    const ret = {
      _id: '',
      create: false,
    };
    let result = await this.findOne(selector, { _id: 1 });
    if (result) {
      ret._id = result._id;
      return ret;
    }

    result = await this.model.create({
      ...selector,
      ...create,
      _id: random.id(),
      ts: new Date(),
      _updatedAt: new Date(),
    });
    ret._id = result._id;
    ret.create = result.create;
    return ret;
  }
}
export default Mongoose;
