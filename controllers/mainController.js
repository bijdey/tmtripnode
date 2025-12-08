  // controllers/maincontroller.js

const baseView = "../views/pages";

// Helper function
const renderPage = (res, view, title) => {
    return res.status(200).render(`${baseView}/${view}.ejs`, { title });
};



exports.index = (req, res) => {
    return renderPage(res, "index", "Home — TMTrip");
};

exports.about = (req, res) => {
    return renderPage(res, "about-us", "About Us — TMTrip");
};

exports.contact = (req, res) => {
    return renderPage(res, "contact-us", "Contact Us — TMTrip");
};

exports.products = (req, res) => {
    return renderPage(res, "products", "Products — TMTrip");
};

exports.productDetails = (req, res) => {
    return renderPage(res, "product-details", "Product Details — TMTrip");
};

exports.termCondition = (req, res) => {
    return renderPage(res, "tmtrip-term-condition", "TMTrip — Terms & Conditions");
};

exports.shippingReturns = (req, res) => {
    return renderPage(res, "tmtrip-shipping-returns-policy", "TMTrip — Shipping & Returns Policy");
};

exports.privacyPolicy = (req, res) => {
    return renderPage(res, "tmtrip-privacy-policy", "TMTrip — Privacy Policy");
};

exports.archiveSalePolicy = (req, res) => {
    return renderPage(res, "tmtrip-archive-sale-policy", "TMTrip — Archive Sale Policy");
};
