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

exports.forex = (req, res) => {
    return renderPage(res, "forex", "Forex");
};

exports.holidaypackages = (req, res) => {
    return renderPage(res, "holidaypackages", "Holiday Pakages"); 
};

exports.comingsoon = (req, res) => {
    return renderPage(res, "comingsoon", "Comingsoon"); 
};


exports.termCondition = (req, res) => {
    return renderPage(res, "tmtrip-term-condition", "TMTrip — Terms & Conditions");
};



exports.privacyPolicy = (req, res) => {
    return renderPage(res, "tmtrip-privacy-policy", "TMTrip — Privacy Policy");
};


