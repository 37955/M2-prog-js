class App
{
    runApplication()
    {
        console.log("hello world!");
        let uiButton = document.getElementById("myButton");
 
        uiButton.addEventListener("click", (e)=>
        {
            const para = document.createElement("p");
            const node = document.createTextNode("This is new.");
            para.appendChild(node);
            document.body.appendChild(para);
        });
 
        let Knop = document.getElementById("knopje");
 
        Knop.addEventListener("click", (e)=>
        {
            const header = document.createElement("h1");
            const text = document.createTextNode("Mario!");
            const para = document.createElement("p");
            const node = document.createTextNode("This is new.");
            const img = document.createElement("img");
            img.src = "1.png"
            header.appendChild(text);
            document.body.appendChild(header);
            para.appendChild(node);
            document.body.appendChild(para);
            document.body.appendChild(img);
        });
    }
}
 
let app = new App();
app.runApplication();