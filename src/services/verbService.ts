import { pool } from '../config/database';
import { Verb } from '../models/verb';

export const getAllVerbs = async (): Promise<Verb[]> => {
    const res = await pool.query('SELECT * FROM verbs');
    return res.rows;
};

export const getRandomVerb = async (): Promise<Verb> => {
    const res = await pool.query('SELECT * FROM verbs ORDER BY RANDOM() LIMIT 1');
    return res.rows[0];
};

export const checkAnswer = async (meaning: string, present: string, past: string, pastParticiple: string): Promise<boolean> => {
    const res = await pool.query('SELECT * FROM verbs WHERE meaning = $1 AND present = $2 AND past = $3 AND past_participle = $4', [meaning, present, past, pastParticiple]);
    return (res.rowCount as number) > 0;
};
