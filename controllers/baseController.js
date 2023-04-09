class BaseController {
  constructor(model, name) {
    this.model = model;
    this.name = name;
  }

  create(params, callback) {
    this.model.create(params, (err, dbNewObject) => {
      if (err) {
        return callback(err);
      }

      return callback(null, dbNewObject);
    });
  }

  findRuns(params, callback) {
    this.model
      .find(params, (err, dbNewObject) => {
        if (err) {
          return callback(err);
        }
        return callback(null, dbNewObject);
      })
      .sort({ runs: -1 })
      .limit(1);
  }

  findBalls(params, callback) {
    this.model
      .find(params, (err, dbNewObject) => {
        if (err) {
          return callback(err);
        }
        return callback(null, dbNewObject);
      })
      .sort({ balls: 1 })
      .limit(1);
  }

  findSixes(params, callback) {
    this.model
      .find(params, (err, dbNewObject) => {
        if (err) {
          return callback(err);
        }
        return callback(null, dbNewObject);
      })
      .sort({ sixes: -1 })
      .limit(1);
  }

  findPlayersByRuns(params, callback) {
    this.model
      .find(params, (err, dbNewObject) => {
        if (err) {
          return callback(err);
        }
        return callback(null, dbNewObject);
      })
      .sort({ runs: -1 });
  }

  findBattingStrikeRate(params, callback) {
    this.model
      .find(params, (err, dbNewObject) => {
        if (err) {
          return callback(err);
        }
        return callback(null, dbNewObject);
      })
      .sort({ strike_rate: -1 })
      .limit(1);
  }
}
module.exports = BaseController;
