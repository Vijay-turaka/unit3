// Dependencies
var express = require("express");
var router = express.Router();

// Models
var TeamController = require("../models/team");
const playerController = require("../controllers/playerController");

// Routes

router.get("/", (req, res) => {
  res.send("Hello World");
});

router.get("/getAllDetails", async (req, res) => {
  try {
    const data = await TeamController.find();
    res.status(200).res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post("/addPlayer", async (req, res) => {
  try {
    playerController.create(req.body, (err, playerResponse) => {
      if (err) {
        return res.send({ response: err });
      }
      res.status(200).res.send({
        response: playerResponse,
      });
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.patch("/update/:id", async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const updatedData = req.body;
    const options = { new: true };
    const result = await TeamController.findOneAndUpdate(
      id,
      updatedData,
      options
    );

    res.status(200).res.send(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.delete("/delete/:id", async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const data = await TeamController.findOneAndRemove(id);
    res.status(200).res.send(`Player ${data.name} has been deleted..`);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.get("/getWhoScoredMoreRuns", async (req, res) => {
  try {
    PlayerController.findRuns({}, (err, details) => {
      if (err) {
        return res.send({ response: err });
      }
      res.status(200).res.json({
        response: details,
      });
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get("/getWhoPlayedLeastBalls", async (req, res) => {
  try {
    PlayerController.findBalls({}, (err, details) => {
      if (err) {
        return res.send({ response: err });
      }

      res.status(200).res.json({
        response: details,
      });
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get("/getWhoScoredHighestSixes", async (req, res) => {
  try {
    PlayerController.findSixes({}, (err, details) => {
      if (err) {
        return res.send({ response: err });
      }

      res.status(200).res.json({
        response: details,
      });
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get(
  "/getListOfPlayersSortedFromHighestToLeastRuns",
  async (req, res) => {
    try {
      PlayerController.findPlayersByRuns({}, (err, details) => {
        if (err) {
          return res.send({ response: err });
        }

        res.status(200).res.json({
          response: details,
        });
      });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
);

router.get("/getPlayerWhoHaveHighestBattingStrike", async (req, res) => {
  try {
    PlayerController.findBattingStrikeRate({}, (err, details) => {
      if (err) {
        return res.send({ response: err });
      }

      res.status(200).res.json({
        response: details,
      });
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
// Return router
module.exports = router;
