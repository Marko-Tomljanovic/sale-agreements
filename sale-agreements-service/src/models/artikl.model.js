const mongoose = require("mongoose");

const artiklSchema = new mongoose.Schema(
  {
    kp_id: {
      type: String,
      required: [true, "Please add a kp_id"],
    },
    naziv: {
      type: String,
      required: [true, "Please add a naziv"],
    },
    dobavljac: {
      type: String,
      required: [true, "Please add a dobavljac"],
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

const Artikl =
  mongoose.models.artikli || mongoose.model("artikli", artiklSchema);

module.exports = Artikl;
