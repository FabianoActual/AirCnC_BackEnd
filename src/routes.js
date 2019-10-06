//importacoes
const express = require('express');
const multer = require('multer');
const uploadConfig = require('../config/upload')

const SessionController = require('./controllers/SessionController')
const SpotController = require('./controllers/SpotController')
const DashboardController = require('./controllers/DashboardController')
const BookingController = require('./controllers/BookingController')

// inst objetos
const routes = express.Router();
const upload = multer(uploadConfig);



//rotas 
routes.post('/sessions', SessionController.store);

routes.post('/spot', upload.single('thumbnail') , SpotController.store);
routes.get('/spots',SpotController.index)

routes.get('/dashboard',DashboardController.show)

routes.post('/spots/:spot_id/bookings', BookingController.store )



module.exports = routes;