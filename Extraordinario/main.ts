import mongoose from "npm:mongoose@7.6.3";
import { load } from "https://deno.land/std@0.204.0/dotenv/mod.ts";
import express, { Request, Response } from "npm:express@4.18.2";

 

  try {
    const env = await load();
    const MONGO_URL = "mongodb+srv://rcbusd:315raqHkLSJHekZl@arquitecturaysistemas.qpexaci.mongodb.net/extraordianrio?retryWrites=true&w=majority&appName=ArquitecturaySistemas"

    if (!MONGO_URL) {
      throw new Error("Debes definir la variable URL_MONGO");
    }
    console.info(MONGO_URL);
    await mongoose.connect(MONGO_URL);
    console.info("Conexión exitosa a MongoDB");

    const api1 = express();
    api1.use(express.json());
    
    const port = 3000;
    api1.listen(port, () => {
      console.log(`Servidor escuchando en el puerto ${port}`);
    });
  } catch (error) {
    console.error("Error durante la conexión o configuración del servidor:", error);
  }