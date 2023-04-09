const BaseController = require("./baseController");
const TeamModel = require("../models/team");
class Team extends BaseController {
  constructor() {
    super(TeamModel, Team);
  }
}
module.exports = new Team();
