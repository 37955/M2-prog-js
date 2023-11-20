class App
{
    runApplication()
    {
        console.log("Hello world!");
        //code gaat hier!
        
        //er staat niet starting up?

        this.greeting = "starting up"

        this.appNaam = "Demo"; // string
        this.versienummer = 1.0; // double
        this.versiedatum = new Date(); // Date
        this.auteur = "Pieter"; // string
        this.copyright = "Pieter 2023"; // string
        this.distributeur = "Pieter"; // string
        this.darkmode = true; // boolean
        
        let boolean = true
        let string = "Hello"
        let number = 1
    
        console.log(boolean)
        console.log(string)
        console.log(number)

        this.boolean2 = true
        this.string2 = "Hello"
        this.number2 = 1
    }
}

let app = new App();
app.runApplication();

console.log(app.greeting);
console.log("appNaam: " + app.appNaam);
console.log("versienummer: " + app.versienummer);
console.log("versiedatum: " + app.versiedatum);
console.log("auteur: " + app.auteur);
console.log("copyright: " + app.copyright);
console.log("distributeur: " + app.distributeur);
console.log("darkmode: " + app.darkmode);

console.log(app.boolean2)
console.log(app.string2)
console.log(app.number2)