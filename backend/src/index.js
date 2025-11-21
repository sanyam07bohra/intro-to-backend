import dotenv from "dotenv";
import connectdb from "./config/database.js";
import app from "./app";

dotenv.config({
    path: './.env'
});

const startserver =  async () => {
    try {
       await connectdb();

       app.on("error", (error) => {
        console.log("error".error);
        throw error;
       });
    app.listen(process.env.PORT || 8000 , () => {
        console.log(`the port on which this server is running is : ${process.env.PORT}`);
    })
    } catch (error) {

        console.log("there is a problem in running of the database ", error);
        
    }

    startserver();
}

