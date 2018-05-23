import { Router } from 'express';

const router = Router();

router.route('/')
    .get((req, res) => res.status(200).json({ error: false, message: 'OK!' }));

export { router };