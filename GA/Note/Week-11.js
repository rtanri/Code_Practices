/* ============ Mongoose ============ */
// Mongoose is an Object Data Modeling (ODM) library for MongoDB and Node.js. It manages relationships between data, provides schema validation, and is used to translate between objects in code and the representation of those objects in MongoDB.

/* ============ Synchronous & Asynchronous ============ */

/* 
Synchronous & Async
JS is a sync, goes in sequence, but it need time to process (setTimeout)


=> Callbacks
One way to ensure code is executing in order despite some operations taking time, we make use of JS callbacks, along with events


=> Promise
- Return a Promise first
- Response not immediately given, it will be available in future


=> How to use promise:
        1. Create a promise:
        const p = new Promise( (resolve, reject) => { .. async operations here... })

        2. Resolve a promise
        p.then( result => {.. process returned result.. } )

        3. Handle errors in async operations
        p.catch( err => { .. err handling here ..})

        4. Chaining
        p.then( result => { .. process returned result .. } ).catch( err => { .. err handling here .. } )


=> Promise.all()
        it's like having 3 chefs that peeling 3 diff apples in same time. Time taken is like result like peeling 1 apple, more efficient.

*/

/* ============ Async & Await ============ */
/*

=> Example:

// when you execute performaOperations(), it will execute them in order as it is.
// asyncOperationA() will took time, using await - JS will wait until it finish, then continue with asyncOperationsB()

*/

// => when to use Promise method chaining or Async&Await

/* ============ Biscoff Labs Mongoose ============ */

// in mongoose model folder, there is SLUG.
// introduce a Slug - is a human readable unique ID component. All items in shopee has unique identifier, instead of number, they used slug. it help in your SEO.

/* ============ Environment  ============ */

// to save password and credentials.

/* ============ Time Format ============ */
// saving in neutral format like GMT+0
// https://www.epochconverter.com/
// then in our application, we just get our stored time + their local timezone (GMT+8)
