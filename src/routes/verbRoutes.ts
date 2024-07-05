import { Router } from 'express';
import { getVerbs, getVerb, postCheckAnswer, getVerbsByMeaningsSpecific, getRandomVerbsByMeanings } from '../controllers/verbController';

const router = Router();

router.get('/verbs', getVerbs);
router.get('/verb', getVerb);
router.post('/check-answer', postCheckAnswer);
router.get('/verbs/meanings', getVerbsByMeaningsSpecific);
router.get('/verbs/random', getRandomVerbsByMeanings);

export default router;
