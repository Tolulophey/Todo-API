const express = require("express")
const app = express()
const port = 4000

//set up network
const mongoose = require("mongoose")
const connectionString = "mongodb://localhost:27017/bookapp"

app.use(express.json())

mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useFindAndModify: false
}, (err)=>{
    if (err){
        console.log(err)
    } else {
        console.log("database connection successful")
    }
})

//CREATE SCHEMA
const bookSchema = new mongoose.Schema({
    title: String,
    author: String,
    description: String,
    category: String,
    purchaseCount: Number,
    imageUrl: String,
    color: String,
    tags: Array
})
const Book = mongoose.model("Book", bookSchema)

//POST request to /books to create a new book
app.post("/books", (req, res)=>{
    //retrieve the new book details from the req body
    const book = req.body;
    Book.create({
        //create a new book and save to the database
        title: book.title,
        author: book.author,
        description: book.description,
        category: book.category,
        purchaseCount: book.purchaseCount,
        imageUrl: book.imageUrl,
        color: book.color,
        tags: book.tags
    }, (err, newBook)=>{
        // send response to the client
        if (err){
            return res.status(500).json({message: err.message})
        } else {
            return res.status(200).json({
                message: "new book created",
                newBook
            })
        }
    }) 
})


//GET request to /books to fetch all new book
app.get("/books", (req, res)=>{
    //we use model.find method to find multiple documents
    const books = Book.find({}, (err, books)=>{
        if (err){
            return res.status(500).json({message: err.message})
        } else {
            return res.status(200).json({
                message: "Books",
                books
            })
        }
    });     
})

//GET request to /books/:id  to fetch a single book
app.get("/books/:id", (req, res)=>{
    //we use model.findOne method to find single documents
    // const book = Book.findOne({_id: req.params.id}, (err, book)=>{
    //     if (err){
    //         return res.status(500).json({message: err.message})
    //     } else if(!book){
    //         return res.status(404).json({
    //             message: "Book not found"
    //         })
    //     }
    //     else {
    //         return res.status(200).json({
    //             message: "Book found",
    //             book
    //         })
    //     }
    // });  

    //OR

    //we use model.findById method to find single documents
    const book = Book.findById(req.params.id, (err, book)=>{
        if (err){
            return res.status(500).json({message: err.message})
        } else if(!book){
            return res.status(404).json({
                message: "Book not found"
            })
        }
        else {
            return res.status(200).json({
                message: "Book found",
                book
            })
        }
    });     
})

//PUT request to /books/:id  to update a single book
app.put("/books/:id", (req, res)=>{
    //we use model.findOneAndUpdate method to update single documents
    const book = Book.findOneAndUpdate({_id: req.params.id}, {
            title: req.body.title,
            // author: req.body.author,
            // description: req.body.description,
            category: req.body.category,
            // purchaseCount: req.body.purchaseCount,
            // imageUrl: req.body.imageUrl,
            // color: req.body.color,
            // tags: req.body.tags
        }, (err, book)=>{
            if (err){
                return res.status(500).json({message: err.message})
            } else if(!book){
                return res.status(404).json({
                    message: "Book not found"
                })
            }
            else {
                book.save((err,savedBook)=>{
                    if(err){
                        return res.status(400).json({message: err.message})
                    } else {
                        return res.status(200).json({
                            message: "Book updated successfully"
                        })
                    }
                })       
            }
        }); 

    //OR
    //we use model.findByIdAndUpdate method to update single documents
    // const book = Book.findByIdAndUpdate(req.params.id, {
    //         title: req.body.title,
    //         // author: req.body.author,
    //         // description: req.body.description,
    //         category: req.body.category,
    //         // purchaseCount: req.body.purchaseCount,
    //         // imageUrl: req.body.imageUrl,
    //         // color: req.body.color,
    //         // tags: req.body.tags
    //     }, (err, book)=>{
    //         if (err){
    //             return res.status(500).json({message: err.message})
    //         } else if(!book){
    //             return res.status(404).json({
    //                 message: "Book not found"
    //             })
    //         }
    //         else {
    //             book.save((err,savedBook)=>{
    //                 if(err){
    //                     return res.status(400).json({message: err.message})
    //                 } else {
    //                     return res.status(200).json({
    //                         message: "Book updated successfully"
    //                     })
    //                 }
    //             })       
    //         }
    //     });     
})

//DELETE request to /books/:id  to delete a single book
app.delete("/books/:id", (req, res)=>{
    //we use model.findOneDelete method to delete single documents
    //we use model.findOneRemove method to delete single documents
    //we use model.findByIdAndDelete method to delete single documents
    const book = Book.findByIdAndDelete({_id: req.params.id}, (err, book)=>{
            if (err){
                return res.status(500).json({message: err.message})
            } else if(!book){
                return res.status(404).json({
                    message: "Book not found"
                })
            }
            else {
                return res.status(200).json({
                            message: "Book deleted successfully"
                        })
                
            }
        }); 
})

app.listen(port, function(){
    console.log(`app listening on port ${port}`)
})