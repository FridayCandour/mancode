import { Schema, Exabase } from "exabase";
import post from "../MC-forum/db.js";

export const server = new Schema({
  tableName: "server",
  RCT: true,
  columns: {
    views: { type: Number },
  },
});

export const tracking = new Schema({
  tableName: "tracking",
  RCT: true,
  columns: {
    country: { type: String, nullable: true },
    posts: { RelationType: "MANY", target: "post", type: Schema },
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
    posts: { RelationType: "MANY", target: "post", type: Schema },
  },
});

const db = new Exabase({
  schemas: [post, tracking, server, user],
  name: "A mancode db",
});
await db.connect();
