// JavaScript Assincrono
// await async
// Fullfilled
import { MongoClient } from "mongodb";

const URI =
  "mongodb+srv://Travas:0n7mbrOChove@cluster0.v1qra.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
/*
mongodb+srv://Travas:0n7mbrOChove@cluster0.ljtvn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
*/

const client = new MongoClient(URI);

export const db = client.db("Travas");
// const songCollection = await db.collection("songs").find({}).toArray();

// console.log(songCollection);
