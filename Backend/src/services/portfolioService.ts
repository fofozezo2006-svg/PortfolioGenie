import Portfolio from "../models/portfolioModel.js";

export const createPortfolio = (body, userId: string) => {
  return Portfolio.create({
    title: body.title,
    slug: body.slug,
    description: body.description,
    template: body.template,
    user: userId,
    projects: body.projects?? [],
    education: body.education?? [],
  });
};

export const getPortfolio = (id: string) => {
  return Portfolio.findById(id);
};

export const getUserPortfolios = (userId: string) => {
  return Portfolio.find({ user: userId });
};

export const updatePortfolio = (id: string, userId: string, body) => {
  return Portfolio.findOneAndUpdate(
    { _id: id, user: userId },
    {
      title: body.title,
      slug: body.slug,
      description: body.description,
      template: body.template,
      isPublished: body.isPublished,
    },
    {
      returnDocument: "after",
      runValidators: true,
      technologies: body.technologies,
      projects: body.projects,
      education: body.education,
    }
  );
};

export const getPortfolioBySlug = (slug: string) => {
  return Portfolio.findOne({ slug, isPublished: true});
};


export const deletePortfolio = (id: string, userId: string) => {
  return Portfolio.findOneAndDelete({
    _id: id,
    user: userId,
  });
};

export const publishPortfolio = (id: string, userId: string) => {
    return Portfolio.findOneAndUpdate(
        { _id: id, user: userId },
        { isPublished: true },
        { returnDocument: "after" }
    );
};