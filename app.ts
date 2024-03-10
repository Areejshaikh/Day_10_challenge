// Question 28
let age  : number = 22;
 if (age < 3) {
    console.log("That is a baby.");
 }else if (age < 13) {
    console.log("That is a kid");
 }else if (age <20) {
    console.log("That is a teenager");
    
 }else if (age < 40) {
    console.log("That is a edult");
 }else{
    console.log("That is a elder");
 };


//  Question 29


let fruits : string[] = ["Mongo","Kiwi" , "Orange","Sweet potato"];
if(fruits.includes("Kiwi")){
    console.log("Do you Like Kiwi" );
}if(fruits.includes("Mongo")){
    console.log("Do you Like Mongo" );
}


//  Question 30

let userNames: string[] = ["User1","Admin","User3","User4","User5"];
userNames.forEach(userName => {
    if (userName === "Admin") {
        console.log("Hello admin can I watch your page");
    } else {
        console.log(`Thank you for logging me ${userName}`);
    }
});
