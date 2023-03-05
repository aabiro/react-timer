import express from "express";
import db from "../db/conn.mjs";
import { ObjectId } from "mongodb";

const router = express.Router();

// Get a list of 50 countdowns
router.get("/users/:id", async (req, res) => {
  let query = { userId: req.params.id };
  let collection = await db.collection("countdowns");
  let results = await collection.find(query).limit(50).toArray();

  res.send(results).status(200);
});

// Fetches the latest countdowns
router.get("/latest", async (req, res) => {
  let collection = await db.collection("countdowns");
  let results = await collection
    .aggregate([
      { $project: { author: 1, title: 1, tags: 1, date: 1 } },
      { $sort: { date: -1 } },
      { $limit: 3 },
    ])
    .toArray();
  res.send(results).status(200);
});

// Get a single post
router.get("/:id", async (req, res) => {
  let collection = await db.collection("countdowns");
  let query = { _id: ObjectId(req.params.id) };
  let result = await collection.findOne(query);

  if (!result) res.send("Not found").status(404);
  else res.send(result).status(200);
});

// Add a new document to the collection
router.post("/users/:id", async (req, res) => {
  let collection = await db.collection("countdowns");
  let newDocument = req.body;

  let result = await collection.insertOne(newDocument);
  console.log(newDocument);

  res.send(newDocument).status(200);
});

// Update the post with a new comment
router.patch("/comment/:id", async (req, res) => {
  const query = { _id: ObjectId(req.params.id) };
  const updates = {
    $push: { comments: req.body },
  };

  let collection = await db.collection("countdowns");
  let result = await collection.updateOne(query, updates);

  res.send(result).status(200);
});

// Delete an entry
router.delete("/:id", async (req, res) => {
  const query = { id: req.params.id };
  const collection = db.collection("countdowns");
  let result = await collection.deleteOne(query);

  res.send(result).status(200);
});

export default router;
