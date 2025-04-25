const express = require("express");
const {getAllUsers, getSingleUserById, deleteUser, updateUserData, createNewUser, getSubscriptionDetailsById,} = require("../controllers/user-controller");
const {users} = require("../Data folder/users.json");
const {UserModel, BookModel} = require("../models/index");

const router = express.Router();

router.get("/", getAllUsers);
/*
* Route: /users
* Method: GET
* Description: Get all user information
* Access: Public
* Parameters: None
*/
// router.get("/", (req, res) => {
//   res.status(200).json({
//     success: true,
//     data: users,
//   });
// });

router.get('/:id',getSingleUserById);

/*
* Route: /users/:id
* Method: GET
* Description: Get single user by their id
* Access: Public
* Parameters: id
*/
// router.get('/:id',(req,res) => {
//     const {id} = req.params;
//     const user = users.find((elem) => elem.id === id);
//     if(!user){
//         return res.status(404).json({
//             success:false,
//             message:"User Doesn't Exist",   
//         });
//     }
//     return res.status(200).json({
//         success:true,
//         message:"User Found",
//         data:user,
//     });
// });

router.post("/",createNewUser);

router.put("/:id",updateUserData);

/*
* Route: /users
* Method: POST
* Description: Creating a new user
* Access: Public
* Parameters: None
*/
// router.post("/",(req,res) => {
//     const {id, name, surname, email, subscriptionType, subscriptionDate} = req.body;
//     const user = users.find((elem => elem.id === id));
//     if(user){
//         return res.status(404).json({
//             success:false,
//             message:"User already exist with this ID",
//         });
//     }
//     users.push({
//         id,
//         name,
//         surname,
//         email,
//         subscriptionType,
//         subscriptionDate,
//     });
//     return res.status(201).json({
//         success:true,
//         message:"User Added Successfully",
//         data: users,
//     });
// });

// router.put("/:id",updateUserData);

/*
* Route: /users/:id
* Method: PUT
* Description: Updating a user by their id
* Access: Public
* Parameters:ID
*/
// router.put("/:id",(req,res) => {
//     const {id} = req.params;
//     const {data} = req.body;
//     const user = users.find((elem) => elem.id === id);
//     if(!user){
//         return res.status(404).json({
//             success:false,
//             message:"User Doesn't Exist !!",   
//         });
//     }
//     const updateUserDetails = users.map((elem) => {
//         if(elem.id==id){
//             return{
//                 ...elem,
//                 ...data,
//             };
//         }
//         return elem;
//     });
//     return res.status(200).json({
//         success:true,
//         message:"User Updated Successfully",
//         data:updateUserDetails,
//     });
// });

router.delete("/:id",deleteUser);

/*
* Route: /users/:id
* Method: DELETE
* Description: Deleting a user by their id
* Access: Public
* Parameters:ID
*/
// router.delete("/:id",(req,res) => {
//     const {id} = req.params;
//     const user = users.find((elem) => elem.id === id);
//     if(!user){
//         return res.status(404).json({
//             success:false,
//             message:"User Doesn't Exist",   
//         });
//     }
//     const index = users.indexOf(user);
//     users.splice(index,1);
//     return res.status(200).json({success:true, message:"User Deleted Successfully", data:users});
// });

router.get("/subscription-details/:id", getSubscriptionDetailsById,);

/*
* Route: /users/subscription-details/:id
* Method: GET
* Description: Get all user subscription details
* Access: Public
* Parameters:ID
*/
// router.get("/subscription-details/:id",(req,res) => {
//     const {id} = req.params;
//     const user = users.find((each) => each.id === id);
//     if(!user){
//         return res.status(404).json({
//             success:false,
//             message:"User with the ID didn't exist",
//         });
//     }
//     const getDateInDays = (data = "") => {
//         let date;
//         if(data === "") {
//             date = new Date();
//         } else {
//             date = new Date(data);
//         }
//         let days = Math.floor(date / (1000 * 60 * 60 * 24));
//         return days;
//     };
//     const subscriptionType = (date) => {
//         if(user.subscriptionType == "Basic"){
//             date = date + 90;
//         } else if(user.subscriptionType == "Standard"){
//             date = date + 180;
//         } else if(user.subscriptionType == "Premium"){
//             date = date + 365;
//         }
//         return date;
//     };
//     // Jan 1 1970 UTC
//     let returnDate = getDateInDays(user.returnDate);
//     let currentDate = getDateInDays();
//     let subscriptionDate = getDateInDays(user.subscriptionDate);
//     let subscriptionExpiration = subscriptionType(subscriptionDate);
//     const data = {
//         ...user,
//         isSubscriptionExpired : subscriptionExpiration < currentDate,
//         daysLeftForExpiration : subscriptionExpiration <= currentDate ? 0 : subscriptionExpiration - currentDate,
//         fine: returnDate < currentDate ? subscriptionExpiration <= currentDate ? 100 : 50 : 0,
//     };
//     return res.status(200).json({
//         success: true,
//         message:"Subscription Details for the User:",
//         data,
//     });
// });
module.exports = router;