import mongoose from 'mongoose';

const portfolioSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  slug: {
    type: String,
    required: true,
    unique: true,
  },
  Name: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  bio: {
    type: String,
    required: true,
  },
  skills: {
    type: [String],
    required: true,
  },
  experience: {
    type: [
      {
        company: String,
        role: String,
        startDate: Date,
        endDate: Date,
        description: String,
      },
    ],
    required: true,
  },
    education: {
    type: [
      {
        institution: String,
        degree: String,
        startDate: Date,
        endDate: Date,
        description: String,
      },
    ],
    required: true,
  },
  projects: {
    type: [
      {
        name: String,
        description: String,
        link: String,
        photo: String,
      },],
    required: true,
  },
  contact: {
    type: {
      email: String,
      phone: String,
      linkedin: String,
      github: String,
    },
    required: true,
  },
  template: {
    type: String,
    required: true,
  },}, { timestamps: true });

const Portfolio = mongoose.model('Portfolio', portfolioSchema);

export default Portfolio;