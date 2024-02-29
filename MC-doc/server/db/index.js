import { Schema, Exabase } from "exabase";

export const server = new Schema({
  tableName: "server",
  RCT: true,
  columns: {
    views: { type: number },
  },
});

export const post = new Schema({
  tableName: "post",
  RCT: true,
  columns: {
    title: { type: String, length: 100, unique: true },
    content: { type: String },
    stats: { type: String },
  },
});

export const tracking = new Schema({
  tableName: "tracking",
  RCT: true,
  columns: {
    country: { type: String },
    posts: { RelationType: "MANY", target: "post" },
    meta_data: { type: String },
  },
});

export const user = new Schema({
  tableName: "user",
  RCT: true,
  columns: {
    name: { type: String },
    country: { type: String },
    age: { type: Number },
    bio: { type: String },
    posts: { RelationType: "MANY", target: "post" },
  },
});

const db = new Exabase({ schemas: [post] });
await db.connect();
