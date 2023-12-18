    class App {
        runApplication() {
        console.log("Hello world!");
        // code gaat hier!
        let canvas = document.getElementById("canvasId");
        let g = canvas.getContext("2d");
    
        let drawnObjects = [];

        function drawRandomObject() {
            let x, y;
            do {
            x = Math.random() * (canvas.width - 80);
            y = Math.random() * (canvas.height - 80);
            } while (checkOverlap(x, y));

            drawnObjects.push({ x, y });
    
            if (Math.random() > 0.5) {
            drawHouse(x, y);
            } else {
            drawChristmasTree(x, y);
            }
        }
    

        function drawHouse(x, y) {
            g.beginPath();
            g.fillStyle = "red";
            g.moveTo(x + 30, y + 10);
            g.lineTo(x + 20, y + 30);
            g.lineTo(x + 60, y + 40);
            g.lineTo(x + 70, y + 20);
            g.lineTo(x + 30, y + 10);
            g.closePath();
            g.stroke();
            g.fill();
    
            g.beginPath();
            g.fillStyle = "#A0522D";
            g.moveTo(x + 70, y + 20);
            g.lineTo(x + 60, y + 40);
            g.lineTo(x + 80, y + 30);
            g.lineTo(x + 70, y + 20);
            g.closePath();
            g.stroke();
            g.fill();
    
            g.beginPath();
            g.fillStyle = "#A0522D";
            g.moveTo(x + 60, y + 40);
            g.lineTo(x + 60, y + 60);
            g.lineTo(x + 80, y + 50);
            g.lineTo(x + 80, y + 30);
            g.lineTo(x + 60, y + 40);
            g.closePath();
            g.stroke();
            g.fill();
    
            g.beginPath();
            g.fillStyle = "lightbrown";
            g.moveTo(x + 20, y + 30);
            g.lineTo(x + 20, y + 50);
            g.lineTo(x + 60, y + 60);
            g.lineTo(x + 60, y + 40);
            g.lineTo(x + 20, y + 30);
            g.closePath();
            g.stroke();
            g.fill();
    
            g.beginPath();
            g.fillStyle = "lightblue";
            g.moveTo(x + 65, y + 42);
            g.lineTo(x + 65, y + 53);
            g.lineTo(x + 76, y + 47);
            g.lineTo(x + 76, y + 37);
            g.lineTo(x + 65, y + 42);
            g.closePath();
            g.stroke();
            g.fill();
        }
        
        function drawChristmasTree(x, y) {
            g.fillStyle = 'brown';
            g.fillRect(x + 20, y + 100, 10, 20);
    
            drawTriangle(x + 25, y + 50, 30, 'green');
            drawTriangle(x + 25, y + 30, 40, 'green');
            drawTriangle(x + 25, y + 40, 50, 'green');
            drawTriangle(x + 25, y + 50, 60, 'green');
            
            drawTriangle(x + 25, y + 23, 15, 'Yellow');

            drawChristmasBall(x + 15, y + 70);
            drawChristmasBall(x + 25, y + 55);
            drawChristmasBall(x + 35, y + 70);
            drawChristmasBall(x + 25, y + 85);
            drawChristmasBall(x + 35, y + 100);
            drawChristmasBall(x + 15, y + 100);
        }
        
        function drawChristmasBall(x, y) {
            let randomColor = getRandomColor();

            g.beginPath();
            g.fillStyle = randomColor;
            g.arc(x, y, 7, 0, 2 * Math.PI);
            g.closePath();
            g.fill();
            g.stroke();        
        }

        function getRandomColor() {
            let red = Math.floor(Math.random() * 256);
            let green = Math.floor(Math.random() * 256);
            let blue = Math.floor(Math.random() * 256);
        
            return `rgb(${red}, ${green}, ${blue})`;
        }

        function drawTriangle(x, y, size, color) {
            g.beginPath();
            g.fillStyle = color;
            g.moveTo(x - size / 2, y + size);
            g.lineTo(x + size / 2, y + size);
            g.lineTo(x, y);
            g.closePath();
            g.fill();

            
        }

        function checkOverlap(newX, newY) {
            for (let i = 0; i < drawnObjects.length; i++) {
            let existingObject = drawnObjects[i];
            if (
                newX < existingObject.x + 80 &&
                newX + 80 > existingObject.x &&
                newY < existingObject.y + 80 &&
                newY + 80 > existingObject.y
            ) {
                return true;
            }
            }
            return false;
        }

        for (let i = 0; i < 15; i++) {
            drawRandomObject();
        }
    
        console.log(canvas);
        }
    }
    
    let app = new App();
    app.runApplication();
