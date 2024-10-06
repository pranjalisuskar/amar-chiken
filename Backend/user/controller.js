const User = require("./model");
const { handleError } = require("../errorHandler");
const bcrypt = require("bcrypt");
const { config } = require("nodemon");
const crypto = require("crypto");
// const transporter = require("../mailTransporter");
// const { error } = require("error");
const nodemailer = require("nodemailer");
const jwt = require('jsonwebtoken');
// require('dotenv').config(); 
// // const { config } = require("process");

const JWT_SECRET = config.JWT_SECRET || "your_jwt_secret_key"

// const registerUser = async (req, res) => {
//   const {
//     user_Name,
//     user_Email,
//     user_Password,
//     user_phoneno,
//     user_latitude,
//     user_longitude,
//     user_pincode,
//     user_status,
//     user_OTP,
//     OTP_Expiration,
//     is_OTP_Verified,
//     role,
//   } = req.body;
//   try {
//     if (user_Password) {
//       const hashedpassword = await bcrypt.hash(user_Password, 10);
//       const user = await User.create({
//         user_Name: user_Name,
//         user_Email: user_Email,
//         user_Password: hashedpassword,
//         user_phoneno: user_phoneno,
//         user_latitude: user_latitude,
//         user_longitude: user_longitude,
//         user_pincode: user_pincode,
//         user_status: user_status,
//         user_OTP: user_OTP,
//         OTP_Expiration: OTP_Expiration,
//         is_OTP_Verified: is_OTP_Verified,
//         role: role,
//       });

//       res.status(200).json({ user, status: "SUCCESS" });
//     }
//   } catch (error) {
//     handleError(error, res);
//   }
// };


const registerUser = async (req, res) => {
  const {
    user_Name,
    user_Email,
    user_Password,
    user_phoneno,
    user_latitude,
    user_longitude,
    user_pincode,
    user_status,
    user_OTP,
    OTP_Expiration,
    is_OTP_Verified,
    role,
  } = req.body;

  try {
    if (user_Password) {
      const hashedpassword = await bcrypt.hash(user_Password, 10);
      const user = await User.create({
        user_Name: user_Name,
        user_Email: user_Email,
        user_Password: hashedpassword,
        user_phoneno: user_phoneno,
        user_latitude: user_latitude,
        user_longitude: user_longitude,
        user_pincode: user_pincode,
        user_status: user_status,
        user_OTP: user_OTP,
        OTP_Expiration: OTP_Expiration,
        is_OTP_Verified: is_OTP_Verified,
        role: role,
      });

      res.status(200).json({ user, status: "SUCCESS" });
    }
  } catch (error) {
    console.error(error); // Log the error to the console for debugging
    res.status(500).json({ message: "Internal server error", error });
  }
};


const getallUser = async (req, res) => {
  try {
    const user = await User.findAll({});
    if (!user) {
      return res
        .status(401)
        .send({ message: "User does not exit", status: "FAILED" });
    }
    res.send(user);
  } catch (error) {
    handleError(error, res);
  }
};

const getUserbyID = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (!user) {
      return res
        .status(401)
        .send({ message: "User does not exit", status: "FAILED" });
    }
    res.send(user);
  } catch (error) {
    handleError(error, res);
  }
};

const updateUser = async (req, res) => {
  const ID = req.params.id;
  const data = req.body;
  try {
    const user = await User.findByPk(ID);
    if (!user) {
      return res
        .status(401)
        .send({ message: "User does not exit", status: "FAILED" });
    }
    const updatedUser = await User.update(data, {
      where: { user_id: ID },
    });
    res
      .status(200)
      .json({ updateUser, message: "Details has been updated successfully" });
  } catch (error) {
    handleError(error, res);
  }
};

const deleteUser = async (req, res) => {
  const ID = req.params.id;
  try {
    const user = await User.findByPk(ID);
    if (!user) {
      res.send("User not Found");
    }
    const deletedUser = await User.destroy({ where: { user_id: ID } });
    res.status(200).json({ deleteUser, message: "User has been deleted." });
  } catch (error) {
    handleError(error, res);
  }
};

