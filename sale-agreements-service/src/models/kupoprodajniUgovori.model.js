const mongoose = require("mongoose");

const kupoprodajniUgovorSchema = new mongoose.Schema(
  {
    kupac: {
      type: String,
      required: [true, "Please add a kupac"],
    },
    broj_ugovora: {
      type: String,
      required: [true, "Please add a broj_ugovora"],
    },
    datum_akontacije: {
      type: String,
      required: [true, "Please add a datum_akontacije"],
    },
    rok_isporuke: {
      type: String,
      required: [true, "Please add a rok_isporuke"],
    },
    status: {
      type: Number,
      required: [true, "Please add a status"],
    },
  },
  {
    timestamps: true,
    toJSON: {
      transform: (_, ret) => {
        ret.id = ret._id;
        delete ret._id;
      },
    },
  }
);

mongoose.pluralize(null);

const KupoprodajniUgovor =
  mongoose.models.kupoprodajni_ugovori ||
  mongoose.model("kupoprodajni_ugovori", kupoprodajniUgovorSchema);

module.exports = KupoprodajniUgovor;
