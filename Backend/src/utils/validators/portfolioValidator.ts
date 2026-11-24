import { checkSchema } from "express-validator";
import AppError from "../../errors/AppError.js";
import Portfolio from "../../models/portfolioModel.js";
import slugify from "slugify";
import validatorMiddleware from "../../middlewares/validatorMiddleware.js";

// Check if slug already exists
const checkSlug = async (slug: string, req) => {
    const filter: any = { slug };

    if (req.params.id) {
        filter._id = { $ne: req.params.id };
    }

    const portfolio = await Portfolio.findOne(filter);

    if (portfolio) {
        throw new AppError(400, "Portfolio slug already exists");
    }

    return true;

};

// Create Portfolio Validation Schema
const createPortfolioValidationSchema:any = {
    title: {
        notEmpty: {
            errorMessage: "Portfolio title is required",
        },
        isString: true,
        trim: true,
        custom: {
            options: async (value: string, { req }) => {
                req.body.slug = slugify(value, { lower: true });
                await checkSlug(req.body.slug, req);
                return true;
            },
        },
    },

    description: {
        optional: true,
        isString: {
            errorMessage: "Description must be a string",
        },
        trim: true,
    },

    slug: {
        optional: true,
        isString: true,
        trim: true,
    },

    template: {
        optional: true,
        isIn: {
            options: [["modern", "minimal", "creative"]],
            errorMessage: "Invalid portfolio template",
        },
    },

    projects: {
        optional: true,
        isArray: {
            errorMessage: "Projects must be an array",
        },
    },

    "projects.*.title": {
        notEmpty: {
            errorMessage: "Project title is required",
        },
        isString: true,
        trim: true,
    },

    "projects.*.description": {
        notEmpty: {
            errorMessage: "Project description is required",
        },
        isString: true,
        trim: true,
    },

    "projects.*.image": {
        optional: true,
        isString: true,
    },

    "projects.*.technologies": {
        optional: true,
        isArray: true,
    },

    "projects.*.githubUrl": {
        optional: true,
        isURL: {
            errorMessage: "Invalid GitHub URL",
        },
    },

    "projects.*.liveUrl": {
        optional: true,
        isURL: {
            errorMessage: "Invalid live URL",
        },
    },

    education: {
        optional: true,
        isArray: {
            errorMessage: "Education must be an array",
        },
    },

    "education.*.institution": {
        notEmpty: {
            errorMessage: "Institution is required",
        },
        isString: true,
        trim: true,
    },

    "education.*.degree": {
        notEmpty: {
            errorMessage: "Degree is required",
        },
        isString: true,
        trim: true,
    },

    "education.*.field": {
        notEmpty: {
            errorMessage: "Field of study is required",
        },
        isString: true,
        trim: true,
    },

    "education.*.startDate": {
        notEmpty: {
            errorMessage: "Start date is required",
        },
        isISO8601: {
            errorMessage: "Invalid start date",
        },
    },

    "education.*.endDate": {
        optional: true,
        isISO8601: {
            errorMessage: "Invalid end date",
        },
    },

    "education.*.description": {
        optional: true,
        isString: true,
    },

};

// Update Portfolio Validation Schema
const updatePortfolioValidationSchema = {
    title: {
        optional: true,
        trim: true,
        notEmpty: {
            errorMessage: "Portfolio title cannot be empty",
        },
        isString: true,
        custom: {
            options: async (value: string, { req }) => {
                req.body.slug = slugify(value, { lower: true });
                await checkSlug(req.body.slug, req);
                return true;
            },
        },
    },

    slug: {
        optional: true,
        isString: true,
        trim: true,
        custom: {
            options: async (value: string, { req }) => {
                if (!req.body.title) {
                    await checkSlug(value, req);
                }
                return true;
            },
        },
    },

    description: {
        optional: true,
        isString: true,
        trim: true,
    },

    template: {
        optional: true,
        isIn: {
            options: [["modern", "minimal", "creative"]],
            errorMessage: "Invalid portfolio template",
        },
    },

    isPublished: {
        optional: true,
        isBoolean: {
            errorMessage: "isPublished must be a boolean",
        },
        toBoolean: true,
    },

    projects: {
        optional: true,
        isArray: {
            errorMessage: "Projects must be an array",
        },
    },

    "projects.*.title": {
        notEmpty: {
            errorMessage: "Project title is required",
        },
        isString: true,
        trim: true,
    },

    "projects.*.description": {
        notEmpty: {
            errorMessage: "Project description is required",
        },
        isString: true,
        trim: true,
    },

    "projects.*.technologies": {
        optional: true,
        isArray: true,
    },

    "projects.*.githubUrl": {
        optional: true,
        isURL: {
            errorMessage: "Invalid GitHub URL",
        },
    },

    "projects.*.liveUrl": {
        optional: true,
        isURL: {
            errorMessage: "Invalid live URL",
        },
    },

    education: {
        optional: true,
        isArray: {
            errorMessage: "Education must be an array",
        },
    },

    "education.*.institution": {
        notEmpty: {
            errorMessage: "Institution is required",
        },
        isString: true,
        trim: true,
    },

    "education.*.degree": {
        notEmpty: {
            errorMessage: "Degree is required",
        },
        isString: true,
        trim: true,
    },

    "education.*.field": {
        notEmpty: {
            errorMessage: "Field of study is required",
        },
        isString: true,
        trim: true,
    },

    "education.*.startDate": {
        notEmpty: {
            errorMessage: "Start date is required",
        },
        isISO8601: {
            errorMessage: "Invalid start date",
        },
    },

    "education.*.endDate": {
        optional: true,
        isISO8601: {
            errorMessage: "Invalid end date",
        },
    },

    "education.*.description": {
        optional: true,
        isString: true,
    },

};

// Validators
export const createPortfolio = [
    checkSchema(createPortfolioValidationSchema),
    validatorMiddleware,
];

export const updatePortfolio = [
    checkSchema(updatePortfolioValidationSchema),
    validatorMiddleware,
];