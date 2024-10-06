const router = require('express').Router();
const userController = require("./controller");

router.post("/register",userController.registerUser);
router.get("/getuser",userController.getallUser);
router.get("/getuser/:id",userController.getUserbyID);
router.put("/updateUser/:id",userController.updateUser);
router.delete("/deleteUser/:id",userController.deleteUser);
router.post("/send-otp",userController.sendOTP);
router.post("/verify-otp",userController.verifyOTP);

// LOGIN API ROUTE //
router.post('/login',userController.userLogin);

module.exports=router;
