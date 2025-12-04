import { app } from "./app";
import { connectDB } from "./config/db";
import dotenv from "dotenv";

/*if (process.env.DEV_MODE === "production") {
  dotenv.config(); // Render / producción
} else {
  process.loadEnvFile(); // desarrollo local
}*/

dotenv.config();


const PORT = process.env.PORT || 4000;
const DEV_MODE = process.env.DEV_MODE;



const start = async () => {
  
  app.listen(PORT, () => {
    if (DEV_MODE === "development") {
      console.log(`Servidor corriendo en puerto http://localhost:${PORT}`);
    } else if (DEV_MODE === "production") {
      console.log(`Servidor HTTP corriendo en producción`);
    }
    

  connectDB();
});
};

start();
