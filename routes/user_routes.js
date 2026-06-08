const router = require('express').Router();

const controller = require('../controller/user_controller');

router.get('/login', controller.login_get);
router.post('/login',controller.login_post)

module.exports = router;
