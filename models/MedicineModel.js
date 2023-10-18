import mongoose from "mongoose";

const MedSchema = mongoose.Schema(
  {
    owner: {
      type: String,
      required: true,
    },
    list: {
      type: [String],
      required: true,
    },
    lastdate: {
      type: Number,
      required: true,
    },
  },

  { timestamps: true }
);
const MedicineModel =
  mongoose.models.medicinelist || mongoose.model("medicinelist", MedSchema);
export default MedicineModel;
