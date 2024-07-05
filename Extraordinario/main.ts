import mongoose from "npm:mongoose@7.6.3";
import { load } from "https://deno.land/std@0.204.0/dotenv/mod.ts";
import express, { Request, Response } from "npm:express@4.18.2";

async function main() {
  try {
    const env = await load();
    const URL_MONGO = env.MONGO_URL || Deno.env.get("MONGO_URL");

    if (!URL_MONGO) {
      throw new Error("Debes definir la variable URL_MONGO");
    }
    console.info(URL_MONGO);

    await mongoose.connect(URL_MONGO);
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
}