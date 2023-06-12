import mongoose from "mongoose";
import colors from "colors";

const connetDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL);
    console.log(
      `Conneted to mongodb database ${conn.connection.host}`.bgMagenta.white
    );
  } catch (error) {
    console.log(`Error is Mongodb ${error}`.bgRed.white);
  }
};

export default connetDB;
