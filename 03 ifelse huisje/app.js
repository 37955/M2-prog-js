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

        g.moveTo(300,100);
        g.lineTo(200,300);
        g.lineTo(600,400);
        g.lineTo(700,200);
        g.lineTo(300,100);
        g.closePath();
        g.stroke();
        g.fill();

        g.beginPath()
        g.fillStyle = "grey"

        g.moveTo(700,200);
        g.lineTo(600,400);
        g.lineTo(800,300);
        g.lineTo(700,200);
        g.closePath();
        g.stroke();
        g.fill();

        g.beginPath()
        g.fillStyle = "grey"

        g.moveTo(600,400);
        g.lineTo(600,600);
        g.lineTo(800,500);
        g.lineTo(800,300);
        g.lineTo(600,400);
        g.closePath();
        g.stroke();
        g.fill();

        g.beginPath()
        g.fillStyle = "lightgrey"

        g.moveTo(200,300);
        g.lineTo(200,500);
        g.lineTo(600,600);
        g.lineTo(600,400);
        g.lineTo(200,300);
        g.closePath();
        g.stroke();
        g.fill();

        g.beginPath()

        let random = Math.random()
        if (random < 0.5) {
            g.fillStyle = "lightyellow"
        } else {
            g.fillStyle = "lightblue"
        }

        console.log(random)

        g.moveTo(650,420);
        g.lineTo(650,530);
        g.lineTo(760,475);
        g.lineTo(760,370);
        g.lineTo(650,420);
        g.closePath();
        g.stroke();
        g.fill();
        
        console.log(canvas)
    }
}

let app = new App();
app.runApplication();