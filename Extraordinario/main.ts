import mongoose from "npm:mongoose@7.6.3"
import {load} from "https://deno.land/std@0.204.0/dotenv/mod.ts"

import express, { Request, Response} from "npm:express@4.18.2"


const env = await load();

const URL_MONGO = env.MONGO_URL || Deno.env.get("MONGO_URL")

if(!URL_MONGO){
  console.error("Debes definir la variable URL_MONGO")
  Deno.exit(1)
}
console.info(URL_MONGO)
try {

  await mongoose.connect(URL_MONGO)
  console.info("Conexion buena")

  const api1  = express()
  api1.use(express.json())
  const port = 3000;
  api1.listen(port, () => {
    console.log("Puerto listo");
  });
} catch (e) {
  console.error("No se ha podido conectar")
}

function getCharFromDB(id: number) {
  throw new Error("Function not implemented.");
}
