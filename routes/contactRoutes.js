const express = require('express');
const contactController = require('../controllers/contact.controller');
const router = express.Router()



router.route('/bulkAdd')
    .post(contactController.addBulkContact)


router.route('/')
    .get(contactController.getContact)
    .post(contactController.createContact)

router.route('/:id')
    .patch(contactController.updateContact)
    .get(contactController.getAContact)
    .delete(contactController.deleteAContact)






module.exports = router;