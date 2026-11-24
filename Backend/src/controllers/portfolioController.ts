import * as portfolioService from "../services/portfolioService.js";
import AppError from "../errors/AppError.js";

// @desc create a new portfolio
// @route POST /api/v1/portfolios
// @access private
export const createPortfolio = async (req, res, next) => {
    if (!req.user) {
        throw new AppError(403, "You are not logged in, please log in");
    }
    const portfolio = await portfolioService.createPortfolio(req.body, req.user.id);

    res.status(201).json({ data: portfolio });

};
// @desc get all logged in user portfolios
// @route GET /api/v1/portfolios
// @access private
export const getMyPortfolios = async (req, res, next) => {
    if (!req.user) {
        throw new AppError(403, "You are not logged in, please log in");
    }
    const portfolios = await portfolioService.getUserPortfolios(req.user.id);

    res.status(200).json({
        results: portfolios.length,
        data: portfolios
    });

};

// @desc get portfolio by ID
// @route GET /api/v1/portfolios/:id
// @access private
export const getPortfolio = async (req, res, next) => {
    if (!req.user) {
        throw new AppError(403, "You are not logged in, please log in");
    }
    const portfolio = await portfolioService.getPortfolio(req.params.id);

    if (!portfolio) {
        throw new AppError(404, "Portfolio not found");
    }

    if (portfolio.user.toString() !== req.user.id) {
        throw new AppError(403, "You are not allowed to access this portfolio");
    }

    res.status(200).json({ data: portfolio });

};

// @desc get portfolio by slug
// @route GET /api/v1/portfolios/slug/:slug
// @access public
export const getPortfolioBySlug = async (req, res, next) => {
    const portfolio = await portfolioService.getPortfolioBySlug(req.params.slug);

    if (!portfolio) {
        throw new AppError(404, "Portfolio not found");
    }

    res.status(200).json({ data: portfolio });

};

// @desc update portfolio
// @route PATCH /api/v1/portfolios/:id
// @access private
export const updatePortfolio = async (req, res, next) => {
    if (!req.user) {
        throw new AppError(403, "You are not logged in, please log in");
    }
    const portfolio = await portfolioService.updatePortfolio(
        req.params.id,
        req.user.id,
        req.body
    );

    if (!portfolio) {
        throw new AppError(404, "Portfolio not found");
    }

    res.status(200).json({ data: portfolio });

};

// @desc delete portfolio
// @route DELETE /api/v1/portfolios/:id
// @access private
export const deletePortfolio = async (req, res, next) => {
    if (!req.user) {
        throw new AppError(403, "You are not logged in, please log in");
    }
    const portfolio = await portfolioService.deletePortfolio(
        req.params.id,
        req.user.id
    );

    if (!portfolio) {
        throw new AppError(404, "Portfolio not found");
    }

    res.status(204).json({ status: "Success" });

};

// @desc publish portfolio
// @route PATCH /api/v1/portfolios/:id/publish
// @access private
export const publishPortfolio = async (req, res, next) => {
    if (!req.user) {
        throw new AppError(403, "You are not logged in, please log in");
    }

    const portfolio = await portfolioService.publishPortfolio(
        req.params.id,
        req.user.id
    );

    if (!portfolio) {
        throw new AppError(404, "Portfolio not found");
    }

    res.status(200).json({
        message: "Portfolio published successfully",
        data: portfolio
    });
};