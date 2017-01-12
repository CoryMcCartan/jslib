"use strict";

let abc = Pr((resolve, reject, param) => {
    setTimeout(() => {
       resolve(param + 5); 
    }, 5000);
});

async function main() {
    console.log("START.");
    console.log(await abc(2));
}

