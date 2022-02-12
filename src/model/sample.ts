import mongoose from "mongoose";

const sampleSchema = new mongoose.Schema({
  sample: String,
});

export const Sample = mongoose.model("sample", sampleSchema);
