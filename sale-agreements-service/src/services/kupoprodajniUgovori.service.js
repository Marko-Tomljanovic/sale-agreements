const dbConnect = require("./db.service");
const KupoprodajniUgovor = require("../models/kupoprodajniUgovori.model");

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
async function create(newKP) {
  dbConnect();
  try {
    const kupoprodajniUgovor = new KupoprodajniUgovor(newKP);
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
  create,
  update,
  remove,
};
