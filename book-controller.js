//const { json } = require("express");

const BookModel = require("../models/book-model");
const UserModel = require("../models/user-model");
//const getAllBooks = () => {};
exports.getAllBooks =  async(req,res) => {
    const books = await BookModel.find();
    if(books.length == 0){
        return res.status(404).json({
            success : false,
            message : "No Book Found",
        });
    }
    return res.status(200).json({
        success:true,
        data : books,
    });
};

exports.getSingleBookById = async(req,res) => {
    const {id} = req.params;
    const book = await BookModel.findById(id);
    if(!book){
        return res.status(404).json({
            success:false,
            message:"book not found",
        });
    }
    return res.status(200).json({
        success:true,
        message:"Book Found with its ID",
        data:book,
    });
};

exports.getAllIssuedBooks = async(req,res) => {
    const users = await UserModel.find({
        issuedBook :{$exists : true},
    }).populate("issuedBook");

    // Data Transfer Object of book

    const issuedBooks = users.map((each) => new IssuedBook(each));

    if(issuedBooks.length === 0){
        return res.status(404).json({success:false, message:"No Book have been Issued Yet...",});
    }
    return res.status(200).json({
        success:"true",
        message:"Users with the Issued Book...",
        data:issuedBooks,});
};

exports.addNewBook = async (req,res) => {
    const {data} = req.body;
    if(!data) {
        return res.status(404).json({
            success:false,
            message:"No Data to add a book",
        });
    }
    await BookModel.create(data);
    const allBooks = await BookModel.find();
 
    return res.status(201).json({
        success:true,
        message:"Book Added Successfully",
        data: allBooks,
    });
};

exports.updatBookById = async(req,res) => {
    const {id} = req.params;
    const {data} = req.body;
    const updatedBook = await BookModel.findOneAndUpdate({
        _id : id,
    },
    data,{
        new :true,
    }
);
    return res.status(200).json({
        success:true,
        message:"Updated a book by their id",
        data: updatedBook,
    });
};