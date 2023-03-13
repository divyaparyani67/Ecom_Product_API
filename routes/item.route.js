//import statements
const express = require("express");
const product_controller = require("../controllers/item.controller");
const router = express.Router();

//simple get request
router.get('/test', product_controller.test)

// post route to create 
router.post('/create', product_controller.product_create);

//  get route to read 
router.get('/:id', product_controller.product_details);

// put route to update 
router.put('/:id/update', product_controller.product_update)

//delete route to delete
router.delete('/delete/:id', product_controller.product_delete);



module.exports = router;