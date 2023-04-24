require("dotenv").config();
const app = require("./app");

const config = require("./app/config");
const mongoose = require('./app/databases/init.mongodb')

const { port, mongo_uri } = config.app;


async function startServer() {
    try {
        await mongoose.connect(mongo_uri);
        server = app.listen(port, () => {
            console.log(`Server start with port ${port}`);
        });
    } catch (error) {
        console.log("Cannot connect to the database!", error);
        process.exit();
    }
}
startServer();


