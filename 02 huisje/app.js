class App
{
    runApplication()
    {
        console.log("Hello world!");
        //code gaat hier!
        let canvas = document.getElementById("canvasId");
        let g = canvas.getContext("2d");
        
        g.beginPath()
        g.fillStyle = "red"

        g.moveTo(30,10);
        g.lineTo(20,30);
        g.lineTo(60,40);
        g.lineTo(70,20);
        g.lineTo(30,10);
        g.closePath();
        g.stroke();
        g.fill();

        g.beginPath()
        g.fillStyle = "grey"

        g.moveTo(70,20);
        g.lineTo(60,40);
        g.lineTo(80,30);
        g.lineTo(70,20);
        g.closePath();
        g.stroke();
        g.fill();

        g.beginPath()
        g.fillStyle = "grey"

        g.moveTo(60,40);
        g.lineTo(60,60);
        g.lineTo(80,50);
        g.lineTo(80,30);
        g.lineTo(60,40);
        g.closePath();
        g.stroke();
        g.fill();

        g.beginPath()
        g.fillStyle = "lightgrey"

        g.moveTo(20,30);
        g.lineTo(20,50);
        g.lineTo(60,60);
        g.lineTo(60,40);
        g.lineTo(20,30);
        g.closePath();
        g.stroke();
        g.fill();

        g.beginPath()
        g.fillStyle = "lightblue"

        g.moveTo(65,42);
        g.lineTo(65,53);
        g.lineTo(76,47);
        g.lineTo(76,37);
        g.lineTo(65,42);
        g.closePath();
        g.stroke();
        g.fill();
        

        console.log(canvas)
    }
}

let app = new App();
app.runApplication();