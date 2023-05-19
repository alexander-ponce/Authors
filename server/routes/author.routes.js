const authorControl = require("../controllers/author.controller");

module.exports = (app) => {
    app.post("/api/authors/add", authorControl.createNewAuthor);
    app.get("/api/authors", authorControl.findAllAuthors);
    app.get("/api/authors/:id", authorControl.findOneSingleAuthor);
    app.delete("/api/authors/:id", authorControl.deleteAuthor);
    app.patch("/api/authors/edit/:id", authorControl.updateAuthor);
};

