const User = require('./model');
const { handleError } = require('../errorHandler');
const bcrypt = require('bcrypt');
const { config } = require('nodemon');
const crypto = require('crypto');
const  transporter  = require('../mailTransporter');

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
                role: role
            });

            res.status(200).json({ user, status: "SUCCESS" });
        }
    } catch (error) {
        handleError(error, res);
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
            where:
                { user_id: ID }
        })
        res.status(200).json({ updateUser, message: "Details has been updated successfully" });
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

//Generate and send otp
const sendOTP = async (req, res) => {
    const { user_Email } = req.body;

    try {
        const user = await User.findOne({ where: { user_Email } });
        if (!user) {
            return res
                .status(404)
                .send({ message: "User not found", status: "FAILED" });
        }
        res.send(user);
        //Genrate OTP and set expiration time
        const otp = crypto.randomInt(100000, 999999).toString();
        const otpExpiration = new Date(Date.now() + 15 * 60 * 1000);//15 min from now

        user.user_OTP = otp;
        user.OTP_Expiration = otpExpiration;
        await user.save();

        //Send OTP via email
        const mailOptions = {
            from: config.MAILUSER,
            to: user.email,
            subject: "Password reset OTP",
            text: `Your OTP for passward reset is :${otp}`,
        };
        await transporter.sendMail(mailOptions);
        res.send({ message: "OTP sent to yuor email for reset password", status: "Success" });

    } catch (error) {
        handleError(error, res);
    }
}

module.exports = {
    registerUser,
    getallUser,
    getUserbyID,
    updateUser,
    deleteUser,
    sendOTP
};