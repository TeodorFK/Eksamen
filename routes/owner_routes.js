const router = require('express').Router();

const controller = require('../controller/owner_controller');

router.post('/delete/:owner', controller.remove_owner);

module.exports = router;
