import { MongoClient } from "mongodb";

const connectionString = process.env.ATLAS_URI || "";

const client = new MongoClient(connectionString);

let conn;

try {
  client.connect().then((connection) => {
    conn = connection;
  });
} catch(e) {
  console.error(e);
}

let db = conn.db("countdown_timer_flutter");

export default db;
