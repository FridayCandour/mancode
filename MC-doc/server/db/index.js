import { Schema, Exabase } from "exabase";

export const server = new Schema({
  tableName: "server",
  RCT: true,
  columns: {
    views: { type: Number },
  },
});

const post = new Schema({
  tableName: "post",
  RCT: true,
  columns: {
    title: { type: String, length: 100, unique: true },
    content: { type: String },
    stats: { type: String },
  },
});
export default post;

export const tracking = new Schema({
  tableName: "tracking",
  RCT: true,
  columns: {
    country: { type: String, nullable: true },
    posts: { RelationType: "MANY", target: "post" },
    ip: { type: String },
    meta_data: { type: JSON, nullable: true },
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

const db = new Exabase({ schemas: [post, tracking, server, user] });
await db.connect();
