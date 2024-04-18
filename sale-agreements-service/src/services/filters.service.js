const dbConnect = require("./db.service");
const KupoprodajniUgovor = require("../models/kupoprodajniUgovori.model");

async function filterKP(query) {
  dbConnect();
  try {
    const { kupac, aktivnost } = query;
    let queryObj = {};

    // Provjera da li postoji aktivnost
    if (aktivnost && aktivnost.trim() !== "") {
      const statusi = aktivnost === "true" ? [1, 2] : [3];
      queryObj.status = { $in: statusi };
    }
    // Provjera da li postoji kupac
    if (kupac && kupac.trim() !== "") {
      queryObj.kupac = { $regex: kupac, $options: "i" };
    }

    const kupoprodajniUgovori = await KupoprodajniUgovor.find(queryObj);
    return {
      kupoprodajniUgovori,
    };
  } catch (error) {
    console.log("error:", error);
    throw error;
  }
}

module.exports = {
  filterKP,
};
