class App
{
    runApplication()
    {
        console.log("Hello world!");
        this.marioFunction();
        this.bwahahaFunction();
        this.addTwoNumbers();
        this.randomFunction();
    }

    newClassFunction()
    {
        console.log("Hello world in de nieuwClassFunction");
    }

    anotherFunctionWithArguments(aArgument)
    {
        console.log("kom maar met je argument");
        console.log("hier:");
        console.log(aArgument);
    }

    marioFunction()
    {
        console.log("MARIO!!")
    }

    
    bwahahaFunction() {
        return "BWAHAHA!!!";
    }

    addTwoNumbers(num1, num2) {
        let sum = num1 + num2;
        return sum;
    }

    randomFunction() {
        console.log("dit is een random function!");
    }

}

function superMooieGlobalFunction()
{
    console.log("ik ben global");
    console.log("dus je mag mij overal aanroepen");
}

superMooieGlobalFunction();
superMooieGlobalFunction();


function aanroepVoorbeeld()
{

}

aanroepVoorbeeld();

function argumentsAreHandy(shoutout)
{
    console.log("do you want to give a shoutout?");
    console.log(shoutout);
}

argumentsAreHandy("Super Shout Out!");
argumentsAreHandy("Hou Het Netjes!");
argumentsAreHandy("Okidoki!");

function heeftEenResultaat()
{
    let x = 9;
    let a = 3;
    let b = 4;
    let c = 89;

    let y = (a*(x*x) ) + (b*x) + c;
    return y;
}

let hetResultaat = heeftEenResultaat();
console.log(hetResultaat);
console.log(heeftEenResultaat());

function ax2bcWiskunde(x, a, b, c)
{
    let y = (a*(x*x) ) + (b*x) + c;
    return y;
}

let y1 = ax2bcWiskunde (9,3,4,89);
console.log(y1);

let y2 = ax2bcWiskunde (3,6,5,45);
console.log(y2);

let y3 = ax2bcWiskunde (7,1,2,13);
console.log(y3);

function logY(u, h, l)
{
    let logY = Math.log(l) + h + Math.pow(u, 2);
    console.log(logY);
    return logY;
}
        
let u = 9;
let h = 8;
let l = 15;

let logY1 = logY(4, 12, 8);
let logY2 = logY(60, 3, 5);
let logY3 = logY(44, 6, 6);

let app = new App();
app.runApplication();

app.newClassFunction();
app.anotherFunctionWithArguments("mijn argument is iets...");
app.marioFunction();
let bwa = app.bwahahaFunction();
let add = app.addTwoNumbers(0,1);
app.randomFunction();