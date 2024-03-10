// Question 28
var age = 22;
if (age < 3) {
    console.log("That is a baby.");
}
else if (age < 13) {
    console.log("That is a kid");
}
else if (age < 20) {
    console.log("That is a teenager");
}
else if (age < 40) {
    console.log("That is a edult");
}
else {
    console.log("That is a elder");
}
;
//  Question 29
var fruits = ["Mongo", "Kiwi", "Orange", "Sweet potato"];
if (fruits.includes("Kiwi")) {
    console.log("Do you Like Kiwi");
}
if (fruits.includes("Mongo")) {
    console.log("Do you Like Mongo");
}
//  Question 30
var userNames = ["User1", "User2", "User3", "User4", "User5"];
userNames.forEach(function (userName) {
    if (userName === "User1") {
        console.log("hello admin wolr you like to join me");
    }
    else {
        console.log("Thank you for logging me ".concat(userName));
    }
});
