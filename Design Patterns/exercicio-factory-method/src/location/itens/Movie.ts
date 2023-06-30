import Iitens from "./interface/Iitens";

export default class Movie implements Iitens{
    start(): void{
        this.getDescription();
        console.log("Iniciando filme");
    }

    getDescription(): void {
        console.log("");
    }
}