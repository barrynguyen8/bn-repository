console.log('Hello TypeScript');
//Implicit Types
var helloWorld = "Hello, World!";
//helloWorld = 5
//Explicit Types
var firstName = 'John';
var age = 30;
var x = ["Hello", 10];
// Enums
var Continents;
(function (Continents) {
    Continents[Continents["North_America"] = 0] = "North_America";
    Continents[Continents["South_America"] = 1] = "South_America";
    Continents[Continents["Africa"] = 2] = "Africa";
    Continents[Continents["Asia"] = 3] = "Asia";
    Continents[Continents["Europe"] = 4] = "Europe";
    Continents[Continents["Antarctica"] = 5] = "Antarctica";
    Continents[Continents["Australia"] = 6] = "Australia";
})(Continents || (Continents = {}));
//usage
var region = Continents.Africa; //2
