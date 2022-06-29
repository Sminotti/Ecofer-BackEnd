import { createPool } from "mysql2";
import { promisify } from "util";


let pool = createPool({
  host: process.env.DB_HOST || "localhost",
  password: process.env.DB_PASSWORD || "",
  user: process.env.DB_USER || "root",
  port: process.env.DB_PORT || 3306,
  database: process.env.DB_NAME || "test",
  connectionLimit: 10,
});
pool.query = promisify(pool.query);
export default pool;

