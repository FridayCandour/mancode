import { Schema, Exabase } from "exabase";

export const post = new Schema({
  tableName: "post",
  RCT: true,
  columns: {
    title: { type: String, length: 100, unique: true },
    content: { type: String },
  },
});

const db = new Exabase({ schemas: [post] });
db.connect();
