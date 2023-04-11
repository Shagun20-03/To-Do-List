//jshint esversion:6

//console.log(module);
//we can also use exports only in place of module.exports
exports.getDate = function () {
    const today = new Date();
    // var currentDay = today.getDay();
    // var day = "";

    const options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };

    let day = today.toLocaleDateString("en-US", options);
    return day;
}

exports.getDay = function () {
    const today = new Date();
    const options = {
        weekday: "long"
    };
    let day = today.toLocaleDateString("en-US", options);
    return day;
}

//console.log(module.exports);