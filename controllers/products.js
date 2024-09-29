const Product = require('../model/product');
const Contact = require('../model/contact');

// Render the add product form
exports.getAddProduct = (req, res, next) => {
  res.render('add-product', {
    pageTitle: 'Add Product',
    path: '/admin/add-product',
    formsCSS: true,
    productCSS: true,
    activeAddProduct: true
  });
};

// Handle the submission of the add product form
exports.postAddProduct = (req, res, next) => {
  const product = new Product(req.body.title);
  product.save();
  res.redirect('/');
};

// Fetch and display all products
exports.getProducts = (req, res, next) => {
  Product.fetchAll(products => {
    res.render('shop', {
      prods: products,
      pageTitle: 'Shop',
      path: '/',
      hasProducts: products.length > 0,
      activeShop: true,
      productCSS: true
    });
  });
};

// Render the Contact Us page
exports.getContact = (req, res, next) => {
  res.render('contact', {
    pageTitle: 'Contact Us',
    path: '/contact',
    mainCSS: true,
    activeContact: true
  });
};

// Handle the submission of the Contact Us form
exports.postContact = (req, res, next) => {
  const contact = new Contact(req.body.name, req.body.email, req.body.phone, req.body.date, req.body.time);
  contact.save();
  res.redirect('/success'); // Redirect to success page after saving
};

// Render success message after contact form submission
exports.getSuccess = (req, res, next) => {
  res.render('success', {
    pageTitle: 'Success',
    path: '/success',
    mainCSS: true
  });
};