const sendOTP = async (req, res) => {
  const { user_Email } = req.body;
  try {
    const user = await User.findOne({ where: { user_Email } });
    if (!user) {
      return res
        .status(401)
        .send({ message: "User does not exit", status: "FAILED" });
    }

    // Generate OTP and set expiration time
    const otp = crypto.randomInt(100000, 999999).toString();
    const otpExpiration = new Date(Date.now() + 15 * 60 * 1000); // 15 minutes from now

    user.user_OTP = otp;
    user.OTP_Expiration = otpExpiration;
    await user.save();

    const transporter = nodemailer.createTransport({
      host: "smtp.ethereal.email",
      port: 587,
      secure: false, // true for port 465, false for other ports
      auth: {
        user: "maddison53@ethereal.email",
        pass: "jn7jnAPss4f63QBp6D",
      },
    });

    const message = {
      from: '"Amar Chiken " <amarchiken@ethereal.email>', // sender address
      to: "bar@example.com, baz@example.com", // list of receivers
      subject: "OTP to reset the password", // Subject line
      text: `OTP to reset the password is  ${otp}`, // plain text body
    };

    transporter.sendMail(message).then((info) => {
      return res.status(201).json({
        message: "You should recieve a mail to reset the password",
        info: info.messageId,
        preview: nodemailer.getTestMessageUrl(info),
      });
    });
  } catch (error) {
    handleError(error, res);
  }
};

// Verify OTP
const verifyOTP = async (req, res) => {
  const { user_Email, user_OTP } = req.body;
  try {
    const user = await User.findOne({ where: { user_Email } });
    console.log(user);
    if (!user) {
      return res
        .status(400)
        .send({ message: "User not found", status: "FAILED" });
    }

    if (user.user_OTP !== user_OTP) {
      return res.status(400).send({ message: "OTP expired", status: "FAILED" });
    }

    if (user.OTP_Expiration < new Date()) {
      return res
        .status(400)
        .send({ message: "OTP has expired", status: "FAILED" });
    }

    res.send({ message: "OTP verified successfully", status: "SUCCESS" });
  } catch (error) {
    res.json({ message: "Error verifiying the OTP" });
    handleError(error, res);
  }
};


const userLogin = async (req, res) => {
  const { user_Email, user_Password } = req.body;

  try {
      // Check if email and password are provided
      if (!user_Email || !user_Password) {
          return res.status(400).json({ message: "Email and password are required" });
      }

      // Check if the user exists in the database
      const user = await User.findOne({
          where: { user_Email, isDeleted: false },
      });

      if (!user) {
          return res.status(404).json({ message: "User not found" });
      }

      // Compare the provided password with the stored hashed password
      const isMatch = await bcrypt.compare(user_Password, user.user_Password);
      if (!isMatch) {
          return res.status(401).json({ message: "Invalid password" });
      }

      // Hardcode the JWT_SECRET here
      const JWT_SECRET = "your_jwt_secret_key"; // Replace with your actual secret key

      // Generate JWT token with user ID and email
      const token = jwt.sign(
          { user_ID: user.user_ID, user_Email: user.user_Email },
          JWT_SECRET,
          { expiresIn: "1h" } // Set expiration time for the token
      );

      // Respond with success message, JWT token, and user details
      res.status(200).json({
          message: "Login successful",
          token,
          user: {
              user_ID: user.user_ID,
              user_Email: user.user_Email,
              user_name: user.user_name, // Assuming user_name is a valid field in your model
              user_pincode: user.user_pincode,
              user_phoneno: user.user_phoneno,
              user_status: user.user_status,
              user_OTP: user.user_OTP,
              OTP_Expiration: user.OTP_Expiration,
              role: user.role,
              is_OTP_Verified: user.is_OTP_Verified,
          },
      });
  } catch (error) {
      console.error("Error during login:", error);
      res.status(500).json({ message: "Internal server error", error: error.message });
  }
};

module.exports = {
  registerUser,
  getallUser,
  getUserbyID,
  updateUser,
  deleteUser,
  sendOTP,
  verifyOTP,
  userLogin,
};
