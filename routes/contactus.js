const express = require('express');
const productsController = require('../controllers/products'); // Make sure the path is correct
const router = express.Router();
// Routes for contact
router.get('/contact', productsController.getContact); // Render Contact Us page
router.post('/contactus', productsController.postContact); // Handle Contact Us form submission
router.get('/success', productsController.getSuccess); // Render success message
module.exports = router;