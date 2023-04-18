import * as dotenv from 'dotenv'
import { createPool } from 'mariadb';

dotenv.config();
const dbConfig = { 
	host: process.env.DB_HOST, 
	user: process.env.DB_USER,
	password: process.env.DB_PASS, 
	database: process.env.DB_NAME,
	connectionLimit: 5,
}

const pool = createPool(dbConfig);

const client = await pool.getConnection();

export { client }