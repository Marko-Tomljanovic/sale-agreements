const dbConnect = require("./db.service");
const KupoprodajniUgovor = require("../models/kupoprodajniUgovori.model");
const Artikl = require("../models//artikl.model");

async function get() {
  dbConnect();
  try {
    const kupoprodajniUgovori = await KupoprodajniUgovor.find({}).select(
      "-updatedAt -createdAt -__v"
    );
    return kupoprodajniUgovori;
  } catch (error) {
    console.log("error:", error);
    throw error;
  }
}

async function getById(id) {
  dbConnect();
  try {
    const kupoprodajniUgovor = await KupoprodajniUgovor.findById(id).select(
      "-updatedAt -createdAt -__v"
    );
    const artikli = await Artikl.find({ kp_id: id }).select(
      "-updatedAt -createdAt -__v -kp_id "
    );
    return { kupoprodajniUgovor, artikli };
  } catch (error) {
    console.log("error:", error);
    throw error;
  }
}

async function create(newKP) {
  const validationKp = require("../helpers/validations/kupoprodajniUgovori.validations");
  if (validationKp.create(newKP)) {
    throw new Error("Invalid input data");
  }
  dbConnect();
  try {
    const kupoprodajniUgovor = new KupoprodajniUgovor({ ...newKP, status: 1 }); // postavljanje statusa na KREIRAN
    await kupoprodajniUgovor.save();
    const response = await get();
    return { kupoprodajniUgovori: response };
  } catch (error) {
    console.log("error:", error);
    throw error;
  }
}

async function update(id, updatedData) {
  dbConnect();
  try {
    await KupoprodajniUgovor.findByIdAndUpdate(id, {
      rok_isporuke: updatedData.rok_isporuke,
      status: updatedData.status,
    });
    const kupoprodajniUgovori = await get();
    return {
      kupoprodajniUgovori,
    };
  } catch (error) {
    console.log("error:", error);
    throw error;
  }
}

async function remove(id) {
  let message = "Function not implemented";
  return { message };
}

module.exports = {
  get,
  getById,
  create,
  update,
  remove,
};
