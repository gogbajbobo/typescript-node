import { Router } from 'express';

const router = Router();

router.route('/')
    .get((req, res) => {

        const jsonData: Object = {
            error: false,
            message: 'OK!',
            uri: process.env.SCRIPT_URI || 'localhost',
            env: process.env
        };
        res.status(200).json(jsonData);

    });

router.route('/test')
    .get((req, res) => {

        const renderData: Object = {
            uri: process.env.SCRIPT_URI || 'localhost'
        };
        res.render('index', renderData, (err, content) => {
            err ? res.json({err: err.message}) : res.send(content)
        })

    });


export { router };