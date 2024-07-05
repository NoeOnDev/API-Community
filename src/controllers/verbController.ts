import { Request, Response } from 'express';
import { getAllVerbs, getRandomVerb, checkAnswer, getVerbsByMeanings } from '../services/verbService';

export const getVerbs = async (_req: Request, res: Response): Promise<void> => {
    try {
        const verbs = await getAllVerbs();
        res.status(200).json(verbs);
    } catch (error) {
        res.status(500).send(error);
    }
};

export const getVerb = async (req: Request, res: Response): Promise<void> => {
    try {
        const meanings: string[] = req.query.meanings ? (req.query.meanings as string).split(',') : [];
        const verb = await getRandomVerb(meanings);
        res.status(200).json(verb);
    } catch (error) {
        res.status(500).send(error);
    }
};

export const postCheckAnswer = async (req: Request, res: Response): Promise<void> => {
    const { meaning, present, past, pastParticiple } = req.body;
    try {
        const isCorrect = await checkAnswer(meaning, present, past, pastParticiple);
        res.status(200).json({ correct: isCorrect });
    } catch (error) {
        res.status(500).send(error);
    }
};

export const getVerbsByMeaningsSpecific = async (req: Request, res: Response): Promise<void> => {
    const meanings: string[] = req.query.meanings ? (req.query.meanings as string).split(',') : [];
    try {
        const verbs = await getVerbsByMeanings(meanings);
        res.status(200).json(verbs);
    } catch (error) {
        res.status(500).send(error);
    }
};
