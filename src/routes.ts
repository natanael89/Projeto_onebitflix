import express from "express";
import { categoriesController } from "./controllers/categoriesController";
import { coursesController } from "./controllers/coursesController";
import { episodesController } from "./controllers/episodesController";
import { authController } from "./controllers/authController";
import { ensureAuth, ensureAuthViaQuery } from "./middlewares/auth";
import { favoriteController } from "./controllers/favoritesController";
import e from "express";
import { likesController } from "./controllers/likesController";
import { usersController } from "./controllers/usersController";

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
router.get('/courses/popular', ensureAuth, coursesController.popular)
router.get('/courses/search', ensureAuth, coursesController.search)
router.get('/courses/:id', ensureAuth, coursesController.show)

// episodes
router.get('/episodes/stream', ensureAuthViaQuery, episodesController.stream)
router.get('/episodes/:id/watchTime', ensureAuth, episodesController.getWatchTime)
router.post('/episodes/:id/watchTime', ensureAuth, episodesController.setWatchTime)

// favoritos
router.get('/favorites', ensureAuth, favoriteController.index)
router.post('/favorites', ensureAuth, favoriteController.save)
router.delete('/favorites/:id', ensureAuth, favoriteController.delete)

// likes
router.post('/likes', ensureAuth, likesController.save)
router.delete('/likes/:id', ensureAuth, likesController.delete)

// lista de continuação
router.get('/users/current', ensureAuth, usersController.show)
router.put('/users/current', ensureAuth, usersController.update)
router.get('/users/current/watching', ensureAuth, usersController.watching)

export {router}