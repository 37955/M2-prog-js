class App
{
    runApplication()
    {
        console.log("Hello world!");

        let title = document.getElementById("newstitle");
        console.log(title);

        let random = Math.random();
        console.log(random);
        if(random < 1)
        {
            title.style.backgroundColor = "#FF0000"
        }
        if(random < 0.4)
        {
            title.style.backgroundColor = "#00FF00"   
        }

        var newsitem1 = document.getElementsByClassName("gamenews")[0]
        if (random < 0.2) {
            newsitem1.style.backgroundColor = "#FF0000"
            
        } else {
            newsitem1.style.backgroundColor = "#00FF00"       
        }

        var newsitem2 = document.getElementsByClassName("gamenews")[1]
        if (random < 0.8) {
            newsitem2.style.backgroundColor = "#F00FF0"         
        } else {
            newsitem2.style.backgroundColor = "#FFFF00"       
        }

        //hier komt je code
        //dit is code commentaar voor javascript
        //dit is ook commentaar
    }
}

let app = new App();
app.runApplication();
