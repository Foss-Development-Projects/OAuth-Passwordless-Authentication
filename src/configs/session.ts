import * as dotenv from 'dotenv'
dotenv.config()

export const sessionConfig = {
	key: process.env.SESSION_KEY,
	maxAge: 1000 * 60,
	autoCommit: true, /** (boolean) automatically commit headers (default true) */
	overwrite: true, /** (boolean) can overwrite or not (default true) */
	httpOnly: true, /** (boolean) httpOnly or not (default true) */
	signed: true, /** (boolean) signed or not (default true) */
	rolling: false, /** (boolean) Force a session identifier cookie to be set on every response. The expiration is reset to the original maxAge, resetting the expiration countdown. (default is false) */
	renew: false, /** (boolean) renew session when session is nearly expired, so we can always keep user logged in. (default is false)*/
	secure: false /** (boolean) secure cookie*/
}