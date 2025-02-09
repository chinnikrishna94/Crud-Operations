const express = require('express')
const router = express.Router()
const controller = require('../controllers/contactController')

router.post('/add',controller.create)
router.get('/all',controller.getContacts)
router.put('/update/:id',controller.update)
router.delete('/delete/:id',controller.del)

module.exports = router