const nodemailer = require("nodemailer");
require("dotenv").config();
const sendEmailController = (req, res) => {
  const { name, email, msg } = req.body;
  try {
    if (!name || !email || !msg) {
      return res.status(400).send({
        success: false,
        message: "Please provide all the required fields.."
      });
    }
    // console.log("Email: ", process.env.EMAIL);
    // console.log("Password: ", process.env.PASSWORD);  
    
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
      }
    });
    const mailOptions = {
      from: email,
      to: process.env.EMAIL,
      subject: `Portfolio Message from ${name}`,
      text: msg
    };
    transporter.sendMail(mailOptions);
    return res.status(200).send({
      success: true,
      message: "Your Message is sended successfully.."
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "send Email API Error ",
      error
    });
  }
};

module.exports = { sendEmailController };
