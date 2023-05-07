const express = require('express')
const { GetAdmin, InsertAdmin, UpdateAdmin, DeleteAdmin } = require('../Controller/admin_controller')
const route = express.Router()

route.get('/getadmin', GetAdmin)
route.post('/insert', InsertAdmin)
route.put('/update', UpdateAdmin)
route.delete('/delete', DeleteAdmin)

module.exports = route
