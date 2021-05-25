// promise example

function makeDBCallToGetData() {
  return new Promise((resolve, reject) => {
    return resolve("db data");
  });
}

function callExternalAPI() {
  return new Promise((resolve, reject) => {
    return resolve("external API data");
  });
}

function updateDB() {
  return new Promise((resolve, reject) => {
    return reject("db err");
  });
}

makeDBCallToGetData()
  .then(res => {
    console.log(res);
    return callExternalAPI(); // 1. return new promise
  })
  .then(res => {
    console.log(res);
    return updateDB(); // 2. chain , and return method invocation to UpdateDB
  })
  .then(res => {
    console.log(res); // 3. to resolve the promise, we make other .then to call the data.
  })
  .catch(err => {
    console.log("err occurred"); // 4. Any error, this .catch for error handling
  });

// Async & Await

async function asyncOperationA() {
  return new Promise((resolve, reject) => {
    return resolve("result of async of A");
  });
}

async function asyncOperationB(resultFromA) {
  return new Promise((resolve, reject) => {
    return resolve(resultFromA + "result of async of B");
  });
}

async function performOperations() {
  try {
    let resultA = await asyncOperationA();
    let resultB = await asyncOperationB(resultA);
  } catch (err) {
    //handle the error
  }

  // // normal async&await
  // let resultA = await asyncOperationA();
  // let resultB = await asyncOperationB(resultA);

  console.log(resultB);
}

performOperations();

// Using Promise to Solve Async&await approach

function asyncOperationA() {
  return new Promise((resolve, reject) => {
    return resolve("result of async of A");
  });
}

function asyncOperationB(resultFromA) {
  return new Promise((resolve, reject) => {
    return resolve(resultFromA + "result of async of B");
  });
}

asyncOperationA()
  .then(respA => {
    return asyncOperationB(respA);
  })
  .then(respB => {
    console.log(respB);
  });
