const router = require('express').Router();

const multer = require('multer');
const upload = multer({ dest: './public/files' });
const controller = require('../controller/file_controller');

router.get('/createFile', controller.fileAdd_get);

router.post('/createFile', upload.single('file'), controller.fileAdd_post);

router.get('/showfile', controller.fileShow);

module.exports = router;
