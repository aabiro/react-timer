import { MongoClient } from "mongodb";

const connectionString = process.env.ATLAS_URI || "";

const client = new MongoClient(connectionString);

let conn;

const connectToDb = async () => {
  try {
    conn = await client.connect();
  } catch(e) {
    console.error(e);
  }
}

connectToDb();

let db = conn.db("countdown_timer_flutter");

export default db;