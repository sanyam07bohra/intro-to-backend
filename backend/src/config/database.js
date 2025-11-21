import mongoos from "mongoos";

const connectdb = async() => {
    try {
        const connectioInstance = await mongoos.connect (
            `${process.env.mongodb_URI}`
        )

        console.log(`\n my database mongoodb is connected !!! 
             ${connectioInstance.connection.host}`);
    } catch (error) {
    
        console.log("mongoo db connection failed ",error);
        process.exit(1);

    }

}

export default connectdb;