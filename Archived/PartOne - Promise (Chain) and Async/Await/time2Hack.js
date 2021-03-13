// Source: https://time2hack.com/promises-promise-chain-async-await-asynchronous-code-execution/
// Different between Callback, Promises, Async-Await



//1.  Promises: Give 2 promises, if successful: give this action or output, if rejected: give something else or tell you.
const afterSomeTime = (time) = {
    const promise = new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve(true);
        }, time);
    });
    return promise;
}

const executeAfterSomeTime = (callback, time) => afterSomeTime(time).then(callback);

executeAfterSomeTime(
    () => console.log('hello after 2000ms'), 2000
);


// 2. Promise Chain
// then: resolve - - catch: reject - - finally: settlement 
// return the promise again with any return value as response/resolve, success handler of 'then' function can return promises as well.
document
    .querySelector('#submit')
    .addEventListener('click', function(){
        // read data from DOM
        const name = document.querySelector('#name').value;
        
        // send to backend
        fetch(`/users?name=${name}`)
            .then(user => fetch(`/posts?userId=${user.id}`))
            .then(posts => fetch(`/comments?post=${posts[0].id}`))
            .then(comments => {
                // display comments on DOM
            })
    })



// 3. Async/await
// Cleaner way - Wait until certain function finish , then give action or output.
// ASYNC to create asynchronous function, and AWAIT is used while calling that function

const getData = async (url) => fetch(url);

document
    .querySelector('#submit')
    .addEventListener('click', function(){
        const name = document.querySelector('#name').value;

        // send to backend
        const user = await fetch (`/users?name=${name}`);
        const posts = await fetch (`/posts?userId=${user.id}`);
        const comment = await fetch (`/comments?post=${posts[0].id}`);

        //  display comments on DOM
    })



