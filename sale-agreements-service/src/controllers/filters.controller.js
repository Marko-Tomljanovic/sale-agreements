const filters = require("../services/filters.service");

async function get(req, res, next) {
  try {
    res.json(await filters.filterKP(req.query));
  } catch (err) {
    console.error(`Error while filter kupoprodajni ugovori`, err.message);
    next(err);
  }
}

module.exports = {
  get,
};
