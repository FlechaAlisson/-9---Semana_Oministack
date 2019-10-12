const express = require('express');
const multer = require('multer');
const uploadConfig = require('./config/upload');
const SessionController = require('./controllers/SessionController');
const SpotController = require('./controllers/SpotController');
const DashboardController = require('./controllers/DashboardController');
const BookingController = require('./controllers/BookingController');


const routes = express.Router();
const upload = multer(uploadConfig);


//req.query = acessar os querys params - filtros
//req.params =  acessar os route params  - adicao ou delete
//req.body = acessar o body da request
routes.post('/sessions',SessionController.store); //Qual rota vamos usar

routes.post('/spots',upload.single('thumbnail'), SpotController.store);
routes.get('/spots', SpotController.index);
routes.get('/dashboard', DashboardController.show);
routes.post('/spots/:spot_id/bookings', BookingController.store);


module.exports = routes;