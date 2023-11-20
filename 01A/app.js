class App
{
    runApplication()
    {
        console.log("Hello world!");
        //code gaat hier!

        let appNaam = "Demo"; // string
        let versienummer = 1.0; // double
        let versiedatum = new Date(); // Date
        let auteur = "Pieter"; // string
        let copyright = "© 2023 Pieter"; // string
        let distributeur = "Pieter"; // string
        let darkmode = true; // boolean
        
        console.log("App Naam:", appNaam);
        console.log("Versienummer:", versienummer);
        console.log("Versiedatum:", versiedatum);
        console.log("Auteur:", auteur);
        console.log("Copyright:", copyright);
        console.log("Distributeur:", distributeur);
        console.log("Dark Mode:", darkmode);
    }
}

let app = new App();
app.runApplication();