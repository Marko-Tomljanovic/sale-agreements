const kupoprodajniUgovori = require("../services/kupoprodajniUgovori.service");

async function get(req, res, next) {
  try {
    res.json(await kupoprodajniUgovori.get());
  } catch (err) {
    console.error(`Error while getting kupoprodajni ugovori`, err.message);
    next(err);
  }
}

async function getById(req, res, next) {
  try {
    res.json(await kupoprodajniUgovori.getById(req.params.id));
  } catch (err) {
    console.error(`Error while getting kupoprodajni ugovori`, err.message);
    next(err);
  }
}

async function create(req, res, next) {
  try {
    res.json(await kupoprodajniUgovori.create(req.body));
  } catch (err) {
    console.error(`Error while creating kupoprodajni ugovori`, err.message);
    next(err);
  }
}

async function update(req, res, next) {
  try {
    res.json(await kupoprodajniUgovori.update(req.params.id, req.body));
  } catch (err) {
    console.error(`Error while updating kupoprodajni ugovori`, err.message);
    next(err);
  }
}

async function remove(req, res, next) {
  try {
    res.json(await kupoprodajniUgovori.remove(req.params.id));
  } catch (err) {
    console.error(`Error while deleting kupoprodajni ugovori`, err.message);
    next(err);
  }
}

module.exports = {
  get,
  getById,
  create,
  update,
  remove,
};
