import { protect } from "../controllers/authController.js";
import * as portfolioController from "../controllers/portfolioController.js";
import * as portfolioValidator from "../utils/validators/portfolioValidator.js";
import { Router } from "express";

const portfolioRouter = Router();

// Public route
portfolioRouter.get("/api/v1/portfolios/slug/:slug", portfolioController.getPortfolioBySlug);

// Private routes
portfolioRouter.post("/api/v1/portfolios", protect, ...portfolioValidator.createPortfolio, portfolioController.createPortfolio);

portfolioRouter.get("/api/v1/portfolios", protect, portfolioController.getMyPortfolios);

portfolioRouter.get("/api/v1/portfolios/:id", protect, portfolioController.getPortfolio);

portfolioRouter.patch("/api/v1/portfolios/:id", protect, ...portfolioValidator.updatePortfolio, portfolioController.updatePortfolio);

portfolioRouter.delete("/api/v1/portfolios/:id", protect, portfolioController.deletePortfolio);

portfolioRouter.patch("/api/v1/portfolios/:id/publish",protect,portfolioController.publishPortfolio);

export default portfolioRouter;