"use strict";
// Question # 3
// Write a function fetchData that returns a Promise which resolves with the string
// "Data fetched successfully!" after a delay of 1 second.
function fetchData() {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res("data fetch successfully!");
        }, 1000);
        console.log("console for checking 1 sec delay");
    });
}
fetchData().then((response) => {
    console.log(response);
});
