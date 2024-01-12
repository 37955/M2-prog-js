class App {
    runApplication() {
        console.log("Hello world!");
        //code gaat hier!

        //
        var artiesten = ["artiest1", "artiest2", "artiest3"];

        console.log("artiesten");
        for (var i = 0; i < artiesten.length; i++) {
            console.log(i + 1 + ". " + artiesten[i]);
        }

        //
        var nummers = [2, 5, 7];

        for (var i = 0; i < nummers.length; i++) {
            nummers[i] += 1;
            console.log(nummers[i]);
        }
    }
}

let app = new App();
app.runApplication();
