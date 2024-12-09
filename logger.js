const fs = require("fs");

const logMessage = (message) => {
    fs.appendFile("log.txt", message + "\n", (error) => {
        if (error) {
            console.error(error);
            return;
        }
    });
};

module.exports = logMessage;
