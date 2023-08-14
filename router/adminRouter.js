const express = require('express');
const userControl = require('../controls/adminControl')

const router = express.Router();



router.post('/expense-data', userControl.postAdminData);


router.get('/get-data', userControl.getAdminData)

router.get('/raat-data/:id', userControl.deleteAdminData)

// get data for editing
router.get('/edit-data/:id', userControl.getEditData)


router.post('/updated-data', userControl.updatedData)


module.exports = router;