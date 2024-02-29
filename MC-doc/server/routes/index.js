import { SafeToken } from "safetoken";
import { tracking, user } from "../db/index.js";

/** @typedef {import('jetpath').AppCTX} AppCTX */

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
    const id = auth.verifyRefreshToken(pub_cred);
    if (id) {
      user = (await tracking.query.search({ id }))[0];
      user.tracking = true;
      ctx.set("x-pub-uiedbook-token", id);
    }
  }
  if (!pub_cred && !cred) {
    const id = auth.newRefreshToken(ctx.request.client.remoteAddress);
    user = await tracking.query.save({ ip });
    ctx.set("x-pub-uiedbook-token", id);
  }
  console.log({ user });
  ctx.app.person = user;
}
