import { Router } from "express";
const router = Router();

// Import Controllers
import * as controller from '../controllers/controller.js';

// Questions Routes API   
router.route('/questions')
    .get(controller.getQuestions)
    .post(controller.insertQuestions)
    .delete(controller.dropQuestions)

// Results Route API
router.route('/result')
    .get(controller.getResults)
    .post(controller.storeResults)
    .delete(controller.dropResults)


export default router;
