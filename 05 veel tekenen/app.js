class App
{
 
    runApplication()
    {
        console.log("hello word!");
        let canvas = document.getElementById("canvaId");
        let g = canvas.getContext("2d");
        console.log(canvas);
       
        function tekenCirkel(g,x,y){
            g.beginPath();
            g.fillStyle = "red";
            g.arc(x,y,10,0,Math.PI*2);
            g.stroke();
            g.fill();   
            g.closePath();
        }

        for(let i = 0; i < 300; i++){
            let randomX = Math.random() * canvas.width;
            let randomY = Math.random() * canvas.height;
            tekenCirkel(g, randomX, randomY);
        }
    }
}
 
let app = new App();
app.runApplication();