const router = require('express').Router();

const controller = require('../controller/user_controller');
const authenticate = require('../middleware/auth');

router.get('/login', controller.login_get);
router.post('/login', controller.login_post);

router.get('/profile', authenticate, controller.profile);
router.post('/profile', controller.petAndOwner);

module.exports = router;
  