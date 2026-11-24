import { Schema, model } from "mongoose";

const projectSchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
  },
  technologies: {
    type: [String],
    default: [],
  },
  githubUrl: String,
  liveUrl: String,
});

const educationSchema = new Schema({
  institution: {
    type: String,
    required: true,
  },
  degree: {
    type: String,
    required: true,
  },
  field: {
    type: String,
    required: true,
  },
  startDate: {
    type: Date,
    required: true,
  },
  endDate: Date,
  description: String,
});

const portfolioSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    description: String,

    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    template: {
      type: String,
      enum: ["modern", "minimal", "creative"],
      default: "modern",
    },

    isPublished: {
      type: Boolean,
      default: false,
    },

    projects: [projectSchema],

    education: [educationSchema],
  },
  {
    timestamps: true,
  }
);

const Portfolio = model("Portfolio", portfolioSchema);

export default Portfolio;