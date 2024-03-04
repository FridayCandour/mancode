import { Schema } from "exabase";
const post = new Schema({
  tableName: "post",
  RCT: true,
  columns: {
    title: { type: String, length: 100, unique: true },
    content: { type: String },
    stats: { type: String },
    ownerID: { type: String },
  },
});
export default post;
