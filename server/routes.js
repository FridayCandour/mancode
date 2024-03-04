import { SafeToken } from "safetoken";
import { tracking, user } from "./db.js";

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
  let person;
  const cred = ctx.get("x-uiedbook-token");
  const pub_cred = ctx.get("x-pub-uiedbook-token");
  if (cred) {
    const id = auth.verifyRefreshToken(cred);
    if (id) {
      person = await user.query.findOne(id);
    }
  }
  if (pub_cred) {
    const ip = auth.verifyRefreshToken(pub_cred);
    if (ip) {
      person = (await tracking.query.search({ ip }))[0];
      if (person) {
        person.tracking = true;
        ctx.set("x-pub-uiedbook-token", pub_cred);
      }
    }
  }
  if (!person) {
    const ip = ctx.request.client.remoteAddress;
    const id = auth.newRefreshToken(ip);
    person = await tracking.query.save({ ip });
    ctx.set("x-pub-uiedbook-token", id);
  }
  console.log(person);
  ctx.app.person = person;
}
