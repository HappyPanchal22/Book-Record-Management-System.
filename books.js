const express = require("express");
const {getAllBooks,
        getSingleBookById,
        getAllIssuedBooks, 
        addNewBook,
        updatBookById} = require("../controllers/book-controller");
const {books} = require("../Data folder/books.json");
const {users} = require("../Data folder/users.json");
const router = express.Router();

const {UserModel, BookModel} = require("../models/index");

/*
* Route: /
* Method: GET
* Description: Get all books information
* Access: Public
* Parameters: None
*/
//router.get("/", (req,res) => {
  //  res.status(200).json({
    //    success:true, message :"Got all the books info", data:books,
    //});
//});
router.get("/", getAllBooks);           //This is with respect to database  

/* Route: /:id
* Method: GET
* Description: Getting a book by id
* Access: Public
* Parameters: id
*/
// router.get("/:id",(req,res) => {
//     const {id} = req.params;
//     const book = books.find((each) => each.id === id);
//     if(!book){
//         return res.status(404).json({
//             success:false,
//             message:"book not found",
//         });
//     }
//     return res.status(200).json({
//         success:true,
//         message:"Book Found with its ID",
//         data:book,
//     });
// });

router.get("/:id",getSingleBookById);

/*
* Route: /books/issued
* Method: GET
* Description: Get all issued books
* Access: Public
* Parameters: None
*/
// router.get("/issued/by-user",(req,res) => {
//     const usersWithTheIssuedBook = users.filter((each) =>{
//         if(each.issuedBook) return each;
//     });
//     const issuedBooks = [];
//     usersWithTheIssuedBook.forEach((each) => {
//         const book = books.find((book) => (book.id == each.issuedBook));
//         book.issuedBy = each.name;
//         book.issuedDate = each.issuedDate;
//         book.returnDate = each.returnDate;
//         issuedBooks.push(book);
//     });
//     if(issuedBooks.length === 0){
//         return res.status(404).json({success:false, message:"No Book have been Issued Yet...",});
//     }
//     return res.status(200).json({
//         success:"true",
//         message:"Users with the Issued Book...",
//         data:issuedBooks,});
// });
router.get("/issued/by-user",getAllIssuedBooks);
router.post("/", addNewBook);


/*
* Route: /
* Method: POST
* Description: Adding a new book
* Access: Public
* Parameters: None
* Data : id,name,genre,price, publisher, author
*/
// router.post("/", (req,res) => {
//     const {data} = req.body;
//     if(!data) {
//         return res.status(404).json({
//             success:false,
//             message:"No Data to add a book",
//         });
//     }
//     const book = books.find((each => each.id === data.id));
//     if(book){
//         return res.status(404).json({
//             success:false,
//             message:"Id already exists!!",
//         });
//     }
//     const allBooks = {...books,data};
//     return res.status(200).json({
//         success:true,
//         message: "Added Book Successfully",
//         data: allBooks,
//     })
// });

router.put("/updateBook/:id", updatBookById); 

/*
* Route: /
* Method: PUT
* Description: Updating the book by it id
* Access: Public
* Parameters: ID
* Data : id,name,genre,price, publisher, author
*/
// router.put("/updatebook/:id", (req,res) => {
//     const {id} = req.params;
//     const {data} = req.body;
//     const book = books.find((each) => each.id === id);
//     if(!book) {
//         return res.status(404).json({
//             success:false,
//             message:"Book not found with this ID",
//         });
//     }

//     const updateData = books.map((each) => {
//         if(each.id === id) {
//             return {...each, ...data};
//         }
//         return each;
//     });
//     return res.status(200).json({
//         success:true,
//         message:"Updated a book by their id",
//         data: updateData,
//     });
// });

module.exports = router;