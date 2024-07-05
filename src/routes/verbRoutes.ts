import { Router } from 'express';
import { getVerbs, getVerb, postCheckAnswer, getVerbsByMeaningsSpecific } from '../controllers/verbController';

const router = Router();

router.get('/verbs', getVerbs);
router.get('/verb', getVerb);
router.post('/check-answer', postCheckAnswer);
router.get('/verbs/meanings', getVerbsByMeaningsSpecific);

export default router;
