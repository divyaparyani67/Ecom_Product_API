const Product = require("../models/item.model");

//Simple version, without validation or sanitation
exports.test = function (req, res) {
  res.send("Greetings from the Test controller!");
};

//post request to create new product
exports.product_create = async function (req, res) {
  try {
    const product = await new Product(req.body).save();
    res.status(201).send("Product created successfully");
  } catch (err) {
    console.log(err);
    return res.status(500).send(err);
  }
};

//get request to get the id 
exports.product_details = function (req, res) {
  const id  = req.params.id;
  const product = Product.findById(id)
 .then(product => {
  if (!product) 
    res.status(200).send(product);
    else res.send(product)
  })
  .catch(err => {
    console.log(err)
    res.status(404).send("Product Not found from id " + id);
  });
  }


//update request for product
exports.product_update = function (req, res) {
  Product.findByIdAndUpdate(
    req.params.id,
    { $set: req.body },
    function (err, result) {
      if (err) {
        console.log(err);
      }
      console.log("Product: " + result);
      res.send("Product updated successfully");
    }
  );
};

//delete request for product
exports.product_delete = function (req, res) {
  Product.findByIdAndRemove(req.params.id, { $set: req.body }),
    res.send("Deleted Successfully");
};
exports.product_delete = function (req, res) {
  const id  = req.params.id;
  const product = Product.findByIdAndRemove(id)
 .then(product => {
  if (!product) 
    res.status(404).send("Not Deleted");
    else res.send("Deleted Successfully")
  })
  .catch(err => {
    console.log(err)
    res.status(500).send("Could not delete the product");
  });
  }