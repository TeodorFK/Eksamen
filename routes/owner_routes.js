const router = require('express').Router();

const controller = require('../controller/owner_controller');

router.get('/owners', controller.owner_get)

router.post('/delete/:owner', controller.remove_owner);

module.exports = router;
