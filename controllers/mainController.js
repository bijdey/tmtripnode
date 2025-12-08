  // controllers/maincontroller.js

const baseView = "../views/pages";

// Helper function
const renderPage = (res, view, title) => {
    return res.status(200).render(`${baseView}/${view}.ejs`, { title });
};



exports.index = (req, res) => {
    return renderPage(res, "index", "Home — TMTrip");
};

exports.flights = (req, res) => {
    return renderPage(res, "flights", "Book-Flights");
};

exports.travelloan = (req, res) => {
    return renderPage(res, "travelloan", "Travelloan");
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



exports.privacyPolicy = (req, res) => {
    return renderPage(res, "tmtrip-privacy-policy", "TMTrip — Privacy Policy");
};


