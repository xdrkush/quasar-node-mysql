/*
 * Import Module
 ****************/ 
const express = require('express'),
    router = express.Router()

/*
 * Controller
 *************/ 
const articleController = require('./userController')

/*
 * Router
 ***********/

// Home
// router.route('/')
//     .get(homeController.get)

// Article
router.route('/article')
    .get(articleController.get)
    .post(articleController.post)
    .delete(articleController.deleteAll)

// Article ID
router.route('/article/:id')
    .delete(articleController.deleteOne)

// Contact
// router.route('/contact')
//     .get(contactController.get)

/***********
 * / Router
 */

 
// on export router pour le récupérer dans ../server.js
module.exports = router;