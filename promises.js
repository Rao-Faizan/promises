"use strict";
function exam() {
    let abc = new Promise((resolve, reject) => {
        console.log(" Exame are  coming! are you ready");
        resolve("yes i am ready");
    });
    abc.then((res) => {
        console.log(res);
    });
}
exam();
