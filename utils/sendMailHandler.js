let nodemailer = require('nodemailer')
const transporter = nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    secure: false, // Use true for port 465, false for port 587
    auth: {
        user: "4941fe23725944",
        pass: "f669a024964403",
    },
});
module.exports = {
    sendMail: async function (to, url) {
        await transporter.sendMail({
            from: '"admin@" <admin@nnptud.com>',
            to: to,
            subject: "mail reset passwrod",
            text: "lick vo day de doi passs", // Plain-text version of the message
            html: "lick vo <a href=" + url + ">day</a> de doi passs", // HTML version of the message
        });
    },
    sendPasswordMail: async function (to, password) {
        await transporter.sendMail({
            from: '"admin@" <admin@nnptud.com>',
            to: to,
            subject: "Thông tin tài khoản truy cập hệ thống",
            text: "Mật khẩu đăng nhập của bạn là: " + password,
            html: "Mật khẩu đăng nhập của bạn là: <b>" + password + "</b>",
        });
    }
}