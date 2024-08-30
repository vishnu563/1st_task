const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json({ limit: "25mb" }));
app.use(express.urlencoded({ limit: "25mb" }));

function sendMail(validEmails, subject, content) {
    return new Promise((resolve, reject) => {
        var transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: "vishnuprasanth050603@gmail.com",
                pass: "raylvfelhwygrpfg" // Corrected field
            }
        });

        const mail_configs = {
            from: "vishnuprasanth050603@gmail.com",
            to: validEmails,
            subject: subject,
            text: content,
        };

        transporter.sendMail(mail_configs, function (error, info) {
            if (error) {
                console.log(error);
                return reject({ message: `An error occurred` });
            }

            return resolve({ message: "Email sent successfully" });
        });
    });
}

app.post("/send-email", (req, res) => { // Changed to POST and route updated
    const { validEmails, subject,content } = req.body;

    sendMail(validEmails, subject, content)
        .then((response) => res.send(response.content))
        .catch((error) => res.status(500).send(error.content));
});

app.listen(port, () => {
    console.log(`Listening on http://localhost:${port}`);
});
