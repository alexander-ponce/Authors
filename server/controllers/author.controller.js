const Author = require('../models/author.model');    /* this is new */

module.exports = {

    // CRUD all in one

    // create
    createNewAuthor: (req, res) => {
    Author.create(req.body)
        .then(newAuthor => res.json(newAuthor))
        .catch(err => res.status(400).json(err));
    },

     // Read (all)
    findAllAuthors: (req, res) => {
        Author.find()
        .then(allAuthors => res.json(allAuthors))
        .catch(err => res.json(err));
    },

    // Read (one)
    findOneSingleAuthor: (req, res) => {
        Author.findById(req.params.id)
        .then(oneAuthor => res.json(oneAuthor))
        .catch(err => res.json(err))
    },

    // update, new is true is going to give the updated value/document, run validators as true means that before we update it will go into our model and say okay, if its in our database we know it passed validations but we want to make sure they're not updating to something that doesn't pass validations, this is having it run validators again. if they are valid then. works with put and patch
    updateAuthor: (req, res) => {
        Author.findByIdAndUpdate(req.params.id, req.body, {new: true, runValidators: true})
        .then(updatedAuthor => res.json(updatedAuthor))
        .catch(err => res.status(400).json(err))
    },

    // updateAuthor: (req, res) => {
    //     const AuthorId = req.params.id;
    //     const open = req.body.open;
      
    //     Author.findByIdAndUpdate(AuthorId, { open: open })
    //       .then(updatedAuthor => {
    //         res.json(updatedAuthor);
    //       })
    //       .catch(error => {
    //         res.status(500).json({ error: error.message });
    //       });
    //   },

    // delete
    deleteAuthor: (req, res) => {
        Author.findByIdAndDelete(req.params.id)
        .then(result => res.json(result))
        .catch(err => res.json(err))
    },

    // Random
    showRandomAuthor: (req, res) => {
        Author.aggregate([{ $sample: { size: 1 }}])
        .then(randomAuthor => res.json(randomAuthor[0]))
        .catch(err => res.json(err))
    } 
}
