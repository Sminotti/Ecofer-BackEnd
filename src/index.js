import app from './app.js'
import { config } from "dotenv";
import { PORT } from "../config.js";
config();

// inicializo server
app.listen(PORT);
console.log("server on port ", PORT);