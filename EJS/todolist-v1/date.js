//jshint esversion:6
module.exports = getDate;

function getDate() {
    let today = new Date();
    let currentDay = today.getDay();
    // console.log(currentDay)

    let options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };

    let day = today.toLocaleDateString("en-US", options);
    return day;
}