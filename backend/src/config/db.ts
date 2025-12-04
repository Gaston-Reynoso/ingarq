import mongoose from "mongoose";
import dotenv from "dotenv";

//process.loadEnvFile(); //Solo funciona en entornos de development
/*if (process.env.DEV_MODE === "production") {
  dotenv.config(); // Render / producción
} else {
  process.loadEnvFile(); // desarrollo local
}*/

dotenv.config();


const MONGO_URI = process.env.DEV_MODE === "production"
  ? process.env.MONGO_URI
  : "mongodb://localhost:27017/IngArq";

export const connectDB = async () => {
  try {
    if (!MONGO_URI){
      console.error("MONGO_URI no está definida en las variables de entorno");
    }
    if(MONGO_URI){
      await mongoose.connect(MONGO_URI);
  } 
    console.log("Conectado a MongoDB");
  }
  catch (error:any) {
    console.error("Error conectando a MongoDB:", error.menssage);
    process.exit(1);
  }
};
