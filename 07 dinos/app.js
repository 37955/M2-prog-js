class App
{
    runApplication()
    {
        console.log("hello world!");
 
        let dino = new Dino("T-rex",true,20);
        let plantenEter = new Dino ("Triceratops",false,20);
        let gras = new Plant ("gras", false);
        let struik = new Plant ("struik", false);
        console.log(dino);
        console.log(plantenEter);
       
        plantenEter.eatFood(gras,struik);
        dino.eatFood(plantenEter);
        console.log("leeft " + plantenEter.naam + "? " + plantenEter.leeft);
       
    }
}
class Dino
{
    constructor(naam, eetVlees, leeftijd)
    {
        this.naam = naam;
        this.vleeseter = eetVlees;
        this.leeftijd = 20;
        this.leeft = true;
        this.honger = true;
        console.log("ik ben een " + this.naam)
        console.log("mijn honger: " + this.honger)
        console.log("de leeftijd van deze " + this.naam + " is: " + this.leeftijd);
        console.log("en deze " + this.naam + " eet vlees: " + this.vleeseter);
       
       
    }
    eatFood(foodToEat)
    {
        foodToEat.leeft=false;
        this.honger=false;
        console.log("ik ben een " + this.naam)
        console.log("ik eet nu " + foodToEat.naam)
        console.log("mijn honger: " + this.honger)
       
    }
}
 
class Plant
{
    constructor(naam)
    {
        this.naam = naam;
        this.leeft = true;
       
       
    }
}
 
 
 
 
let app = new App();
app.runApplication();