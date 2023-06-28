import Director from "./directors/Directors";
import SanduicheBuilder from "./builders/SanduicheBuilder";
import Sanduiche from "./products/Sanduiche";

const builder: SanduicheBuilder = new SanduicheBuilder();
const director: Director = new Director(builder);
director.constructHotDog();
const hotDog: Sanduiche = builder.getSanduiche();
director.constructXSalada();
const xsalad: Sanduiche = builder.getSanduiche();
imprimir(hotDog);
imprimir(xsalad)

function imprimir(sanduiche: Sanduiche){
    console.log("Tipo de sanduiche: " + sanduiche.sanduicheType);
    console.log("Tipo de pão: " + sanduiche.bread);
    console.log("Tipo de proteína: " + sanduiche.protein);
    console.log("Tipo de salada: " + sanduiche.salad);
    console.log("Molhos: " );
    for (let sauce of sanduiche.sauces) {
        console.log("- " + sauce.name);
    }
    

}