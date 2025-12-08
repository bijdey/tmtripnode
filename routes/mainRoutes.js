// routes/mainroutes.js
const express = require("express");
const router = express.Router();

const {
    index,
    flights,
    travelloan,
    products,
    productDetails,
    termCondition,
    privacyPolicy,
} = require("../controllers/mainController");

// TMTrip Pages
router.get("/", index);
router.get("/flights", flights);
router.get("/travelloan", travelloan);

router.get("/products", products);
router.get("/product-details", productDetails);

router.get("/tmtrip-term-condition", termCondition);

router.get("/tmtrip-privacy-policy", privacyPolicy);


// 404
router.use((req, res) => res.redirect("/error_404"));

module.exports = router;
