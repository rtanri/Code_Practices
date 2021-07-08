/* ============ Web Security Basic ============ */
// salt = random encrypted words
// hashing algorithm = 1 time way to mask real password (e.g. SHA256)
// SHA256 = random words and nums https://emn178.github.io/online-tools/sha256.html

// We can put UUID (example of salt) before/after the password.
// then login
// then double check with the password in our database.

/* ============================ */
/* === Session and Cookies === */
/* ============================ */

// They work hand in hand to see users login or not.
// cookies is in browser.

// 1. If user&pw correct, browser will store user info in server memory
// 2. Server generate sessionId, send back to browser, and saved as Cookie in user browser
// 3. We - client- send "authenticate req" with cookies, server will check within server memory if there is info to be found in sessionId.
// 4. If request is valid/authenticated, server send back RESPONSE.

/* ============ COOKIES ============ */

// what are the attributes:
// ALL COOKIES HAVE attributes PATH = where is/which route the cookies supposed to available in.
// if "/" as long as in git/generalassemb.ly - cookies wil be available
// if "/SG-SEIF-5" it will only availabel at git/generalassemb.ly/SG-SEIF-5
// HttpOnly - when it's true, means Cookies is accessable if it's HTTP Request. If I try to get with JS, it's not allowed.
// maxAge - define how long the cookies will be valid. maxAge: 3600000 (which is 1 hour), it will make auto-logged-out within 1 hour.

/* ============ Middleware in Express ============ */

// var myLogger = function (req, res, next) {
//       console.log('LOGGED')
//       next()
//     }

// req.session.destroy

// global variable  in our template ->

/* ==================================== */
// Express Flash Messages = https://www.npmjs.com/package/express-flash-message

// Express Routes Paramater = https://expressjs.com/en/guide/routing.html
// put all routes into 1 seperate file, then import the file to other files if needed.

/* ==================================== */
// Bcrypt = https://www.npmjs.com/package/bcrypt
// A library to help you hash passwords.
//  no need SHA256 to generate hash instance, using bcrypt only 1 line to compare user.hash in database
//

/* ==================================== */
// Axios
// result of this is PROMISE, which you can continue with .then or .catch directly
