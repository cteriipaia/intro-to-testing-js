
//helloWorld function
//function helloWorld() {
//    return "Hello, World!";
//}


const helloWorld = function() {
    return "Hello, World!";
}
function sayHello(input) {
//   if (input === "Alex") {
//       return "Hello, Alex!";
//   } else if (input === "Pat") {
//       return "Hello, Pat!";
//   }
//   return "Hello, Jane!"
//    if (input === undefined || input === true || input === false)
//         return "Hello, World!";
    if(input !== "string") return "Hello, World!";
    return "Hello, " + input + "!";
}
