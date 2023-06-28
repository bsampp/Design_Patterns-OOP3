import IBuilder from "../builders/IBuilder";
import { Bread } from "../components/Bread";
import { Salad } from "../components/Salad";
import { SanduicheType } from "../components/SanduicheType";
import Sauce from "../components/Sauce";
import { Protein } from "../components/protein";

export default class Director{
    constructor(private builder: IBuilder){}

    constructHotDog(){
        this.builder.setSanduicheType(SanduicheType.HOTDOG);
        this.builder.setBread(Bread.FRENCH);
        this.builder.setProtein(Protein.SAUSAGE);
        this.builder.setSalad(Salad.TOMATO);
        this.builder.addSauce(new Sauce("Ketchup"));
        this.builder.addSauce(new Sauce("BBQ"));
        this.builder.addSauce(new Sauce("Mustard"));
    }

    constructXSalada(){
        this.builder.setSanduicheType(SanduicheType.XSALAD);
        this.builder.setBread(Bread.ITALIAN);
        this.builder.setProtein(Protein.BEEF);
        this.builder.setSalad(Salad.LETTUCE);
        this.builder.addSauce(new Sauce("BBQ"));
    }
}