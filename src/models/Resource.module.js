import mongoose from "mongoose";

const resourceSchema = new mongoose.Schema(
  {
    moduleId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Module",
      required: true,
    },

    title: {
      type: String,
      required: true,
      trim: true,
    },

    type: {
      type: String,
      required: true,
      trim: true,
    },

    url: {
      type: String,
      default: null,
      trim: true,
    },

    fileReference: {
      type: String,
      default: null,
      trim: true,
    },

    description: {
      type: String,
      trim: true,
      default: "",
    },

    originalFilename: {
      type: String,
      default: null,
    },

    fileSize: {
      type: Number,
      default: null,
      min: 0,
    },

    estimatedDuration: {
      type: Number,
      default: null,
      min: 0,
    },

    order: {
      type: Number,
      required: true,
      min: 1,
    },
  },
  {
    timestamps: true,
  },
);

const Resource = mongoose.model("Resource", resourceSchema);

export default Resource;
