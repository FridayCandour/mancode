import { SafeToken } from "safetoken";
import { tracking, user } from "../db/index.js";

/// <reference types="" />

// auth
const auth = new SafeToken({ encryptionKey: "lol" });

/**
 * @param {AppCTX} ctx
 */
export function hook__ERROR(ctx, err) {
  ctx.code = 400;
  console.log(err);
  ctx.reply(String(err));
}

/**
 * @param {AppCTX} ctx
 */
export function hook__POST(ctx) {
  ctx.throw("Oh no!");
}
/**
 * @param {AppCTX} ctx
 */
export async function hook__PRE(ctx) {
  let user;
  const cred = ctx.get("x-uiedbook-token");
  const pub_cred = ctx.get("x-pub-uiedbook-token");
  if (cred) {
    const id = auth.verifyRefreshToken(cred);
    if (id) {
      user = await user.query.findOne(id);
    }
  }
  if (pub_cred) {
    const id = auth.verifyRefreshToken(cred);
    if (id) {
      user = await tracking.query.findOne(id);
      user.tracking = true;
    }
  }
  ctx.app.person = user;
}
