// controllers/contactusController.js

const contactView = "../views/pages";

// Helper function to render pages
const renderPage = (res, view, title) => {
    return res.status(200).render(`${contactView}/${view}.ejs`, { title });
};

// Try-catch wrapper for the error handling
const safeHandler = (fn) => {
    return (req, res, next) => {
        try {
            fn(req, res, next);
        } catch (error) {
            console.error("Controller Error:", error);
            
        }
    };
};

// Controllers


exports.contactus = safeHandler((req, res) => {
    return renderPage(res, "contactus", "Contact Us");
});

