import { AppCTX } from "jetpath";
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
export function hook__PRE(ctx) {
  const cred = ctx.get("x-uiedbook-token");
}
