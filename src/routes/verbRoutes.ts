import { Router } from 'express';
import { getVerbs, getVerb, postCheckAnswer } from '../controllers/verbController';

const router = Router();

router.get('/verbs', getVerbs);
router.get('/verb', getVerb);
router.post('/check-answer', postCheckAnswer);

export default router;
