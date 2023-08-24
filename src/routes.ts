import express from "express";
import { categoriesController } from "./controllers/categoriesController";
import { coursesController } from "./controllers/coursesController";
import { episodesController } from "./controllers/episodesController";

const router = express.Router()
// categories
router.get('/categories', categoriesController.index)
router.get('/categories/:id', categoriesController.show)

// courses
router.get('/courses/featured', coursesController.featured)
router.get('/courses/newest', coursesController.newest)
router.get('/courses/search', coursesController.search)
router.get('/courses/:id', coursesController.show)

// episodes
router.get('/episodes/stream', episodesController.stream)

export {router}