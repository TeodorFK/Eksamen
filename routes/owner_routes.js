const router = require('express').Router();

const controller = require('../controller/owner_controller');
const Authenticate = require('../middleware/auth');

router.get('/owners', Authenticate, controller.owner_get);

router.post('/delete/:owner', controller.remove_owner);

module.exports = router;
