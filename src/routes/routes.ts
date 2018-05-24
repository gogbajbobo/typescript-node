import { Router } from 'express';

const router = Router();

router.route('/')
    .get((req, res) => {

        const jsonData: Object = {
            error: false,
            message: 'OK!',
            uri: process.env.SCRIPT_URI || 'localhost'
        };
        res.status(200).json(jsonData);

    });

router.route('/test')
    .get((req, res) => res.render('index'));


export { router };