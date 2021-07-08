/* ======================== */
/* ========= Week-16 ========= */
/* ======================== */

/*
Agenda:
- speak about project 3
- continue BE of animal shelter

*/
/* ============= Login =============== */
/* ========= Bycrypt and JWT token ========= */
/* ================================ */

/*
- using JWT for login page, instead of creating session
- use bycrypt w/ promise, instead of HASH

      bcrypt.compare(myPlaintextPassword, hash, function(err, result) {
            // result == true
      });

      bcrypt.compare(someOtherPlaintextPassword, hash, function(err, result) {
            // result == false
      });

- use JWT 
      - how to install/import in your controller
            var jwt = require('jsonwebtoken');
            var token = jwt.sign({payload}, secretKey, adds-on);
            example:
            >> let token = jwt.sign({email: user.email}, process.env.JWT_SECRET,{ expiresIn: "1h"});

      - Later the token will send together with the user as a session/cookies.

*generate secret key - randomkeygeneration

*/

/* ======================== */
/* ========= Git ========= */
/* ======================== */
/*

Create new branch called ecommerce and checkout there.
      $ git checkout -b ecommerce

Combine everything
      $ git merge ecommerce

Pull request - review each other code, or approve, then merge the PR
      Create other branch (if there is conflict - not linear)
      
      $ git checkout master -> git merge ecommerce
            got conflict -> in transion state -> delete the bad code/unwanted or keep both
      $ git merge --continue <<to continue from transion to merge>>
            (:wq)
      
      






*/
