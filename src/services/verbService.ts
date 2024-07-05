import { pool } from '../config/database';
import { Verb } from '../models/verb';

export const getAllVerbs = async (): Promise<Verb[]> => {
    const res = await pool.query('SELECT * FROM verbs');
    return res.rows;
};

export const getRandomVerb = async (meanings: string[]): Promise<Verb> => {
    const query = meanings.length > 0 ?
        'SELECT * FROM verbs WHERE meaning = ANY($1::text[]) ORDER BY RANDOM() LIMIT 1' :
        'SELECT * FROM verbs ORDER BY RANDOM() LIMIT 1';
    const res = await pool.query(query, [meanings]);
    return res.rows[0];
};

export const checkAnswer = async (meaning: string, present: string, past: string, pastParticiple: string): Promise<boolean> => {
    const res = await pool.query('SELECT * FROM verbs WHERE meaning = $1 AND present = $2 AND past = $3 AND past_participle = $4', [meaning, present, past, pastParticiple]);
    return (res.rowCount as number) > 0;
};

export const getVerbsByMeanings = async (meanings: string[]): Promise<Verb[]> => {
    const query = 'SELECT * FROM verbs WHERE meaning = ANY($1::text[])';
    const res = await pool.query(query, [meanings]);
    return res.rows;
};
