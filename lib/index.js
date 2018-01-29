"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _lodash = _interopRequireDefault(require("lodash"));

var _mongoRandomId = _interopRequireDefault(require("mongo-random-id"));

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

_mongoose.default.Promise = global.Promise;
var dbs = {};

var Mongoose =
/*#__PURE__*/
function () {
  function Mongoose(_url, name, schema) {
    _classCallCheck(this, Mongoose);

    var url = process.env[_url] || _url;

    if (!dbs[url]) {
      dbs[url] = _mongoose.default.createConnection(url);
    }

    this.model = dbs[url].model(name, schema, name);
  }

  _createClass(Mongoose, [{
    key: "findOne",
    value: function () {
      var _findOne = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee() {
        var _model;

        var _args = arguments;
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                return _context.abrupt("return", (_model = this.model).findOne.apply(_model, _args));

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function findOne() {
        return _findOne.apply(this, arguments);
      };
    }()
  }, {
    key: "find",
    value: function () {
      var _find = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee2() {
        var _model2;

        var _args2 = arguments;
        return _regenerator.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                return _context2.abrupt("return", (_model2 = this.model).find.apply(_model2, _args2));

              case 1:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      return function find() {
        return _find.apply(this, arguments);
      };
    }()
  }, {
    key: "update",
    value: function () {
      var _update = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee3(conditions, doc, options) {
        return _regenerator.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                return _context3.abrupt("return", this.model.update(conditions, _extends({}, doc, {
                  _updatedAt: new Date()
                }), _extends({}, options, {
                  runValidators: true
                })));

              case 1:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      return function update(_x, _x2, _x3) {
        return _update.apply(this, arguments);
      };
    }()
  }, {
    key: "remove",
    value: function () {
      var _remove = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee4() {
        var _model3;

        var _args4 = arguments;
        return _regenerator.default.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                return _context4.abrupt("return", (_model3 = this.model).remove.apply(_model3, _args4));

              case 1:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      return function remove() {
        return _remove.apply(this, arguments);
      };
    }()
  }, {
    key: "create",
    value: function () {
      var _create = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee5(doc) {
        return _regenerator.default.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                return _context5.abrupt("return", this.model.create(_extends({}, doc, {
                  _id: _mongoRandomId.default.id(),
                  ts: new Date(),
                  _updatedAt: new Date()
                })));

              case 1:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      return function create(_x4) {
        return _create.apply(this, arguments);
      };
    }()
  }, {
    key: "aggregate",
    value: function aggregate() {
      var _model4;

      return (_model4 = this.model).aggregate.apply(_model4, arguments);
    }
  }, {
    key: "count",
    value: function () {
      var _count = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee6() {
        var _model5;

        var _args6 = arguments;
        return _regenerator.default.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                return _context6.abrupt("return", (_model5 = this.model).count.apply(_model5, _args6));

              case 1:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      return function count() {
        return _count.apply(this, arguments);
      };
    }()
  }, {
    key: "distinct",
    value: function () {
      var _distinct = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee7() {
        var _model6;

        var _args7 = arguments;
        return _regenerator.default.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                return _context7.abrupt("return", (_model6 = this.model).distinct.apply(_model6, _args7));

              case 1:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      return function distinct() {
        return _distinct.apply(this, arguments);
      };
    }()
  }, {
    key: "findAndRemove",
    value: function () {
      var _findAndRemove = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee8(conditions) {
        var options,
            ids,
            _args8 = arguments;
        return _regenerator.default.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                options = _args8.length > 1 && _args8[1] !== undefined ? _args8[1] : {};
                _context8.next = 3;
                return this.find(conditions, {
                  _id: 1
                }, _extends({}, options));

              case 3:
                ids = _context8.sent;
                ids = _lodash.default.map(ids, 'id'); // console.log(ids); process.exit();

                _context8.next = 7;
                return this.remove({
                  _id: {
                    $in: ids
                  }
                });

              case 7:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, this);
      }));

      return function findAndRemove(_x5) {
        return _findAndRemove.apply(this, arguments);
      };
    }()
  }, {
    key: "upsert",
    value: function () {
      var _upsert = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee9(conditions, update) {
        var $setOnInsert, result;
        return _regenerator.default.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                $setOnInsert = {};

                if (!update.ts) {
                  $setOnInsert.ts = new Date();
                }

                if (!update._id) {
                  $setOnInsert._id = _mongoRandomId.default.id();
                }

                _context9.next = 5;
                return this.model.update(conditions, _extends({}, update, {
                  _updatedAt: new Date(),
                  $setOnInsert: $setOnInsert
                }), {
                  upsert: true,
                  runValidators: true
                });

              case 5:
                result = _context9.sent;
                return _context9.abrupt("return", (result === null || result === void 0 ? void 0 : result.upserted) ? $setOnInsert._id : 'update');

              case 7:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9, this);
      }));

      return function upsert(_x6, _x7) {
        return _upsert.apply(this, arguments);
      };
    }()
  }, {
    key: "findOrInsert",
    value: function () {
      var _findOrInsert = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee10(conditions) {
        var insert,
            _id,
            result,
            _args10 = arguments;

        return _regenerator.default.wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                insert = _args10.length > 1 && _args10[1] !== undefined ? _args10[1] : {};
                _id = _mongoRandomId.default.id();
                _context10.next = 4;
                return this.model.update(conditions, {
                  $setOnInsert: _extends({}, insert, {
                    _id: _id,
                    ts: new Date(),
                    _updatedAt: new Date()
                  })
                }, {
                  upsert: true,
                  runValidators: true
                });

              case 4:
                result = _context10.sent;
                return _context10.abrupt("return", (result === null || result === void 0 ? void 0 : result.upserted) ? _id : '');

              case 6:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10, this);
      }));

      return function findOrInsert(_x8) {
        return _findOrInsert.apply(this, arguments);
      };
    }()
  }, {
    key: "findAndCreate",
    value: function () {
      var _findAndCreate = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee11(conditions) {
        var insert,
            _id,
            result,
            _args11 = arguments;

        return _regenerator.default.wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                insert = _args11.length > 1 && _args11[1] !== undefined ? _args11[1] : {};
                _id = _mongoRandomId.default.id();
                _context11.next = 4;
                return this.model.update(conditions, {
                  $setOnInsert: _extends({}, insert, {
                    _id: _id,
                    ts: new Date(),
                    _updatedAt: new Date()
                  })
                }, {
                  upsert: true,
                  runValidators: true
                });

              case 4:
                result = _context11.sent;
                return _context11.abrupt("return", result.upserted ? _id : undefined);

              case 6:
              case "end":
                return _context11.stop();
            }
          }
        }, _callee11, this);
      }));

      return function findAndCreate(_x9) {
        return _findAndCreate.apply(this, arguments);
      };
    }()
  }, {
    key: "findOrCreate",
    value: function () {
      var _findOrCreate = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee12(selector) {
        var create,
            ret,
            result,
            _args12 = arguments;
        return _regenerator.default.wrap(function _callee12$(_context12) {
          while (1) {
            switch (_context12.prev = _context12.next) {
              case 0:
                create = _args12.length > 1 && _args12[1] !== undefined ? _args12[1] : {};
                ret = {
                  _id: '',
                  create: false
                };
                _context12.next = 4;
                return this.findOne(selector, {
                  _id: 1
                });

              case 4:
                result = _context12.sent;

                if (!result) {
                  _context12.next = 8;
                  break;
                }

                ret._id = result._id;
                return _context12.abrupt("return", ret);

              case 8:
                _context12.next = 10;
                return this.model.create(_extends({}, selector, create, {
                  _id: _mongoRandomId.default.id(),
                  ts: new Date(),
                  _updatedAt: new Date()
                }));

              case 10:
                result = _context12.sent;
                ret._id = result._id;
                ret.create = true;
                return _context12.abrupt("return", ret);

              case 14:
              case "end":
                return _context12.stop();
            }
          }
        }, _callee12, this);
      }));

      return function findOrCreate(_x10) {
        return _findOrCreate.apply(this, arguments);
      };
    }()
  }]);

  return Mongoose;
}();

var _default = Mongoose;
exports.default = _default;