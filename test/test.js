const request = require("supertest");
const app = require("../routes/api");

describe("GET /getAllDetails", function () {
  it("Will return all players details", function (done) {
    request(app)
      .get("/getAllDetails")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200, done);
  });
});

describe("POST /addPlayer", function () {
  it("Will present added player details", function (done) {
    request(app)
      .post("/addPlayer")
      .send({
        name: "Mayank Agarwal",
        runs: 2,
        balls: 2,
        fours: 0,
        sixes: 0,
        strike_rate: 100,
      })
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200, done);
  });
});

describe("PATCH /update/:id", function () {
  it("Will return updated player details", function (done) {
    request(app)
      .patch("/update/:64325e42dcc3c2c7b06d4331")
      .send({
        name: "Mayank Agarwal_test",
      })
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200, done);
  });
});

describe("DELETE /delete/:id", function () {
  it("Will return deleted player details", function (done) {
    request(app)
      .delete("/delete/:64325e42dcc3c2c7b06d4331")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200, done);
  });
});

describe("GET /getWhoScoredMoreRuns", function () {
  it("Will return who scored more runs", function (done) {
    request(app)
      .get("/getWhoScoredMoreRuns")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200, done);
  });
});

describe("GET /getWhoPlayedLeastBalls", function () {
  it("Will return who played least balls", function (done) {
    request(app)
      .get("/getWhoPlayedLeastBalls")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200, done);
  });
});

describe("GET /getWhoScoredHighestSixes", function () {
  it("Will return who scored highest sixes", function (done) {
    request(app)
      .get("/getWhoScoredHighestSixes")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200, done);
  });
});

describe("GET /getListOfPlayersSortedFromHighestToLeastRuns", function () {
  it("Will return list of players based on runs", function (done) {
    request(app)
      .get("/getListOfPlayersSortedFromHighestToLeastRuns")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200, done);
  });
});

describe("GET /getPlayerWhoHaveHighestBattingStrike", function () {
  it("Will return who is having highest batting strike", function (done) {
    request(app)
      .get("/getPlayerWhoHaveHighestBattingStrike")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200, done);
  });
});
