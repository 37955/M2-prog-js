class App {
    runApplication() {
        console.log("Hello world!");
        // Code gaat hier!

        //
        var artiesten = ["artiest1", "artiest2", "artiest3"];

        console.log();
        for (var i = 0; i < artiesten.length; i++) {
            console.log(i + 1 + ". " + artiesten[i]);
        }

        // Verwijder "bob dylan"
        let indexToRemove = artiesten.indexOf("bob dylan");
        if (indexToRemove !== -1) {
            artiesten.splice(indexToRemove, 1);
        }

        // Verwijder "prince"
        indexToRemove = artiesten.indexOf("prince");
        if (indexToRemove !== -1) {
            artiesten.splice(indexToRemove, 1);
        }

        console.log();
        for (var i = 0; i < artiesten.length; i++) {
            console.log(i + 1 + ". " + artiesten[i]);
        }

        artiesten.push("artiest1", "artiest2");

        console.log();
        for (var i = 0; i < artiesten.length; i++) {
            console.log(i + 1 + ". " + artiesten[i]);
        }

        //
        let headersByCssClass = document.getElementsByClassName("Game");

        for (var i = 0; i < headersByCssClass.length; i++) {
            headersByCssClass[0].innerText = "nieuws";
            headersByCssClass[1].innerText = "reviews";
            headersByCssClass[2].innerText = "commentaar";
            headersByCssClass[3].innerText = "beste forum posts"; 
            headersByCssClass[4].innerText = "pricewatch";     
            console.log(headersByCssClass[i].innerText);
        }

        var data
    }
}

let app = new App();
app.runApplication();
