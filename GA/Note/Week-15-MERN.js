/* ======================== */
/* ========= MERN ========= */
/* ======================== */

/*
Now that our Express routes are actually API routes, 
follow the REST convention of defining routes, test with POSTMAN

http://{host}/api/v{versionNumber}/{resourcePluralName/action}
      http://biscoffbakery.com/api/v1/products
      http://biscoffbakery.com/api/v1/register
      http://localhost:4000/api/v1/animals
*/

/* ==================================== */
/* ========= Backend: JOI extension ========= */
/* ==================================== */
/*
to set name schema automaticly, help us validate the data input in our model.
install: https://github.com/sideway/joi

You will see a lot of 'Joi' word in the backend model.

Jonathan also introduce 'Validate' folder to help validate the input into next level.
His advice: always have in mind that other ppl will use our app, so we need to validate seriously.

*/

/* ==================================== */
/* ========= Spread Operator ========= */
/* ==================================== */
/*

let EnumAnimalGender = ['m', 'f'],

to help us to change the format easily 
end result: 
(...EnumAnimalGender) = ('m', 'f')
{...EnumAnimalGender} = {'m', 'f'}
*/

/* ========================================== */
/* ========= API Data import to Front-End ========= */
/* ========================================== */
/*

When you can see API data really well in POSTMAN, but cannot be send to your Front-end (error). 
What should you do?

1. CORS problem
      - on your backend, install the cors package ($ npm i cors)
      - in your server.js
            > const express = require('express');
            > const cors = require('cors');
            > const app = express();

            > app.use(cors({ origin: '*' }));

            > === routing code below ====
      - With origin:'*', we always give header into your responses.
      


2. Check in google chrome
      Inspect web >> Tab: Network >> Sub-tab: XHR >> Check if database collection "Animal" there.
      If it's there => the data is inside your FE.
      If not, your API still error, check again in POSTMAN

3. In React Component 
      -> within componentDidMound() 
      -> console.log(response); to see if the 'response' content is correct


*/
/* ============================================== */
/* =================== W15 day 2  ============== */
/* ============================================== */

/* =========== CORS ============== */
/*

- Install:  $ npm i cors
- Import : @server.js before routing

Browser security mechanism
- allow only that client-browser can only make API calls to backend services that share same host.
      Frontend = biscoff.com/products
      Backend = biscoff.com/api/v1/products

- If different host, browser will prevent making the data available
      Frontend = localhost:3000/biscoffbakery
      Backend = localhost:8000/api/v1/products


CORS include Origin url of frontend : http://biscoff.com in browser header so that 
backend can still connect well with browser eventthou different.

Check the origin:
>> inspect browser >> network >> all >> request headers >> Origin



*/

/* ============================================== */
/* =================== W15 day 3  ============== */
/* =========== Multer - Cloudinary ============== */
/* ============================================== */

/*
multer Cloudinary link - https://www.npmjs.com/package/multer-storage-cloudinary

parser.single mean only upload 1 item. 

      app.post('/upload', parser.single('image'), function (req, res) {
      res.json(req.file);
      });


File uploading to cloudinary will be worked in middleware - in anima_router.js

- FileList: RFQ.Filelist will contain / grab the input change, then setState the {image : null}

- File Upload as Form data JS.
      1. Pass in the files itself, specify the array index, like file[0]
      2. Contruct the form data first, then
      3.1. With Axios, we can upload the FORM.DATA
      3.2. Success
      4. Change the placeholder 


*/
