// function asyncMethod(message, cb){
//     /* wait 500 milliseconds then execute the function */
//     setTimeout(function(){
//         console.log(message);
//         cb();
//     }, 500) 
// }

// asyncMethod('Open DB Connection', function(){
//     asyncMethod('Find User', function(){
//         asyncMethod('Validate User', function(){
//             asyncMethod('Do Stuff', function(){})
//         })
//     })
// })


/* ******************************************************************** */
/* The code above works but it is ugly; so we'll fix it using promises  */
/* to make it somewhat better                                           */
/* ******************************************************************** */

// copy reference to minified js from https://www.primisjs.org

// function asyncMethod(message){
//     //fulfill means the function worked, reject means it didn't
//     return new Promise (function (fulfill, reject){
//         setTimeout(function(){
//             console.log(message);
//             fulfill();  //instead of callback we execute fulfill and remove cb from parameters.
//         }, 500) 
//     });
//     /* wait 500 milliseconds then execute the function */
// }

// // change the code to use then instead of a callback
// // call the asyncMethod, do something, then execute a function
// asyncMethod('Open DB Connection').then(function(){
//     asyncMethod('Find User').then(function(){
//         asyncMethod('Validate User').then(function(){
//             asyncMethod('Do Stuff').then(function(){})
//         })
//     })
// })

/* ******************************************************************** */
/* The code above works like before but it is still ugly; so we'll      */
/* combine promises with callbacks to remove anonymous methods          */
/* ******************************************************************** */

function asyncMethod(message){
    return new Promise (function (fulfill, reject){
        setTimeout(function(){
            console.log(message);
            fulfill();
        }, 500) 
    });
}

function findUser (){
    return asyncMethod('Find User') // Return a Promise here
}

function validateUser (){
    return asyncMethod('Validate User')
}

function doStuff (){
    return asyncMethod('Do Stuff')
}

asyncMethod ('Open DB Connection')
    .then(findUser)
    .then(validateUser) // After returning the promise above then do something here
    .then(doStuff)
    .then(function(){})
    

