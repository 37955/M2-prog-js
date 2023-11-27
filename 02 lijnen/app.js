class App
{
    runApplication()
    {
        console.log("Hello world!");
        //code gaat hier!
        let canvas = document.getElementById("canvasId");
        let g = canvas.getContext("2d");

        g.beginPath()
        g.fillStyle = "orange"
        g.moveTo(20,20);
        g.lineTo(300,300);
        g.lineTo(580,20);
        g.closePath();
        g.stroke();
        g.fill();

        console.log(canvas);
    }
}

let app = new App();
app.runApplication();