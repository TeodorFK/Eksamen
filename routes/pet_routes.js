const router = require('express').Router();

const controller = require('../controller/pet_controller');

router.get('/pets',controller.pet_get)

router.post('/profile', controller.petAndOwner);

router.get(`/update/:pet`, controller.update_get);
router.post(`/update/:pet`, controller.update_post);

router.post('/update/:pet', controller.remove_pet);

router.post('/delete/:pet', controller.remove_pet);

module.exports = router;
