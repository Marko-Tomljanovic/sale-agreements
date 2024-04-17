// const db = require('./db.service');
// const config = require('../configs/general.config');

async function get() {
  const data = [
    {
      id: "1",
      kupac: "Filip Filipović",
      broj_ugovora: "10/33",
      datum_akontacije: "25.08.2024",
      rok_isporuke: "25.08.2024",
      status: 1,
    },
    {
      id: "2",
      kupac: "Marko Filipović",
      broj_ugovora: "10/33",
      datum_akontacije: "25.08.2024",
      rok_isporuke: "25.08.2024",
      status: 2,
    },
    {
      id: "3",
      kupac: "Janko Filipović",
      broj_ugovora: "10/33",
      datum_akontacije: "25.08.2024",
      rok_isporuke: "25.08.2024",
      status: 3,
    },
  ];

  return { data };
}
async function create(kupoprodajniUgovori) {
  const result = "";

  let message = "Error in creating kupoprodajni ugovori";

  if (result.affectedRows) {
    message = "Kupoprodajni ugovori created successfully";
  }

  return { message };
}

async function update(id, kupoprodajniUgovori) {
  const result = "";

  let message = "Error in updating kupoprodajni ugovori";

  if (result.affectedRows) {
    message = "Kupoprodajni ugovori updated successfully";
  }

  return { message };
}

async function remove(id) {
  const result = "";

  let message = "Error in deleting kupoprodajni ugovori";

  if (result.affectedRows) {
    message = "Kupoprodajni ugovori deleted successfully";
  }

  return { message };
}

module.exports = {
  get,
  create,
  update,
  remove,
};
