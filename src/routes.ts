import express from "express";
import { categoriesController } from "./controllers/categoriesController";
import { coursesController } from "./controllers/coursesController";
import { episodesController } from "./controllers/episodesController";
import { authController } from "./controllers/authController";
import { ensureAuth, ensureAuthViaQuery } from "./middlewares/auth";
import { favoriteController } from "./controllers/favoritesController";

const router = express.Router()

// register
router.post('/auth/register', authController.register)
router.post('/auth/login', authController.login)

// categories
router.get('/categories', ensureAuth, categoriesController.index)
router.get('/categories/:id', ensureAuth, categoriesController.show)

// courses
router.get('/courses/featured', ensureAuth, coursesController.featured)
router.get('/courses/newest', coursesController.newest)
router.get('/courses/search', ensureAuth, coursesController.search)
router.get('/courses/:id', ensureAuth, coursesController.show)

// episodes
router.get('/episodes/stream', ensureAuthViaQuery, episodesController.stream)

// favoritos
router.post('/favorites', ensureAuth, favoriteController.saveFavorite)

export {router}